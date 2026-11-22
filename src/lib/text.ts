export function shuffle<T>(a: T[]): T[] {
  const r = a.slice();
  for (let i = r.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [r[i], r[j]] = [r[j], r[i]];
  }
  return r;
}
export const pick = <T,>(a: T[], n: number) => shuffle(a).slice(0, n);
export const rnd = <T,>(a: T[]) => a[Math.floor(Math.random() * a.length)];

/** Нормализация для сравнения ответов: регистр, пунктуация, пробелы. Умлауты допускают ae/oe/ue/ss. */
export function norm(s: string, loose = false): string {
  let r = s.toLowerCase().replace(/[.,!?¿¡;:"„“”«»()\-–—]/g, ' ').replace(/['’]/g, '').replace(/\s+/g, ' ').trim();
  if (loose) r = r.replace(/ä/g, 'ae').replace(/ö/g, 'oe').replace(/ü/g, 'ue').replace(/ß/g, 'ss');
  return r;
}

export function levenshtein(a: string, b: string): number {
  const m = a.length, n = b.length;
  if (!m) return n;
  if (!n) return m;
  let prev = Array.from({ length: n + 1 }, (_, i) => i);
  for (let i = 1; i <= m; i++) {
    const cur = [i];
    for (let j = 1; j <= n; j++) {
      cur[j] = Math.min(prev[j] + 1, cur[j - 1] + 1, prev[j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1));
    }
    prev = cur;
  }
  return prev[n];
}

/** 0..1 — похожесть строк */
export function similarity(a: string, b: string): number {
  const x = norm(a, true), y = norm(b, true);
  if (!x && !y) return 1;
  return 1 - levenshtein(x, y) / Math.max(x.length, y.length);
}

export type AnswerCheck = 'correct' | 'typo' | 'wrong';
export function checkAnswer(input: string, expected: string | string[]): AnswerCheck {
  const list = Array.isArray(expected) ? expected : [expected];
  for (const e of list) if (norm(input) === norm(e)) return 'correct';
  for (const e of list) if (norm(input, true) === norm(e, true)) return 'typo';
  for (const e of list) {
    const a = norm(input, true), b = norm(e, true);
    if (b.length > 5 && levenshtein(a, b) <= 1) return 'typo';
  }
  return 'wrong';
}

/** Пословное сравнение для проверки произношения */
export function wordDiff(target: string, heard: string): { w: string; ok: boolean }[] {
  const heardWords = norm(heard, true).split(' ');
  return target.split(/\s+/).map((w) => {
    const n = norm(w, true);
    const ok = !n || heardWords.some((h) => h === n || (n.length > 4 && levenshtein(h, n) <= 1));
    return { w, ok };
  });
}

export function tokenize(s: string): string[] {
  return s.split(/\s+/).filter(Boolean);
}
