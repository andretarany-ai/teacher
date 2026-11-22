import { useEffect, useRef, useState } from 'react';
import type { Ex } from '../lib/exercises';
import { ArticleEx, Build, DialogEx, Flash, GapEx, GrammarCard, Match, MultipleChoice, PhraseCard, RuleCard, ScriptCard, SpeakEx, TypeEx, type ExResult } from './Exercises';
import { addMistake, clearResume, saveResume, srsAnswer, type SavedRun } from '../lib/storage';
import { aiConfigured, chat, TUTOR_BASE } from '../lib/grok';
import { MdBlock, Spinner } from './ui';
import { speak } from '../lib/speech';

export interface RunStats { total: number; correct: number; mistakes: number; spoken: number }

const GOOD = ['Отлично!', 'Super!', 'Prima!', 'Sehr gut!', 'Wunderbar!', 'Klasse!', 'Genau!', 'Richtig!'];

const exKey = (e: Ex) => JSON.stringify(e).slice(0, 400);

export function Player({ title, items, onExit, onFinish, level, saveKey, initial }: {
  title: string; items: Ex[]; level?: string;
  onExit: () => void; onFinish: (s: RunStats) => void;
  /** если задан — место в уроке сохраняется, и при выходе можно продолжить */
  saveKey?: string; initial?: SavedRun | null;
}) {
  const [queue, setQueue] = useState<Ex[]>(initial?.queue || items);
  const [i, setI] = useState(initial?.i || 0);
  const [fb, setFb] = useState<ExResult | null>(null);
  const [combo, setCombo] = useState(0);
  const [explain, setExplain] = useState<string | null>(null);
  const [loadingExp, setLoadingExp] = useState(false);
  const [askExit, setAskExit] = useState(false);
  const stats = useRef<RunStats>(initial?.stats || { total: 0, correct: 0, mistakes: 0, spoken: 0 });
  const retried = useRef(new Set<string>(initial?.retried || []));
  useEffect(() => {
    if (saveKey && i > 0) saveResume(saveKey, { queue, i, stats: stats.current, retried: [...retried.current], savedAt: Date.now() });
  }, [i, queue]); // eslint-disable-line
  const ex = queue[i];
  const scored = (e: Ex) => !['grammar', 'flash', 'dialog', 'phrase', 'rule', 'script'].includes(e.t);

  const next = () => {
    setFb(null); setExplain(null);
    if (i + 1 >= queue.length) { if (saveKey) clearResume(saveKey); onFinish(stats.current); }
    else setI(i + 1);
  };

  const onResult = (r: ExResult) => {
    if (fb) return;
    if (scored(ex) && !r.skipped) {
      stats.current.total++;
      if (r.ok) stats.current.correct++; else stats.current.mistakes++;
      if (ex.t === 'speak' && r.ok) stats.current.spoken++;
    }
    if (r.key) srsAnswer(r.key, r.ok);
    if (!r.ok) {
      if (r.correct && r.question) {
        const cyr = /[а-яё]/i;
        if (cyr.test(r.correct) && !cyr.test(r.question)) addMistake(r.question, r.correct);
        else if (!cyr.test(r.correct)) addMistake(r.correct, r.question);
      }
      if (!retried.current.has(exKey(ex)) && ex.t !== 'match' && ex.t !== 'dialog') {
        retried.current.add(exKey(ex));
        setQueue((q) => [...q, ex]);
      }
      setCombo(0);
    } else if (scored(ex)) setCombo((c) => c + 1);
    if (r.auto) { next(); return; }
    setFb(r);
  };

  useEffect(() => {
    const h = (e: KeyboardEvent) => {
      if (fb && (e.key === 'Enter' || e.key === ' ')) { e.preventDefault(); next(); }
    };
    window.addEventListener('keydown', h);
    return () => window.removeEventListener('keydown', h);
  });

  const askWhy = async () => {
    if (!fb) return;
    setLoadingExp(true);
    try {
      const out = await chat([
        { role: 'system', content: TUTOR_BASE + ' Отвечай коротко: 3–6 предложений, можно списком. Уровень ученика: ' + (level || 'A1') + '.' },
        { role: 'user', content: `Задание: «${fb.question || ''}». Правильный ответ: «${fb.correct}». Мой ответ: «${fb.user || ''}». Объясни, почему мой ответ неверный и какое правило здесь работает. Дай 1-2 похожих примера.` },
      ], { temperature: 0.4, maxTokens: 500 });
      setExplain(out);
    } catch (e: any) { setExplain('⚠️ ' + e.message); }
    setLoadingExp(false);
  };

  const progress = Math.round((i / queue.length) * 100);
  const P = { onResult, locked: !!fb };
  return (
    <div className="player">
      <div className="player-top">
        <button className="icon-btn" aria-label="Выйти" onClick={() => setAskExit(true)}>✕</button>
        <div className="bar"><div className="bar-fill" style={{ width: progress + '%' }} /></div>
        {combo >= 3 && <div className="combo">🔥 {combo}</div>}
      </div>
      <div className="player-title muted">{title}</div>
      {askExit && (
        <div className="exit-confirm card">
          <b>Выйти из урока?</b>
          <span className="muted small">{saveKey ? `Место сохранится: вы продолжите с задания ${i + 1} из ${queue.length}.` : 'Результат этой тренировки не сохранится.'}</span>
          <div className="row-btns">
            <button className="btn" onClick={() => setAskExit(false)}>Остаться</button>
            <button className="btn danger" onClick={onExit}>Выйти</button>
          </div>
        </div>
      )}
      <div className="player-body" key={i}>
        {ex.t === 'grammar' && <GrammarCard ex={ex} {...P} />}
        {ex.t === 'flash' && <Flash ex={ex} {...P} />}
        {ex.t === 'mc' && <MultipleChoice ex={ex} {...P} />}
        {ex.t === 'article' && <ArticleEx ex={ex} {...P} />}
        {ex.t === 'match' && <Match ex={ex} {...P} />}
        {ex.t === 'build' && <Build ex={ex} {...P} />}
        {ex.t === 'type' && <TypeEx ex={ex} {...P} />}
        {ex.t === 'gap' && <GapEx ex={ex} {...P} />}
        {ex.t === 'speak' && <SpeakEx ex={ex} {...P} />}
        {ex.t === 'dialog' && <DialogEx ex={ex} {...P} />}
        {ex.t === 'phrase' && <PhraseCard ex={ex} {...P} />}
        {ex.t === 'rule' && <RuleCard ex={ex} {...P} />}
        {ex.t === 'script' && <ScriptCard ex={ex} {...P} />}
      </div>
      {fb && (
        <div className={'feedback ' + (fb.ok ? 'ok' : 'bad')}>
          <div className="fb-inner">
            <div className="fb-title">{fb.ok ? (fb.typo ? '✅ Верно, но есть опечатка' : '✅ ' + GOOD[Math.floor(Math.random() * GOOD.length)]) : '❌ Не совсем'}</div>
            {(!fb.ok || fb.typo) && fb.correct && (
              <div className="fb-correct">Правильно: <b>{fb.correct}</b> <button className="audio-btn" onClick={() => speak(fb.correct!)}>🔊</button></div>
            )}
            {explain && <div className="fb-explain"><MdBlock text={explain} /></div>}
            {loadingExp && <Spinner text="ИИ объясняет…" />}
            <div className="row-btns">
              {!fb.ok && aiConfigured() && !explain && !loadingExp && <button className="btn" onClick={askWhy}>🤖 Почему?</button>}
              <button className="btn primary" onClick={next} autoFocus>Продолжить →</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
