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

export interface Question {
  readonly id: string;
  readonly category: Category;
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
  readonly total: number;
  readonly correct: number;
  readonly answers: readonly AnswerResult[];
}

export interface History {
  readonly sessions: readonly SessionResult[];
}
