import { useState } from "react";
import type { Category, SessionResult } from "./types";
import { Home } from "./components/Home";
import { Quiz } from "./components/Quiz";
import { Result } from "./components/Result";
import { History } from "./components/History";

type View =
  | { kind: "home" }
  | { kind: "quiz"; category: Category | "all" }
  | { kind: "result"; session: SessionResult }
  | { kind: "history" };

export function App() {
  const [view, setView] = useState<View>({ kind: "home" });

  return (
    <div className="app">
      <header className="header">
        <div className="title">
          TypeScript Study Quiz
          <small>型システムを楽しく身につける</small>
        </div>
        {view.kind !== "home" && (
          <button className="btn btn-ghost" onClick={() => setView({ kind: "home" })}>
            ← ホーム
          </button>
        )}
      </header>

      {view.kind === "home" && (
        <Home
          onStart={(category) => setView({ kind: "quiz", category })}
          onShowHistory={() => setView({ kind: "history" })}
        />
      )}

      {view.kind === "quiz" && (
        <Quiz
          category={view.category}
          onFinish={(session) => setView({ kind: "result", session })}
        />
      )}

      {view.kind === "result" && (
        <Result
          session={view.session}
          onRetry={() =>
            setView({ kind: "quiz", category: view.session.category })
          }
          onHome={() => setView({ kind: "home" })}
        />
      )}

      {view.kind === "history" && (
        <History onBack={() => setView({ kind: "home" })} />
      )}

      <div className="footer">
        © {new Date().getFullYear()} typescript-study · Built with React + Vite
      </div>
    </div>
  );
}
