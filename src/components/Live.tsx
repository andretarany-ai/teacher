import { useEffect, useRef, useState } from 'react';
import { startLive, hasKey, type LiveSession, type LiveStatus } from '../lib/xai';
import { ConvSummary, evaluateConversation, LEVEL_RULES } from './AI';
import { Spinner } from './ui';

interface Line { id: string; me: boolean; text: string; final: boolean }

const STATUS_TEXT: Record<LiveStatus, string> = {
  connecting: 'Подключаюсь к Grok…',
  listening: 'Слушаю — говорите по-немецки',
  'user-speaking': 'Слышу вас…',
  thinking: 'Grok думает…',
  speaking: 'Grok говорит (можно перебить)',
  closed: 'Разговор завершён',
  error: 'Ошибка',
};

export function LiveTalk({ level, title, role, situation, goal, words, onExit, goSettings }: {
  level: string; title: string; role: string; situation: string; goal: string; words?: string[]; onExit: () => void; goSettings: () => void;
}) {
  const [status, setStatus] = useState<LiveStatus | 'idle'>('idle');
  const [err, setErr] = useState('');
  const [lines, setLines] = useState<Line[]>([]);
  const [muted, setMuted] = useState(false);
  const [summary, setSummary] = useState<any>(null);
  const [evaluating, setEvaluating] = useState(false);
  const [level01, setLevel01] = useState(0);
  const sess = useRef<LiveSession | null>(null);
  const scroll = useRef<HTMLDivElement>(null);

  useEffect(() => () => sess.current?.close(), []);
  useEffect(() => { const el = scroll.current; if (el) el.scrollTo({ top: el.scrollHeight, behavior: 'smooth' }); }, [lines]);
  useEffect(() => {
    if (!sess.current || status === 'closed' || status === 'idle') return;
    const t = setInterval(() => setLevel01(Math.min(1, (sess.current?.level() || 0) * 8)), 120);
    return () => clearInterval(t);
  }, [status]);

  const upsert = (id: string, me: boolean, text: string, final: boolean) => {
    setLines((ls) => {
      const i = ls.findIndex((l) => l.id === id && l.me === me);
      if (i >= 0) { const c = ls.slice(); c[i] = { ...c[i], text, final }; return c; }
      return [...ls, { id, me, text, final }];
    });
  };

  const instructions = `Ты играешь роль в голосовой ролевой игре для изучения немецкого языка.
Роль: ${role}. Ситуация: ${situation}. Цель ученика: ${goal}.
Уровень ученика: ${level}. ${LEVEL_RULES[level] || LEVEL_RULES.A1}
Говори ТОЛЬКО по-немецки, коротко (1–2 предложения), естественно и дружелюбно, задавай встречные вопросы.
${words?.length ? 'По возможности используй слова: ' + words.slice(0, 20).join(', ') + '.' : ''}
Если ученик ошибся, мягко повтори правильный вариант его фразы в своём ответе (например: «Ah, Sie meinen: …») и продолжай разговор.
Если ученик говорит по-русски или явно не знает, что сказать, — дай короткую подсказку: простую немецкую фразу, которую он может повторить.
Говори чуть медленнее обычного и чётко.`;

  const start = async () => {
    setErr(''); setLines([]); setSummary(null);
    try {
      sess.current = await startLive(instructions, {
        onStatus: (s, msg) => { setStatus(s); if (s === 'error' && msg) setErr(msg); },
        onUserText: (id, t, f) => upsert('u' + id, true, t, f),
        onAiText: (id, t, f) => upsert('a' + id, false, t, f),
      }, { greet: '(Начни разговор своей первой репликой в роли. Поприветствуй ученика.)', keyterms: words?.map((w) => w.replace(/^(der|die|das) /, '')) });
    } catch (e: any) {
      setStatus('error');
      setErr(e?.name === 'NotAllowedError' ? 'Нет доступа к микрофону — разрешите его в браузере.' : e?.message || String(e));
    }
  };

  const finish = async () => {
    sess.current?.close();
    const mine = lines.filter((l) => l.me && l.text.trim());
    if (mine.length < 2) { onExit(); return; }
    setEvaluating(true);
    try { setSummary(await evaluateConversation(level, situation, goal, lines.filter((l) => l.text.trim()).map((l) => ({ me: l.me, text: l.text })), mine.length)); }
    catch (e: any) { setErr(e.message); }
    setEvaluating(false);
  };

  if (summary) return <ConvSummary summary={summary} onExit={onExit} />;
  if (!hasKey()) {
    return (
      <div className="page">
        <button className="btn ghost" onClick={onExit}>← Назад</button>
        <div className="card warn-card"><h3>🔑 Нужен ключ Grok</h3><p>Голосовой разговор работает через Grok Voice. Вставьте ключ в Профиле.</p><button className="btn primary" onClick={goSettings}>Вставить ключ</button></div>
      </div>
    );
  }
  const active = status !== 'idle' && status !== 'closed' && status !== 'error';
  return (
    <div className="page chat-page">
      <div className="chat-head">
        <button className="icon-btn" onClick={() => { sess.current?.close(); onExit(); }}>←</button>
        <div><div className="chat-title">📞 {title}</div><div className="muted small">🎯 {goal}</div></div>
      </div>
      <div className="chat-scroll" ref={scroll}>
        <div className="situation">🎭 {situation}<br /><span className="small">Говорите голосом, как по телефону. Grok сам поймёт, когда вы закончили фразу. Его можно перебивать.</span></div>
        {lines.filter((l) => l.text.trim()).map((l) => (
          <div key={(l.me ? 'm' : 't') + l.id} className={'bubble ' + (l.me ? 'me' : 'them') + (l.final ? '' : ' live')}>{l.text}</div>
        ))}
        {evaluating && <Spinner text="Grok оценивает разговор…" />}
        {err && <div className="warn">{err}</div>}
      </div>
      <div className="live-panel">
        <div className={'orb ' + status} style={{ ['--lvl' as any]: String(status === 'user-speaking' || status === 'listening' ? level01 : 0) }}>
          <span>{status === 'speaking' ? '🔊' : status === 'thinking' ? '💭' : status === 'connecting' ? '⏳' : muted ? '🔇' : '🎙️'}</span>
        </div>
        <div className="center muted">{status === 'idle' ? 'Нажмите «Позвонить», чтобы начать' : STATUS_TEXT[status]}</div>
        <div className="row-btns center">
          {!active ? (
            <button className="btn primary big" onClick={start}>📞 {status === 'idle' ? 'Позвонить' : 'Позвонить снова'}</button>
          ) : (
            <>
              <button className="btn" onClick={() => { const m = !muted; setMuted(m); sess.current?.setMuted(m); }}>{muted ? '🎙️ Включить микрофон' : '🔇 Выключить микрофон'}</button>
              <button className="btn" onClick={() => sess.current?.sendText('(Ученик просит подсказку: предложи одну простую фразу на немецком, которую он может сказать сейчас, и коротко переведи её на русский.)')}>💡 Подсказка</button>
            </>
          )}
          {(active || lines.length > 0) && <button className="btn danger" onClick={finish} disabled={evaluating}>🏁 Завершить и оценить</button>}
        </div>
      </div>
    </div>
  );
}
