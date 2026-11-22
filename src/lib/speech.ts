import { getSettings } from './storage';

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

export const ttsSupported = () => typeof speechSynthesis !== 'undefined';

export function speak(text: string, opts: { rate?: number; lang?: string; onEnd?: () => void } = {}) {
  if (!ttsSupported()) { opts.onEnd?.(); return; }
  const s = getSettings();
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
  if (ttsSupported()) speechSynthesis.cancel();
}

/* ---------- Распознавание речи (Web Speech API) ---------- */
type SR = any;
const SRClass: any = typeof window !== 'undefined' ? (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition : null;
export const sttSupported = () => !!SRClass;

export interface Listener { stop: () => void }

export function listen(handlers: {
  onResult: (text: string, alternatives: string[], final: boolean) => void;
  onEnd?: () => void;
  onError?: (msg: string) => void;
  continuous?: boolean;
}): Listener | null {
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
