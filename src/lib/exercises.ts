import type { DialogLine, Gap, Lesson, Word } from '../data/types';
import { ALL_PHRASES, ALL_WORDS, LESSONS, wordKey } from '../data';
import { pick, rnd, shuffle, tokenize } from './text';

export type Ex =
  | { t: 'grammar'; lesson: Lesson }
  | { t: 'flash'; word: Word }
  | { t: 'mc'; title: string; prompt: string; sub?: string; audio?: string; options: string[]; answer: string; speakOptions?: boolean; key?: string; ru?: string }
  | { t: 'article'; word: Word }
  | { t: 'match'; pairs: [string, string][] }
  | { t: 'build'; ru: string; answer: string; tokens: string[] }
  | { t: 'type'; title: string; prompt: string; audio?: string; answer: string[]; ru: string; hint?: string; key?: string }
  | { t: 'gap'; gap: Gap; rule?: Lesson['grammar'] }
  | { t: 'phrase'; de: string; ru: string; gloss: { de: string; ru: string }[]; n: number; total: number }
  | { t: 'rule'; lesson: Lesson }
  | { t: 'script'; title: string; lines: DialogLine[] }
  | { t: 'speak'; de: string; ru: string }
  | { t: 'dialog'; title: string; lines: DialogLine[]; distractors: string[] };

const cleanTok = (s: string) => s.replace(/^[„"«(]+|[.,!?;:"“»)]+$/g, '');

function wordPool(lesson: Lesson): Word[] {
  const same = LESSONS.filter((l) => l.level === lesson.level).flatMap((l) => l.words);
  return same.length > 8 ? same : ALL_WORDS;
}

function mcRu(w: Word, lesson: Lesson): Ex {
  const others = shuffle([...lesson.words, ...wordPool(lesson)].filter((x) => x.ru !== w.ru));
  const opts = Array.from(new Set(others.map((x) => x.ru))).slice(0, 3);
  return { t: 'mc', title: 'Что значит это слово?', prompt: w.full, audio: w.full, options: shuffle([w.ru, ...opts]), answer: w.ru, key: wordKey(w) };
}
function mcDe(w: Word, lesson: Lesson): Ex {
  const others = shuffle([...lesson.words, ...wordPool(lesson)].filter((x) => x.full !== w.full && x.ru !== w.ru));
  const opts = Array.from(new Set(others.map((x) => x.full))).slice(0, 3);
  return { t: 'mc', title: 'Выберите перевод на немецкий', prompt: w.ru, options: shuffle([w.full, ...opts]), answer: w.full, speakOptions: true, key: wordKey(w) };
}
function listenWord(w: Word, lesson: Lesson): Ex {
  const others = shuffle([...lesson.words, ...wordPool(lesson)].filter((x) => x.ru !== w.ru));
  const opts = Array.from(new Set(others.map((x) => x.ru))).slice(0, 3);
  return { t: 'mc', title: 'Послушайте и выберите перевод', prompt: '', audio: w.full, options: shuffle([w.ru, ...opts]), answer: w.ru, key: wordKey(w) };
}
function typeWord(w: Word): Ex {
  return {
    t: 'type', title: 'Напишите по-немецки', prompt: w.ru, ru: w.ru, answer: [w.full, w.de].filter((v, i, a) => a.indexOf(v) === i),
    hint: w.g ? 'с артиклем (der/die/das)' : undefined, key: wordKey(w),
  };
}

function build(p: { de: string; ru: string }, lesson: Lesson): Ex {
  const toks = tokenize(p.de);
  const lowered = new Set(toks.map((t) => cleanTok(t).toLowerCase()));
  const pool = [...lesson.phrases.map((x) => x.de), ...lesson.words.map((w) => w.de)].flatMap(tokenize)
    .map(cleanTok).filter((t) => t && !lowered.has(t.toLowerCase()));
  const distract = Array.from(new Set(pool)).slice(0, 40);
  return { t: 'build', ru: p.ru, answer: p.de, tokens: shuffle([...toks.map(cleanTok), ...pick(distract, Math.min(3, Math.max(1, Math.floor(toks.length / 3))))]) };
}
function listenPhraseMc(p: { de: string; ru: string }, lesson: Lesson): Ex {
  const pool = [...lesson.phrases, ...ALL_PHRASES.filter((x) => x.lesson !== lesson.id)].filter((x) => x.ru !== p.ru);
  const opts = pick(pool.slice(0, 30), 3).map((x) => x.ru);
  return { t: 'mc', title: 'Послушайте фразу. Что она значит?', prompt: '', audio: p.de, options: shuffle([p.ru, ...opts]), answer: p.ru, ru: p.de };
}
function listenType(p: { de: string; ru: string }): Ex {
  return { t: 'type', title: 'Напишите, что услышали', prompt: '', audio: p.de, answer: [p.de], ru: p.ru };
}

/** Слова урока, которые встречаются во фразе — мини-словарик для карточки фразы */
function glossFor(de: string, lesson: Lesson): { de: string; ru: string }[] {
  const toks = tokenize(de).map((t) => cleanTok(t).toLowerCase()).filter(Boolean);
  const pool = [...lesson.words, ...LESSONS.filter((l) => l.index < lesson.index).flatMap((l) => l.words)];
  const out: { de: string; ru: string }[] = [];
  const seen = new Set<string>();
  for (const t of toks) {
    const w = pool.find((x) => {
      const base = x.de.toLowerCase();
      if (base.includes(' ')) return false;
      return base === t || (base.length > 3 && (t.startsWith(base) || base.startsWith(t)) && Math.abs(base.length - t.length) <= 2);
    });
    if (w && !seen.has(w.full)) { seen.add(w.full); out.push({ de: w.full, ru: w.ru }); }
  }
  return out.slice(0, 6);
}

/**
 * Полный урок. Принцип: сначала показываем, потом спрашиваем.
 * Грамматика → слова блоками (карточки → пары → проверка) → фразы блоками
 * (карточки фраз со словариком → задания только по показанным фразам) →
 * памятка по правилу → пропуски с подсказкой → повторение → чтение диалога → диалог.
 */
export function buildLesson(lesson: Lesson): Ex[] {
  const out: Ex[] = [{ t: 'grammar', lesson }];
  const words = lesson.words;
  for (let i = 0; i < words.length; i += 4) {
    const chunk = words.slice(i, i + 4);
    chunk.forEach((w) => out.push({ t: 'flash', word: w }));
    if (chunk.length >= 2) out.push({ t: 'match', pairs: chunk.map((w) => [w.full, w.ru]) });
    const w = rnd(chunk);
    out.push(Math.random() < 0.5 ? mcRu(w, lesson) : listenWord(w, lesson));
  }
  const nouns = shuffle(words.filter((w) => w.g));
  nouns.slice(0, 3).forEach((w) => out.push({ t: 'article', word: w }));
  shuffle(words).slice(0, 3).forEach((w) => out.push(mcDe(w, lesson)));

  // Фразы: блоками по 3 — сначала знакомство, потом задания именно по ним
  const phrases = lesson.phrases;
  let k = 0;
  for (let i = 0; i < phrases.length; i += 3) {
    const chunk = phrases.slice(i, i + 3);
    chunk.forEach((p, j) => out.push({ t: 'phrase', de: p.de, ru: p.ru, gloss: glossFor(p.de, lesson), n: i + j + 1, total: phrases.length }));
    const tasks: Ex[] = chunk.map((p) => {
      const m = k++ % 3;
      return m === 0 ? listenPhraseMc(p, lesson) : m === 1 ? build(p, lesson) : { t: 'speak', de: p.de, ru: p.ru };
    });
    out.push(...shuffle(tasks));
  }

  // Правило на практике: памятка, затем пропуски с подсказкой
  if (lesson.gaps.length) {
    out.push({ t: 'rule', lesson });
    shuffle(lesson.gaps).forEach((g) => out.push({ t: 'gap', gap: g, rule: lesson.grammar }));
  }

  // Закрепление всего урока
  const review = shuffle(phrases);
  if (review[0]) out.push(build(review[0], lesson));
  if (review[1]) out.push(listenType(review[1]));
  shuffle(words).slice(0, 2).forEach((w) => out.push(typeWord(w)));

  // Диалог: сначала читаем с переводом, потом играем роль
  if (lesson.dialog.length) {
    out.push({ t: 'script', title: lesson.dialogTitle, lines: lesson.dialog });
    const others = ALL_PHRASES.filter((p) => p.lesson === lesson.id).map((p) => p.de);
    out.push({ t: 'dialog', title: lesson.dialogTitle, lines: lesson.dialog, distractors: others });
  }
  return out;
}

/** Быстрая тренировка по уроку без карточек (повтор урока) */
export function buildPractice(lesson: Lesson): Ex[] {
  const out: Ex[] = [];
  const w = shuffle(lesson.words);
  out.push({ t: 'match', pairs: w.slice(0, 5).map((x) => [x.full, x.ru]) });
  w.slice(0, 4).forEach((x, i) => out.push(i % 2 ? mcDe(x, lesson) : listenWord(x, lesson)));
  shuffle(lesson.phrases).slice(0, 4).forEach((p, i) => out.push(i % 2 ? build(p, lesson) : { t: 'speak', de: p.de, ru: p.ru }));
  shuffle(lesson.gaps).slice(0, 3).forEach((g) => out.push({ t: 'gap', gap: g, rule: lesson.grammar }));
  w.filter((x) => x.g).slice(0, 2).forEach((x) => out.push({ t: 'article', word: x }));
  w.slice(4, 6).forEach((x) => out.push(typeWord(x)));
  return shuffle(out);
}

/** Повторение по интервальной системе */
export function buildReview(keys: string[]): Ex[] {
  const out: Ex[] = [];
  keys.slice(0, 15).forEach((k, i) => {
    const w = ALL_WORDS.find((x) => wordKey(x) === k);
    if (!w) return;
    const lesson = LESSONS.find((l) => l.id === w.lesson)!;
    const m = i % 4;
    out.push(m === 0 ? mcRu(w, lesson) : m === 1 ? typeWord(w) : m === 2 ? listenWord(w, lesson) : mcDe(w, lesson));
  });
  return out;
}

/** Говорим вслух: фразы для тренировки произношения */
export function buildSpeaking(lesson: Lesson): Ex[] {
  return shuffle([...lesson.phrases, ...lesson.dialog.filter((d) => d.who === 'B')]).slice(0, 8).map((p) => ({ t: 'speak', de: p.de, ru: p.ru }));
}

/** Аудирование */
export function buildListening(lesson: Lesson): Ex[] {
  const ph = shuffle(lesson.phrases);
  return [
    ...ph.slice(0, 3).map((p) => listenPhraseMc(p, lesson)),
    ...ph.slice(3, 6).map(listenType),
    ...shuffle(lesson.words).slice(0, 3).map((w) => listenWord(w, lesson)),
  ];
}
