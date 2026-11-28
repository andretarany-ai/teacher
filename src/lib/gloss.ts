// Пословный разбор немецкой фразы: перевод каждого слова.
// Источники: словари уроков курса + словарик служебных слов и форм глаголов.
import { LESSONS } from '../data';
import { FUNC_WORDS, PHRASE_IDIOMS } from '../data/function-words';

export interface GlossItem { de: string; base?: string; ru: string | null }

const clean = (s: string) => s.replace(/^[„"«(¿¡]+|[.,!?;:"“»)…]+$/g, '');

interface Entry { key: string; full: string; ru: string; verb: boolean }
let index: Entry[] | null = null;
function buildIndex(): Entry[] {
  const out: Entry[] = [];
  for (const l of LESSONS) for (const w of l.words) {
    const de = w.de.trim();
    if (/\s/.test(de) && !w.g) continue;
    out.push({ key: de.toLowerCase(), full: w.full, ru: w.ru, verb: !w.g && /(en|ln|rn)$/.test(de) && de === de.toLowerCase() });
  }
  return out;
}

/** Найти перевод одного слова */
export function glossWord(raw: string): GlossItem {
  const w = clean(raw);
  const t = w.toLowerCase();
  if (!t) return { de: raw, ru: null };
  if (FUNC_WORDS[t]) return { de: w, ru: FUNC_WORDS[t] };
  index ||= buildIndex();
  // 1) точное совпадение (существительное/слово из уроков)
  const exact = index.find((e) => e.key === t);
  if (exact) return { de: w, base: exact.full.toLowerCase() === t ? undefined : exact.full, ru: exact.ru };
  // 2) форма глагола: komme/kommst/kommt → kommen, gemacht → machen
  for (const e of index) {
    if (!e.verb) continue;
    const stem = e.key.replace(/(en|n)$/, '');
    if (stem.length < 3) continue;
    const forms = [stem + 'e', stem + 'st', stem + 't', stem + 'est', stem + 'et', stem + 'te', stem + 'ten', 'ge' + stem + 't', 'ge' + stem + 'en'];
    if (forms.includes(t)) return { de: w, base: e.full, ru: e.ru };
  }
  // 3) множественное число / падежные окончания существительных
  const noun = index.find((e) => !e.verb && e.key.length > 3 && (t === e.key + 'n' || t === e.key + 'en' || t === e.key + 'e' || t === e.key + 's' || t === e.key + 'er' || t === e.key + 'es'));
  if (noun) return { de: w, base: noun.full, ru: noun.ru };
  // 4) прилагательное с окончанием: kleine/kleinen → klein
  const adj = index.find((e) => !e.verb && e.key.length > 2 && e.key === e.key.toLowerCase() && ['e', 'en', 'er', 'es', 'em'].some((s) => t === e.key + s));
  if (adj) return { de: w, base: adj.full, ru: adj.ru };
  return { de: w, ru: null };
}

const SEP = ['an', 'auf', 'aus', 'ein', 'mit', 'fern', 'zu', 'ab', 'vor', 'los', 'zurück', 'weg', 'nach', 'her', 'hin', 'dar', 'kennen', 'statt', 'teil'];

/** Отделяемая приставка в конце предложения: «fängt … an» → anfangen */
function separablePrefix(prefix: string, others: string[]): GlossItem | null {
  index ||= buildIndex();
  for (const e of index) {
    if (!e.verb || !e.key.startsWith(prefix) || e.key.length <= prefix.length + 2) continue;
    const rest = e.key.slice(prefix.length);
    const stem = rest.replace(/(en|n)$/, '');
    const forms = new Set([rest, stem + 'e', stem + 'st', stem + 't', stem + 'te', stem + 'ten']);
    if (others.some((o) => forms.has(o))) return { de: prefix, base: e.full, ru: `приставка глагола «${e.full}» — ${e.ru}` };
  }
  for (const [k, v] of Object.entries(FUNC_WORDS)) {
    if (v.includes(`(${prefix}`) && others.includes(k)) return { de: prefix, ru: `приставка глагола: ${v}` };
    const m = v.match(new RegExp(`\\((${prefix}\\p{L}+)`, 'u'));
    if (m && others.includes(k)) return { de: prefix, base: m[1], ru: `приставка глагола «${m[1]}» (стоит в конце предложения)` };
  }
  return { de: prefix, ru: 'отделяемая приставка глагола: в предложении она уходит в конец' };
}

/** Разбор фразы: устойчивые выражения + пословно */
export function glossPhrase(de: string): { idioms: { de: string; ru: string }[]; words: GlossItem[] } {
  const low = de.toLowerCase();
  const idioms = PHRASE_IDIOMS.filter((p) => low.includes(p.de.toLowerCase()));
  const raw = de.split(/\s+/).filter(Boolean);
  const words = raw.map((tok, i) => {
    const t = clean(tok).toLowerCase();
    const clauseEnd = /[.,!?;:]$/.test(tok) || i === raw.length - 1;
    if (clauseEnd && i > 1 && SEP.includes(t)) {
      const others = raw.slice(0, i).map((x) => clean(x).toLowerCase());
      const sp = separablePrefix(t, others);
      if (sp) return { ...sp, de: clean(tok) };
    }
    return glossWord(tok);
  });
  return { idioms, words };
}
