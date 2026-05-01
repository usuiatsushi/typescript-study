import { QUESTIONS } from "../data/questions";
import type { Category, Difficulty, Question } from "../types";

export function pickQuestions(
  category: Category | "all",
  difficulty: Difficulty | "all",
  limit?: number,
): Question[] {
  const byCategory =
    category === "all"
      ? [...QUESTIONS]
      : QUESTIONS.filter((q) => q.category === category);
  const pool =
    difficulty === "all"
      ? byCategory
      : byCategory.filter((q) => q.difficulty === difficulty);
  const ordered = typeof limit === "number" ? shuffle(pool).slice(0, limit) : shuffle(pool);
  return ordered.map(shuffleChoices);
}

function shuffleChoices(q: Question): Question {
  const indices = q.choices.map((_, i) => i);
  shuffleInPlace(indices);
  const newChoices = indices.map((i) => q.choices[i] as string);
  const newAnswerIndex = indices.indexOf(q.answerIndex);
  return { ...q, choices: newChoices, answerIndex: newAnswerIndex };
}

function shuffle<T>(arr: readonly T[]): T[] {
  const a = [...arr];
  shuffleInPlace(a);
  return a;
}

function shuffleInPlace<T>(a: T[]): void {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const ai = a[i] as T;
    const aj = a[j] as T;
    a[i] = aj;
    a[j] = ai;
  }
}
