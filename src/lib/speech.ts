import { getSettings } from './storage';
import { capNow, inArtifact } from './platform';

let voices: SpeechSynthesisVoice[] = [];
function loadVoices() {
  if (typeof speechSynthesis === 'undefined') return;
  voices = speechSynthesis.getVoices();
}
if (typeof speechSynthesis !== 'undefined') {
  loadVoices();
  speechSynthesis.onvoiceschanged = loadVoices;
}

export function germanVoices(): SpeechSynthesisVoice[] {
  loadVoices();
  return voices.filter((v) => v.lang.toLowerCase().startsWith('de'));
}

const browserTts = () => typeof speechSynthesis !== 'undefined';
export const ttsSupported = () => browserTts() || !!capNow('tts');

/** Голос Claude (capability tts), если в браузере нет немецкого голоса */
function claudeTts(): any {
  const t = capNow('tts');
  if (!t) return null;
  if (!browserTts()) return t;
  return germanVoices().length ? null : t;
}

export function speak(text: string, opts: { rate?: number; lang?: string; onEnd?: () => void } = {}) {
  const s = getSettings();
  const ct = claudeTts();
  if (ct) {
    const rate = Math.min(1.5, Math.max(0.7, (opts.rate ?? 1) * s.speechRate));
    ct.speak(text, { language: (opts.lang || 'de-DE').slice(0, 2), rate }).then(() => opts.onEnd?.(), () => opts.onEnd?.());
    return;
  }
  if (!browserTts()) { opts.onEnd?.(); return; }
  speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(text);
  u.lang = opts.lang || 'de-DE';
  u.rate = (opts.rate ?? 1) * s.speechRate;
  if (u.lang.startsWith('de')) {
    const gv = germanVoices();
    const v = gv.find((x) => x.voiceURI === s.voiceURI) || gv.find((x) => /google|natural|online/i.test(x.name)) || gv[0];
    if (v) u.voice = v;
  }
  u.onend = () => opts.onEnd?.();
  u.onerror = () => opts.onEnd?.();
  speechSynthesis.speak(u);
}

export function stopSpeaking() {
  if (browserTts()) speechSynthesis.cancel();
  try { capNow('tts')?.stop(); } catch {}
}

/* ---------- Распознавание речи (Web Speech API) ---------- */
type SR = any;
const SRClassRaw: any = typeof window !== 'undefined' ? (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition : null;
// В артефакте микрофон браузера закрыт — там используется диктовка Claude
const SRClass: any = inArtifact() ? null : SRClassRaw;
export const sttSupported = () => !!SRClass || !!capNow('dictation');

export interface Listener { stop: () => void }

export function listen(handlers: {
  onResult: (text: string, alternatives: string[], final: boolean) => void;
  onEnd?: () => void;
  onError?: (msg: string) => void;
  continuous?: boolean;
}): Listener | null {
  const d = capNow('dictation');
  if (d) return listenDictation(d, handlers);
  if (!SRClass) { handlers.onError?.('Распознавание речи не поддерживается этим браузером. Используйте Chrome или Edge.'); return null; }
  const rec: SR = new SRClass();
  rec.lang = 'de-DE';
  rec.interimResults = true;
  rec.maxAlternatives = 5;
  rec.continuous = !!handlers.continuous;
  rec.onresult = (e: any) => {
    let text = '';
    let final = false;
    const alts: string[] = [];
    for (let i = 0; i < e.results.length; i++) {
      const r = e.results[i];
      text += r[0].transcript;
      if (r.isFinal) final = true;
      if (i === e.results.length - 1) for (let k = 0; k < r.length; k++) alts.push(r[k].transcript);
    }
    handlers.onResult(text.trim(), alts, final);
  };
  rec.onerror = (e: any) => {
    const map: Record<string, string> = {
      'not-allowed': 'Нет доступа к микрофону. Разрешите его в настройках браузера.',
      'no-speech': 'Ничего не слышно — попробуйте ещё раз, говорите громче.',
      'network': 'Ошибка сети распознавания речи.',
    };
    handlers.onError?.(map[e.error] || 'Ошибка распознавания: ' + e.error);
  };
  rec.onend = () => handlers.onEnd?.();
  try { rec.start(); } catch { /* уже запущено */ }
  return { stop: () => { try { rec.stop(); } catch {} } };
}

/** Диктовка Claude (capability dictation). start() вызывается синхронно из клика. */
function listenDictation(d: any, h: Parameters<typeof listen>[0]): Listener {
  let finalText = '';
  let lastPartial = '';
  let ended = false;
  const offs: (() => void)[] = [];
  const finish = () => {
    if (ended) return;
    ended = true;
    const text = (finalText || lastPartial).trim();
    if (text) h.onResult(text, [], true);
    offs.forEach((f) => { try { f(); } catch {} });
    h.onEnd?.();
  };
  offs.push(d.onPartial(({ text }: { text: string }) => { lastPartial = text; h.onResult((finalText + ' ' + text).trim(), [], false); }));
  offs.push(d.onFinal(({ text }: { text: string }) => { finalText = (finalText + ' ' + text).trim(); lastPartial = ''; h.onResult(finalText, [], false); }));
  offs.push(d.onState(({ state, reason }: { state: string; reason?: string }) => {
    if (state === 'idle') {
      if (reason === 'not_granted') h.onError?.('Доступ к диктовке не разрешён. Его можно включить в меню разрешений артефакта.');
      finish();
    }
  }));
  d.start({ language: 'de-DE' }).catch((e: any) => {
    const map: Record<string, string> = {
      not_granted: 'Вы не разрешили диктовку. Можно отвечать текстом.',
      dismissed: 'Запрос на диктовку закрыт — нажмите микрофон ещё раз.',
      no_gesture: 'Нажмите на микрофон ещё раз.',
      unavailable: 'Диктовка здесь недоступна (работает в Chrome/Edge и приложении Claude для компьютера).',
      rate_limited: 'Слишком много запросов диктовки — подождите немного.',
    };
    h.onError?.(map[e?.code] || 'Ошибка диктовки: ' + (e?.message || e));
    finish();
  });
  return { stop: () => { d.stop().catch(() => {}).finally(finish); } };
}
