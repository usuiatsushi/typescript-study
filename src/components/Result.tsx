import type { SessionResult } from "../types";
import { CATEGORY_LABEL, DIFFICULTY_LABEL } from "../types";

interface Props {
  session: SessionResult;
  onRetry: () => void;
  onHome: () => void;
}

export function Result({ session, onRetry, onHome }: Props) {
  const pct = Math.round((session.correct / session.total) * 100);
  const rating =
    pct === 100
      ? "Perfect! 🎉"
      : pct >= 80
        ? "Great!"
        : pct >= 60
          ? "Good"
          : "もう一度挑戦しよう";
  const categoryLabel =
    session.category === "all"
      ? "全カテゴリ"
      : CATEGORY_LABEL[session.category];
  const difficultyLabel =
    session.difficulty === "all"
      ? "全難易度"
      : DIFFICULTY_LABEL[session.difficulty];

  return (
    <section className="card center">
      <div
        style={{
          display: "flex",
          gap: 6,
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        <span className="tag">{categoryLabel}</span>
        {session.difficulty !== "all" ? (
          <span className={`difficulty-badge ${session.difficulty}`}>
            {difficultyLabel}
          </span>
        ) : (
          <span className="difficulty-badge all">{difficultyLabel}</span>
        )}
      </div>
      <div className="score" style={{ marginTop: 12 }}>
        {session.correct} / {session.total}
      </div>
      <div className="dim">正答率 {pct}%</div>
      <h2 style={{ marginTop: 16 }}>{rating}</h2>
      <div className="btn-row" style={{ justifyContent: "center", marginTop: 16 }}>
        <button className="btn btn-primary" onClick={onRetry}>
          もう一度
        </button>
        <button className="btn" onClick={onHome}>
          ホームへ
        </button>
      </div>
    </section>
  );
}
