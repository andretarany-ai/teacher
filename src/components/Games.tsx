import { useEffect, useRef, useState } from 'react';
import { ALL_WORDS, LESSONS } from '../data';
import type { Word } from '../data/types';
import { addXp, getProgress, getSettings } from '../lib/storage';
import { speak } from '../lib/speech';
import { checkAnswer, pick, rnd, shuffle } from '../lib/text';
import { genderColor } from './ui';

function availableWords(): Word[] {
  const p = getProgress();
  const s = getSettings();
  const ids = LESSONS.filter((l, i) => s.unlockAll || p.lessons[l.id]?.done || i < 2).map((l) => l.id);
  const w = ALL_WORDS.filter((x) => ids.includes(x.lesson));
  return w.length >= 10 ? w : ALL_WORDS.filter((x) => x.lesson.startsWith('a1'));
}

const best = (k: string) => Number(localStorage.getItem('dw.best.' + k) || 0);
const setBest = (k: string, v: number) => { try { if (v > best(k)) localStorage.setItem('dw.best.' + k, String(v)); } catch {} };

function useTimer(sec: number, running: boolean, onEnd: () => void) {
  const [left, setLeft] = useState(sec);
  useEffect(() => {
    if (!running) return;
    setLeft(sec);
    const t = setInterval(() => setLeft((l) => { if (l <= 1) { clearInterval(t); onEnd(); return 0; } return l - 1; }), 1000);
    return () => clearInterval(t);
  }, [running]); // eslint-disable-line
  return left;
}

function GameShell({ title, desc, gameKey, children, score, running, setRunning, left, onExit }: any) {
  const [over, setOver] = useState(false);
  useEffect(() => { if (running) setOver(false); else if (score > 0) { setOver(true); } }, [running]); // eslint-disable-line
  return (
    <div className="page">
      <button className="btn ghost" onClick={onExit}>← Игры</button>
      <h2>{title}</h2>
      {!running ? (
        <div className="card center">
          <p>{desc}</p>
          {over && <><div className="score-big">{score}</div><div className="muted">Рекорд: {best(gameKey)}</div></>}
          <button className="btn primary wide" onClick={() => setRunning(true)}>{over ? 'Ещё раз' : 'Старт'} ▶</button>
        </div>
      ) : (
        <>
          <div className="game-hud"><span>⏱ {left}</span><span>⭐ {score}</span></div>
          {children}
        </>
      )}
    </div>
  );
}

/* --- Artikel-Blitz --- */
export function ArtikelBlitz({ onExit }: { onExit: () => void }) {
  const [running, setRunning] = useState(false);
  const [score, setScore] = useState(0);
  const [w, setW] = useState<Word | null>(null);
  const [flash, setFlash] = useState<'' | 'ok' | 'bad'>('');
  const nouns = useRef<Word[]>([]);
  const scoreRef = useRef(0);
  const end = () => { setRunning(false); setBest('artikel', scoreRef.current); addXp(Math.round(scoreRef.current / 2)); };
  const left = useTimer(60, running, end);
  useEffect(() => {
    if (running) { nouns.current = shuffle(availableWords().filter((x) => x.g)); scoreRef.current = 0; setScore(0); setW(nouns.current.pop() || null); }
  }, [running]);
  const answer = (g: string) => {
    if (!w) return;
    const ok = g === w.g;
    if (ok) { scoreRef.current++; setScore(scoreRef.current); } else speak(w.full);
    setFlash(ok ? 'ok' : 'bad');
    setTimeout(() => setFlash(''), 250);
    if (!nouns.current.length) nouns.current = shuffle(availableWords().filter((x) => x.g));
    setW(nouns.current.pop() || null);
  };
  return (
    <GameShell title="⚡ Artikel-Blitz" desc="60 секунд: выберите правильный артикль для как можно большего числа слов. Ошибся — услышишь правильный вариант." gameKey="artikel" score={score} running={running} setRunning={setRunning} left={left} onExit={onExit}>
      {w && (
        <div className={'card center game-card ' + flash}>
          <div className="prompt-text big">{w.de}</div>
          <div className="muted">{w.ru}</div>
          <div className="articles">
            {(['der', 'die', 'das'] as const).map((g) => <button key={g} className={'article-btn ' + g} onClick={() => answer(g)}>{g}</button>)}
          </div>
        </div>
      )}
    </GameShell>
  );
}

/* --- Wort-Sprint --- */
export function WortSprint({ onExit }: { onExit: () => void }) {
  const [running, setRunning] = useState(false);
  const [score, setScore] = useState(0);
  const [q, setQ] = useState<{ w: Word; opts: string[] } | null>(null);
  const [flash, setFlash] = useState<'' | 'ok' | 'bad'>('');
  const scoreRef = useRef(0);
  const end = () => { setRunning(false); setBest('sprint', scoreRef.current); addXp(Math.round(scoreRef.current / 2)); };
  const left = useTimer(60, running, end);
  const nextQ = () => {
    const pool = availableWords();
    const w = rnd(pool);
    const opts = shuffle([w.ru, ...pick(Array.from(new Set(pool.filter((x) => x.ru !== w.ru).map((x) => x.ru))), 3)]);
    setQ({ w, opts });
  };
  useEffect(() => { if (running) { scoreRef.current = 0; setScore(0); nextQ(); } }, [running]);
  const answer = (o: string) => {
    if (!q) return;
    const ok = o === q.w.ru;
    if (ok) { scoreRef.current++; setScore(scoreRef.current); }
    setFlash(ok ? 'ok' : 'bad'); setTimeout(() => setFlash(''), 250);
    nextQ();
  };
  return (
    <GameShell title="🏃 Wort-Sprint" desc="60 секунд на перевод как можно большего числа слов из пройденных уроков." gameKey="sprint" score={score} running={running} setRunning={setRunning} left={left} onExit={onExit}>
      {q && (
        <div className={'card center game-card ' + flash}>
          <div className="prompt-text big"><span style={{ color: genderColor(q.w.g) }}>{q.w.g} </span>{q.w.de}</div>
          <div className="options">{q.opts.map((o) => <button key={o} className="option" onClick={() => answer(o)}>{o}</button>)}</div>
        </div>
      )}
    </GameShell>
  );
}

/* --- Zahlen hören --- */
function numberToGerman(n: number): string {
  const ones = ['null', 'eins', 'zwei', 'drei', 'vier', 'fünf', 'sechs', 'sieben', 'acht', 'neun', 'zehn', 'elf', 'zwölf', 'dreizehn', 'vierzehn', 'fünfzehn', 'sechzehn', 'siebzehn', 'achtzehn', 'neunzehn'];
  const tens = ['', '', 'zwanzig', 'dreißig', 'vierzig', 'fünfzig', 'sechzig', 'siebzig', 'achtzig', 'neunzig'];
  if (n < 20) return ones[n];
  if (n < 100) { const t = Math.floor(n / 10), o = n % 10; return (o ? (o === 1 ? 'ein' : ones[o]) + 'und' : '') + tens[t]; }
  if (n < 1000) { const h = Math.floor(n / 100), r = n % 100; return (h === 1 ? 'ein' : ones[h]) + 'hundert' + (r ? numberToGerman(r) : ''); }
  const th = Math.floor(n / 1000), r = n % 1000;
  return (th === 1 ? 'ein' : numberToGerman(th)) + 'tausend' + (r ? numberToGerman(r) : '');
}
export function ZahlenHoeren({ onExit }: { onExit: () => void }) {
  const [running, setRunning] = useState(false);
  const [score, setScore] = useState(0);
  const [n, setN] = useState(0);
  const [v, setV] = useState('');
  const [max, setMax] = useState(100);
  const [msg, setMsg] = useState('');
  const scoreRef = useRef(0);
  const end = () => { setRunning(false); setBest('zahlen', scoreRef.current); addXp(scoreRef.current); };
  const left = useTimer(90, running, end);
  const nextN = () => { const x = Math.floor(Math.random() * max); setN(x); setV(''); setTimeout(() => speak(String(x)), 200); };
  useEffect(() => { if (running) { scoreRef.current = 0; setScore(0); setMsg(''); nextN(); } }, [running]); // eslint-disable-line
  const check = () => {
    if (checkAnswer(v, String(n)) === 'correct') { scoreRef.current++; setScore(scoreRef.current); setMsg('✅'); }
    else setMsg(`❌ ${n} — ${numberToGerman(n)}`);
    nextN();
  };
  return (
    <GameShell title="🔢 Zahlen hören" desc="90 секунд: слушайте число и вводите его цифрами. Отличная тренировка для цен, телефонов и времени." gameKey="zahlen" score={score} running={running} setRunning={setRunning} left={left} onExit={onExit}>
      <div className="card center">
        {!running && null}
        <div className="row-btns center"><button className="audio-btn big" onClick={() => speak(String(n))}>🔊</button><button className="audio-btn big" onClick={() => speak(String(n), { rate: 0.6 })}>🐢</button></div>
        <input className="text-input" inputMode="numeric" value={v} autoFocus onChange={(e) => setV(e.target.value.replace(/\D/g, ''))} onKeyDown={(e) => e.key === 'Enter' && v && check()} placeholder="Число" />
        <button className="btn primary wide" disabled={!v} onClick={check}>OK</button>
        <div className="muted">{msg}</div>
        <div className="row-btns center">
          {[20, 100, 1000, 10000].map((m) => <button key={m} className={'btn small' + (max === m ? ' primary' : '')} onClick={() => setMax(m)}>до {m}</button>)}
        </div>
      </div>
    </GameShell>
  );
}

/* --- Satz-Puzzle: порядок слов на время --- */
export function SatzPuzzle({ onExit }: { onExit: () => void }) {
  const [running, setRunning] = useState(false);
  const [score, setScore] = useState(0);
  const [cur, setCur] = useState<{ de: string; ru: string; toks: string[] } | null>(null);
  const [chosen, setChosen] = useState<number[]>([]);
  const scoreRef = useRef(0);
  const end = () => { setRunning(false); setBest('satz', scoreRef.current); addXp(scoreRef.current * 2); };
  const left = useTimer(120, running, end);
  const nextS = () => {
    const p = getProgress(); const s = getSettings();
    const ls = LESSONS.filter((l, i) => s.unlockAll || p.lessons[l.id]?.done || i < 2);
    const ph = rnd(ls.flatMap((l) => l.phrases).filter((x) => x.de.split(' ').length >= 3));
    setCur({ ...ph, toks: shuffle(ph.de.split(' ')) });
    setChosen([]);
  };
  useEffect(() => { if (running) { scoreRef.current = 0; setScore(0); nextS(); } }, [running]);
  useEffect(() => {
    if (cur && chosen.length === cur.toks.length) {
      const s = chosen.map((i) => cur.toks[i]).join(' ');
      if (s === cur.de) { scoreRef.current++; setScore(scoreRef.current); speak(cur.de); setTimeout(nextS, 600); }
      else setTimeout(() => setChosen([]), 500);
    }
  }, [chosen]); // eslint-disable-line
  return (
    <GameShell title="🧩 Satz-Puzzle" desc="2 минуты: собирайте предложения из пройденных уроков в правильном порядке." gameKey="satz" score={score} running={running} setRunning={setRunning} left={left} onExit={onExit}>
      {cur && (
        <div className="card">
          <div className="prompt-text center">{cur.ru}</div>
          <div className="build-line">{chosen.map((i) => <button key={i} className="chip in" onClick={() => setChosen(chosen.filter((x) => x !== i))}>{cur.toks[i]}</button>)}</div>
          <div className="bank">{cur.toks.map((t, i) => <button key={i} className={'chip' + (chosen.includes(i) ? ' used' : '')} disabled={chosen.includes(i)} onClick={() => setChosen([...chosen, i])}>{t}</button>)}</div>
          <button className="btn ghost small" onClick={nextS}>Пропустить</button>
        </div>
      )}
    </GameShell>
  );
}

export const GAMES = [
  { id: 'artikel', name: '⚡ Artikel-Blitz', desc: 'der, die или das — на скорость', C: ArtikelBlitz },
  { id: 'sprint', name: '🏃 Wort-Sprint', desc: 'Перевод слов на время', C: WortSprint },
  { id: 'zahlen', name: '🔢 Zahlen hören', desc: 'Аудирование чисел', C: ZahlenHoeren },
  { id: 'satz', name: '🧩 Satz-Puzzle', desc: 'Порядок слов в предложении', C: SatzPuzzle },
];
export { best as gameBest };
