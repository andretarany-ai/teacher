export type Gender = 'der' | 'die' | 'das';
export type Level = 'A1' | 'A2' | 'B1' | 'B2';

/** Исходный (компактный) формат урока — так удобно писать контент. */
export interface LessonSrc {
  id: string;
  emoji: string;
  title: string; // по-русски
  de: string; // название по-немецки
  goal: string; // чему научимся
  grammar: { title: string; points: string[]; table?: string[][] };
  /** строки: "der Tisch, -e|стол" или "gehen|идти" */
  words: string;
  /** строки: "Ich heiße Anna.|Меня зовут Анна." */
  phrases: string;
  /** строки: "Ich {heiße} Anna.|Меня зовут Анна.|heiße,heißt,heißen" (вариантов может не быть → ввод с клавиатуры) */
  gaps: string;
  /** строки "A:..|.." — реплики собеседника, "B:..|.." — реплики ученика */
  dialog: string;
  dialogTitle: string;
  /** сценарий для ролевой игры с ИИ */
  roleplay: { role: string; situation: string; goal: string };
}

export interface Word {
  de: string; // без артикля
  ru: string;
  g?: Gender;
  pl?: string;
  full: string; // с артиклем
}
export interface Phrase { de: string; ru: string }
export interface Gap { before: string; answer: string; after: string; ru: string; opts?: string[]; full: string }
export interface DialogLine { who: 'A' | 'B'; de: string; ru: string }

export interface Lesson {
  id: string;
  level: Level;
  index: number; // порядковый номер во всём курсе
  emoji: string;
  title: string;
  de: string;
  goal: string;
  grammar: LessonSrc['grammar'];
  words: Word[];
  phrases: Phrase[];
  gaps: Gap[];
  dialog: DialogLine[];
  dialogTitle: string;
  roleplay: LessonSrc['roleplay'];
}
