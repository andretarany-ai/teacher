// Проверка контента курса: node scripts/check-content.mjs
import { createServer } from 'vite';

const server = await createServer({ server: { middlewareMode: true }, appType: 'custom', logLevel: 'error' });
const { LESSONS, ALL_WORDS } = await server.ssrLoadModule('/src/data/index.ts');
const problems = [];
const ids = new Set();
for (const l of LESSONS) {
  if (ids.has(l.id)) problems.push(`${l.id}: duplicate id`);
  ids.add(l.id);
  if (l.words.length < 10) problems.push(`${l.id}: only ${l.words.length} words`);
  if (l.phrases.length < 6) problems.push(`${l.id}: only ${l.phrases.length} phrases`);
  if (l.gaps.length < 5) problems.push(`${l.id}: only ${l.gaps.length} gaps`);
  for (const w of l.words) if (!w.ru || !w.de) problems.push(`${l.id}: bad word ${JSON.stringify(w)}`);
  for (const p of l.phrases) if (!p.ru || !p.de) problems.push(`${l.id}: bad phrase ${JSON.stringify(p)}`);
  for (const g of l.gaps) {
    if (!g.ru) problems.push(`${l.id}: gap without ru: ${g.full}`);
    if (g.opts && !g.opts.includes(g.answer)) problems.push(`${l.id}: gap answer not in opts: ${g.full}`);
    if (g.opts && new Set(g.opts).size !== g.opts.length) problems.push(`${l.id}: duplicate opts: ${g.full}`);
  }
  const bLines = l.dialog.filter((d) => d.who === 'B');
  if (bLines.length < 2) problems.push(`${l.id}: dialog has <2 B lines`);
  for (const d of l.dialog) if (!d.ru || !d.de || !['A', 'B'].includes(d.who)) problems.push(`${l.id}: bad dialog line ${JSON.stringify(d)}`);
}
console.log(`Уроков: ${LESSONS.length}, слов: ${ALL_WORDS.length}, фраз: ${LESSONS.reduce((s, l) => s + l.phrases.length, 0)}, пропусков: ${LESSONS.reduce((s, l) => s + l.gaps.length, 0)}, реплик в диалогах: ${LESSONS.reduce((s, l) => s + l.dialog.length, 0)}`);
console.log(problems.length ? problems.join('\n') : 'Проблем не найдено ✅');
await server.close();
process.exit(problems.length ? 1 : 0);
