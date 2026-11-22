import { useEffect, useRef, useState } from 'react';
import type { Ex } from '../lib/exercises';
import { ArticleEx, Build, DialogEx, Flash, GapEx, GrammarCard, Match, MultipleChoice, SpeakEx, TypeEx, type ExResult } from './Exercises';
import { addMistake, srsAnswer } from '../lib/storage';
import { aiConfigured, chat, TUTOR_BASE } from '../lib/grok';
import { MdBlock, Spinner } from './ui';
import { speak } from '../lib/speech';

export interface RunStats { total: number; correct: number; mistakes: number; spoken: number }

const GOOD = ['Отлично!', 'Super!', 'Prima!', 'Sehr gut!', 'Wunderbar!', 'Klasse!', 'Genau!', 'Richtig!'];

export function Player({ title, items, onExit, onFinish, level }: {
  title: string; items: Ex[]; level?: string;
  onExit: () => void; onFinish: (s: RunStats) => void;
}) {
  const [queue, setQueue] = useState<Ex[]>(items);
  const [i, setI] = useState(0);
  const [fb, setFb] = useState<ExResult | null>(null);
  const [combo, setCombo] = useState(0);
  const [explain, setExplain] = useState<string | null>(null);
  const [loadingExp, setLoadingExp] = useState(false);
  const stats = useRef<RunStats>({ total: 0, correct: 0, mistakes: 0, spoken: 0 });
  const retried = useRef(new Set<Ex>());
  const ex = queue[i];
  const scored = (e: Ex) => !['grammar', 'flash', 'dialog'].includes(e.t);

  const next = () => {
    setFb(null); setExplain(null);
    if (i + 1 >= queue.length) onFinish(stats.current);
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
      if (!retried.current.has(ex) && ex.t !== 'match' && ex.t !== 'dialog') {
        retried.current.add(ex);
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
        <button className="icon-btn" onClick={() => { if (confirm('Выйти из урока? Прогресс этого прохождения не сохранится.')) onExit(); }}>✕</button>
        <div className="bar"><div className="bar-fill" style={{ width: progress + '%' }} /></div>
        {combo >= 3 && <div className="combo">🔥 {combo}</div>}
      </div>
      <div className="player-title muted">{title}</div>
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
