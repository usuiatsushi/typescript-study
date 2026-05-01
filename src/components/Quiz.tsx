import { useMemo, useState } from "react";
import type {
  AnswerResult,
  Category,
  Difficulty,
  SessionResult,
} from "../types";
import { CATEGORY_LABEL, DIFFICULTY_LABEL } from "../types";
import { pickQuestions } from "../lib/quiz";
import { appendSession } from "../lib/storage";
import { RichText } from "./RichText";

interface Props {
  category: Category | "all";
  difficulty: Difficulty | "all";
  onFinish: (session: SessionResult) => void;
}

export function Quiz({ category, difficulty, onFinish }: Props) {
  const questions = useMemo(
    () => pickQuestions(category, difficulty),
    [category, difficulty],
  );
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [answers, setAnswers] = useState<AnswerResult[]>([]);
  const startedAt = useMemo(() => new Date().toISOString(), []);

  if (questions.length === 0) {
    return (
      <section className="card">
        <p>このカテゴリ・難易度に該当する問題がありません。</p>
      </section>
    );
  }

  const current = questions[index];
  if (!current) return null;
  const isAnswered = selected !== null;
  const isCorrect = selected === current.answerIndex;

  const handleSelect = (i: number) => {
    if (isAnswered) return;
    setSelected(i);
    setAnswers((prev) => [
      ...prev,
      {
        questionId: current.id,
        selected: i,
        correct: i === current.answerIndex,
      },
    ]);
  };

  const handleNext = () => {
    if (index + 1 < questions.length) {
      setIndex(index + 1);
      setSelected(null);
      return;
    }
    const finalAnswers = answers;
    const correct = finalAnswers.filter((a) => a.correct).length;
    const session: SessionResult = {
      startedAt,
      finishedAt: new Date().toISOString(),
      category,
      difficulty,
      total: questions.length,
      correct,
      answers: finalAnswers,
    };
    appendSession(session);
    onFinish(session);
  };

  const progress = ((index + (isAnswered ? 1 : 0)) / questions.length) * 100;
  const categoryLabel =
    category === "all" ? "全カテゴリ" : CATEGORY_LABEL[category];
  const difficultyHeaderLabel =
    difficulty === "all" ? "全難易度" : DIFFICULTY_LABEL[difficulty];

  return (
    <>
      <div className="progress">
        <span>
          {categoryLabel} · {difficultyHeaderLabel}
        </span>
        <span>
          {index + 1} / {questions.length}
        </span>
      </div>
      <div className="bar">
        <div className="bar-fill" style={{ width: `${progress}%` }} />
      </div>

      <section className="card">
        <div>
          <span className="tag">{CATEGORY_LABEL[current.category]}</span>
          <span className={`difficulty-badge ${current.difficulty}`}>
            {DIFFICULTY_LABEL[current.difficulty]}
          </span>
        </div>
        <div className="prompt"><RichText text={current.prompt} /></div>

        <div className="choices">
          {current.choices.map((c, i) => {
            const cls = !isAnswered
              ? "choice"
              : i === current.answerIndex
                ? "choice correct"
                : i === selected
                  ? "choice wrong"
                  : "choice";
            return (
              <button
                key={i}
                className={cls}
                disabled={isAnswered}
                onClick={() => handleSelect(i)}
              >
                <span className="choice-letter">{String.fromCharCode(65 + i)}</span>
                <span className="choice-text"><RichText text={c} /></span>
              </button>
            );
          })}
        </div>

        {isAnswered && (
          <>
            <div className="explanation">
              <strong>{isCorrect ? "正解！" : "不正解"}</strong>
              <div style={{ marginTop: 6 }}><RichText text={current.explanation} /></div>
            </div>
            <div className="btn-row" style={{ marginTop: 16 }}>
              <button className="btn btn-primary" onClick={handleNext}>
                {index + 1 < questions.length ? "次の問題 →" : "結果を見る"}
              </button>
            </div>
          </>
        )}
      </section>
    </>
  );
}
