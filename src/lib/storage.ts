import { useEffect, useState } from 'react';
import { cap } from './platform';

export interface Settings {
  apiKey: string;
  model: string;
  endpoint: string; // '/api/chat' (через сервер) или 'https://api.x.ai/v1/chat/completions'
  speechRate: number;
  voiceURI: string;
  autoSpeak: boolean;
  unlockAll: boolean;
  dailyGoal: number;
  showTranslit: boolean;
  grokVoice: string;
  useGrokVoice: boolean;
  useGrokStt: boolean;
  voiceModel: string;
}

const DEFAULT_SETTINGS: Settings = {
  apiKey: '',
  model: 'grok-4-fast-non-reasoning',
  endpoint: 'https://api.x.ai/v1/chat/completions',
  speechRate: 0.95,
  voiceURI: '',
  autoSpeak: true,
  unlockAll: false,
  dailyGoal: 50,
  showTranslit: true,
  grokVoice: 'eve',
  useGrokVoice: true,
  useGrokStt: true,
  voiceModel: 'grok-voice-latest',
};

export interface SrsItem { box: number; due: number; seen: number; wrong: number }
export interface LessonProgress { done: boolean; best: number; stars: number; times: number }

export interface Progress {
  xp: number;
  lessons: Record<string, LessonProgress>;
  srs: Record<string, SrsItem>; // ключ — немецкое слово с артиклем
  daily: Record<string, number>; // 'YYYY-MM-DD' → XP
  streak: number;
  lastDay: string;
  chats: number;
  spoken: number; // успешные голосовые ответы
  mistakes: { de: string; ru: string; at: number }[];
  updatedAt?: number;
}

const EMPTY: Progress = { xp: 0, lessons: {}, srs: {}, daily: {}, streak: 0, lastDay: '', chats: 0, spoken: 0, mistakes: [] };

const KS = 'dw.settings.v1';
const KP = 'dw.progress.v1';

function read<T>(k: string, def: T): T {
  try {
    const v = localStorage.getItem(k);
    return v ? { ...def, ...JSON.parse(v) } : { ...def };
  } catch { return { ...def }; }
}
function write(k: string, v: unknown) {
  try { localStorage.setItem(k, JSON.stringify(v)); } catch {}
}

let settings = read(KS, DEFAULT_SETTINGS);
let progress = read(KP, EMPTY);
const subs = new Set<() => void>();
const emit = () => subs.forEach((f) => f());

export const getSettings = () => settings;
export const getProgress = () => progress;

export function saveSettings(p: Partial<Settings>) {
  settings = { ...settings, ...p, };
  write(KS, settings);
  markChanged();
  emit();
}
export function updateProgress(fn: (p: Progress) => Progress | void) {
  const copy: Progress = JSON.parse(JSON.stringify(progress));
  progress = fn(copy) || copy;
  write(KP, progress);
  markChanged();
  emit();
}
export function resetProgress() {
  progress = { ...EMPTY, lessons: {}, srs: {}, daily: {}, mistakes: [] };
  write(KP, progress);
  markChanged();
  emit();
}

/* ---------- Синхронизация с аккаунтом Claude (capability db) ---------- */
// Настройки, которые относятся к устройству, не синхронизируются.
const LOCAL_ONLY: (keyof Settings)[] = ['apiKey', 'endpoint', 'voiceURI'];
const KU = 'dw.updatedAt.v1';
let localUpdatedAt = Number((() => { try { return localStorage.getItem(KU); } catch { return 0; } })() || 0);
let docRef: any = null;
let pushTimer: any = null;
let pushing = false;
let pendingPush = false;
export type SyncState = 'off' | 'connecting' | 'synced' | 'saving' | 'error';
let syncState: SyncState = 'off';
export const getSyncState = () => syncState;
const setSync = (s: SyncState) => { syncState = s; emit(); };

function markChanged() {
  localUpdatedAt = Date.now();
  try { localStorage.setItem(KU, String(localUpdatedAt)); } catch {}
  schedulePush();
}
function schedulePush() {
  if (!docRef) return;
  clearTimeout(pushTimer);
  pushTimer = setTimeout(push, 1500);
}
async function push() {
  if (!docRef) return;
  if (pushing) { pendingPush = true; return; }
  pushing = true; setSync('saving');
  const shared: Partial<Settings> = { ...settings };
  for (const k of LOCAL_ONLY) delete shared[k];
  try {
    await docRef.set({ progress, settings: shared, updatedAt: localUpdatedAt });
    setSync('synced');
  } catch { setSync('error'); }
  pushing = false;
  if (pendingPush) { pendingPush = false; push(); }
}

export async function startSync() {
  const [db, user] = await Promise.all([cap<any>('db'), cap<any>('user')]);
  if (!db || !user) return;
  setSync('connecting');
  let id: string | null = null;
  try { id = await user.id(); } catch {}
  if (!id) { setSync('off'); return; }
  docRef = db.doc(`data/users/${id}/state`);
  const timeout = setTimeout(() => { if (syncState === 'connecting') setSync('error'); }, 10000);
  let first = true;
  docRef.onSnapshot((snap: any) => {
    clearTimeout(timeout);
    const remote = snap.exists ? snap.data() : null;
    const rAt = Number(remote?.updatedAt || 0);
    if (remote && rAt > localUpdatedAt) {
      progress = { ...EMPTY, ...(remote.progress || {}) };
      const keep: Partial<Settings> = {};
      for (const k of LOCAL_ONLY) (keep as any)[k] = settings[k];
      settings = { ...DEFAULT_SETTINGS, ...(remote.settings || {}), ...keep };
      localUpdatedAt = rAt;
      write(KP, progress); write(KS, settings);
      try { localStorage.setItem(KU, String(rAt)); } catch {}
      setSync('synced');
      emit();
    } else if (first && (!remote || rAt < localUpdatedAt)) {
      push();
    } else setSync('synced');
    first = false;
  }, () => { clearTimeout(timeout); setSync('error'); });
}
export function exportProgress(): string { return JSON.stringify(progress); }
export function importProgress(json: string) {
  progress = { ...EMPTY, ...JSON.parse(json) };
  write(KP, progress);
  emit();
}

export function useStore() {
  const [, set] = useState(0);
  useEffect(() => {
    const f = () => set((x) => x + 1);
    subs.add(f);
    return () => { subs.delete(f); };
  }, []);
  return { settings, progress };
}

export const today = () => {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
};

export function addXp(n: number) {
  updateProgress((p) => {
    const t = today();
    p.xp += n;
    p.daily[t] = (p.daily[t] || 0) + n;
    if (p.lastDay !== t) {
      const y = new Date(); y.setDate(y.getDate() - 1);
      const yd = `${y.getFullYear()}-${String(y.getMonth() + 1).padStart(2, '0')}-${String(y.getDate()).padStart(2, '0')}`;
      p.streak = p.lastDay === yd ? p.streak + 1 : 1;
      p.lastDay = t;
    }
  });
}

/* ---------- Интервальное повторение (система Лейтнера) ---------- */
const INTERVALS_H = [0, 8, 24, 72, 168, 336, 720]; // часы для коробок 0..6

export function srsAdd(keys: string[]) {
  updateProgress((p) => {
    for (const k of keys) if (!p.srs[k]) p.srs[k] = { box: 0, due: Date.now() + 8 * 3600e3, seen: 0, wrong: 0 };
  });
}
export function srsAnswer(key: string, ok: boolean) {
  updateProgress((p) => {
    const it = p.srs[key] || { box: 0, due: 0, seen: 0, wrong: 0 };
    it.seen++;
    if (ok) it.box = Math.min(6, it.box + 1);
    else { it.box = Math.max(0, it.box - 2); it.wrong++; }
    it.due = Date.now() + INTERVALS_H[it.box] * 3600e3 + (ok ? 0 : 10 * 60e3);
    p.srs[key] = it;
  });
}
export function srsDue(): string[] {
  const now = Date.now();
  return Object.entries(progress.srs).filter(([, v]) => v.due <= now).sort((a, b) => a[1].box - b[1].box).map(([k]) => k);
}
export function addMistake(de: string, ru: string) {
  updateProgress((p) => {
    p.mistakes = [{ de, ru, at: Date.now() }, ...p.mistakes.filter((m) => m.de !== de)].slice(0, 100);
  });
}

/* ---------- Незаконченные уроки: место, где остановились ---------- */
export interface SavedRun { queue: any[]; i: number; stats: { total: number; correct: number; mistakes: number; spoken: number }; retried: string[]; savedAt: number }
const KR = 'dw.resume.v1';
function readRuns(): Record<string, SavedRun> {
  try { return JSON.parse(localStorage.getItem(KR) || '{}'); } catch { return {}; }
}
export function getResume(id: string): SavedRun | null {
  const r = readRuns()[id];
  return r && Array.isArray(r.queue) && r.i > 0 && r.i < r.queue.length ? r : null;
}
export function saveResume(id: string, run: SavedRun) {
  const all = readRuns();
  all[id] = run;
  try { localStorage.setItem(KR, JSON.stringify(all)); } catch {}
}
export function clearResume(id: string) {
  const all = readRuns();
  if (all[id]) { delete all[id]; try { localStorage.setItem(KR, JSON.stringify(all)); } catch {} }
}
