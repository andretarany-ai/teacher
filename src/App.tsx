import { useEffect, useState } from 'react';
import { LESSONS, LEVELS, lessonById, ALL_WORDS, wordKey } from './data';
import type { Lesson, Level } from './data/types';
import { buildLesson, buildListening, buildPractice, buildReview, buildSpeaking, type Ex } from './lib/exercises';
import { addXp, exportProgress, importProgress, resetProgress, saveSettings, srsAdd, srsDue, today, updateProgress, useStore } from './lib/storage';
import { Player, type RunStats } from './components/Player';
import { AskTutor, generateExercises, NeedKey, Roleplay, Story, Writing } from './components/AI';
import { GAMES, gameBest } from './components/Games';
import { AudioBtn, Spinner, WordView } from './components/ui';
import { germanVoices, speak, sttSupported, ttsSupported } from './lib/speech';
import { aiConfigured, chat } from './lib/grok';

type Route =
  | { n: 'home' }
  | { n: 'lesson'; id: string }
  | { n: 'play'; title: string; items: Ex[]; lessonId?: string; full?: boolean; back: Route; level?: string }
  | { n: 'result'; stats: RunStats; xp: number; lessonId?: string; back: Route; full?: boolean }
  | { n: 'review' }
  | { n: 'talk' }
  | { n: 'roleplay'; level: string; title: string; role: string; situation: string; goal: string; words?: string[]; back: Route }
  | { n: 'writing'; id: string }
  | { n: 'story'; id: string }
  | { n: 'tutor'; back: Route; context?: string }
  | { n: 'games' }
  | { n: 'game'; id: string }
  | { n: 'profile' };

const TABS: { n: Route['n']; icon: string; label: string }[] = [
  { n: 'home', icon: '🗺️', label: 'Путь' },
  { n: 'review', icon: '🔁', label: 'Повтор' },
  { n: 'talk', icon: '💬', label: 'Разговор' },
  { n: 'games', icon: '🎮', label: 'Игры' },
  { n: 'profile', icon: '👤', label: 'Профиль' },
];

const isUnlocked = (l: Lesson, p: ReturnType<typeof useStore>['progress'], unlockAll: boolean) =>
  unlockAll || l.index === 0 || !!p.lessons[LESSONS[l.index - 1].id]?.done || !!p.lessons[l.id];

export default function App() {
  const [route, setRoute] = useState<Route>({ n: 'home' });
  const { progress, settings } = useStore();
  const go = (r: Route) => { setRoute(r); window.scrollTo(0, 0); };
  useEffect(() => { document.body.classList.toggle('in-player', route.n === 'play'); }, [route.n]);

  const startPlay = (title: string, items: Ex[], back: Route, lessonId?: string, full?: boolean, level?: string) => {
    if (!items.length) { alert('Пока нет заданий для этого режима.'); return; }
    go({ n: 'play', title, items, back, lessonId, full, level });
  };

  const finish = (r: Extract<Route, { n: 'play' }>, stats: RunStats) => {
    const acc = stats.total ? stats.correct / stats.total : 1;
    let xp = Math.round(5 + stats.correct * 1.5 + (acc >= 0.9 ? 10 : 0));
    if (r.full) xp += 15;
    addXp(xp);
    if (r.lessonId && r.full) {
      const l = lessonById(r.lessonId)!;
      updateProgress((p) => {
        const prev = p.lessons[l.id] || { done: false, best: 0, stars: 0, times: 0 };
        const stars = acc >= 0.9 ? 3 : acc >= 0.7 ? 2 : 1;
        p.lessons[l.id] = { done: true, best: Math.max(prev.best, Math.round(acc * 100)), stars: Math.max(prev.stars, stars), times: prev.times + 1 };
      });
      srsAdd(l.words.map(wordKey));
    }
    go({ n: 'result', stats, xp, lessonId: r.lessonId, back: r.back, full: r.full });
  };

  let body: React.ReactNode = null;
  switch (route.n) {
    case 'home': body = <Home go={go} />; break;
    case 'lesson': {
      const l = lessonById(route.id)!;
      body = <LessonPage l={l} go={go} startPlay={startPlay} />;
      break;
    }
    case 'play': body = <Player title={route.title} items={route.items} level={route.level} onExit={() => go(route.back)} onFinish={(s) => finish(route, s)} />; break;
    case 'result': body = <Result r={route} go={go} />; break;
    case 'review': body = <Review go={go} startPlay={startPlay} />; break;
    case 'talk': body = <Talk go={go} />; break;
    case 'roleplay': body = <Roleplay {...route} onExit={() => go(route.back)} />; break;
    case 'writing': body = <Writing lesson={lessonById(route.id)!} onExit={() => go({ n: 'lesson', id: route.id })} />; break;
    case 'story': {
      const l = lessonById(route.id)!;
      body = <Story level={l.level} topic={l.title + ' / ' + l.de} words={l.words.map((w) => w.full)} onExit={() => go({ n: 'lesson', id: l.id })}
        onQuiz={(items) => startPlay('Понимание текста', items, { n: 'story', id: l.id }, undefined, false, l.level)} />;
      break;
    }
    case 'tutor': body = <AskTutor onExit={() => go(route.back)} context={route.context} />; break;
    case 'games': body = <GamesPage go={go} />; break;
    case 'game': { const G = GAMES.find((g) => g.id === route.id)!.C; body = <G onExit={() => go({ n: 'games' })} />; break; }
    case 'profile': body = <Profile go={go} />; break;
  }
  const showTabs = !['play', 'roleplay', 'tutor'].includes(route.n);
  const dailyXp = progress.daily[today()] || 0;
  return (
    <div className="app">
      {showTabs && (
        <header className="topbar">
          <div className="logo" onClick={() => go({ n: 'home' })}>🇩🇪 <b>Deutsch Weg</b></div>
          <div className="stats">
            <span title="Дней подряд">🔥 {progress.streak}</span>
            <span title="Опыт">⭐ {progress.xp}</span>
            <span title="Цель дня" className={dailyXp >= settings.dailyGoal ? 'goal-done' : ''}>🎯 {Math.min(dailyXp, settings.dailyGoal)}/{settings.dailyGoal}</span>
          </div>
        </header>
      )}
      <main className={showTabs ? 'with-tabs' : ''}>{body}</main>
      {showTabs && (
        <nav className="tabs">
          {TABS.map((t) => (
            <button key={t.n} className={route.n === t.n || (t.n === 'home' && route.n === 'lesson') ? 'active' : ''} onClick={() => go({ n: t.n } as Route)}>
              <span className="tab-ic">{t.icon}</span>{t.label}
              {t.n === 'review' && srsDue().length > 0 && <span className="badge">{srsDue().length}</span>}
            </button>
          ))}
        </nav>
      )}
    </div>
  );
}

/* ================= Карта курса ================= */
function Home({ go }: { go: (r: Route) => void }) {
  const { progress, settings } = useStore();
  const doneCount = LESSONS.filter((l) => progress.lessons[l.id]?.done).length;
  const nextLesson = LESSONS.find((l) => !progress.lessons[l.id]?.done);
  const [open, setOpen] = useState<Level | null>(nextLesson?.level || 'A1');
  const first = doneCount === 0 && !settings.unlockAll;
  return (
    <div className="page">
      {first && (
        <div className="card hero">
          <h2>Willkommen! 👋</h2>
          <p>Это курс немецкого с нуля до уровня <b>B2</b>: {LESSONS.length} уроков, {ALL_WORDS.length}+ слов, диалоги, голосовые задания и ИИ-собеседник.</p>
          <p className="muted">Каждый урок — короткая порция грамматики, новые слова с озвучкой, игры, сборка фраз, произношение и живой диалог. Пройденные слова возвращаются в «Повторе» по системе интервальных повторений.</p>
          <div className="row-btns">
            <button className="btn primary" onClick={() => go({ n: 'lesson', id: LESSONS[0].id })}>Начать с нуля →</button>
            <button className="btn" onClick={() => saveSettings({ unlockAll: true })}>Я уже знаю основы — открыть всё</button>
          </div>
        </div>
      )}
      {!first && nextLesson && (
        <div className="card continue" onClick={() => go({ n: 'lesson', id: nextLesson.id })}>
          <div className="muted small">Продолжить</div>
          <div className="continue-title">{nextLesson.emoji} {nextLesson.title}</div>
          <div className="muted small">{nextLesson.level} · урок {nextLesson.index + 1} из {LESSONS.length}</div>
          <div className="bar"><div className="bar-fill" style={{ width: (doneCount / LESSONS.length) * 100 + '%' }} /></div>
        </div>
      )}
      {srsDue().length > 0 && (
        <div className="card review-cta" onClick={() => go({ n: 'review' })}>🔁 Пора повторить <b>{srsDue().length}</b> слов — это займёт пару минут →</div>
      )}
      {LEVELS.map((lv) => {
        const ls = LESSONS.filter((l) => l.level === lv.id);
        const done = ls.filter((l) => progress.lessons[l.id]?.done).length;
        return (
          <section key={lv.id} className="level">
            <div className="level-head" style={{ borderColor: lv.color }} onClick={() => setOpen(open === lv.id ? null : lv.id)}>
              <div>
                <h2 style={{ color: lv.color }}>{lv.name}</h2>
                <div className="muted small">{lv.desc}</div>
              </div>
              <div className="level-count">{done}/{ls.length} {open === lv.id ? '▲' : '▼'}</div>
            </div>
            {open === lv.id && (
              <div className="path">
                {ls.map((l, i) => {
                  const pr = progress.lessons[l.id];
                  const unlocked = isUnlocked(l, progress, settings.unlockAll);
                  const isNext = nextLesson?.id === l.id;
                  return (
                    <div key={l.id} className={'node-row ' + (i % 4 === 1 ? 'r1' : i % 4 === 3 ? 'r3' : 'r0')}>
                      <button className={'node' + (pr?.done ? ' done' : '') + (!unlocked ? ' locked' : '') + (isNext ? ' next' : '')}
                        style={{ '--c': lv.color } as any} onClick={() => unlocked && go({ n: 'lesson', id: l.id })} disabled={!unlocked}>
                        <span className="node-emoji">{unlocked ? l.emoji : '🔒'}</span>
                      </button>
                      <div className={'node-label' + (unlocked ? ' clickable' : '')} onClick={() => unlocked && go({ n: 'lesson', id: l.id })}>
                        <b>{l.title}</b>
                        <div className="muted small">{l.de}</div>
                        {pr?.done && <div className="stars">{'★'.repeat(pr.stars)}{'☆'.repeat(3 - pr.stars)}</div>}
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </section>
        );
      })}
    </div>
  );
}

/* ================= Страница урока ================= */
function LessonPage({ l, go, startPlay }: { l: Lesson; go: (r: Route) => void; startPlay: (t: string, i: Ex[], b: Route, id?: string, full?: boolean, level?: string) => void }) {
  const { progress } = useStore();
  const pr = progress.lessons[l.id];
  const back: Route = { n: 'lesson', id: l.id };
  const [gen, setGen] = useState(false);
  const [err, setErr] = useState('');
  const [tab, setTab] = useState<'words' | 'phrases' | 'grammar'>('words');
  const aiPractice = async () => {
    setGen(true); setErr('');
    try { startPlay('ИИ-задания: ' + l.title, await generateExercises(l, ''), back, l.id, false, l.level); }
    catch (e: any) { setErr(e.message); }
    setGen(false);
  };
  const prev = LESSONS[l.index - 1], next = LESSONS[l.index + 1];
  return (
    <div className="page">
      <div className="row-between">
        <button className="btn ghost" onClick={() => go({ n: 'home' })}>← Карта</button>
        <div className="row-btns">
          {prev && <button className="btn ghost small" onClick={() => go({ n: 'lesson', id: prev.id })}>‹</button>}
          {next && <button className="btn ghost small" onClick={() => go({ n: 'lesson', id: next.id })}>›</button>}
        </div>
      </div>
      <div className="lesson-hero">
        <div className="lesson-emoji">{l.emoji}</div>
        <div>
          <div className="kicker">{l.level} · Урок {l.index + 1}</div>
          <h1>{l.title}</h1>
          <div className="de-title">{l.de}</div>
          <p className="goal">🎯 {l.goal}</p>
          {pr?.done && <div className="stars">{'★'.repeat(pr.stars)}{'☆'.repeat(3 - pr.stars)} <span className="muted small">лучший результат {pr.best}%</span></div>}
        </div>
      </div>
      <button className="btn primary wide big" onClick={() => startPlay(l.title, buildLesson(l), back, l.id, true, l.level)}>
        {pr?.done ? '🔄 Пройти урок заново' : '▶ Начать урок'}
      </button>

      <h3 className="section-title">Тренировки</h3>
      <div className="grid-actions">
        <button className="action" disabled={!pr?.done} onClick={() => startPlay('Тренировка: ' + l.title, buildPractice(l), back, l.id, false, l.level)}><span>🏋️</span>Быстрая тренировка</button>
        <button className="action" onClick={() => startPlay('Произношение: ' + l.title, buildSpeaking(l), back, l.id, false, l.level)}><span>🎙️</span>Произношение</button>
        <button className="action" onClick={() => startPlay('Аудирование: ' + l.title, buildListening(l), back, l.id, false, l.level)}><span>🎧</span>Аудирование</button>
        <button className="action" onClick={() => startPlay('Диалог', [{ t: 'dialog', title: l.dialogTitle, lines: l.dialog, distractors: l.phrases.map((p) => p.de) }], back, l.id, false, l.level)}><span>🎭</span>Диалог</button>
      </div>
      {!pr?.done && <p className="muted small">Быстрая тренировка откроется после прохождения урока.</p>}

      <h3 className="section-title">С ИИ-преподавателем 🤖</h3>
      <div className="grid-actions">
        <button className="action ai" onClick={() => go({ n: 'roleplay', level: l.level, title: l.roleplay.role, role: l.roleplay.role, situation: l.roleplay.situation, goal: l.roleplay.goal, words: l.words.map((w) => w.full), back })}><span>💬</span>Ролевой разговор</button>
        <button className="action ai" onClick={aiPractice} disabled={gen}><span>✨</span>{gen ? 'Генерирую…' : 'Новые задания'}</button>
        <button className="action ai" onClick={() => go({ n: 'writing', id: l.id })}><span>✍️</span>Письмо с проверкой</button>
        <button className="action ai" onClick={() => go({ n: 'story', id: l.id })}><span>📖</span>Мини-история</button>
        <button className="action ai" onClick={() => go({ n: 'tutor', back, context: `урок «${l.title}», грамматика: ${l.grammar.title} (уровень ${l.level})` })}><span>👩‍🏫</span>Спросить учителя</button>
      </div>
      {gen && <Spinner text="Grok составляет упражнения…" />}
      {err && <div className="warn">{err}</div>}
      {!aiConfigured() && <NeedKey go={() => go({ n: 'profile' })} />}

      <div className="seg">
        <button className={tab === 'words' ? 'active' : ''} onClick={() => setTab('words')}>Слова ({l.words.length})</button>
        <button className={tab === 'phrases' ? 'active' : ''} onClick={() => setTab('phrases')}>Фразы ({l.phrases.length})</button>
        <button className={tab === 'grammar' ? 'active' : ''} onClick={() => setTab('grammar')}>Грамматика</button>
      </div>
      {tab === 'words' && (
        <div className="list">
          {l.words.map((w) => (
            <div key={w.full} className="list-row" onClick={() => speak(w.full)}>
              <span>🔊 <WordView w={w} />{w.pl && w.pl !== '-' ? <span className="muted small"> ({w.pl})</span> : null}</span><span className="muted">{w.ru}</span>
            </div>
          ))}
        </div>
      )}
      {tab === 'phrases' && (
        <div className="list">
          {l.phrases.map((p) => (
            <div key={p.de} className="list-row col" onClick={() => speak(p.de)}><span>🔊 {p.de}</span><span className="muted small">{p.ru}</span></div>
          ))}
        </div>
      )}
      {tab === 'grammar' && (
        <div className="card">
          <h3>📘 {l.grammar.title}</h3>
          {l.grammar.points.map((p, i) => <p key={i} dangerouslySetInnerHTML={{ __html: p.replace(/\*\*([^*]+)\*\*/g, '<b>$1</b>') }} />)}
          {l.grammar.table && (
            <div className="table-wrap"><table><tbody>{l.grammar.table.map((row, i) => <tr key={i}>{row.map((c, j) => (i === 0 ? <th key={j}>{c}</th> : <td key={j}>{c}</td>))}</tr>)}</tbody></table></div>
          )}
        </div>
      )}
    </div>
  );
}

/* ================= Результат ================= */
function Result({ r, go }: { r: Extract<Route, { n: 'result' }>; go: (r: Route) => void }) {
  const acc = r.stats.total ? Math.round((r.stats.correct / r.stats.total) * 100) : 100;
  const stars = acc >= 90 ? 3 : acc >= 70 ? 2 : 1;
  const l = r.lessonId ? lessonById(r.lessonId) : undefined;
  const next = l && r.full ? LESSONS[l.index + 1] : undefined;
  useEffect(() => { speak(acc >= 90 ? 'Ausgezeichnet!' : acc >= 70 ? 'Sehr gut!' : 'Gut gemacht!'); }, []); // eslint-disable-line
  return (
    <div className="page center result">
      <div className="result-emoji">{acc >= 90 ? '🏆' : acc >= 70 ? '🎉' : '💪'}</div>
      <h1>{acc >= 90 ? 'Ausgezeichnet!' : acc >= 70 ? 'Sehr gut!' : 'Gut gemacht!'}</h1>
      {r.full && <div className="stars big">{'★'.repeat(stars)}{'☆'.repeat(3 - stars)}</div>}
      <div className="result-stats">
        <div><b>+{r.xp}</b><span>XP</span></div>
        <div><b>{acc}%</b><span>точность</span></div>
        <div><b>{r.stats.correct}/{r.stats.total}</b><span>ответов</span></div>
        {r.stats.spoken > 0 && <div><b>{r.stats.spoken}</b><span>сказано вслух</span></div>}
      </div>
      {r.full && l && (
        <div className="card">
          <p>Слова урока добавлены в <b>интервальное повторение</b> 🔁. Закрепите тему:</p>
          <div className="row-btns center">
            <button className="btn" onClick={() => go({ n: 'roleplay', level: l.level, title: l.roleplay.role, role: l.roleplay.role, situation: l.roleplay.situation, goal: l.roleplay.goal, words: l.words.map((w) => w.full), back: { n: 'lesson', id: l.id } })}>💬 Поговорить с ИИ</button>
            <button className="btn" onClick={() => go({ n: 'writing', id: l.id })}>✍️ Написать текст</button>
          </div>
        </div>
      )}
      <div className="row-btns center">
        <button className="btn" onClick={() => go(r.back)}>Назад</button>
        {next && <button className="btn primary" onClick={() => go({ n: 'lesson', id: next.id })}>Следующий урок: {next.emoji} {next.title} →</button>}
      </div>
    </div>
  );
}

/* ================= Повторение ================= */
function Review({ go, startPlay }: { go: (r: Route) => void; startPlay: (t: string, i: Ex[], b: Route) => void }) {
  const { progress } = useStore();
  const due = srsDue();
  const all = Object.keys(progress.srs);
  const boxes = [0, 0, 0, 0, 0, 0, 0];
  for (const v of Object.values(progress.srs)) boxes[v.box]++;
  const hard = Object.entries(progress.srs).filter(([, v]) => v.wrong >= 2).sort((a, b) => b[1].wrong - a[1].wrong).map(([k]) => k);
  const [showAll, setShowAll] = useState(false);
  return (
    <div className="page">
      <h1>🔁 Повторение</h1>
      <p className="muted">Слова возвращаются к вам через растущие интервалы: 8 ч → 1 день → 3 дня → неделя → 2 недели → месяц. Так они переходят в долговременную память.</p>
      <div className="card center">
        <div className="score-big">{due.length}</div>
        <div className="muted">слов ждут повторения · всего в словаре {all.length}</div>
        <button className="btn primary wide" disabled={!due.length} onClick={() => startPlay('Повторение', buildReview(due), { n: 'review' })}>Повторить сейчас</button>
        <button className="btn wide" disabled={all.length < 4} onClick={() => startPlay('Случайное повторение', buildReview([...all].sort(() => Math.random() - 0.5)), { n: 'review' })}>Повторить случайные слова</button>
        {hard.length >= 3 && <button className="btn wide" onClick={() => startPlay('Трудные слова', buildReview(hard), { n: 'review' })}>😤 Трудные слова ({hard.length})</button>}
      </div>
      {all.length > 0 && (
        <div className="card">
          <h3>Сила памяти</h3>
          <div className="boxes">
            {boxes.map((b, i) => (
              <div key={i} className="box-col"><div className="box-bar" style={{ height: Math.max(4, (b / Math.max(1, all.length)) * 120) + 'px', opacity: 0.4 + i * 0.1 }} /><span>{b}</span><small>{['новые', '8ч', '1д', '3д', '7д', '14д', '30д'][i]}</small></div>
            ))}
          </div>
        </div>
      )}
      {progress.mistakes.length > 0 && (
        <div className="card">
          <h3>Мои недавние ошибки</h3>
          {progress.mistakes.slice(0, showAll ? 100 : 8).map((m, i) => (
            <div key={i} className="list-row col" onClick={() => speak(m.de)}><span>🔊 {m.de}</span><span className="muted small">{m.ru}</span></div>
          ))}
          {progress.mistakes.length > 8 && <button className="btn ghost small" onClick={() => setShowAll(!showAll)}>{showAll ? 'Свернуть' : 'Показать все'}</button>}
        </div>
      )}
      {!all.length && <div className="card"><p>Пройдите первый урок — и слова появятся здесь.</p><button className="btn primary" onClick={() => go({ n: 'home' })}>К урокам</button></div>}
    </div>
  );
}

/* ================= Разговор ================= */
const FREE_SCENARIOS = [
  { title: '☕ Новый знакомый', role: 'дружелюбный немец по имени Jonas, 28 лет, из Гамбурга', situation: 'Вы познакомились в кафе на языковой встрече (Sprachcafé).', goal: 'Рассказать о себе и узнать о собеседнике 3 факта' },
  { title: '🏠 Соседка по квартире', role: 'соседка по WG по имени Lena, студентка', situation: 'Вы только что въехали в общую квартиру (WG) в Берлине.', goal: 'Договориться об уборке и покупках' },
  { title: '🚆 Попутчик в поезде', role: 'пожилой разговорчивый пассажир Herr Schulz', situation: 'Вы едете на поезде ICE из Мюнхена в Берлин.', goal: 'Поддержать small talk 5+ реплик' },
  { title: '💼 Собеседование', role: 'HR-менеджер компании TechNord GmbH, Frau Becker', situation: 'Собеседование на должность в немецкой IT-компании.', goal: 'Рассказать об опыте и задать 2 вопроса о работе' },
  { title: '🩺 У врача', role: 'врач общей практики Dr. Wagner', situation: 'Вы пришли к врачу, потому что плохо себя чувствуете.', goal: 'Описать симптомы и понять рекомендации' },
  { title: '🗳 Дебаты', role: 'оппонент в дискуссии, вежливый, но с противоположным мнением', situation: 'Дискуссия: «Нужно ли запретить автомобили в центре города?»', goal: 'Аргументировать свою позицию 3 аргументами' },
];

function Talk({ go }: { go: (r: Route) => void }) {
  const { progress, settings } = useStore();
  const [level, setLevel] = useState<Level>(() => (LESSONS.find((l) => !progress.lessons[l.id]?.done)?.level || 'A1'));
  const unlocked = LESSONS.filter((l) => isUnlocked(l, progress, settings.unlockAll));
  const back: Route = { n: 'talk' };
  return (
    <div className="page">
      <h1>💬 Разговорная практика</h1>
      <p className="muted">Говорите голосом 🎤 или пишите. ИИ отвечает по-немецки на вашем уровне, исправляет ошибки и подсказывает, что сказать.</p>
      {!aiConfigured() && <NeedKey go={() => go({ n: 'profile' })} />}
      <div className="card">
        <h3>Ваш уровень для свободных сценариев</h3>
        <div className="seg">{(['A1', 'A2', 'B1', 'B2'] as Level[]).map((lv) => <button key={lv} className={level === lv ? 'active' : ''} onClick={() => setLevel(lv)}>{lv}</button>)}</div>
        {!sttSupported() && <p className="warn small">Голосовой ввод недоступен в этом браузере — используйте Chrome/Edge (или пишите текстом).</p>}
      </div>
      <button className="card tutor-cta" onClick={() => go({ n: 'tutor', back })}>👩‍🏫 <b>Спросить учителя</b> — любые вопросы о грамматике и словах на русском</button>
      <h3 className="section-title">Свободные сценарии</h3>
      <div className="scenarios">
        {FREE_SCENARIOS.map((s) => (
          <button key={s.title} className="scenario" onClick={() => go({ n: 'roleplay', level, title: s.title, role: s.role, situation: s.situation, goal: s.goal, back })}>
            <b>{s.title}</b><span className="muted small">{s.situation}</span><span className="small">🎯 {s.goal}</span>
          </button>
        ))}
      </div>
      <h3 className="section-title">Сценарии из уроков</h3>
      <div className="scenarios">
        {unlocked.map((l) => (
          <button key={l.id} className="scenario" onClick={() => go({ n: 'roleplay', level: l.level, title: l.emoji + ' ' + l.title, role: l.roleplay.role, situation: l.roleplay.situation, goal: l.roleplay.goal, words: l.words.map((w) => w.full), back })}>
            <b>{l.emoji} {l.title} <span className="lvl">{l.level}</span></b><span className="muted small">{l.roleplay.situation}</span><span className="small">🎯 {l.roleplay.goal}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

/* ================= Игры ================= */
function GamesPage({ go }: { go: (r: Route) => void }) {
  return (
    <div className="page">
      <h1>🎮 Игры</h1>
      <p className="muted">Короткие игры на скорость по словам из пройденных уроков.</p>
      <div className="scenarios">
        {GAMES.map((g) => (
          <button key={g.id} className="scenario game" onClick={() => go({ n: 'game', id: g.id })}>
            <b>{g.name}</b><span className="muted small">{g.desc}</span><span className="small">🏆 рекорд: {gameBest(g.id)}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

/* ================= Профиль и настройки ================= */
function Profile({ go }: { go: (r: Route) => void }) {
  const { progress, settings } = useStore();
  const [test, setTest] = useState('');
  const [voices, setVoices] = useState(germanVoices());
  useEffect(() => { const t = setTimeout(() => setVoices(germanVoices()), 500); return () => clearTimeout(t); }, []);
  const done = LESSONS.filter((l) => progress.lessons[l.id]?.done).length;
  const days: { d: string; xp: number }[] = [];
  for (let i = 27; i >= 0; i--) {
    const dt = new Date(); dt.setDate(dt.getDate() - i);
    const k = `${dt.getFullYear()}-${String(dt.getMonth() + 1).padStart(2, '0')}-${String(dt.getDate()).padStart(2, '0')}`;
    days.push({ d: k, xp: progress.daily[k] || 0 });
  }
  const testAi = async () => {
    setTest('⏳ Проверяю…');
    try { const r = await chat([{ role: 'user', content: 'Antworte mit genau einem kurzen deutschen Satz: Bist du bereit?' }], { maxTokens: 40 }); setTest('✅ Работает! Grok: ' + r); }
    catch (e: any) { setTest('❌ ' + e.message); }
  };
  const levelEst = done < 13 ? 'A1' : done < 23 ? 'A2' : done < 33 ? 'B1' : 'B2';
  return (
    <div className="page">
      <h1>👤 Профиль</h1>
      <div className="result-stats">
        <div><b>{progress.xp}</b><span>XP</span></div>
        <div><b>{progress.streak}</b><span>дней подряд</span></div>
        <div><b>{done}/{LESSONS.length}</b><span>уроков</span></div>
        <div><b>{Object.keys(progress.srs).length}</b><span>слов</span></div>
        <div><b>{progress.spoken}</b><span>сказано вслух</span></div>
        <div><b>{progress.chats}</b><span>разговоров с ИИ</span></div>
      </div>
      <div className="card"><h3>Текущий уровень: {levelEst}</h3><div className="bar"><div className="bar-fill" style={{ width: (done / LESSONS.length) * 100 + '%' }} /></div></div>
      <div className="card">
        <h3>Активность за 4 недели</h3>
        <div className="heat">{days.map((d) => <div key={d.d} title={d.d + ': ' + d.xp + ' XP'} className="heat-cell" style={{ opacity: d.xp ? Math.min(1, 0.25 + d.xp / 100) : 0.08 }} />)}</div>
      </div>

      <h2>⚙️ Настройки</h2>
      <div className="card form">
        <h3>🤖 ИИ (Grok от xAI)</h3>
        <label>API-ключ
          <input type="password" value={settings.apiKey} placeholder="xai-… (можно оставить пустым, если ключ задан на сервере)" onChange={(e) => saveSettings({ apiKey: e.target.value.trim() })} />
        </label>
        <label>Подключение
          <select value={/^https?:/.test(settings.endpoint) ? 'direct' : 'proxy'} onChange={(e) => saveSettings({ endpoint: e.target.value === 'direct' ? 'https://api.x.ai/v1/chat/completions' : '/api/chat' })}>
            <option value="proxy">Через сервер приложения /api/chat (рекомендуется)</option>
            <option value="direct">Напрямую к api.x.ai из браузера</option>
          </select>
        </label>
        <label>Модель
          <input value={settings.model} onChange={(e) => saveSettings({ model: e.target.value.trim() })} list="models" />
          <datalist id="models"><option value="grok-4-fast-non-reasoning" /><option value="grok-4-fast-reasoning" /><option value="grok-4" /><option value="grok-3-mini" /><option value="grok-3" /></datalist>
        </label>
        <p className="muted small">Ключ хранится только в этом браузере. Получить ключ: console.x.ai</p>
        <button className="btn" onClick={testAi}>Проверить подключение</button>
        {test && <p className="small">{test}</p>}
      </div>
      <div className="card form">
        <h3>🔊 Голос и речь</h3>
        {!ttsSupported() && <p className="warn">Озвучка недоступна в этом браузере.</p>}
        <label>Немецкий голос
          <select value={settings.voiceURI} onChange={(e) => { saveSettings({ voiceURI: e.target.value }); setTimeout(() => speak('Hallo! Wie geht es dir?'), 50); }}>
            <option value="">Автоматически</option>
            {voices.map((v) => <option key={v.voiceURI} value={v.voiceURI}>{v.name} ({v.lang})</option>)}
          </select>
        </label>
        <label>Скорость речи: {settings.speechRate.toFixed(2)}
          <input type="range" min={0.6} max={1.3} step={0.05} value={settings.speechRate} onChange={(e) => saveSettings({ speechRate: Number(e.target.value) })} />
        </label>
        <AudioBtn text="Guten Tag! Ich bin Ihre Deutschlehrerin." label=" Тест" />
        <label className="toggle"><input type="checkbox" checked={settings.autoSpeak} onChange={(e) => saveSettings({ autoSpeak: e.target.checked })} /> Озвучивать ответы ИИ автоматически</label>
        <p className="muted small">Распознавание речи: {sttSupported() ? '✅ доступно' : '❌ недоступно (используйте Chrome или Edge)'}</p>
      </div>
      <div className="card form">
        <h3>📚 Обучение</h3>
        <label>Цель на день (XP)
          <select value={settings.dailyGoal} onChange={(e) => saveSettings({ dailyGoal: Number(e.target.value) })}>
            {[20, 50, 100, 150, 250].map((g) => <option key={g} value={g}>{g} XP — {g <= 20 ? 'легко' : g <= 50 ? 'нормально' : g <= 100 ? 'серьёзно' : 'интенсив'}</option>)}
          </select>
        </label>
        <label className="toggle"><input type="checkbox" checked={settings.unlockAll} onChange={(e) => saveSettings({ unlockAll: e.target.checked })} /> Открыть все уроки (для тех, кто не с нуля)</label>
      </div>
      <div className="card form">
        <h3>💾 Данные</h3>
        <div className="row-btns">
          <button className="btn" onClick={() => {
            const blob = new Blob([exportProgress()], { type: 'application/json' });
            const a = document.createElement('a'); a.href = URL.createObjectURL(blob); a.download = 'deutsch-weg-progress.json'; a.click();
          }}>Экспорт прогресса</button>
          <label className="btn">Импорт<input type="file" accept="application/json" hidden onChange={async (e) => {
            const f = e.target.files?.[0]; if (!f) return;
            try { importProgress(await f.text()); alert('Прогресс загружен'); } catch { alert('Неверный файл'); }
          }} /></label>
          <button className="btn danger" onClick={() => { if (confirm('Удалить весь прогресс?')) { resetProgress(); go({ n: 'home' }); } }}>Сбросить прогресс</button>
        </div>
      </div>
    </div>
  );
}
