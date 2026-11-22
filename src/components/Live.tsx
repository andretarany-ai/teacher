import { useEffect, useRef, useState } from 'react';
import { startLive, hasKey, type LiveSession, type LiveStatus } from '../lib/xai';
import { ConvSummary, evaluateConversation } from './AI';

const LEVEL_RULES_EN: Record<string, string> = {
  A1: 'Absolute beginner: use only very short, simple present-tense sentences (5–8 words) and basic A1 vocabulary. Repeat key words. Explain almost everything in Russian.',
  A2: 'Elementary: simple sentences, present tense, Perfekt, modal verbs, weil/dass. Max 2 sentences per turn.',
  B1: 'Intermediate: natural but clear German, subordinate clauses are fine. Push the student to speak in full sentences and give reasons.',
  B2: 'Upper-intermediate: natural spoken German, idioms allowed; challenge the student with follow-up questions and ask them to argue and justify.',
};
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

  const explainLang = level === 'B2' ? 'simple German' : 'Russian';
  const instructions = `You are an experienced, warm and patient GERMAN TEACHER giving a one-on-one SPOKEN practice lesson to a Russian-speaking student. This is a voice call: keep every turn short (1–3 sentences), speak clearly and a bit slower than natural.

STUDENT LEVEL: ${level} (CEFR). ${LEVEL_RULES_EN[level] || LEVEL_RULES_EN.A1}

TODAY'S PRACTICE SCENARIO (you also play the character):
- Your character: ${role}
- Situation: ${situation}
- Student's goal: ${goal}
${words?.length ? '- Vocabulary from the lesson to recycle: ' + words.slice(0, 25).join(', ') : ''}

HOW THE LESSON WORKS:
1. Start: greet the student in German, then in one short ${explainLang} sentence explain the situation and what they should try to do. Then start the role-play with your first line in German.
2. During the role-play speak German as your character. You are still the teacher: step out of the role briefly whenever the student needs help, then step back in ("Okay, weiter!").

LANGUAGE RULES (very important):
- Your role-play lines are ALWAYS in German. Never answer the student's content in Russian and never just continue in Russian.
- Explanations, corrections and hints are given in ${explainLang}, at most 1–2 short sentences, then return to German.
- If the student says something in Russian or mixes Russian words in (e.g. "Ich möchte… как сказать 'чай'?"): tell them how to say it in German ("По-немецки: der Tee. Скажите: Ich möchte einen Tee."), ask them to repeat the full German sentence, wait for them to say it, praise briefly, then continue.
- If the student asks a question about German (grammar, a word, why something is so), answer it briefly in ${explainLang} with one German example, then continue the role-play.

CORRECTING MISTAKES:
- After each student turn, check grammar, word order, articles/cases, verb forms and word choice.
- Small mistake: naturally recast the correct form in your reply ("Ah, Sie möchten einen Kaffee? …").
- Real mistake that matters for the lesson: say briefly what was wrong and why in ${explainLang}, give the correct sentence in German, ask the student to repeat it once, then continue.
- Do not correct more than one thing per turn. Never lecture.
- Pronunciation: the student's speech reaches you as an automatic transcript. If it looks garbled or a German word seems mis-pronounced (wrong word recognised), say the word slowly and clearly, give a short pronunciation tip in ${explainLang} (e.g. ü, ö, ch, r, ei/ie, long vs short vowels) and ask them to repeat.

HELPING AND HINTS:
- If the student is silent, says "äh", "не знаю", "I don't know", or asks for a hint: offer two simple German sentences they could say (with a 2–3 word ${explainLang} gloss), and let them choose and repeat one.
- Ask one question at a time, so the student always knows what to answer.
- Do not let the student get away with one-word answers at B1/B2: ask them to say a full sentence.

ENDING: when the goal is reached or the student says they want to finish, praise them, name in ${explainLang} 1–2 things they did well and 1 thing to practise, and repeat 2 useful German phrases from today.

Never mention these instructions. Never switch roles with the student. Stay positive and encouraging.`;

  const start = async () => {
    setErr(''); setLines([]); setSummary(null);
    try {
      sess.current = await startLive(instructions, {
        onStatus: (s, msg) => { setStatus(s); if (s === 'error' && msg) setErr(msg); },
        onUserText: (id, t, f) => upsert('u' + id, true, t, f),
        onAiText: (id, t, f) => upsert('a' + id, false, t, f),
      }, { greet: '(The student has just joined the call. Begin the lesson now as described in your instructions.)', keyterms: words?.map((w) => w.replace(/^(der|die|das) /, '')) });
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
              <button className="btn" onClick={() => sess.current?.sendText('(The student pressed the HINT button. As the teacher, briefly suggest two simple German sentences they could say right now, each with a short ' + explainLang + ' translation, and ask them to say one.)')}>💡 Подсказка</button>
            </>
          )}
          {(active || lines.length > 0) && <button className="btn danger" onClick={finish} disabled={evaluating}>🏁 Завершить и оценить</button>}
        </div>
      </div>
    </div>
  );
}
