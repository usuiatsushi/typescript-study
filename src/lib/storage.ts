import type { History, SessionResult } from "../types";

const KEY = "ts-study-history-v1";

export function loadHistory(): History {
  if (typeof localStorage === "undefined") return { sessions: [] };
  const raw = localStorage.getItem(KEY);
  if (!raw) return { sessions: [] };
  try {
    const parsed = JSON.parse(raw) as History;
    if (!parsed || !Array.isArray(parsed.sessions)) return { sessions: [] };
    return parsed;
  } catch {
    return { sessions: [] };
  }
}

export function appendSession(session: SessionResult): History {
  const current = loadHistory();
  const next: History = { sessions: [...current.sessions, session].slice(-50) };
  localStorage.setItem(KEY, JSON.stringify(next));
  return next;
}

export function clearHistory(): void {
  localStorage.removeItem(KEY);
}
