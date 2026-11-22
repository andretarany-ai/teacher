import type { DialogLine, Gap, Gender, Lesson, LessonSrc, Level, Phrase, Word } from './types';
import { A1 } from './a1';
import { A2 } from './a2';
import { B1 } from './b1';
import { B2 } from './b2';

const lines = (s: string) => s.split('\n').map((l) => l.trim()).filter(Boolean);

function parseWord(line: string): Word {
  const [left, ru] = line.split('|').map((x) => x.trim());
  const [main, pl] = left.split(',').map((x) => x.trim());
  const m = main.match(/^(der|die|das)\s+(.+)$/);
  if (m) return { g: m[1] as Gender, de: m[2], ru, pl: pl || undefined, full: main };
  return { de: main, ru, full: main };
}
function parsePhrase(line: string): Phrase {
  const [de, ru] = line.split('|').map((x) => x.trim());
  return { de, ru };
}
function parseGap(line: string): Gap {
  const [s, ru, opts] = line.split('|').map((x) => x.trim());
  const m = s.match(/^(.*)\{(.+?)\}(.*)$/);
  if (!m) throw new Error('Bad gap: ' + line);
  return {
    before: m[1], answer: m[2], after: m[3], ru,
    opts: opts ? opts.split(',').map((o) => o.trim()) : undefined,
    full: m[1] + m[2] + m[3],
  };
}
function parseDialog(s: string): DialogLine[] {
  return lines(s).map((l) => {
    const who = l[0] as 'A' | 'B';
    const [de, ru] = l.slice(2).split('|').map((x) => x.trim());
    return { who, de, ru };
  });
}

let idx = 0;
function build(level: Level, src: LessonSrc[]): Lesson[] {
  return src.map((s) => ({
    id: s.id, level, index: idx++, emoji: s.emoji, title: s.title, de: s.de, goal: s.goal,
    grammar: s.grammar,
    words: lines(s.words).map(parseWord),
    phrases: lines(s.phrases).map(parsePhrase),
    gaps: lines(s.gaps).map(parseGap),
    dialog: parseDialog(s.dialog),
    dialogTitle: s.dialogTitle,
    roleplay: s.roleplay,
  }));
}

export const LEVELS: { id: Level; name: string; desc: string; color: string }[] = [
  { id: 'A1', name: 'A1 · Старт', desc: 'С абсолютного нуля: звуки, знакомство, числа, еда, город, покупки', color: '#22c55e' },
  { id: 'A2', name: 'A2 · Основа', desc: 'Прошедшее время, падежи, придаточные, сравнения, работа и путешествия', color: '#3b82f6' },
  { id: 'B1', name: 'B1 · Самостоятельность', desc: 'Рассказы, мнения, пассив, сослагательное наклонение, собеседование', color: '#a855f7' },
  { id: 'B2', name: 'B2 · Свобода', desc: 'Косвенная речь, номинализация, аргументация, сложный синтаксис', color: '#f97316' },
];

export const LESSONS: Lesson[] = [
  ...build('A1', A1),
  ...build('A2', A2),
  ...build('B1', B1),
  ...build('B2', B2),
];

export const lessonById = (id: string) => LESSONS.find((l) => l.id === id);
export const ALL_WORDS: (Word & { lesson: string })[] = LESSONS.flatMap((l) => l.words.map((w) => ({ ...w, lesson: l.id })));
export const ALL_PHRASES: (Phrase & { lesson: string })[] = LESSONS.flatMap((l) => l.phrases.map((p) => ({ ...p, lesson: l.id })));
export const wordKey = (w: { de: string; g?: string }) => (w.g ? w.g + ' ' : '') + w.de;
