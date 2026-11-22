// Голосовые API xAI (Grok): TTS, STT и живой голосовой разговор (Realtime).
// Вызываются напрямую из браузера с ключом пользователя (xAI разрешает CORS).
import { getSettings } from './storage';

const API = 'https://api.x.ai/v1';
export const hasKey = () => !!getSettings().apiKey;
const auth = () => ({ authorization: `Bearer ${getSettings().apiKey}` });

export class XaiError extends Error {}
async function failMsg(r: Response) {
  let t = '';
  try { t = await r.text(); } catch {}
  let m = t;
  try { const j = JSON.parse(t); m = j?.error?.message || j?.error || j?.message || t; } catch {}
  if (r.status === 401 || r.status === 403) return 'Ключ Grok не принят — проверьте его в Профиле.';
  if (r.status === 429) return 'Слишком много запросов к Grok или закончился баланс. Подождите или пополните баланс в console.x.ai.';
  return `Grok (${r.status}): ${String(m).slice(0, 200)}`;
}

/* ---------------- Озвучка (TTS) ---------------- */
export const GROK_VOICES = [
  { id: 'eve', name: 'Eve — женский, тёплый' },
  { id: 'ara', name: 'Ara — женский, мягкий' },
  { id: 'rex', name: 'Rex — мужской, уверенный' },
  { id: 'sal', name: 'Sal — нейтральный' },
  { id: 'leo', name: 'Leo — мужской, спокойный' },
];

const ttsCache = new Map<string, string>(); // ключ → blob URL
let current: HTMLAudioElement | null = null;

export async function grokTtsUrl(text: string, speed = 1): Promise<string> {
  const s = getSettings();
  const voice = s.grokVoice || 'eve';
  const k = `${voice}|${speed.toFixed(2)}|${text}`;
  const hit = ttsCache.get(k);
  if (hit) return hit;
  const r = await fetch(`${API}/tts`, {
    method: 'POST',
    headers: { ...auth(), 'content-type': 'application/json' },
    body: JSON.stringify({
      text, language: 'de', voice_id: voice,
      speed: Math.min(1.5, Math.max(0.7, speed)),
      output_format: { codec: 'mp3', sample_rate: 24000, bit_rate: 64000 },
    }),
  });
  if (!r.ok) throw new XaiError(await failMsg(r));
  const blob = await r.blob();
  const url = URL.createObjectURL(blob.type ? blob : new Blob([blob], { type: 'audio/mpeg' }));
  if (ttsCache.size > 300) { const first = ttsCache.keys().next().value!; URL.revokeObjectURL(ttsCache.get(first)!); ttsCache.delete(first); }
  ttsCache.set(k, url);
  return url;
}

export async function grokSpeak(text: string, speed: number, onEnd?: () => void): Promise<void> {
  const url = await grokTtsUrl(text, speed);
  stopGrokAudio();
  const a = new Audio(url);
  current = a;
  a.onended = () => { if (current === a) current = null; onEnd?.(); };
  a.onerror = () => onEnd?.();
  await a.play();
}
export function stopGrokAudio() {
  if (current) { try { current.pause(); } catch {} current = null; }
}

/* ---------------- Распознавание речи (STT) ---------------- */
export interface SttResult { text: string; words: { text: string; start: number; end: number }[]; language?: string }

export async function grokStt(audio: Blob, keyterms: string[] = []): Promise<SttResult> {
  const fd = new FormData();
  fd.append('language', 'de');
  for (const k of keyterms.slice(0, 50)) if (k.length <= 50) fd.append('keyterm', k);
  const ext = audio.type.includes('mp4') ? 'm4a' : audio.type.includes('ogg') ? 'ogg' : audio.type.includes('wav') ? 'wav' : 'webm';
  fd.append('file', audio, `speech.${ext}`); // file — обязательно последним полем
  const r = await fetch(`${API}/stt`, { method: 'POST', headers: auth(), body: fd });
  if (!r.ok) throw new XaiError(await failMsg(r));
  const j = await r.json();
  return { text: String(j.text || '').trim(), words: Array.isArray(j.words) ? j.words : [], language: j.language };
}

/** Запись с микрофона с автоостановкой по тишине. */
export interface Recording { stop: () => void; level: () => number }
export async function recordVoice(opts: { onStop: (blob: Blob | null) => void; maxMs?: number; silenceMs?: number }): Promise<Recording> {
  const stream = await navigator.mediaDevices.getUserMedia({ audio: { echoCancellation: true, noiseSuppression: true } });
  const mime = ['audio/webm;codecs=opus', 'audio/webm', 'audio/mp4', 'audio/ogg'].find((m) => (window as any).MediaRecorder?.isTypeSupported?.(m)) || '';
  const rec = new MediaRecorder(stream, mime ? { mimeType: mime } : undefined);
  const chunks: Blob[] = [];
  rec.ondataavailable = (e) => { if (e.data.size) chunks.push(e.data); };
  const ctx = new AudioContext();
  const src = ctx.createMediaStreamSource(stream);
  const an = ctx.createAnalyser();
  an.fftSize = 1024;
  src.connect(an);
  const buf = new Float32Array(an.fftSize);
  let lvl = 0, heard = false, lastLoud = Date.now(), stopped = false;
  const started = Date.now();
  const timer = setInterval(() => {
    an.getFloatTimeDomainData(buf);
    let sum = 0; for (const v of buf) sum += v * v;
    lvl = Math.sqrt(sum / buf.length);
    if (lvl > 0.02) { heard = true; lastLoud = Date.now(); }
    const now = Date.now();
    if ((heard && now - lastLoud > (opts.silenceMs ?? 1500)) || now - started > (opts.maxMs ?? 20000) || (!heard && now - started > 8000)) stop();
  }, 100);
  const stop = () => {
    if (stopped) return;
    stopped = true;
    clearInterval(timer);
    try { rec.stop(); } catch {}
  };
  rec.onstop = () => {
    stream.getTracks().forEach((t) => t.stop());
    ctx.close().catch(() => {});
    opts.onStop(heard && chunks.length ? new Blob(chunks, { type: rec.mimeType || 'audio/webm' }) : null);
  };
  rec.start(250);
  return { stop, level: () => lvl };
}

/* ---------------- Живой голосовой разговор (Realtime) ---------------- */
async function clientSecret(): Promise<string> {
  const r = await fetch(`${API}/realtime/client_secrets`, {
    method: 'POST',
    headers: { ...auth(), 'content-type': 'application/json' },
    body: JSON.stringify({ expires_after: { seconds: 600 } }),
  });
  if (!r.ok) throw new XaiError(await failMsg(r));
  const j = await r.json();
  const v = j.value || j.client_secret?.value;
  if (!v) throw new XaiError('Grok не выдал токен для голосового режима.');
  return v;
}

const RATE = 24000;
function b64FromPcm(pcm: Int16Array): string {
  const bytes = new Uint8Array(pcm.buffer, pcm.byteOffset, pcm.byteLength);
  let s = '';
  for (let i = 0; i < bytes.length; i += 0x8000) s += String.fromCharCode(...bytes.subarray(i, i + 0x8000));
  return btoa(s);
}
function pcmFromB64(b64: string): Float32Array {
  const bin = atob(b64);
  const n = bin.length >> 1;
  const out = new Float32Array(n);
  for (let i = 0; i < n; i++) {
    let v = bin.charCodeAt(2 * i) | (bin.charCodeAt(2 * i + 1) << 8);
    if (v >= 0x8000) v -= 0x10000;
    out[i] = v / 0x8000;
  }
  return out;
}
function downsample(input: Float32Array, from: number, to: number): Int16Array {
  const ratio = from / to;
  const len = Math.floor(input.length / ratio);
  const out = new Int16Array(len);
  for (let i = 0; i < len; i++) {
    const start = Math.floor(i * ratio), end = Math.min(input.length, Math.floor((i + 1) * ratio));
    let sum = 0, c = 0;
    for (let j = start; j < end; j++) { sum += input[j]; c++; }
    const v = Math.max(-1, Math.min(1, c ? sum / c : 0));
    out[i] = v < 0 ? v * 0x8000 : v * 0x7fff;
  }
  return out;
}

export type LiveStatus = 'connecting' | 'listening' | 'user-speaking' | 'thinking' | 'speaking' | 'closed' | 'error';
export interface LiveHandlers {
  onStatus: (s: LiveStatus, msg?: string) => void;
  onUserText: (id: string, text: string, final: boolean) => void;
  onAiText: (id: string, text: string, final: boolean) => void;
}
export interface LiveSession { close: () => void; setMuted: (m: boolean) => void; sendText: (t: string) => void; level: () => number }

export async function startLive(instructions: string, h: LiveHandlers, opts: { greet?: string; keyterms?: string[] } = {}): Promise<LiveSession> {
  h.onStatus('connecting');
  const s = getSettings();
  // микрофон и аудио — сразу, пока действует жест пользователя
  const stream = await navigator.mediaDevices.getUserMedia({ audio: { echoCancellation: true, noiseSuppression: true, autoGainControl: true } });
  const ctx = new AudioContext();
  await ctx.resume().catch(() => {});
  const token = await clientSecret();
  const ws = new WebSocket(`wss://api.x.ai/v1/realtime?model=${encodeURIComponent(s.voiceModel || 'grok-voice-latest')}`, [`xai-client-secret.${token}`]);

  let closed = false, muted = false, micLevel = 0;
  let playHead = 0;
  const playing = new Set<AudioBufferSourceNode>();
  const stopPlayback = () => { playing.forEach((n) => { try { n.stop(); } catch {} }); playing.clear(); playHead = 0; };
  const aiTexts: Record<string, string> = {};
  let currentAiId = '';

  const send = (o: any) => { if (ws.readyState === WebSocket.OPEN) ws.send(JSON.stringify(o)); };

  // захват микрофона → PCM16 24 кГц
  const src = ctx.createMediaStreamSource(stream);
  const proc = ctx.createScriptProcessor(4096, 1, 1);
  const sink = ctx.createGain(); sink.gain.value = 0;
  src.connect(proc); proc.connect(sink); sink.connect(ctx.destination);
  proc.onaudioprocess = (e) => {
    const data = e.inputBuffer.getChannelData(0);
    let sum = 0; for (let i = 0; i < data.length; i += 8) sum += data[i] * data[i];
    micLevel = Math.sqrt(sum / (data.length / 8));
    if (muted || ws.readyState !== WebSocket.OPEN) return;
    send({ type: 'input_audio_buffer.append', audio: b64FromPcm(downsample(data, ctx.sampleRate, RATE)) });
  };

  const playChunk = (b64: string) => {
    const f = pcmFromB64(b64);
    if (!f.length) return;
    const buf = ctx.createBuffer(1, f.length, RATE);
    buf.getChannelData(0).set(f);
    const node = ctx.createBufferSource();
    node.buffer = buf;
    node.connect(ctx.destination);
    const t = Math.max(ctx.currentTime + 0.02, playHead);
    node.start(t);
    playHead = t + buf.duration;
    playing.add(node);
    node.onended = () => { playing.delete(node); if (!playing.size && !closed) h.onStatus('listening'); };
  };

  // Сначала основное (инструкции, голос, формат звука), потом дополнительное отдельным пакетом:
  // если сервер отвергнет необязательное поле, роль учителя всё равно останется.
  let greeted = false;
  const greet = () => {
    if (greeted) return;
    greeted = true;
    if (opts.greet) {
      send({ type: 'conversation.item.create', item: { type: 'message', role: 'user', content: [{ type: 'input_text', text: opts.greet }] } });
      send({ type: 'response.create' });
      h.onStatus('thinking');
    } else h.onStatus('listening');
  };
  ws.onopen = () => {
    send({
      type: 'session.update',
      session: {
        instructions,
        voice: s.grokVoice || 'eve',
        turn_detection: { type: 'server_vad' },
        audio: {
          input: { format: { type: 'audio/pcm', rate: RATE } },
          output: { format: { type: 'audio/pcm', rate: RATE } },
        },
      },
    });
    // Распознавание без жёсткого языка: ученик может вставлять русские слова, и Grok должен их понять
    send({
      type: 'session.update',
      session: {
        audio: {
          input: { format: { type: 'audio/pcm', rate: RATE }, transcription: { model: 'grok-transcribe', ...(opts.keyterms?.length ? { keyterms: opts.keyterms.slice(0, 100).filter((k) => k.length <= 50) } : {}) } },
          output: { format: { type: 'audio/pcm', rate: RATE }, speed: Math.min(1.5, Math.max(0.7, s.speechRate * 0.95)) },
        },
      },
    });
    setTimeout(greet, 2500); // если session.updated не придёт
  };
  let updatesSeen = 0;

  ws.onmessage = (ev) => {
    if (typeof ev.data !== 'string') return;
    let m: any; try { m = JSON.parse(ev.data); } catch { return; }
    switch (m.type) {
      case 'input_audio_buffer.speech_started':
        stopPlayback(); h.onStatus('user-speaking'); break;
      case 'input_audio_buffer.speech_stopped':
        h.onStatus('thinking'); break;
      case 'conversation.item.input_audio_transcription.updated':
      case 'conversation.item.input_audio_transcription.delta':
        if (m.transcript || m.delta) h.onUserText(m.item_id || 'u', m.transcript ?? m.delta, false); break;
      case 'conversation.item.input_audio_transcription.completed':
        h.onUserText(m.item_id || 'u', m.transcript || '', true); break;
      case 'response.created':
        currentAiId = m.response?.id || String(Date.now()); aiTexts[currentAiId] = ''; break;
      case 'response.output_audio.delta':
      case 'response.audio.delta':
        h.onStatus('speaking'); playChunk(m.delta || m.audio || ''); break;
      case 'response.output_audio_transcript.delta':
      case 'response.audio_transcript.delta':
      case 'response.output_text.delta':
      case 'response.text.delta': {
        const id = m.response_id || currentAiId;
        aiTexts[id] = (aiTexts[id] || '') + (m.delta || '');
        h.onAiText(id, aiTexts[id], false); break;
      }
      case 'response.output_audio_transcript.done':
      case 'response.audio_transcript.done': {
        const id = m.response_id || currentAiId;
        if (m.transcript) aiTexts[id] = m.transcript;
        h.onAiText(id, aiTexts[id] || '', true); break;
      }
      case 'response.done':
        if (!playing.size) h.onStatus('listening'); break;
      case 'session.updated':
        updatesSeen++;
        if (updatesSeen >= 1) greet();
        break;
      case 'error': {
        const msg = m.error?.message || m.message || 'Ошибка голосового режима';
        // ошибка в дополнительных настройках не должна обрывать разговор
        if (/session|transcri|keyterm|speed|param|field|invalid/i.test(msg) && ws.readyState === WebSocket.OPEN) { console.warn('Grok voice:', msg); greet(); break; }
        h.onStatus('error', msg); break;
      }
    }
  };
  ws.onerror = () => { if (!closed) h.onStatus('error', 'Не удалось подключиться к голосовому режиму Grok.'); };
  ws.onclose = (e) => { if (!closed) { cleanup(); h.onStatus('closed', e.reason || undefined); } };

  const cleanup = () => {
    closed = true;
    try { proc.disconnect(); src.disconnect(); } catch {}
    stream.getTracks().forEach((t) => t.stop());
    stopPlayback();
    ctx.close().catch(() => {});
  };
  return {
    close: () => { if (closed) return; cleanup(); try { ws.close(); } catch {} h.onStatus('closed'); },
    setMuted: (v) => { muted = v; },
    sendText: (t) => {
      send({ type: 'conversation.item.create', item: { type: 'message', role: 'user', content: [{ type: 'input_text', text: t }] } });
      send({ type: 'response.create' });
      h.onStatus('thinking');
    },
    level: () => micLevel,
  };
}
