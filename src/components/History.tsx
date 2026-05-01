import { useState } from "react";
import { CATEGORY_LABEL, DIFFICULTY_LABEL } from "../types";
import { clearHistory, loadHistory } from "../lib/storage";

interface Props {
  onBack: () => void;
}

export function History({ onBack }: Props) {
  const [history, setHistory] = useState(() => loadHistory());

  const handleClear = () => {
    if (!confirm("学習履歴をすべて削除しますか？")) return;
    clearHistory();
    setHistory({ sessions: [] });
  };

  if (history.sessions.length === 0) {
    return (
      <section className="card">
        <h2>学習履歴</h2>
        <p className="dim">まだ受験記録はありません。</p>
        <div className="btn-row">
          <button className="btn" onClick={onBack}>
            ホームへ
          </button>
        </div>
      </section>
    );
  }

  const totalQuestions = history.sessions.reduce((s, x) => s + x.total, 0);
  const totalCorrect = history.sessions.reduce((s, x) => s + x.correct, 0);
  const overallPct = Math.round((totalCorrect / totalQuestions) * 100);

  return (
    <>
      <section className="card">
        <h2>学習履歴</h2>
        <div className="dim" style={{ fontSize: "0.85rem" }}>
          通算 {totalCorrect} / {totalQuestions} 問正解（{overallPct}%）
        </div>
      </section>

      <section className="card">
        {[...history.sessions].reverse().map((s, i) => {
          const pct = Math.round((s.correct / s.total) * 100);
          const categoryLabel =
            s.category === "all" ? "全カテゴリ" : CATEGORY_LABEL[s.category];
          const difficultyLabel =
            s.difficulty === "all"
              ? "全難易度"
              : DIFFICULTY_LABEL[s.difficulty];
          const date = new Date(s.finishedAt).toLocaleString("ja-JP");
          const badgeClass =
            s.difficulty === "all"
              ? "difficulty-badge all"
              : `difficulty-badge ${s.difficulty}`;
          return (
            <div className="history-item" key={`${s.finishedAt}-${i}`}>
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  flexWrap: "wrap",
                }}
              >
                {date} · {categoryLabel}
                <span className={badgeClass}>{difficultyLabel}</span>
              </span>
              <span>
                {s.correct}/{s.total} ({pct}%)
              </span>
            </div>
          );
        })}
      </section>

      <div className="btn-row">
        <button className="btn" onClick={handleClear}>
          履歴を削除
        </button>
      </div>
    </>
  );
}
