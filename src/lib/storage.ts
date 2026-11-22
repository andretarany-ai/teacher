import { useEffect, useState } from 'react';

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
}

const DEFAULT_SETTINGS: Settings = {
  apiKey: '',
  model: 'grok-4-fast-non-reasoning',
  endpoint: '/api/chat',
  speechRate: 0.95,
  voiceURI: '',
  autoSpeak: true,
  unlockAll: false,
  dailyGoal: 50,
  showTranslit: true,
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
  settings = { ...settings, ...p };
  write(KS, settings);
  emit();
}
export function updateProgress(fn: (p: Progress) => Progress | void) {
  const copy: Progress = JSON.parse(JSON.stringify(progress));
  progress = fn(copy) || copy;
  write(KP, progress);
  emit();
}
export function resetProgress() {
  progress = { ...EMPTY, lessons: {}, srs: {}, daily: {}, mistakes: [] };
  write(KP, progress);
  emit();
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
