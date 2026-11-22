import { useEffect, useRef, useState } from 'react';
import type { Lesson } from '../data/types';
import { aiConfigured, AiError, chat, chatJson, TUTOR_BASE, type ChatMsg } from '../lib/grok';
import { listen, speak, stopSpeaking, sttSupported, type Listener } from '../lib/speech';
import { addXp, getSettings, saveSettings, updateProgress, useStore } from '../lib/storage';
import { MdBlock, Spinner, UmlautBar } from './ui';
import { cap, inArtifact } from '../lib/platform';
import type { Ex } from '../lib/exercises';
import { shuffle } from '../lib/text';

export function NeedKey({ go }: { go: () => void }) {
  if (inArtifact()) {
    return (
      <div className="card warn-card">
        <h3>🤖 ИИ пока недоступен</h3>
        <p>Разговоры, проверка письма и новые задания работают через встроенного ИИ Claude. Если вы отклонили запрос доступа, откройте меню разрешений артефакта и разрешите его, затем перезагрузите страницу. ИИ доступен, когда вы вошли в свой аккаунт Claude.</p>
        <button className="btn" onClick={() => { cap<any>('permissions').then((p) => p?.manage?.()).catch(() => {}); }}>Открыть разрешения</button>
      </div>
    );
  }
  return (
    <div className="card warn-card">
      <h3>🔑 Нужен ключ Grok</h3>
      <p>Разговоры, проверка письма и генерация заданий работают через ИИ Grok. Добавьте API-ключ в настройках (или в файл <code>.env</code> на сервере).</p>
      <button className="btn primary" onClick={go}>Открыть настройки</button>
    </div>
  );
}

const LEVEL_RULES: Record<string, string> = {
  A1: 'Используй только очень простые короткие предложения (5–8 слов), настоящее время, базовую лексику A1. Говори медленно и дружелюбно.',
  A2: 'Используй простые предложения уровня A2: настоящее время, Perfekt, модальные глаголы, weil/dass. Не более 2 предложений за раз.',
  B1: 'Говори на уровне B1: естественно, но понятно, придаточные предложения допустимы. 1–3 предложения.',
  B2: 'Говори на уровне B2: естественный разговорный немецкий, идиомы допустимы, но поясняй сложное. 1–4 предложения.',
};

interface Turn { role: 'user' | 'assistant'; de: string; ru?: string; correction?: { corrected: string; explanation: string } | null; suggestions?: { de: string; ru: string }[] }

/* ================= Ролевой разговор ================= */
export function Roleplay({ level, title, role, situation, goal, words, onExit }: {
  level: string; title: string; role: string; situation: string; goal: string; words?: string[]; onExit: () => void;
}) {
  const { settings } = useStore();
  const [turns, setTurns] = useState<Turn[]>([]);
  const [input, setInput] = useState('');
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState('');
  const [rec, setRec] = useState<Listener | null>(null);
  const [showRu, setShowRu] = useState<Record<number, boolean>>({});
  const [hint, setHint] = useState(false);
  const [summary, setSummary] = useState<any>(null);
  const [goalDone, setGoalDone] = useState(false);
  const bottom = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  const system = `Ты играешь роль в ролевой игре для изучения немецкого языка.
Роль: ${role}. Ситуация: ${situation}. Цель ученика: ${goal}.
Уровень ученика: ${level}. ${LEVEL_RULES[level] || LEVEL_RULES.A1}
${words?.length ? 'По возможности используй слова из урока: ' + words.slice(0, 20).join(', ') + '.' : ''}
Всегда оставайся в роли, говори ТОЛЬКО по-немецки в поле reply, задавай встречные вопросы, чтобы разговор продолжался.
Если в последней реплике ученика есть ошибка (грамматика, порядок слов, артикль, лексика), заполни correction: исправленный вариант и короткое объяснение по-русски. Если ошибок нет — correction = null. Мелкие ошибки пунктуации и регистра игнорируй.
Отвечай строго JSON-объектом:
{"reply":"реплика по-немецки","translation":"перевод реплики на русский","correction":null или {"corrected":"исправленная фраза ученика","explanation":"почему, по-русски"},"suggestions":[{"de":"возможный ответ ученика","ru":"перевод"},{"de":"...","ru":"..."}],"goal_done":true/false}`;

  const toMsgs = (t: Turn[]): ChatMsg[] => [
    { role: 'system', content: system },
    ...t.map((x) => ({ role: x.role, content: x.role === 'assistant' ? JSON.stringify({ reply: x.de }) : x.de }) as ChatMsg),
  ];

  const ask = async (t: Turn[]) => {
    setBusy(true); setErr('');
    try {
      const msgs = toMsgs(t);
      if (!t.length) msgs.push({ role: 'user', content: '(Начни разговор первой репликой в своей роли. correction = null.)' });
      const r = await chatJson<any>(msgs, { temperature: 0.8, maxTokens: 600 });
      const turn: Turn = { role: 'assistant', de: String(r.reply || ''), ru: r.translation, suggestions: Array.isArray(r.suggestions) ? r.suggestions : [] };
      const updated = [...t];
      if (r.correction && updated.length && updated[updated.length - 1].role === 'user' && r.correction.corrected) {
        const last = updated[updated.length - 1];
        if (r.correction.corrected.trim() !== last.de.trim()) updated[updated.length - 1] = { ...last, correction: r.correction };
      }
      if (r.goal_done) setGoalDone(true);
      setTurns([...updated, turn]);
      setHint(false);
      if (getSettings().autoSpeak) speak(turn.de);
    } catch (e: any) {
      setErr(e instanceof AiError ? e.message : String(e));
    }
    setBusy(false);
  };

  useEffect(() => { if (aiConfigured()) ask([]); return () => stopSpeaking(); }, []); // eslint-disable-line
  useEffect(() => { const el = bottom.current?.parentElement; if (el) el.scrollTo({ top: el.scrollHeight, behavior: 'smooth' }); }, [turns, busy, hint]);

  const send = (text = input) => {
    const v = text.trim();
    if (!v || busy) return;
    const t = [...turns, { role: 'user' as const, de: v }];
    setTurns(t); setInput('');
    ask(t);
  };

  const mic = () => {
    if (rec) { rec.stop(); return; }
    stopSpeaking();
    let last = '';
    const l = listen({
      onResult: (t) => { last = t; setInput(t); },
      onEnd: () => { setRec(null); if (last) { updateProgress((p) => { p.spoken++; }); send(last); } },
      onError: (m) => { setErr(m); setRec(null); },
    });
    setRec(l);
  };

  const finish = async () => {
    const userTurns = turns.filter((t) => t.role === 'user');
    if (userTurns.length < 2) { onExit(); return; }
    setBusy(true);
    try {
      const r = await chatJson<any>([
        { role: 'system', content: TUTOR_BASE },
        { role: 'user', content: `Оцени мою часть диалога на немецком (уровень ${level}, ситуация: ${situation}, цель: ${goal}).
Диалог:
${turns.map((t) => (t.role === 'user' ? 'Я: ' : 'Собеседник: ') + t.de).join('\n')}
Верни JSON: {"score":0-100,"goal_reached":true/false,"praise":"что получилось хорошо (по-русски)","mistakes":[{"wrong":"...","right":"...","why":"..."}],"tips":["совет 1","совет 2"],"useful_phrases":[{"de":"...","ru":"..."}]}` },
      ], { temperature: 0.3, maxTokens: 1200 });
      setSummary(r);
      const xp = 10 + Math.min(20, userTurns.length * 2) + (r.goal_reached ? 10 : 0);
      addXp(xp);
      updateProgress((p) => { p.chats++; });
      r._xp = xp;
    } catch (e: any) { setErr(e.message); }
    setBusy(false);
  };

  if (!aiConfigured()) return <div className="page"><button className="btn ghost" onClick={onExit}>← Назад</button><NeedKey go={onExit} /></div>;

  if (summary) {
    return (
      <div className="page">
        <h2>🏁 Итоги разговора</h2>
        <div className="card center">
          <div className="score-big">{summary.score ?? '—'}<small>/100</small></div>
          <div>{summary.goal_reached ? '🎯 Цель достигнута!' : 'Цель пока не достигнута — попробуйте ещё раз'}</div>
          <div className="xp-gain">+{summary._xp} XP</div>
        </div>
        {summary.praise && <div className="card"><h3>👍 Хорошо получилось</h3><p>{summary.praise}</p></div>}
        {summary.mistakes?.length > 0 && (
          <div className="card"><h3>✏️ Ошибки</h3>
            {summary.mistakes.map((m: any, i: number) => (
              <div key={i} className="mistake"><s>{m.wrong}</s> → <b>{m.right}</b><div className="muted">{m.why}</div></div>
            ))}
          </div>
        )}
        {summary.tips?.length > 0 && <div className="card"><h3>💡 Советы</h3>{summary.tips.map((t: string, i: number) => <p key={i}>• {t}</p>)}</div>}
        {summary.useful_phrases?.length > 0 && (
          <div className="card"><h3>🗣 Полезные фразы</h3>
            {summary.useful_phrases.map((p: any, i: number) => <div key={i} className="phrase-row" onClick={() => speak(p.de)}>🔊 <b>{p.de}</b> — {p.ru}</div>)}
          </div>
        )}
        <button className="btn primary wide" onClick={onExit}>Готово</button>
      </div>
    );
  }

  const lastAi = [...turns].reverse().find((t) => t.role === 'assistant');
  return (
    <div className="page chat-page">
      <div className="chat-head">
        <button className="icon-btn" onClick={onExit}>←</button>
        <div>
          <div className="chat-title">{title}</div>
          <div className="muted small">🎯 {goal} {goalDone && '✅'}</div>
        </div>
        <label className="toggle small"><input type="checkbox" checked={settings.autoSpeak} onChange={(e) => saveSettings({ autoSpeak: e.target.checked })} />🔊</label>
      </div>
      <div className="chat-scroll">
        <div className="situation">🎭 {situation}</div>
        {turns.map((t, i) => (
          <div key={i} className={'turn ' + t.role}>
            <div className={'bubble ' + (t.role === 'assistant' ? 'them' : 'me')}>
              <div>{t.de}</div>
              {t.role === 'assistant' && (
                <div className="bubble-tools">
                  <button onClick={() => speak(t.de)}>🔊</button>
                  <button onClick={() => speak(t.de, { rate: 0.6 })}>🐢</button>
                  <button onClick={() => setShowRu({ ...showRu, [i]: !showRu[i] })}>RU</button>
                </div>
              )}
              {showRu[i] && t.ru && <div className="tr">{t.ru}</div>}
            </div>
            {t.correction && (
              <div className="correction">
                ✏️ Лучше: <b>{t.correction.corrected}</b> <button className="audio-btn" onClick={() => speak(t.correction!.corrected)}>🔊</button>
                <div className="muted">{t.correction.explanation}</div>
              </div>
            )}
          </div>
        ))}
        {busy && <Spinner text="Собеседник печатает…" />}
        {hint && lastAi?.suggestions?.length ? (
          <div className="hints">
            <div className="muted">Можно ответить так:</div>
            {lastAi.suggestions.map((s, i) => (
              <button key={i} className="option" onClick={() => { setInput(s.de); inputRef.current?.focus(); }}>{s.de}<div className="tr">{s.ru}</div></button>
            ))}
          </div>
        ) : null}
        {err && <div className="warn">{err} <button className="btn small" onClick={() => ask(turns)}>Повторить</button></div>}
        <div ref={bottom} />
      </div>
      <div className="chat-input">
        <div className="chat-tools">
          <button className="btn small" onClick={() => setHint(!hint)} disabled={!lastAi}>💡 Подсказка</button>
          <button className="btn small" onClick={finish} disabled={busy}>🏁 Завершить и оценить</button>
        </div>
        <div className="input-row">
          <textarea ref={inputRef} rows={1} value={input} onChange={(e) => setInput(e.target.value)} placeholder="Ответьте по-немецки или нажмите 🎤"
            onKeyDown={(e) => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); send(); } }} />
          {sttSupported() && <button className={'mic sm' + (rec ? ' rec' : '')} onClick={mic}>{rec ? '⏹' : '🎤'}</button>}
          <button className="btn primary" onClick={() => send()} disabled={busy || !input.trim()}>➤</button>
        </div>
        <UmlautBar onChar={(c) => { setInput(input + c); inputRef.current?.focus(); }} />
      </div>
    </div>
  );
}

/* ================= Генерация заданий ИИ ================= */
export async function generateExercises(lesson: Lesson, focus: string): Promise<Ex[]> {
  const words = lesson.words.map((w) => w.full + ' — ' + w.ru).join('; ');
  const r = await chatJson<any>([
    { role: 'system', content: TUTOR_BASE },
    { role: 'user', content: `Составь 12 НОВЫХ разнообразных упражнений по немецкому для уровня ${lesson.level}.
Тема урока: ${lesson.title} (${lesson.de}). Грамматика: ${lesson.grammar.title}. ${focus ? 'Особый фокус: ' + focus + '.' : ''}
Слова урока: ${words}.
Используй смесь типов:
- "mc": вопрос с 4 вариантами {"type":"mc","question":"вопрос по-русски или немецкая фраза","options":["..","..","..",".."],"answer":"точно один из options"}
- "gap": {"type":"gap","sentence":"немецкое предложение с ___ на месте пропуска (ровно один ___)","answer":"слово","options":["3-4 варианта включая answer"],"ru":"перевод"}
- "build": {"type":"build","de":"немецкое предложение 4-9 слов","ru":"перевод"}
- "speak": {"type":"speak","de":"фраза для произношения","ru":"перевод"}
Минимум 4 gap, 3 build, 3 mc, 2 speak. Всё грамматически безупречно, лексика уровня ${lesson.level}.
Верни JSON: {"exercises":[...]}` },
  ], { temperature: 0.9, maxTokens: 2500 });
  const list: any[] = r.exercises || [];
  const out: Ex[] = [];
  for (const e of list) {
    try {
      if (e.type === 'mc' && Array.isArray(e.options) && e.options.includes(e.answer)) {
        out.push({ t: 'mc', title: 'Выберите правильный вариант', prompt: e.question, options: shuffle(e.options), answer: e.answer });
      } else if (e.type === 'gap' && typeof e.sentence === 'string' && e.sentence.includes('___')) {
        const [before, after] = e.sentence.split('___');
        const opts: string[] | undefined = Array.isArray(e.options) && e.options.length > 1 ? e.options : undefined;
        out.push({ t: 'gap', gap: { before, after: after ?? '', answer: e.answer, ru: e.ru || '', opts, full: before + e.answer + (after ?? '') } });
      } else if (e.type === 'build' && e.de) {
        const toks = String(e.de).split(/\s+/).map((t) => t.replace(/^[„"«(]+|[.,!?;:"“»)]+$/g, ''));
        out.push({ t: 'build', ru: e.ru, answer: e.de, tokens: shuffle(toks) });
      } else if (e.type === 'speak' && e.de) {
        out.push({ t: 'speak', de: e.de, ru: e.ru || '' });
      }
    } catch {}
  }
  if (out.length < 3) throw new AiError('ИИ вернул слишком мало корректных заданий. Попробуйте ещё раз.');
  return shuffle(out);
}

/* ================= Письмо с проверкой ================= */
export function Writing({ lesson, onExit }: { lesson: Lesson; onExit: () => void }) {
  const [task, setTask] = useState<{ task: string; hints: string[] } | null>(null);
  const [text, setText] = useState('');
  const [busy, setBusy] = useState(false);
  const [res, setRes] = useState<any>(null);
  const [err, setErr] = useState('');
  const ref = useRef<HTMLTextAreaElement>(null);

  const newTask = async () => {
    setBusy(true); setErr(''); setRes(null); setText('');
    try {
      const r = await chatJson<any>([
        { role: 'system', content: TUTOR_BASE },
        { role: 'user', content: `Придумай одно короткое письменное задание по немецкому для уровня ${lesson.level} по теме «${lesson.title}» (грамматика: ${lesson.grammar.title}). Задание на русском, ${lesson.level === 'A1' ? '3–5 простых предложений' : lesson.level === 'A2' ? '5–7 предложений' : '80–150 слов'}. Например: письмо другу, ответ на объявление, описание, мнение. Верни JSON {"task":"текст задания","hints":["полезная немецкая фраза 1","фраза 2","фраза 3"]}` },
      ], { temperature: 1 });
      setTask(r);
    } catch (e: any) { setErr(e.message); }
    setBusy(false);
  };
  useEffect(() => { if (aiConfigured()) newTask(); }, []); // eslint-disable-line

  const check = async () => {
    setBusy(true); setErr('');
    try {
      const r = await chatJson<any>([
        { role: 'system', content: TUTOR_BASE + ' Ты внимательный экзаменатор Goethe-Institut.' },
        { role: 'user', content: `Уровень: ${lesson.level}. Задание: ${task?.task}
Текст ученика:
"""${text}"""
Проверь текст. Верни JSON: {"score":0-100,"level_estimate":"A1/A2/B1/B2","corrected":"полностью исправленный текст","mistakes":[{"wrong":"фрагмент","right":"исправление","why":"объяснение по-русски"}],"praise":"что хорошо","improved":"улучшенная, более естественная версия текста того же уровня","tip":"главный совет"}` },
      ], { temperature: 0.2, maxTokens: 2000 });
      setRes(r);
      addXp(15 + Math.round((r.score || 0) / 10));
    } catch (e: any) { setErr(e.message); }
    setBusy(false);
  };

  if (!aiConfigured()) return <div className="page"><button className="btn ghost" onClick={onExit}>← Назад</button><NeedKey go={onExit} /></div>;
  return (
    <div className="page">
      <button className="btn ghost" onClick={onExit}>← Назад</button>
      <h2>✍️ Письмо: {lesson.title}</h2>
      {busy && !task && <Spinner text="Придумываю задание…" />}
      {task && (
        <div className="card">
          <p><b>Задание:</b> {task.task}</p>
          {task.hints?.length > 0 && <div className="hint-chips">{task.hints.map((h, i) => <span key={i} className="chip static" onClick={() => speak(h)}>{h}</span>)}</div>}
        </div>
      )}
      {task && !res && (
        <>
          <textarea ref={ref} className="writing" value={text} onChange={(e) => setText(e.target.value)} placeholder="Schreiben Sie hier…" rows={8} spellCheck={false} />
          <UmlautBar onChar={(c) => { setText(text + c); ref.current?.focus(); }} />
          <div className="muted small">Слов: {text.trim() ? text.trim().split(/\s+/).length : 0}</div>
          <div className="row-btns">
            <button className="btn" onClick={newTask} disabled={busy}>🔄 Другое задание</button>
            <button className="btn primary" onClick={check} disabled={busy || text.trim().split(/\s+/).length < 3}>{busy ? 'Проверяю…' : '✅ Проверить'}</button>
          </div>
        </>
      )}
      {res && (
        <>
          <div className="card center"><div className="score-big">{res.score}<small>/100</small></div><div className="muted">Оценка уровня: {res.level_estimate}</div></div>
          {res.praise && <div className="card"><h3>👍</h3><p>{res.praise}</p></div>}
          {res.mistakes?.length > 0 && <div className="card"><h3>✏️ Ошибки</h3>{res.mistakes.map((m: any, i: number) => (
            <div key={i} className="mistake"><s>{m.wrong}</s> → <b>{m.right}</b><div className="muted">{m.why}</div></div>))}</div>}
          <div className="card"><h3>✅ Исправленный текст</h3><p className="de-text">{res.corrected}</p><button className="btn small" onClick={() => speak(res.corrected)}>🔊 Прослушать</button></div>
          {res.improved && <div className="card"><h3>🌟 Как сказал бы носитель</h3><p className="de-text">{res.improved}</p></div>}
          {res.tip && <div className="card"><h3>💡 Совет</h3><p>{res.tip}</p></div>}
          <div className="row-btns"><button className="btn" onClick={() => setRes(null)}>Переписать</button><button className="btn primary" onClick={newTask}>Новое задание</button></div>
        </>
      )}
      {err && <div className="warn">{err}</div>}
    </div>
  );
}

/* ================= Чтение: мини-истории ================= */
export function Story({ level, topic, words, onExit, onQuiz }: { level: string; topic: string; words: string[]; onExit: () => void; onQuiz: (ex: Ex[]) => void }) {
  const [story, setStory] = useState<any>(null);
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState('');
  const [open, setOpen] = useState<Record<number, boolean>>({});
  const [playing, setPlaying] = useState(-1);
  const load = async () => {
    setBusy(true); setErr(''); setStory(null); setOpen({});
    try {
      const r = await chatJson<any>([
        { role: 'system', content: TUTOR_BASE },
        { role: 'user', content: `Напиши увлекательную короткую историю на немецком для уровня ${level} на тему «${topic}». ${level === 'A1' ? '8–10 очень простых предложений.' : level === 'A2' ? '10–12 предложений.' : '12–16 предложений, живой сюжет, диалоги.'} Используй слова: ${words.slice(0, 15).join(', ')}. Сюжет с неожиданным поворотом или юмором.
Верни JSON: {"title":"заголовок по-немецки","title_ru":"...","sentences":[{"de":"...","ru":"..."}],"glossary":[{"de":"слово","ru":"перевод"}],"questions":[{"q":"вопрос на понимание по-русски","options":["4 варианта по-русски"],"answer":"правильный вариант"}]} — 4 вопроса.` },
      ], { temperature: 1, maxTokens: 2500 });
      setStory(r);
    } catch (e: any) { setErr(e.message); }
    setBusy(false);
  };
  useEffect(() => { if (aiConfigured()) load(); return () => stopSpeaking(); }, []); // eslint-disable-line

  const playAll = (from = 0) => {
    if (!story || from >= story.sentences.length) { setPlaying(-1); return; }
    setPlaying(from);
    speak(story.sentences[from].de, { rate: 0.9, onEnd: () => playAll(from + 1) });
  };

  if (!aiConfigured()) return <div className="page"><button className="btn ghost" onClick={onExit}>← Назад</button><NeedKey go={onExit} /></div>;
  return (
    <div className="page">
      <button className="btn ghost" onClick={onExit}>← Назад</button>
      {busy && <Spinner text="Пишу историю…" />}
      {err && <div className="warn">{err} <button className="btn small" onClick={load}>Повторить</button></div>}
      {story && (
        <>
          <h2>📖 {story.title}</h2>
          <div className="muted">{story.title_ru} · нажмите на предложение, чтобы увидеть перевод</div>
          <div className="row-btns">
            <button className="btn" onClick={() => (playing >= 0 ? (stopSpeaking(), setPlaying(-1)) : playAll(0))}>{playing >= 0 ? '⏹ Стоп' : '▶️ Слушать всю историю'}</button>
          </div>
          <div className="card story">
            {story.sentences.map((s: any, i: number) => (
              <span key={i} className={'story-s' + (playing === i ? ' playing' : '')} onClick={() => { setOpen({ ...open, [i]: !open[i] }); speak(s.de); }}>
                {s.de}{open[i] && <span className="tr inline"> ({s.ru})</span>}{' '}
              </span>
            ))}
          </div>
          {story.glossary?.length > 0 && <div className="card"><h3>📝 Словарик</h3><div className="gloss">{story.glossary.map((g: any, i: number) => <div key={i} onClick={() => speak(g.de)}><b>{g.de}</b> — {g.ru}</div>)}</div></div>}
          <div className="row-btns">
            <button className="btn" onClick={load}>🔄 Другая история</button>
            {story.questions?.length > 0 && <button className="btn primary" onClick={() => onQuiz(story.questions.filter((q: any) => q.options?.includes(q.answer)).map((q: any) => ({ t: 'mc', title: 'Вопрос по истории', prompt: q.q, options: shuffle(q.options), answer: q.answer })))}>❓ Проверить понимание</button>}
          </div>
        </>
      )}
    </div>
  );
}

/* ================= Спросить учителя ================= */
export function AskTutor({ onExit, context }: { onExit: () => void; context?: string }) {
  const [msgs, setMsgs] = useState<ChatMsg[]>([]);
  const [input, setInput] = useState('');
  const [busy, setBusy] = useState(false);
  const bottom = useRef<HTMLDivElement>(null);
  useEffect(() => { const el = bottom.current?.parentElement; if (el) el.scrollTo({ top: el.scrollHeight, behavior: 'smooth' }); }, [msgs, busy]);
  const send = async (q = input) => {
    if (!q.trim() || busy) return;
    const m: ChatMsg[] = [...msgs, { role: 'user', content: q }];
    setMsgs(m); setInput(''); setBusy(true);
    try {
      const out = await chat([{ role: 'system', content: TUTOR_BASE + ' Используй короткие разделы, списки и примеры с переводом. ' + (context ? 'Контекст: ученик сейчас изучает ' + context : '') }, ...m], { temperature: 0.5, maxTokens: 1200 });
      setMsgs([...m, { role: 'assistant', content: out }]);
    } catch (e: any) { setMsgs([...m, { role: 'assistant', content: '⚠️ ' + e.message }]); }
    setBusy(false);
  };
  const samples = ['Когда использовать der, die, das?', 'Чем отличается Perfekt от Präteritum?', 'Объясни Akkusativ и Dativ простыми словами', 'Как запомнить порядок слов в придаточном?', 'Какие предлоги требуют Dativ?'];
  if (!aiConfigured()) return <div className="page"><button className="btn ghost" onClick={onExit}>← Назад</button><NeedKey go={onExit} /></div>;
  return (
    <div className="page chat-page">
      <div className="chat-head"><button className="icon-btn" onClick={onExit}>←</button><div className="chat-title">👩‍🏫 Спросить учителя</div></div>
      <div className="chat-scroll">
        {!msgs.length && <div className="hints"><div className="muted">Задайте любой вопрос о немецком языке. Например:</div>{samples.map((s) => <button key={s} className="option" onClick={() => send(s)}>{s}</button>)}</div>}
        {msgs.map((m, i) => (
          <div key={i} className={'bubble ' + (m.role === 'user' ? 'me' : 'them wide')}>{m.role === 'assistant' ? <MdBlock text={m.content} /> : m.content}</div>
        ))}
        {busy && <Spinner text="Учитель думает…" />}
        <div ref={bottom} />
      </div>
      <div className="chat-input">
        <div className="input-row">
          <textarea rows={1} value={input} onChange={(e) => setInput(e.target.value)} placeholder="Ваш вопрос…" onKeyDown={(e) => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); send(); } }} />
          <button className="btn primary" onClick={() => send()} disabled={busy || !input.trim()}>➤</button>
        </div>
      </div>
    </div>
  );
}
