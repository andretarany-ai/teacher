import { getSettings } from './storage';
import { capNow, inArtifact } from './platform';

export interface ChatMsg { role: 'system' | 'user' | 'assistant'; content: string }

export class AiError extends Error {}

/** Превращает историю сообщений в вход для Claude (там нет system-роли). */
function toSampleInput(messages: ChatMsg[]): { role: 'user' | 'assistant'; content: string }[] {
  const system = messages.filter((m) => m.role === 'system').map((m) => m.content).join('\n\n');
  const rest = messages.filter((m) => m.role !== 'system') as { role: 'user' | 'assistant'; content: string }[];
  const out: { role: 'user' | 'assistant'; content: string }[] = [];
  const preface = system ? 'ИНСТРУКЦИИ (следуй им всегда):\n' + system + '\n\n---\n' : '';
  if (!rest.length || rest[0].role !== 'user') out.push({ role: 'user', content: preface + '(Начало разговора.)' });
  for (const m of rest) {
    const prev = out[out.length - 1];
    if (prev && prev.role === m.role) prev.content += '\n\n' + m.content;
    else out.push({ ...m, content: !out.length ? preface + m.content : m.content });
  }
  if (out[out.length - 1].role !== 'user') out.push({ role: 'user', content: '(Продолжай.)' });
  return out;
}

async function chatClaude(sample: any, messages: ChatMsg[], opts: { json?: boolean }): Promise<string> {
  const input = toSampleInput(messages);
  if (opts.json) input[input.length - 1].content += '\n\nОтветь ТОЛЬКО валидным JSON-объектом, без пояснений и без ```.';
  try {
    const r = await sample(input, { cache: false, modelTier: 'default' });
    return r.text;
  } catch (e: any) {
    const map: Record<string, string> = {
      not_granted: 'Доступ к ИИ не разрешён. Разрешите его в меню разрешений артефакта и попробуйте снова.',
      rate_limited: 'Слишком много запросов к ИИ. Подождите минуту и попробуйте снова.',
    };
    throw new AiError(map[e?.code] || 'Ошибка ИИ: ' + (e?.message || String(e)));
  }
}

export async function chat(messages: ChatMsg[], opts: { json?: boolean; temperature?: number; maxTokens?: number } = {}): Promise<string> {
  const sample = capNow('sample');
  if (sample) return chatClaude(sample, messages, opts);
  const s0 = getSettings();
  // На GitHub Pages и других статических хостингах прокси нет — идём напрямую
  const s = !/^https?:/.test(s0.endpoint) && typeof location !== 'undefined' && !/^(localhost|127\.|192\.168\.)/.test(location.hostname)
    ? { ...s0, endpoint: 'https://api.x.ai/v1/chat/completions' } : s0;
  const direct = /^https?:/.test(s.endpoint);
  if (direct && !s.apiKey) throw new AiError('Для прямого подключения нужен API-ключ Grok (Настройки → ИИ).');
  const headers: Record<string, string> = { 'content-type': 'application/json' };
  if (s.apiKey) headers.authorization = `Bearer ${s.apiKey}`;
  const body: any = {
    model: s.model,
    messages,
    temperature: opts.temperature ?? 0.7,
    max_tokens: opts.maxTokens ?? 1200,
    stream: false,
  };
  if (opts.json) body.response_format = { type: 'json_object' };
  let r: Response;
  try {
    r = await fetch(s.endpoint, { method: 'POST', headers, body: JSON.stringify(body) });
  } catch (e) {
    throw new AiError('Не удалось связаться с сервером ИИ. Проверьте интернет и настройки подключения.');
  }
  const text = await r.text();
  let data: any = null;
  try { data = JSON.parse(text); } catch {}
  if (!r.ok) {
    const msg = data?.error?.message || data?.error || text.slice(0, 200);
    if (r.status === 401 || r.status === 403) throw new AiError('Ключ Grok не принят (' + r.status + '). Проверьте ключ в Настройках. ' + (msg || ''));
    if (r.status === 404 && !direct) throw new AiError('Прокси /api/chat не найден. Запустите приложение через «npm run dev» / «npm start» или выберите прямое подключение в Настройках.');
    throw new AiError(`Ошибка ИИ (${r.status}): ${typeof msg === 'string' ? msg : JSON.stringify(msg)}`);
  }
  const content = data?.choices?.[0]?.message?.content;
  if (typeof content !== 'string') throw new AiError('Пустой ответ от ИИ.');
  return content;
}

/** Достаёт JSON из ответа модели, даже если он обёрнут в ```json ...``` */
export function parseJson<T = any>(s: string): T {
  const cleaned = s.replace(/^```(?:json)?/m, '').replace(/```\s*$/m, '').trim();
  try { return JSON.parse(cleaned); } catch {}
  const start = cleaned.search(/[[{]/);
  const end = Math.max(cleaned.lastIndexOf('}'), cleaned.lastIndexOf(']'));
  if (start >= 0 && end > start) return JSON.parse(cleaned.slice(start, end + 1));
  throw new AiError('ИИ вернул ответ в неожиданном формате. Попробуйте ещё раз.');
}

export async function chatJson<T = any>(messages: ChatMsg[], opts: { temperature?: number; maxTokens?: number } = {}): Promise<T> {
  const out = await chat(messages, { ...opts, json: true });
  return parseJson<T>(out);
}

export const aiProvider = () => (capNow('sample') ? 'claude' : 'grok');

export const aiConfigured = () => {
  if (capNow('sample')) return true;
  if (inArtifact()) return false;
  const s = getSettings();
  return !!s.apiKey || (!/^https?:/.test(s.endpoint) && /^(localhost|127\.|192\.168\.)/.test(location.hostname));
};

export const TUTOR_BASE = `Ты — дружелюбный и терпеливый преподаватель немецкого языка для русскоговорящих учеников. Объясняешь кратко, понятно, с примерами, на русском языке. Немецкие примеры всегда пиши правильно, с умлаутами и заглавными буквами у существительных.`;
