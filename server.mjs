// Мини-сервер без зависимостей: раздаёт собранное приложение (dist/)
// и проксирует /api/chat → https://api.x.ai/v1/chat/completions,
// чтобы ключ Grok не попадал в браузер.
import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DIST = path.join(__dirname, 'dist');

// простая загрузка .env
try {
  for (const line of fs.readFileSync(path.join(__dirname, '.env'), 'utf8').split('\n')) {
    const m = line.match(/^\s*([A-Z_]+)\s*=\s*(.*)\s*$/);
    if (m && !process.env[m[1]]) process.env[m[1]] = m[2].replace(/^["']|["']$/g, '');
  }
} catch {}

const PORT = Number(process.env.PORT || 5173);
const KEY = process.env.XAI_API_KEY || '';
const TYPES = {
  '.html': 'text/html; charset=utf-8', '.js': 'text/javascript', '.css': 'text/css',
  '.svg': 'image/svg+xml', '.json': 'application/json', '.webmanifest': 'application/manifest+json',
  '.png': 'image/png', '.ico': 'image/x-icon',
};

const server = http.createServer(async (req, res) => {
  if (req.url === '/api/chat' && req.method === 'POST') {
    const chunks = [];
    for await (const c of req) chunks.push(c);
    const auth = req.headers['authorization'] || (KEY ? `Bearer ${KEY}` : '');
    if (!auth) {
      res.writeHead(401, { 'content-type': 'application/json' });
      return res.end(JSON.stringify({ error: { message: 'Нет ключа: задайте XAI_API_KEY в .env или введите ключ в настройках.' } }));
    }
    try {
      const r = await fetch('https://api.x.ai/v1/chat/completions', {
        method: 'POST',
        headers: { 'content-type': 'application/json', authorization: auth },
        body: Buffer.concat(chunks),
      });
      res.writeHead(r.status, { 'content-type': r.headers.get('content-type') || 'application/json' });
      res.end(Buffer.from(await r.arrayBuffer()));
    } catch (e) {
      res.writeHead(502, { 'content-type': 'application/json' });
      res.end(JSON.stringify({ error: { message: String(e) } }));
    }
    return;
  }
  let p = decodeURIComponent((req.url || '/').split('?')[0]);
  let file = path.join(DIST, p);
  if (!file.startsWith(DIST)) { res.writeHead(403); return res.end(); }
  if (!fs.existsSync(file) || fs.statSync(file).isDirectory()) file = path.join(DIST, 'index.html');
  fs.readFile(file, (err, data) => {
    if (err) { res.writeHead(404); return res.end('Not found — сначала выполните npm run build'); }
    res.writeHead(200, { 'content-type': TYPES[path.extname(file)] || 'application/octet-stream' });
    res.end(data);
  });
});

server.listen(PORT, () => {
  console.log(`Deutsch Weg: http://localhost:${PORT}  (Grok-ключ на сервере: ${KEY ? 'есть' : 'нет'})`);
});
