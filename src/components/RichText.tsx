import { Fragment } from "react";

interface Props {
  text: string;
}

type Token = { kind: "text" | "code"; value: string };

function tokenize(text: string): Token[] {
  const tokens: Token[] = [];
  let i = 0;
  while (i < text.length) {
    if (text[i] === "`" && text[i + 1] === "`") {
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
      {tokens.map((t, i) =>
        t.kind === "code" ? (
          <code key={i}>{t.value}</code>
        ) : (
          <Fragment key={i}>{t.value}</Fragment>
        ),
      )}
    </>
  );
}
