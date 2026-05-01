import { useState } from "react";
import type { Category, Difficulty } from "../types";
import { CATEGORY_LABEL, DIFFICULTY_LABEL } from "../types";
import { QUESTIONS } from "../data/questions";

interface Props {
  onStart: (
    category: Category | "all",
    difficulty: Difficulty | "all",
  ) => void;
  onShowHistory: () => void;
}

const DIFFICULTY_OPTIONS: ReadonlyArray<Difficulty | "all"> = [
  "all",
  "easy",
  "medium",
  "hard",
];

function difficultyLabel(d: Difficulty | "all"): string {
  return d === "all" ? "すべて" : DIFFICULTY_LABEL[d];
}

export function Home({ onStart, onShowHistory }: Props) {
  const [difficulty, setDifficulty] = useState<Difficulty | "all">("all");
  const categories = Object.keys(CATEGORY_LABEL) as Category[];

  const filteredByDifficulty =
    difficulty === "all"
      ? QUESTIONS
      : QUESTIONS.filter((q) => q.difficulty === difficulty);

  const totalForDifficulty = filteredByDifficulty.length;

  const counts = categories.reduce<Record<Category, number>>(
    (acc, c) => {
      acc[c] = filteredByDifficulty.filter((q) => q.category === c).length;
      return acc;
    },
    Object.fromEntries(categories.map((c) => [c, 0])) as Record<Category, number>,
  );

  return (
    <>
      <section className="card">
        <div className="section-heading">難易度</div>
        <div className="pill-group">
          {DIFFICULTY_OPTIONS.map((d) => (
            <button
              key={d}
              type="button"
              className={`pill${difficulty === d ? " active" : ""}`}
              onClick={() => setDifficulty(d)}
            >
              {difficultyLabel(d)}
            </button>
          ))}
        </div>
        <p className="dim" style={{ marginTop: 12, marginBottom: 0, fontSize: "0.88rem" }}>
          {difficultyLabel(difficulty)}: {totalForDifficulty}問
        </p>
      </section>

      <section className="cta-card">
        <div className="section-heading">全カテゴリ通し</div>
        <h2 style={{ marginTop: 4 }}>まとめて挑戦</h2>
        <p className="dim" style={{ marginTop: 0 }}>
          選択した難易度の全カテゴリ問題をシャッフルして出題します。
        </p>
        <div className="btn-row">
          <button
            className="btn btn-primary"
            onClick={() => onStart("all", difficulty)}
            disabled={totalForDifficulty === 0}
          >
            全カテゴリ通し ({totalForDifficulty}問)
          </button>
        </div>
      </section>

      <section className="card">
        <div className="section-heading">カテゴリ別</div>
        <div className="btn-row">
          {categories.map((c) => (
            <button
              key={c}
              className="btn"
              onClick={() => onStart(c, difficulty)}
              disabled={counts[c] === 0}
            >
              {CATEGORY_LABEL[c]} ({counts[c]})
            </button>
          ))}
        </div>
      </section>

      <section className="card">
        <div className="section-heading">学習履歴</div>
        <div className="btn-row">
          <button className="btn" onClick={onShowHistory}>
            学習履歴を見る
          </button>
        </div>
      </section>
    </>
  );
}
