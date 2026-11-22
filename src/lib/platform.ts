// Возможности среды claude.ai (артефакт). Вне артефакта всё возвращает null,
// и приложение работает в обычном режиме (Grok + localStorage).

const w: any = typeof window !== 'undefined' ? window : {};
export const inArtifact = () => !!w.claude?.use;

const cache: Record<string, Promise<any>> = {};
const ready: Record<string, any> = {};

export function cap<T = any>(name: string): Promise<T | null> {
  if (!inArtifact()) return Promise.resolve(null);
  if (!cache[name]) {
    cache[name] = Promise.resolve()
      .then(() => w.claude.use(name))
      .then((ns: any) => { ready[name] = ns || null; return ns || null; })
      .catch(() => { ready[name] = null; return null; });
  }
  return cache[name];
}

/** Синхронный доступ к уже загруженной возможности (undefined — ещё грузится). */
export const capNow = (name: string) => ready[name];

/** Загрузить заранее, чтобы диктовку можно было запускать прямо из клика. */
export function preloadCaps(onReady?: () => void) {
  if (!inArtifact()) return;
  Promise.all(['sample', 'dictation', 'tts', 'db', 'user'].map((n) => cap(n))).then(() => onReady?.());
}
