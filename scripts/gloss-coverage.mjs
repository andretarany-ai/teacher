// Какие слова во фразах и диалогах курса остаются без перевода: node scripts/gloss-coverage.mjs
import { createServer } from 'vite';
const server = await createServer({ server: { middlewareMode: true }, appType: 'custom', logLevel: 'error' });
const { LESSONS } = await server.ssrLoadModule('/src/data/index.ts');
const { glossWord } = await server.ssrLoadModule('/src/lib/gloss.ts');
const miss = new Map();
let total = 0, ok = 0;
for (const l of LESSONS) {
  const texts = [...l.phrases.map((p) => p.de), ...l.dialog.map((d) => d.de), ...l.gaps.map((g) => g.full)];
  for (const t of texts) for (const tok of t.split(/\s+/)) {
    const g = glossWord(tok);
    if (!g.de.replace(/[^\p{L}]/gu, '')) continue;
    total++;
    if (g.ru) ok++; else { const k = g.de.toLowerCase(); const m = miss.get(k) || { n: 0, first: l.id }; m.n++; miss.set(k, m); }
  }
}
console.log(`coverage ${ok}/${total} = ${(ok / total * 100).toFixed(1)}%, unique missing ${miss.size}`);
const arr = [...miss.entries()].sort((a, b) => a[1].first.localeCompare(b[1].first) || b[1].n - a[1].n);
console.log(arr.map(([k, v]) => `${k}@${v.first}`).join(' '));
await server.close();
