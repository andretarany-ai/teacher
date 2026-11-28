import { useEffect, useMemo, useRef, useState } from 'react';
import type { Ex } from '../lib/exercises';
import type { DialogLine } from '../data/types';
import { checkAnswer, norm, pick, shuffle, similarity, wordDiff } from '../lib/text';
import { listen, speak, sttSupported, type Listener } from '../lib/speech';
import { AudioBtn, genderColor, Md, MdBlock, UmlautBar, WordView } from './ui';
import { aiConfigured, chat, TUTOR_BASE } from '../lib/grok';
import { glossPhrase } from '../lib/gloss';
import { updateProgress } from '../lib/storage';

export interface ExResult {
  ok: boolean;
  auto?: boolean; // перейти дальше без панели проверки
  skipped?: boolean;
  correct?: string; // правильный ответ (для показа)
  user?: string;
  question?: string;
  typo?: boolean;
  key?: string;
}
type P<T extends Ex['t']> = { ex: Extract<Ex, { t: T }>; onResult: (r: ExResult) => void; locked: boolean };

/* ---------- Грамматика ---------- */
export function GrammarCard({ ex, onResult }: P<'grammar'>) {
  const l = ex.lesson;
  return (
    <div className="ex grammar-card">
      <div className="kicker">{l.level} · Урок {l.index + 1}</div>
      <h2>{l.emoji} {l.title}</h2>
      <div className="de-title">{l.de}</div>
      <p className="goal">🎯 {l.goal}</p>
      <div className="g-box">
        <h3>📘 {l.grammar.title}</h3>
        {l.grammar.points.map((p, i) => <p key={i}><Md text={p} /></p>)}
        {l.grammar.table && (
          <div className="table-wrap">
            <table>
              <tbody>
                {l.grammar.table.map((row, i) => (
                  <tr key={i}>{row.map((c, j) => (i === 0 ? <th key={j}>{c}</th> : <td key={j}>{c}</td>))}</tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
      <p className="muted">В уроке: {l.words.length} слов · {l.phrases.length} фраз · диалог «{l.dialogTitle}»</p>
      <button className="btn primary wide" onClick={() => onResult({ ok: true, auto: true })}>Поехали! →</button>
    </div>
  );
}

/* ---------- Карточка нового слова ---------- */
export function Flash({ ex, onResult }: P<'flash'>) {
  const w = ex.word;
  const [said, setSaid] = useState<null | boolean>(null);
  const [rec, setRec] = useState<Listener | null>(null);
  const tryVoice = () => {
    if (rec) { rec.stop(); return; }
    const l = listen({
      onResult: (t, alts, final) => {
        if (!final) return;
        const ok = [t, ...alts].some((x) => similarity(x, w.de) > 0.7 || similarity(x, w.full) > 0.7);
        setSaid(ok);
      },
      onEnd: () => setRec(null),
      onError: () => setRec(null),
    });
    setRec(l);
  };
  return (
    <div className="ex flash">
      <div className="kicker">Новое слово</div>
      <div className="flash-card" style={{ borderColor: w.g ? genderColor(w.g) : undefined }}>
        <div className="flash-de"><WordView w={w} size={1} /></div>
        {w.pl && <div className="muted">мн. ч.: {w.pl === '-' ? 'нет / так же' : w.pl}</div>}
        <div className="flash-ru">{w.ru}</div>
        <AudioBtn text={w.full} auto big />
        {w.g && <div className="gender-hint" style={{ color: genderColor(w.g) }}>{w.g === 'der' ? '♂ мужской род' : w.g === 'die' ? '♀ женский род' : '⚪ средний род'}</div>}
      </div>
      {sttSupported() && (
        <button className={'btn mic-small' + (rec ? ' rec' : '')} onClick={tryVoice}>
          {rec ? '⏺ Слушаю…' : '🎤 Произнести'} {said === true && '✅'} {said === false && '🔁 ещё раз'}
        </button>
      )}
      <button className="btn primary wide" onClick={() => onResult({ ok: true, auto: true })}>Запомнил(а) →</button>
    </div>
  );
}

/* ---------- Выбор ответа ---------- */
export function MultipleChoice({ ex, onResult, locked }: P<'mc'>) {
  const [sel, setSel] = useState<string | null>(null);
  useEffect(() => setSel(null), [ex]);
  const choose = (o: string) => {
    if (locked || sel) return;
    setSel(o);
    if (ex.speakOptions) speak(o);
    onResult({ ok: o === ex.answer, correct: ex.answer, user: o, question: ex.prompt || ex.audio || '', key: ex.key });
  };
  return (
    <div className="ex">
      <div className="kicker">{ex.title}</div>
      <div className="prompt">
        {ex.audio && !ex.prompt ? <AudioBtn text={ex.audio} auto big /> : null}
        {ex.prompt && <span className="prompt-text">{ex.prompt}</span>}
        {ex.audio && ex.prompt ? <AudioBtn text={ex.audio} auto /> : null}
      </div>
      <div className="options">
        {ex.options.map((o, i) => (
          <button key={o} className={'option' + (sel ? (o === ex.answer ? ' right' : o === sel ? ' wrong' : ' dim') : '')} onClick={() => choose(o)}>
            <span className="opt-n">{i + 1}</span> {o}
          </button>
        ))}
      </div>
    </div>
  );
}

/* ---------- Артикль ---------- */
export function ArticleEx({ ex, onResult, locked }: P<'article'>) {
  const [sel, setSel] = useState<string | null>(null);
  useEffect(() => setSel(null), [ex]);
  const w = ex.word;
  const choose = (g: string) => {
    if (locked || sel) return;
    setSel(g);
    speak(w.full);
    onResult({ ok: g === w.g, correct: w.full, user: g + ' ' + w.de, question: 'Артикль: ' + w.de });
  };
  return (
    <div className="ex">
      <div className="kicker">Какой артикль?</div>
      <div className="prompt"><span className="prompt-text big">{w.de}</span></div>
      <div className="muted center">{w.ru}</div>
      <div className="articles">
        {(['der', 'die', 'das'] as const).map((g) => (
          <button key={g} className={'article-btn ' + g + (sel ? (g === w.g ? ' right' : g === sel ? ' wrong' : ' dim') : '')} onClick={() => choose(g)}>{g}</button>
        ))}
      </div>
      <p className="tip">💡 Подсказка: -ung, -heit, -keit, -schaft, -ion → <b style={{ color: 'var(--die)' }}>die</b>; -chen, -lein → <b style={{ color: 'var(--das)' }}>das</b>; дни, месяцы, времена года → <b style={{ color: 'var(--der)' }}>der</b></p>
    </div>
  );
}

/* ---------- Пары ---------- */
export function Match({ ex, onResult }: P<'match'>) {
  const left = useMemo(() => shuffle(ex.pairs.map((p) => p[0])), [ex]);
  const right = useMemo(() => shuffle(ex.pairs.map((p) => p[1])), [ex]);
  const [selL, setSelL] = useState<string | null>(null);
  const [selR, setSelR] = useState<string | null>(null);
  const [done, setDone] = useState<Set<string>>(new Set());
  const [bad, setBad] = useState<string[]>([]);
  const errors = useRef(0);
  useEffect(() => {
    if (selL && selR) {
      const ok = ex.pairs.some((p) => p[0] === selL && p[1] === selR);
      if (ok) {
        const n = new Set(done); n.add(selL); n.add(selR); setDone(n);
        if (n.size === ex.pairs.length * 2) setTimeout(() => onResult({ ok: errors.current < 2, auto: true }), 400);
      } else {
        errors.current++;
        setBad([selL, selR]);
        setTimeout(() => setBad([]), 500);
      }
      setSelL(null); setSelR(null);
    }
  }, [selL, selR]); // eslint-disable-line
  const cls = (v: string, sel: string | null) => 'match-btn' + (done.has(v) ? ' done' : '') + (sel === v ? ' sel' : '') + (bad.includes(v) ? ' bad' : '');
  return (
    <div className="ex">
      <div className="kicker">Соедините пары</div>
      <div className="match-grid">
        <div>{left.map((v) => <button key={v} className={cls(v, selL)} disabled={done.has(v)} onClick={() => { setSelL(v); speak(v); }}>{v}</button>)}</div>
        <div>{right.map((v) => <button key={v} className={cls(v, selR)} disabled={done.has(v)} onClick={() => setSelR(v)}>{v}</button>)}</div>
      </div>
    </div>
  );
}

/* ---------- Собрать предложение ---------- */
export function Build({ ex, onResult, locked }: P<'build'>) {
  const tokens = useMemo(() => ex.tokens.map((t, i) => ({ t, i })), [ex]);
  const [chosen, setChosen] = useState<number[]>([]);
  useEffect(() => setChosen([]), [ex]);
  const check = () => {
    const user = chosen.map((i) => tokens[i].t).join(' ');
    const ok = norm(user) === norm(ex.answer);
    onResult({ ok, correct: ex.answer, user, question: ex.ru });
  };
  return (
    <div className="ex">
      <div className="kicker">Соберите предложение по-немецки</div>
      <div className="prompt"><span className="prompt-text">{ex.ru}</span></div>
      <div className="build-line">
        {chosen.map((i) => (
          <button key={i} className="chip in" disabled={locked} onClick={() => setChosen(chosen.filter((x) => x !== i))}>{tokens[i].t}</button>
        ))}
        {!chosen.length && <span className="muted">Нажимайте на слова ниже…</span>}
      </div>
      <div className="bank">
        {tokens.map(({ t, i }) => (
          <button key={i} className={'chip' + (chosen.includes(i) ? ' used' : '')} disabled={locked || chosen.includes(i)} onClick={() => { setChosen([...chosen, i]); speak(t, { rate: 1.1 }); }}>{t}</button>
        ))}
      </div>
      <button className="btn primary wide" disabled={!chosen.length || locked} onClick={check}>Проверить</button>
    </div>
  );
}

/* ---------- Ввод с клавиатуры ---------- */
export function TypeEx({ ex, onResult, locked }: P<'type'>) {
  const [v, setV] = useState('');
  const ref = useRef<HTMLInputElement>(null);
  useEffect(() => { setV(''); ref.current?.focus(); }, [ex]);
  const check = () => {
    if (!v.trim() || locked) return;
    const r = checkAnswer(v, ex.answer);
    onResult({ ok: r !== 'wrong', typo: r === 'typo', correct: ex.answer[0], user: v, question: ex.prompt || ex.ru, key: ex.key });
  };
  return (
    <div className="ex">
      <div className="kicker">{ex.title}</div>
      <div className="prompt">
        {ex.audio && <AudioBtn text={ex.audio} auto big />}
        {ex.prompt && <span className="prompt-text">{ex.prompt}</span>}
      </div>
      {ex.hint && <div className="muted center">{ex.hint}</div>}
      <input ref={ref} className="text-input" value={v} disabled={locked} onChange={(e) => setV(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && check()} placeholder="Пишите по-немецки…" autoCapitalize="off" autoComplete="off" spellCheck={false} />
      <UmlautBar onChar={(c) => { setV(v + c); ref.current?.focus(); }} />
      <button className="btn primary wide" disabled={!v.trim() || locked} onClick={check}>Проверить</button>
    </div>
  );
}

/* ---------- Пропуск ---------- */
export function GapEx({ ex, onResult, locked }: P<'gap'>) {
  const g = ex.gap;
  const opts = useMemo(() => (g.opts ? shuffle(g.opts.includes(g.answer) ? g.opts : [g.answer, ...g.opts]) : null), [ex]);
  const [v, setV] = useState('');
  const ref = useRef<HTMLInputElement>(null);
  useEffect(() => setV(''), [ex]);
  const submit = (val: string) => {
    if (locked || !val.trim()) return;
    const r = checkAnswer(val, g.answer.split('/'));
    if (r !== 'wrong') speak(g.full);
    onResult({ ok: r !== 'wrong', typo: r === 'typo', correct: g.full, user: g.before + val + g.after, question: g.ru });
  };
  return (
    <div className="ex">
      <div className="kicker">Заполните пропуск</div>
      <div className="gap-sentence">
        {g.before}<span className={'gap-slot' + (v ? ' filled' : '')}>{v || '____'}</span>{g.after}
      </div>
      <div className="muted center">{g.ru}</div>
      {(g.before + g.after).trim().split(/\s+/).length > 1 && (
        <details className="rule-hint">
          <summary>📖 Слова в предложении (без ответа)</summary>
          <GlossView de={(g.before + ' ' + g.after).replace(/\s+/g, ' ').trim()} compact />
        </details>
      )}
      {ex.rule && (
        <details className="rule-hint">
          <summary>💡 Подсказка: правило «{ex.rule.title}»</summary>
          {ex.rule.points.map((pt, i) => <p key={i}><Md text={pt} /></p>)}
          {ex.rule.table && <div className="table-wrap"><table><tbody>{ex.rule.table.map((row, i) => <tr key={i}>{row.map((c, j) => (i === 0 ? <th key={j}>{c}</th> : <td key={j}>{c}</td>))}</tr>)}</tbody></table></div>}
        </details>
      )}
      {opts ? (
        <div className="bank">
          {opts.map((o) => (
            <button key={o} className={'chip' + (v === o ? ' sel' : '')} disabled={locked} onClick={() => { setV(o); }}>{o}</button>
          ))}
        </div>
      ) : (
        <>
          <input ref={ref} className="text-input" value={v} disabled={locked} onChange={(e) => setV(e.target.value)} onKeyDown={(e) => e.key === 'Enter' && submit(v)} placeholder="Впишите слово" autoCapitalize="off" autoComplete="off" spellCheck={false} />
          <UmlautBar onChar={(c) => { setV(v + c); ref.current?.focus(); }} />
        </>
      )}
      <button className="btn primary wide" disabled={!v || locked} onClick={() => submit(v)}>Проверить</button>
    </div>
  );
}

/* ---------- Произношение ---------- */
export function SpeakEx({ ex, onResult, locked }: P<'speak'>) {
  const [heard, setHeard] = useState('');
  const [rec, setRec] = useState<Listener | null>(null);
  const [stage, setStage] = useState<'' | 'recording' | 'processing'>('');
  const [err, setErr] = useState('');
  const [tries, setTries] = useState(0);
  const [score, setScore] = useState<number | null>(null);
  const [myAudio, setMyAudio] = useState<string | null>(null);
  const [tips, setTips] = useState<string | null>(null);
  const [tipsBusy, setTipsBusy] = useState(false);
  const best = useRef<{ text: string; score: number }>({ text: '', score: 0 });
  useEffect(() => { setHeard(''); setTries(0); setErr(''); setScore(null); setMyAudio(null); setTips(null); best.current = { text: '', score: 0 }; }, [ex]);
  const supported = sttSupported();

  const start = () => {
    if (rec) { rec.stop(); return; }
    setErr(''); setHeard(''); setTips(null); setScore(null);
    const l = listen({
      onStage: (st) => setStage(st),
      onAudio: (b) => setMyAudio((old) => { if (old) URL.revokeObjectURL(old); return URL.createObjectURL(b); }),
      onResult: (t, alts, final) => {
        setHeard(t);
        if (final) {
          let bestC = { text: t, score: 0 };
          for (const c of [t, ...alts]) { const sc = similarity(c, ex.de); if (sc > bestC.score) bestC = { text: c, score: sc }; }
          best.current = bestC;
          setHeard(bestC.text);
        }
      },
      onEnd: () => {
        setRec(null); setStage('');
        const b = best.current;
        if (!b.text) return;
        setTries((n) => n + 1);
        const diff = wordDiff(ex.de, b.text);
        const ratio = diff.filter((d) => d.ok).length / diff.length;
        const pct = Math.round(Math.max(b.score, ratio) * 100);
        setScore(pct);
        if (pct >= 80) {
          updateProgress((p) => { p.spoken++; });
          setTimeout(() => onResult({ ok: true, correct: ex.de, user: b.text }), 900);
        }
      },
      onError: (m) => { setErr(m); setRec(null); setStage(''); },
    });
    setRec(l);
  };
  const analyze = async () => {
    setTipsBusy(true);
    try {
      const out = await chat([
        { role: 'system', content: TUTOR_BASE + ' Ты фонетист, помогаешь с немецким произношением. Отвечай коротко, списком, 3–5 пунктов.' },
        { role: 'user', content: `Мне нужно было сказать: «${ex.de}». Система распознавания речи услышала: «${heard}». Совпадение ${score}%.
Определи, какие слова/звуки я, скорее всего, произнёс неправильно (по расхождениям в распознанном тексте), и дай конкретные советы: как правильно артикулировать эти звуки (ü, ö, ä, ch, r, z, ei/ie, долгие/краткие гласные, ударение). Покажи проблемные слова с подсказкой произношения русскими буквами. Если всё совпало — похвали и дай один совет для более естественного звучания (интонация, связность).` },
      ], { temperature: 0.3, maxTokens: 500 });
      setTips(out);
    } catch (e: any) { setTips('⚠️ ' + e.message); }
    setTipsBusy(false);
  };
  const diff = heard ? wordDiff(ex.de, heard) : null;
  return (
    <div className="ex">
      <div className="kicker">Скажите вслух 🎙️</div>
      <div className="prompt column">
        <div className="say-text">
          {diff && score !== null ? diff.map((d, i) => <span key={i} className={d.ok ? 'w-ok' : 'w-bad'}>{d.w} </span>) : ex.de}
        </div>
        <div className="muted">{ex.ru}</div>
        <AudioBtn text={ex.de} auto />
      </div>
      {supported ? (
        <>
          <button className={'mic' + (stage === 'recording' ? ' rec' : '')} disabled={locked || stage === 'processing'} onClick={start}>
            {stage === 'processing' ? '⏳' : rec ? '⏹' : '🎤'}
          </button>
          <div className="center muted">
            {stage === 'processing' ? 'Grok распознаёт речь…' : rec ? 'Говорите… запись остановится сама после паузы' : 'Нажмите на микрофон и произнесите фразу'}
          </div>
          {score !== null && !rec && (
            <div className={'pron-score ' + (score >= 80 ? 'good' : score >= 50 ? 'mid' : 'low')}>
              <b>{score}%</b> {score >= 80 ? 'Отлично звучит!' : score >= 50 ? 'Почти! Обратите внимание на красные слова.' : 'Попробуйте ещё раз — сначала послушайте эталон.'}
            </div>
          )}
          {heard && !rec && <div className="heard">Grok услышал: «{heard}»</div>}
          {!rec && (myAudio || heard) && (
            <div className="row-btns center">
              {myAudio && <button className="btn small" onClick={() => new Audio(myAudio).play()}>▶ Моя запись</button>}
              <button className="btn small" onClick={() => speak(ex.de)}>🔊 Как надо</button>
              {heard && aiConfigured() && !tips && <button className="btn small" disabled={tipsBusy} onClick={analyze}>{tipsBusy ? 'Анализирую…' : '🤖 Разбор произношения'}</button>}
            </div>
          )}
          {tips && <div className="card"><MdBlock text={tips} /></div>}
        </>
      ) : (
        <div className="warn center">Распознавание речи недоступно. Добавьте ключ Grok в Профиле — тогда проверка произношения работает в любом браузере, включая iPhone. Пока можно прочитать фразу вслух и проверить себя.</div>
      )}
      {err && <div className="warn center">{err}</div>}
      <div className="row-btns">
        {(!supported || tries >= 2) && !locked && score !== null && score < 80 && (
          <button className="btn" onClick={() => onResult({ ok: true, auto: false, correct: ex.de, user: heard || '(самопроверка)' })}>Засчитать и дальше</button>
        )}
        {!supported && !locked && <button className="btn" onClick={() => onResult({ ok: true, auto: false, correct: ex.de, user: '(самопроверка)' })}>Я произнёс(ла) ✓</button>}
        {!locked && <button className="btn ghost" onClick={() => onResult({ ok: true, auto: true, skipped: true })}>Не могу говорить сейчас</button>}
      </div>
    </div>
  );
}

/* ---------- Интерактивный диалог ---------- */
export function DialogEx({ ex, onResult }: P<'dialog'>) {
  const [shown, setShown] = useState<DialogLine[]>([]);
  const [pos, setPos] = useState(0);
  const [choices, setChoices] = useState<string[] | null>(null);
  const [wrong, setWrong] = useState<string | null>(null);
  const [showRu, setShowRu] = useState(false);
  const [rec, setRec] = useState<Listener | null>(null);
  const errors = useRef(0);
  const bottom = useRef<HTMLDivElement>(null);
  const bLines = ex.lines.filter((l) => l.who === 'B').map((l) => l.de);

  useEffect(() => { bottom.current?.scrollIntoView({ behavior: 'smooth', block: 'end' }); }, [shown, choices]);
  useEffect(() => {
    if (pos >= ex.lines.length) { setChoices(null); return; }
    const line = ex.lines[pos];
    if (line.who === 'A') {
      setChoices(null);
      const t = setTimeout(() => {
        setShown((s) => [...s, line]);
        speak(line.de, { onEnd: () => setPos((p) => (p === pos ? p + 1 : p)) });
        // запасной вариант, если onEnd не сработает
      }, 500);
      const fb = setTimeout(() => setPos((p) => (p === pos ? p + 1 : p)), 500 + 1200 + line.de.length * 70);
      return () => { clearTimeout(t); clearTimeout(fb); };
    } else {
      const pool = [...bLines.filter((x) => x !== line.de), ...ex.distractors.filter((x) => x !== line.de)];
      setChoices(shuffle([line.de, ...pick(Array.from(new Set(pool)), 2)]));
    }
  }, [pos]); // eslint-disable-line

  const answer = (c: string) => {
    const line = ex.lines[pos];
    if (!line || line.who !== 'B') return;
    if (c === line.de || similarity(c, line.de) > 0.8) {
      setWrong(null);
      setShown((s) => [...s, line]);
      speak(line.de);
      setTimeout(() => setPos((p) => p + 1), 400);
    } else {
      errors.current++;
      setWrong(c);
      setTimeout(() => setWrong(null), 700);
    }
  };
  const voice = () => {
    if (rec) { rec.stop(); return; }
    const line = ex.lines[pos];
    if (!line) return;
    const l = listen({
      onResult: (t, alts, final) => {
        if (!final) return;
        const ok = [t, ...alts].some((x) => similarity(x, line.de) > 0.7);
        if (ok) { updateProgress((p) => { p.spoken++; }); answer(line.de); } else { setWrong('🎤 ' + t); setTimeout(() => setWrong(null), 1500); }
      },
      onEnd: () => setRec(null),
      onError: () => setRec(null),
    });
    setRec(l);
  };
  const finished = pos >= ex.lines.length;
  return (
    <div className="ex dialog">
      <div className="kicker">Диалог: {ex.title}</div>
      <label className="toggle"><input type="checkbox" checked={showRu} onChange={(e) => setShowRu(e.target.checked)} /> показывать перевод</label>
      <div className="chat-box">
        {shown.map((l, i) => (
          <div key={i} className={'bubble ' + (l.who === 'A' ? 'them' : 'me')} onClick={() => speak(l.de)}>
            <div>{l.de}</div>
            {showRu && <div className="tr">{l.ru}</div>}
          </div>
        ))}
        {choices && pos < ex.lines.length && ex.lines[pos].who === 'B' && (
          <div className="dialog-choices">
            <div className="muted">Ваш ответ ({ex.lines[pos].ru}):</div>
            {choices.map((c) => (
              <button key={c} className={'option' + (wrong === c ? ' wrong' : '')} onClick={() => answer(c)}>{c}</button>
            ))}
            {sttSupported() && <button className={'btn mic-small' + (rec ? ' rec' : '')} onClick={voice}>{rec ? '⏺ Слушаю…' : '🎤 Ответить голосом'}</button>}
            {wrong?.startsWith('🎤') && <div className="warn">Распознано: {wrong.slice(2)} — попробуйте ещё раз</div>}
          </div>
        )}
        <div ref={bottom} />
      </div>
      {finished && <button className="btn primary wide" onClick={() => onResult({ ok: errors.current < 3, auto: true })}>Диалог завершён 🎉 Дальше →</button>}
    </div>
  );
}

/* ---------- Пословный разбор фразы (общий для фраз и диалогов) ---------- */
export function GlossView({ de, compact }: { de: string; compact?: boolean }) {
  const g = useMemo(() => glossPhrase(de), [de]);
  return (
    <div className={'gloss' + (compact ? ' compact' : '')}>
      {g.idioms.map((i) => (
        <div key={i.de} className="idiom"><b>{i.de}</b> — {i.ru} <span className="muted small">(устойчивое выражение)</span></div>
      ))}
      <div className="gloss-grid">
        {g.words.map((w, i) => (
          <button key={i} className="gloss-cell" onClick={() => speak(w.base || w.de)} title="Прослушать">
            <span className="g-de">{w.de}</span>
            {w.base && w.base.toLowerCase() !== w.de.toLowerCase() && <span className="g-base">← {w.base}</span>}
            <span className="g-ru">{w.ru || '—'}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

const explainCache: Record<string, string> = (() => { try { return JSON.parse(localStorage.getItem('dw.explain.v1') || '{}'); } catch { return {}; } })();

/* ---------- Новая фраза: всё объясняем сразу, думать — в заданиях после ---------- */
export function PhraseCard({ ex, onResult }: P<'phrase'>) {
  const [more, setMore] = useState<string | null>(explainCache[ex.de] || null);
  const [busy, setBusy] = useState(false);
  const [said, setSaid] = useState<null | boolean>(null);
  const [rec, setRec] = useState<Listener | null>(null);
  useEffect(() => { setMore(explainCache[ex.de] || null); setSaid(null); }, [ex]);
  const explain = async () => {
    setBusy(true);
    try {
      const out = await chat([
        { role: 'system', content: TUTOR_BASE + ' Объясняй для новичка, очень коротко: 3–5 пунктов.' },
        { role: 'user', content: `Разбери немецкую фразу «${ex.de}» (перевод: «${ex.ru}»): почему слова стоят в таком порядке, какие формы глаголов/артикли/падежи здесь использованы и почему, что важно запомнить. Дай 1–2 похожие фразы с переводом по образцу.` },
      ], { temperature: 0.3, maxTokens: 600 });
      explainCache[ex.de] = out;
      try { localStorage.setItem('dw.explain.v1', JSON.stringify(explainCache)); } catch {}
      setMore(out);
    } catch (e: any) { setMore('⚠️ ' + e.message); }
    setBusy(false);
  };
  const repeat = () => {
    if (rec) { rec.stop(); return; }
    setSaid(null);
    const l = listen({
      onResult: (t, alts, final) => { if (final) setSaid([t, ...alts].some((x) => similarity(x, ex.de) > 0.75)); },
      onEnd: () => setRec(null),
      onError: () => setRec(null),
    });
    setRec(l);
  };
  return (
    <div className="ex flash">
      <div className="kicker">Новая фраза {ex.n}/{ex.total}</div>
      <div className="flash-card phrase-card">
        <div className="phrase-de">{ex.de}</div>
        <div className="flash-ru">{ex.ru}</div>
        <AudioBtn text={ex.de} auto big />
        <div className="muted small">Разбор по словам (нажмите на слово, чтобы услышать):</div>
        <GlossView de={ex.de} />
        {more && <div className="explain-box"><MdBlock text={more} /></div>}
        <div className="row-btns center">
          {!more && aiConfigured() && <button className="btn small" disabled={busy} onClick={explain}>{busy ? 'Разбираю…' : '🤖 Подробнее: почему так?'}</button>}
          {sttSupported() && (
            <button className={'btn small' + (rec ? ' rec' : '')} onClick={repeat}>
              {rec ? '⏺ Слушаю…' : '🎤 Повторить вслух'} {said === true && '✅'} {said === false && '🔁'}
            </button>
          )}
        </div>
      </div>
      <p className="muted small center">Запомните фразу — дальше будут задания на неё.</p>
      <button className="btn primary wide" onClick={() => onResult({ ok: true, auto: true })}>Понятно →</button>
    </div>
  );
}

/* ---------- Памятка правила перед практикой ---------- */
export function RuleCard({ ex, onResult }: P<'rule'>) {
  const g = ex.lesson.grammar;
  return (
    <div className="ex">
      <div className="kicker">Правило перед практикой</div>
      <h2>📘 {g.title}</h2>
      <div className="g-box">
        {g.points.map((p, i) => <p key={i}><Md text={p} /></p>)}
        {g.table && <div className="table-wrap"><table><tbody>{g.table.map((row, i) => <tr key={i}>{row.map((c, j) => (i === 0 ? <th key={j}>{c}</th> : <td key={j}>{c}</td>))}</tr>)}</tbody></table></div>}
      </div>
      <p className="muted">Дальше — предложения с пропусками на это правило. Если забудете, в каждом задании можно открыть подсказку с правилом (ответа там нет).</p>
      <button className="btn primary wide" onClick={() => onResult({ ok: true, auto: true })}>К практике →</button>
    </div>
  );
}

/* ---------- Прочитать диалог перед игрой ---------- */
export function ScriptCard({ ex, onResult }: P<'script'>) {
  const [hideRu, setHideRu] = useState(false);
  const [open, setOpen] = useState<Record<number, boolean>>({});
  const [words, setWords] = useState<Record<number, boolean>>({});
  useEffect(() => { setOpen({}); setWords({}); }, [ex]);
  return (
    <div className="ex dialog">
      <div className="kicker">Прочитайте диалог: {ex.title}</div>
      <p className="muted small">Прочитайте и послушайте каждую реплику. 📖 — разбор по словам. Потом вы сыграете роль справа (синие реплики) сами.</p>
      <label className="toggle"><input type="checkbox" checked={hideRu} onChange={(e) => { setHideRu(e.target.checked); setOpen({}); }} /> Скрыть перевод — проверить себя</label>
      <div className="chat-box">
        {ex.lines.map((l, i) => (
          <div key={i} className={'bubble ' + (l.who === 'A' ? 'them' : 'me')}>
            <div className="script-line">
              <span onClick={() => speak(l.de)}>{l.de}</span>
              <button className="mini" onClick={() => speak(l.de)}>🔊</button>
              <button className="mini" onClick={() => setWords({ ...words, [i]: !words[i] })}>📖</button>
              {hideRu && !open[i] && <button className="mini" onClick={() => setOpen({ ...open, [i]: true })}>перевод</button>}
            </div>
            {(!hideRu || open[i]) && <div className="tr">{l.ru}</div>}
            {words[i] && <GlossView de={l.de} compact />}
          </div>
        ))}
      </div>
      <button className="btn primary wide" onClick={() => onResult({ ok: true, auto: true })}>Теперь моя роль →</button>
    </div>
  );
}
