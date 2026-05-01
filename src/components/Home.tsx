import type { Category } from "../types";
import { CATEGORY_LABEL } from "../types";
import { QUESTIONS } from "../data/questions";

interface Props {
  onStart: (category: Category | "all") => void;
  onShowHistory: () => void;
}

export function Home({ onStart, onShowHistory }: Props) {
  const categories = Object.keys(CATEGORY_LABEL) as Category[];
  const counts = categories.reduce<Record<Category, number>>(
    (acc, c) => {
      acc[c] = QUESTIONS.filter((q) => q.category === c).length;
      return acc;
    },
    Object.fromEntries(categories.map((c) => [c, 0])) as Record<Category, number>,
  );

  return (
    <>
      <section className="card">
        <h2>カテゴリを選んでスタート</h2>
        <p className="dim" style={{ marginTop: 0 }}>
          全{QUESTIONS.length}問。カテゴリ別 or まとめて挑戦できます。
        </p>
        <div className="btn-row">
          <button className="btn btn-primary" onClick={() => onStart("all")}>
            全カテゴリ通し ({QUESTIONS.length}問)
          </button>
        </div>
      </section>

      <section className="card">
        <h3>カテゴリ別</h3>
        <div className="btn-row">
          {categories.map((c) => (
            <button key={c} className="btn" onClick={() => onStart(c)}>
              {CATEGORY_LABEL[c]} ({counts[c]})
            </button>
          ))}
        </div>
      </section>

      <section className="card">
        <h3>その他</h3>
        <div className="btn-row">
          <button className="btn" onClick={onShowHistory}>
            学習履歴を見る
          </button>
        </div>
      </section>
    </>
  );
}
