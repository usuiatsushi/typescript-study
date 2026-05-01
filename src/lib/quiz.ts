import { QUESTIONS } from "../data/questions";
import type { Category, Question } from "../types";

export function pickQuestions(
  category: Category | "all",
  limit?: number,
): Question[] {
  const pool =
    category === "all"
      ? [...QUESTIONS]
      : QUESTIONS.filter((q) => q.category === category);
  const shuffled = shuffle(pool);
  return typeof limit === "number" ? shuffled.slice(0, limit) : shuffled;
}

function shuffle<T>(arr: readonly T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const ai = a[i] as T;
    const aj = a[j] as T;
    a[i] = aj;
    a[j] = ai;
  }
  return a;
}
