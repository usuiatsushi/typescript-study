import type { Question } from "../../types";

export const questions: readonly Question[] = [
  {
    id: "narrow-009",
    category: "narrowing",
    difficulty: "easy",
    prompt:
      "`x: unknown` に対して `typeof x === \"function\"` で絞り込んだとき、`x` の型はどうなりますか？",
    choices: [
      "`Function`",
      "`(...args: unknown[]) => unknown`",
      "`object`",
      "`never`",
    ],
    answerIndex: 0,
    explanation:
      "`typeof x === \"function\"` で絞り込まれると、TypeScript は `x` を組み込みの `Function` 型として扱います。引数や戻り値の型までは推論しません。",
  },
  {
    id: "narrow-010",
    category: "narrowing",
    difficulty: "easy",
    prompt:
      "次のうち、`typeof null` の値として正しいものはどれですか？",
    choices: ["\"null\"", "\"undefined\"", "\"object\"", "\"none\""],
    answerIndex: 2,
    explanation:
      "JavaScript の歴史的バグで `typeof null === \"object\"` になります。そのため `typeof v === \"object\"` だけでは `null` を排除できず、`v !== null` の併用が必要です。",
  },
  {
    id: "narrow-011",
    category: "narrowing",
    difficulty: "easy",
    prompt:
      "`x: unknown` を配列として絞り込みたいとき、最も推奨される方法はどれですか？",
    choices: [
      "`typeof x === \"object\"` でチェックする",
      "`x instanceof Array` でチェックする",
      "`Array.isArray(x)` でチェックする",
      "`x.length !== undefined` でチェックする",
    ],
    answerIndex: 2,
    explanation:
      "`Array.isArray` は型ガードとして定義されており、`unknown` を `any[]` に絞り込みます。iframe を跨いだ場合でも `instanceof Array` より堅牢です。",
  },
  {
    id: "narrow-012",
    category: "narrowing",
    difficulty: "easy",
    prompt:
      "`if (s)` のような真偽値による絞り込み（truthiness narrowing）で、空文字列 `\"\"` はどう扱われますか？",
    choices: [
      "true として扱われる",
      "false として扱われ、`if` の中では `s` の型から除外される",
      "コンパイルエラー",
      "string 型のまま変化しない",
    ],
    answerIndex: 1,
    explanation:
      "空文字列は falsy なので、`if (s)` の中では `s: string` でも `\"\"` は除外され、null/undefined も排除されます。空文字を区別したい場合は `s !== \"\"` を使います。",
  },
  {
    id: "narrow-013",
    category: "narrowing",
    difficulty: "easy",
    prompt:
      "`n: number | undefined` に対し `if (n) { ... }` の中で `n` の型はどうなりますか？",
    choices: [
      "`number`（ただし `0` も除外される）",
      "`number | undefined`",
      "`undefined`",
      "`never`",
    ],
    answerIndex: 0,
    explanation:
      "truthiness 絞り込みでは falsy な `0` と `undefined` の両方が除外されます。`0` を残したい場合は `n !== undefined` で絞り込む必要があります。",
  },
  {
    id: "narrow-014",
    category: "narrowing",
    difficulty: "easy",
    prompt:
      "次のような型述語（type predicate）はどれですか？",
    choices: [
      "`function isString(x: unknown): boolean`",
      "`function isString(x: unknown): x is string`",
      "`function isString(x: unknown): asserts x`",
      "`function isString<T>(x: T): T`",
    ],
    answerIndex: 1,
    explanation:
      "戻り値の型に `x is string` のように `引数 is 型` を書くのがユーザー定義の型ガード（型述語）です。`true` を返したとき呼び出し側で `x` が `string` に絞り込まれます。",
  },
  {
    id: "narrow-015",
    category: "narrowing",
    difficulty: "easy",
    prompt:
      "判別可能なユニオン（discriminated union）に欠かせない要素はどれですか？",
    choices: [
      "ジェネリックパラメータ",
      "リテラル型を持つ共通の判別プロパティ",
      "クラス継承",
      "`any` 型のフィールド",
    ],
    answerIndex: 1,
    explanation:
      "判別可能なユニオンは、各メンバーが共通名のプロパティ（例: `kind`）を持ち、その値が互いに重ならないリテラル型であることが条件です。",
  },
  {
    id: "narrow-016",
    category: "narrowing",
    difficulty: "easy",
    prompt:
      "`switch` の `default` 節で `const _: never = x;` を書く目的は何ですか？",
    choices: [
      "実行時にエラーを投げるため",
      "コンパイル時に網羅性チェックを行うため",
      "型を `any` にキャストするため",
      "未使用変数の警告を抑制するため",
    ],
    answerIndex: 1,
    explanation:
      "全ケースを処理し終えた `default` では `x` の型が `never` になります。`never` 以外が代入されるとコンパイルエラーになるため、ケース漏れを静的に検出できます。",
  },
  {
    id: "narrow-017",
    category: "narrowing",
    difficulty: "medium",
    prompt:
      "次のコードの結果として正しいものはどれですか？\n```ts\nclass Animal {}\nclass Dog extends Animal { bark() {} }\nfunction f(a: Animal) {\n  if (a instanceof Dog) {\n    a.bark();\n  }\n}\n```",
    choices: [
      "`a` は `Dog` に絞り込まれ、`bark()` を安全に呼べる",
      "`instanceof` はクラス継承では機能しない",
      "実行時エラーになる",
      "`a` は `Animal & Dog` に絞り込まれる",
    ],
    answerIndex: 0,
    explanation:
      "`instanceof` は派生クラスでも有効で、`a` は `Dog` に絞り込まれます。`Dog` は `Animal` を継承するため `bark()` も含めてアクセスできます。",
  },
  {
    id: "narrow-018",
    category: "narrowing",
    difficulty: "medium",
    prompt:
      "ジェネリック関数で `if (x instanceof T)` のように型パラメータ `T` を使うとどうなりますか？",
    choices: [
      "`T` で正しく絞り込める",
      "`T` は実行時に存在しないためコンパイルエラーになる",
      "実行時に常に `false` を返す",
      "`unknown` に絞り込まれる",
    ],
    answerIndex: 1,
    explanation:
      "型パラメータは型消去されるため、ランタイムには存在しません。`instanceof` の右辺はコンストラクタ値である必要があり、`T` を直接書くことはできません。コンストラクタ値を引数で受け取る必要があります。",
  },
  {
    id: "narrow-019",
    category: "narrowing",
    difficulty: "medium",
    prompt:
      "`e: unknown` を `Error` のサブクラス `MyError` に絞り込む正しい方法はどれですか？",
    choices: [
      "`typeof e === \"object\"`",
      "`e instanceof MyError`",
      "`(e as MyError).name === \"MyError\"`",
      "`Object.getPrototypeOf(e) === MyError`",
    ],
    answerIndex: 1,
    explanation:
      "`instanceof MyError` でプロトタイプチェーンを辿って判定でき、型も `MyError` に絞り込まれます。`as` でのキャストは型ガードではなく実行時の検査もしません。",
  },
  {
    id: "narrow-020",
    category: "narrowing",
    difficulty: "medium",
    prompt:
      "次のコードで `x` の型はどうなりますか？\n```ts\ndeclare const x: \"a\" | \"b\" | \"c\";\nif (x === \"a\") {\n  // ここでの x の型\n}\n```",
    choices: [
      "`string`",
      "`\"a\"`",
      "`\"a\" | \"b\" | \"c\"`",
      "`never`",
    ],
    answerIndex: 1,
    explanation:
      "`===` によるリテラル比較は等値による絞り込み（equality narrowing）を行い、`x` の型は `\"a\"` リテラル型に絞り込まれます。",
  },
  {
    id: "narrow-021",
    category: "narrowing",
    difficulty: "medium",
    prompt:
      "`x: number | string` と `y: string` に対し、`if (x == y)` の中で `x` の型はどうなりますか？",
    choices: [
      "`string`",
      "`number`",
      "`number | string`",
      "`never`",
    ],
    answerIndex: 0,
    explanation:
      "TypeScript は `==`（緩い等値）でも型を絞り込みます。`y: string` と等しいなら `x` は `string` 側に絞り込まれます（数値→文字列の暗黙変換は型上はサポートされない）。",
  },
  {
    id: "narrow-022",
    category: "narrowing",
    difficulty: "medium",
    prompt:
      "次のコードについて正しい説明はどれですか？\n```ts\nconst arr: (string | undefined)[] = [\"a\", undefined, \"b\"];\nconst filtered = arr.filter(x => x !== undefined);\n```",
    choices: [
      "`filtered` は `string[]` に推論される",
      "`filtered` は `(string | undefined)[]` のままになる",
      "`filtered` は `undefined[]` になる",
      "コンパイルエラーになる",
    ],
    answerIndex: 1,
    explanation:
      "通常のコールバックでは `filter` の結果型は元の配列と同じです。`string[]` にしたい場合は型述語を使い `(x): x is string => x !== undefined` のように書きます（TS 5.5 以降は推論可能）。",
  },
  {
    id: "narrow-023",
    category: "narrowing",
    difficulty: "medium",
    prompt:
      "メソッドとして定義する型述語の構文として正しいのはどれですか？",
    choices: [
      "`isFoo(): asserts this is Foo`",
      "`isFoo(): this is Foo`",
      "`isFoo(): Foo | false`",
      "`isFoo<this>(): boolean`",
    ],
    answerIndex: 1,
    explanation:
      "メソッドの戻り値型に `this is Foo` と書くと、`obj.isFoo()` が `true` のとき `obj` を `Foo` に絞り込めます。クラスやインターフェースで便利です。",
  },
  {
    id: "narrow-024",
    category: "narrowing",
    difficulty: "medium",
    prompt:
      "次のシグネチャの関数はどんな働きをしますか？\n```ts\nfunction assertString(x: unknown): asserts x is string\n```",
    choices: [
      "戻り値が `boolean` の通常の型ガード",
      "呼び出し後、以降のコードで `x` を `string` として扱えるようにするアサーション関数",
      "`x` が `string` でなければコンパイルエラー",
      "実行時に `x` を `string` に変換する",
    ],
    answerIndex: 1,
    explanation:
      "`asserts x is T` を持つ関数は、戻り（throw しなかった）時点で `x` が `T` であることを TypeScript に伝えます。以降の制御フローで `x` は `T` として絞り込まれます。",
  },
  {
    id: "narrow-025",
    category: "narrowing",
    difficulty: "medium",
    prompt:
      "次のコードで関数 `cb` 内の `s` の型はどうなりますか？\n```ts\nfunction f(s: string | undefined) {\n  if (s !== undefined) {\n    const cb = () => {\n      // ここで s の型は？\n    };\n    cb();\n  }\n}\n```",
    choices: [
      "`string`",
      "`string | undefined`（クロージャ内で再絞り込みは効かない）",
      "`undefined`",
      "コンパイルエラー",
    ],
    answerIndex: 1,
    explanation:
      "クロージャ内では関数が後で呼ばれる可能性があるため、TS は外側の絞り込みを保守的に解除し `string | undefined` のまま扱います。`const local = s;` で別変数に束ねるのが定石です。",
  },
  {
    id: "narrow-026",
    category: "narrowing",
    difficulty: "medium",
    prompt:
      "次の判別可能ユニオンに対する正しい絞り込みはどれですか？\n```ts\ntype Shape =\n  | { kind: \"circle\"; r: number }\n  | { kind: \"square\"; size: number };\n```",
    choices: [
      "`if (\"r\" in s)` で `circle` に絞り込める",
      "`switch (s.kind)` で各ケース内に対応する型に絞り込める",
      "1 と 2 の両方が可能",
      "型ガード関数なしでは絞り込めない",
    ],
    answerIndex: 2,
    explanation:
      "判別プロパティ `kind` で `switch` するのが一般的ですが、固有プロパティ `r` への `in` チェックでも絞り込めます。両方とも有効な手段です。",
  },
  {
    id: "narrow-027",
    category: "narrowing",
    difficulty: "medium",
    prompt:
      "`!`（非 null アサーション演算子）と適切な絞り込みについて正しい記述はどれですか？",
    choices: [
      "`!` は実行時にも null を排除する安全な機能",
      "`!` はコンパイラに「null/undefined ではない」と伝えるだけで、間違っていればランタイムエラーになる",
      "`!` を使うと型は `never` になる",
      "`!` は `instanceof` と同じ意味",
    ],
    answerIndex: 1,
    explanation:
      "`!` は型チェックを黙らせる脱出ハッチで、ランタイムには何もしません。可能な限り `if (x != null)` などの本来の絞り込みで安全性を担保すべきです。",
  },
  {
    id: "narrow-028",
    category: "narrowing",
    difficulty: "medium",
    prompt:
      "次のコードで `c` の中の `x.kind` の型はどうなりますか？\n```ts\ntype A = { kind: \"a\"; a: number };\ntype B = { kind: \"b\"; b: string };\ndeclare const x: A | B;\nconst c = x.kind;\nif (c === \"a\") {\n  // ここでの x.kind の型\n}\n```",
    choices: [
      "`\"a\"`",
      "`\"a\" | \"b\"`（別名 const 経由でも `x` 自体は絞り込まれない）",
      "`string`",
      "`never`",
    ],
    answerIndex: 0,
    explanation:
      "TS 4.4 以降の別名条件分析（aliased conditions）により、`const c = x.kind` を介した比較でも `x` 自体が絞り込まれます。`x` は `A` に、`x.kind` は `\"a\"` になります。",
  },
  {
    id: "narrow-029",
    category: "narrowing",
    difficulty: "medium",
    prompt:
      "判別プロパティを optional にした次のような型は何が問題ですか？\n```ts\ntype Event = { kind?: \"click\" | \"hover\"; x: number };\n```",
    choices: [
      "`kind` が省略可能なので `switch (e.kind)` で網羅性チェックが効かず、判別可能ユニオンとして機能しない",
      "型エイリアスは optional プロパティを持てない",
      "リテラル型を optional にできない",
      "問題なく判別可能ユニオンとして機能する",
    ],
    answerIndex: 0,
    explanation:
      "判別プロパティが optional だと `undefined` も取り得るため、各バリアントが排他的に区別できず判別ユニオンになりません。`kind` を必須にして、各バリアントを明示的に union として書き分けるのが定石です。",
  },
  {
    id: "narrow-030",
    category: "narrowing",
    difficulty: "medium",
    prompt:
      "`let` で宣言した変数に対する制御フロー解析（CFA）について正しいのはどれですか？",
    choices: [
      "再代入後は新しい右辺の型に基づき再絞り込みされる",
      "`let` 変数は絞り込みが一切効かない",
      "`let` は宣言時の型に固定され、絞り込みできない",
      "`let` を絞り込むには `const` に書き換える必要がある",
    ],
    answerIndex: 0,
    explanation:
      "TS の CFA は `let` の再代入を追跡し、代入式の型で変数の現在の絞り込みを更新します（narrowing on assignment）。条件分岐内での絞り込みも通常通り機能します。",
  },
  {
    id: "narrow-031",
    category: "narrowing",
    difficulty: "hard",
    prompt:
      "次のコードで `arr` を絞り込む際の挙動として正しいのはどれですか？\n```ts\nfunction f(arr: readonly string[] | string) {\n  if (Array.isArray(arr)) {\n    // ここでの arr の型\n  }\n}\n```",
    choices: [
      "`arr` は `string[]` に絞り込まれる",
      "`arr` は `readonly string[]` に絞り込まれる",
      "`Array.isArray` は readonly 配列を判別できずコンパイルエラー",
      "`arr` は `never` になる",
    ],
    answerIndex: 1,
    explanation:
      "TS 4.x 以降、`Array.isArray` は readonly な配列型に対しても適切に絞り込めるよう改善され、`readonly string[]` をそのまま絞り込めます（古い版では `any[]` に絞られる問題がありました）。",
  },
  {
    id: "narrow-032",
    category: "narrowing",
    difficulty: "hard",
    prompt:
      "次のコードで型エラーが起きるのはなぜですか？\n```ts\nfunction first<T extends string | number>(x: T): T {\n  if (typeof x === \"string\") {\n    return x.toUpperCase() as T; // x は string に絞り込まれる\n  }\n  return x;\n}\n```（`as T` を取り除いた場合）",
    choices: [
      "型パラメータ `T` の絞り込みは実体を変えず、`string` を `T` として返せないため",
      "`toUpperCase` が存在しないため",
      "`T extends string | number` は不正だから",
      "戻り値型に `T` を使えないため",
    ],
    answerIndex: 0,
    explanation:
      "`x` を `string` に絞り込んでも `T` 自体は `\"a\"` のような部分型かもしれず、`toUpperCase()` の戻り値（`string`）が常に `T` の部分型である保証はありません。型パラメータの絞り込みには本質的な制限があります。",
  },
  {
    id: "narrow-033",
    category: "narrowing",
    difficulty: "hard",
    prompt:
      "次のコードで `x` の型はどうなりますか？\n```ts\ntype A = { a: number; common: string };\ntype B = { b: string; common: string };\ndeclare const x: A | B;\nif (\"a\" in x) {\n  // ここでの x の型\n}\n```",
    choices: [
      "`A`",
      "`A | B`",
      "`A & B`",
      "`never`",
    ],
    answerIndex: 0,
    explanation:
      "`in` 演算子は対象プロパティを持つメンバーに絞り込みます。`a` を持つのは `A` だけなので、`x` は `A` に絞り込まれます。",
  },
  {
    id: "narrow-034",
    category: "narrowing",
    difficulty: "hard",
    prompt:
      "アサーション関数を使った次のコードで `s.length` の呼び出しは正当ですか？\n```ts\nfunction assertString(x: unknown): asserts x is string {\n  if (typeof x !== \"string\") throw new Error();\n}\nfunction f(s: unknown) {\n  assertString(s);\n  return s.length;\n}\n```",
    choices: [
      "正当。`assertString` の後 `s` は `string` として扱える",
      "不正。アサーション関数は呼び出し後の絞り込みに影響しない",
      "`s` は依然として `unknown` のままでエラー",
      "`assertString` は明示的に `s` を返さないので無効",
    ],
    answerIndex: 0,
    explanation:
      "`asserts x is T` を持つ関数は呼び出し後 `x` を `T` に絞り込みます。`assertString(s)` の後、`s` は `string` として扱えるので `s.length` は正当です。",
  },
  {
    id: "narrow-035",
    category: "narrowing",
    difficulty: "hard",
    prompt:
      "`as const` で宣言したオブジェクトの判別ユニオン化について正しいのはどれですか？\n```ts\nconst events = [\n  { kind: \"click\", x: 1 },\n  { kind: \"hover\", target: \"btn\" },\n] as const;\n```",
    choices: [
      "`as const` により各要素の `kind` がリテラル型になり、要素を判別ユニオンとして扱える",
      "`as const` は配列を `readonly` にするだけで、判別ユニオン化には無関係",
      "`as const` を使うと `kind` が `string` に広がる",
      "コンパイルエラーになる",
    ],
    answerIndex: 0,
    explanation:
      "`as const` はリテラル型を保持し、各要素の `kind` を `\"click\"` / `\"hover\"` のような正確なリテラル型にします。これにより `events[i].kind` で判別可能ユニオンとして絞り込みが可能になります。",
  },
];
