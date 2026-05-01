export type Category =
  | "basic"
  | "interface"
  | "generics"
  | "utility"
  | "advanced"
  | "narrowing"
  | "classes";

export const CATEGORY_LABEL: Record<Category, string> = {
  basic: "基本型 (Basic Types)",
  interface: "インターフェース / 型エイリアス",
  generics: "ジェネリクス",
  utility: "ユーティリティ型",
  advanced: "高度な型 (Conditional / Mapped / Infer)",
  narrowing: "型の絞り込み (Type Narrowing)",
  classes: "クラス (Classes)",
};

export type Difficulty = "easy" | "medium" | "hard";

export const DIFFICULTY_LABEL: Record<Difficulty, string> = {
  easy: "やさしい",
  medium: "ふつう",
  hard: "むずかしい",
};

export interface Question {
  readonly id: string;
  readonly category: Category;
  readonly difficulty: Difficulty;
  readonly prompt: string;
  readonly choices: readonly string[];
  readonly answerIndex: number;
  readonly explanation: string;
}

export interface AnswerResult {
  readonly questionId: string;
  readonly correct: boolean;
  readonly selected: number;
}

export interface SessionResult {
  readonly startedAt: string;
  readonly finishedAt: string;
  readonly category: Category | "all";
  readonly difficulty: Difficulty | "all";
  readonly total: number;
  readonly correct: number;
  readonly answers: readonly AnswerResult[];
}

export interface History {
  readonly sessions: readonly SessionResult[];
}
