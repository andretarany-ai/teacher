import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

// В режиме разработки запросы /api/chat проксируются на xAI (Grok).
// Ключ берётся из .env (XAI_API_KEY) или из заголовка, который отправляет браузер
// (если ключ введён в настройках приложения).
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  const key = env.XAI_API_KEY || '';
  return {
    plugins: [react()],
    base: './',
    server: {
      host: true,
      proxy: {
        '/api/chat': {
          target: 'https://api.x.ai',
          changeOrigin: true,
          rewrite: () => '/v1/chat/completions',
          configure: (proxy) => {
            proxy.on('proxyReq', (req) => {
              if (key && !req.getHeader('authorization')) req.setHeader('authorization', `Bearer ${key}`);
            });
          },
        },
      },
    },
  };
});
