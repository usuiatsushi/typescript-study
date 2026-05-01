import { Fragment } from "react";

interface Props {
  text: string;
}

type Token =
  | { kind: "text"; value: string }
  | { kind: "code"; value: string }
  | { kind: "block"; value: string; lang: string };

function tokenize(text: string): Token[] {
  const tokens: Token[] = [];
  let i = 0;
  while (i < text.length) {
    if (text[i] === "`" && text[i + 1] === "`" && text[i + 2] === "`") {
      const langStart = i + 3;
      const langEnd = text.indexOf("\n", langStart);
      const close = text.indexOf("```", Math.max(langEnd, langStart));
      if (langEnd === -1 || close === -1) {
        tokens.push({ kind: "text", value: text.slice(i) });
        break;
      }
      const lang = text.slice(langStart, langEnd).trim();
      let body = text.slice(langEnd + 1, close);
      if (body.endsWith("\n")) body = body.slice(0, -1);
      tokens.push({ kind: "block", value: body, lang });
      i = close + 3;
    } else if (text[i] === "`" && text[i + 1] === "`") {
      const end = text.indexOf("``", i + 2);
      if (end === -1) {
        tokens.push({ kind: "text", value: text.slice(i) });
        break;
      }
      tokens.push({ kind: "code", value: text.slice(i + 2, end) });
      i = end + 2;
    } else if (text[i] === "`") {
      const end = text.indexOf("`", i + 1);
      if (end === -1) {
        tokens.push({ kind: "text", value: text.slice(i) });
        break;
      }
      tokens.push({ kind: "code", value: text.slice(i + 1, end) });
      i = end + 1;
    } else {
      const next = text.indexOf("`", i);
      if (next === -1) {
        tokens.push({ kind: "text", value: text.slice(i) });
        break;
      }
      tokens.push({ kind: "text", value: text.slice(i, next) });
      i = next;
    }
  }
  return tokens;
}

export function RichText({ text }: Props) {
  const tokens = tokenize(text);
  return (
    <>
      {tokens.map((t, i) => {
        if (t.kind === "code") return <code key={i}>{t.value}</code>;
        if (t.kind === "block") {
          return (
            <pre key={i} className={t.lang ? `code-block lang-${t.lang}` : "code-block"}>
              <code>{t.value}</code>
            </pre>
          );
        }
        return <Fragment key={i}>{t.value}</Fragment>;
      })}
    </>
  );
}
