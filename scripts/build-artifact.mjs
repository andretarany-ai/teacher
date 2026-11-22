// Собирает приложение в один HTML-файл для публикации как артефакт claude.ai:
// npm run build:artifact  →  artifact/deutsch-weg.html
import fs from 'node:fs';
import path from 'node:path';

const dist = 'dist';
const html = fs.readFileSync(path.join(dist, 'index.html'), 'utf8');
const css = [...html.matchAll(/href="\.?\/?(assets\/[^"]+\.css)"/g)].map((m) => fs.readFileSync(path.join(dist, m[1]), 'utf8')).join('\n');
const js = [...html.matchAll(/src="\.?\/?(assets\/[^"]+\.js)"/g)].map((m) => fs.readFileSync(path.join(dist, m[1]), 'utf8')).join('\n');
if (!css || !js) throw new Error('Не найдены собранные ассеты — сначала npm run build');

const out = `<title>Deutsch Weg</title>
<meta name="claude:viewport-fit-sides" content="cover">
<meta name="theme-color" content="#0f172a">
<style>
html, body { min-height: 100%; }
${css}
</style>
<div id="root"></div>
<script type="module">
${js.replace(/<\/script/gi, '<\\/script')}
</script>
`;
fs.mkdirSync('artifact', { recursive: true });
fs.writeFileSync('artifact/deutsch-weg.html', out);
console.log('artifact/deutsch-weg.html', (out.length / 1024).toFixed(0) + ' KB');
