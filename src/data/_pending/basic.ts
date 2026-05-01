import type { Question } from "../../types";

export const questions: readonly Question[] = [
  {
    id: "basic-010",
    category: "basic",
    difficulty: "easy",
    prompt:
      "型アサーション `value as string` の説明として正しいのはどれですか？",
    choices: [
      "コンパイル時に型を再解釈するだけで、実行時に値の変換やチェックは行われない",
      "実行時に値を string に変換する（`String(value)` と同じ）",
      "型アサーションは型述語の別名であり、戻り値が boolean の関数を作る",
      "アサーション失敗時に実行時例外を投げる",
    ],
    answerIndex: 0,
    explanation:
      "`as` は型ヒントの上書きでありランタイムには影響しません。誤った `as` は型安全性を壊す可能性があるので、可能なら型ガードや型述語で絞り込む方が安全です。",
  },
  {
    id: "basic-011",
    category: "basic",
    difficulty: "easy",
    prompt:
      "非 null アサーション演算子 `x!` の意味として正しいのはどれですか？",
    choices: [
      "x の型から null と undefined を取り除くことをコンパイラに約束させる（実行時には何もしない）",
      "x が null/undefined のときに例外を投げる実行時チェック",
      "x をブール値に反転させる",
      "x を必須プロパティに変える型操作",
    ],
    answerIndex: 0,
    explanation:
      "`!` は型レベルのアサーションで、ランタイムでの安全性は保証されません。実際に null/undefined だった場合は通常の TypeError が発生します。",
  },
  {
    id: "basic-012",
    category: "basic",
    difficulty: "medium",
    prompt:
      "クラスフィールドの `name!: string` のような `!` の意味は？",
    choices: [
      "確定代入アサーション。コンストラクタ外で初期化されることをコンパイラに伝え、初期化チェックを抑制する",
      "プロパティが null/undefined を許容することを示す",
      "プロパティを readonly にする糖衣構文",
      "プロパティをオプショナルにする",
    ],
    answerIndex: 0,
    explanation:
      "`strictPropertyInitialization` 下では未初期化フィールドが警告されますが、`!:` を付けると DI などで後から確実に代入されることを開発者の責任で宣言できます。",
  },
  {
    id: "basic-013",
    category: "basic",
    difficulty: "easy",
    prompt:
      "`user?.address?.city` のような optional chaining の挙動として正しいのはどれですか？",
    choices: [
      "途中の値が null または undefined であれば全体の式は undefined を返し、以降のアクセスは行われない",
      "途中の値が falsy（0 や '' を含む）なら undefined を返す",
      "プロパティが存在しない場合に例外を投げる",
      "右辺に到達しなければ null を返す",
    ],
    answerIndex: 0,
    explanation:
      "`?.` は厳密に null と undefined のときだけ短絡します。0 や '' や false ではプロパティアクセスが続行されます。",
  },
  {
    id: "basic-014",
    category: "basic",
    difficulty: "easy",
    prompt:
      "`a ?? b` (nullish coalescing) と `a || b` の違いとして正しいのはどれですか？",
    choices: [
      "`??` は a が null または undefined のときだけ b を返すが、`||` は a が falsy（0, '', false など）のときも b を返す",
      "両者は完全に同じ挙動",
      "`??` は短絡評価しないが `||` は短絡評価する",
      "`??` は文字列専用、`||` は数値専用",
    ],
    answerIndex: 0,
    explanation:
      "デフォルト値が必要なときに `||` を使うと 0 や空文字列まで上書きしてしまうバグの原因になります。null/undefined だけを fallback したいときは `??` を使います。",
  },
  {
    id: "basic-015",
    category: "basic",
    difficulty: "medium",
    prompt:
      "`function sum(...nums: number[]) {}` のレストパラメータの型として正しい説明は？",
    choices: [
      "可変長引数を配列としてまとめて受け取り、`number[]` のように配列型で型注釈する",
      "レストパラメータは tuple 型でしか宣言できない",
      "レストパラメータには型を付けられず、常に any[] 扱いになる",
      "レストパラメータは関数の最初に置かなければならない",
    ],
    answerIndex: 0,
    explanation:
      "レストは引数リストの最後に1つだけ置けます。タプル型を使えば `(...args: [string, ...number[]])` のように先頭固定＋可変末尾も表現可能です。",
  },
  {
    id: "basic-016",
    category: "basic",
    difficulty: "medium",
    prompt:
      "`const { name, age = 20 }: { name: string; age?: number } = obj` の分割代入の型注釈について正しいのは？",
    choices: [
      "型注釈はパターン全体に対して書き、各変数ごとには `:` で型を直接書けない",
      "`{ name: string, age: number = 20 }` のように個別に型を書ける",
      "型注釈はデフォルト値より前にしか書けない",
      "分割代入には型注釈を一切付けられない",
    ],
    answerIndex: 0,
    explanation:
      "`{ name: nameAlias }` のコロンはリネーム構文として解釈されるため、型はパターン全体に対してまとめて注釈します。",
  },
  {
    id: "basic-017",
    category: "basic",
    difficulty: "easy",
    prompt:
      "`'hello'.includes('el')` の戻り値の型はどれですか？",
    choices: ["boolean", "number", "string", "'el'"],
    answerIndex: 0,
    explanation:
      "`String.prototype.includes` は部分文字列が含まれるかを判定して boolean を返します。位置を取りたい場合は `indexOf` で number を得ます。",
  },
  {
    id: "basic-018",
    category: "basic",
    difficulty: "medium",
    prompt:
      "`Array.isArray(value)` で絞り込めるのはどれですか？(value: unknown)",
    choices: [
      "value が配列であることが保証され、`any[]` として扱える",
      "value が `never[]` に絞り込まれる",
      "value が tuple であることが保証される",
      "Array.isArray は型ガードとして機能しない",
    ],
    answerIndex: 0,
    explanation:
      "`Array.isArray` は組み込みの型述語で、unknown を `any[]` に絞り込みます。ジェネリクス情報は失われるため、要素型はその後に検査が必要です。",
  },
  {
    id: "basic-019",
    category: "basic",
    difficulty: "medium",
    prompt:
      "`Object.keys(obj)` の戻り値の型として正しいのはどれですか？(`obj: { a: 1; b: 2 }` の場合)",
    choices: [
      "string[]",
      "('a' | 'b')[]",
      "[keyof typeof obj]",
      "readonly ('a' | 'b')[]",
    ],
    answerIndex: 0,
    explanation:
      "`Object.keys` は意図的に `string[]` を返します。これはオブジェクトが宣言時より多くのキーを持ち得る（構造的部分型）ためで、`(keyof T)[]` にすると不健全になるからです。",
  },
  {
    id: "basic-020",
    category: "basic",
    difficulty: "medium",
    prompt:
      "`Object.entries({ a: 1, b: 2 })` の戻り値の型は？",
    choices: [
      "[string, number][]",
      "['a' | 'b', 1 | 2][]",
      "{ a: number; b: number }[]",
      "Map<string, number>",
    ],
    answerIndex: 0,
    explanation:
      "`Object.entries` は `[string, T][]` を返します。キーは `string`、値はプロパティ値型のユニオンですが、ここでは number に揃っているので `[string, number][]` になります。",
  },
  {
    id: "basic-021",
    category: "basic",
    difficulty: "easy",
    prompt:
      "`Object.fromEntries` の用途として正しいのは？",
    choices: [
      "[key, value] のペアの反復可能オブジェクトからオブジェクトを生成する（Object.entries の逆）",
      "オブジェクトのキーを配列で取得する",
      "Map をディープコピーする",
      "JSON 文字列をパースする",
    ],
    answerIndex: 0,
    explanation:
      "`Object.fromEntries` の戻り値は `{ [k: string]: T }` 系の型になりがちで、リテラルキー型を保ちたい場合は as const や satisfies、ジェネリックヘルパーが必要です。",
  },
  {
    id: "basic-022",
    category: "basic",
    difficulty: "medium",
    prompt:
      "`Map<string, number>` の `map.get('foo')` の戻り値の型として正しいのは？",
    choices: [
      "number | undefined",
      "number",
      "string | number",
      "never",
    ],
    answerIndex: 0,
    explanation:
      "Map の get は存在しないキーに対して undefined を返すため、必ず `V | undefined` 型になります。`has` で確認しても型は絞り込まれないため、取得後に `!` や条件分岐が必要です。",
  },
  {
    id: "basic-023",
    category: "basic",
    difficulty: "easy",
    prompt:
      "`Set<number>` の特徴として正しいのは？",
    choices: [
      "重複しない値のコレクションで、`add` `has` `delete` などのメソッドを持ち、反復可能",
      "キーと値のペアを保持するコレクション",
      "配列のサブクラスでインデックスアクセスができる",
      "オブジェクトのキー集合を生成する関数",
    ],
    answerIndex: 0,
    explanation:
      "Set は SameValueZero による等価性で重複を排除します。`for...of` で挿入順に列挙でき、サイズは `size` プロパティで取得します。",
  },
  {
    id: "basic-024",
    category: "basic",
    difficulty: "hard",
    prompt:
      "`WeakMap<K, V>` の特徴として正しいのはどれですか？",
    choices: [
      "キーはオブジェクト（や Symbol）に限られ、キーが他から参照されなくなれば GC され、エントリも自動的に消える",
      "キーは任意の型を取れて、サイズも `size` プロパティで取得できる",
      "WeakMap は反復可能で `for...of` で全エントリを列挙できる",
      "WeakMap の値はプリミティブに限定される",
    ],
    answerIndex: 0,
    explanation:
      "WeakMap は弱参照のためキャッシュやプライベートデータの紐付けに向きます。列挙不能で size もありません。TS 5.2 以降は登録可能な Symbol もキーに使えます。",
  },
  {
    id: "basic-025",
    category: "basic",
    difficulty: "easy",
    prompt:
      "数値リテラルユニオン型 `type Dice = 1 | 2 | 3 | 4 | 5 | 6` について正しいのは？",
    choices: [
      "number 型のサブタイプで、6 つの具体的な数値リテラル以外は代入できない",
      "実行時に値が範囲外なら例外を投げる",
      "Dice は number と完全に同じ型",
      "リテラル型は文字列にしか使えない",
    ],
    answerIndex: 0,
    explanation:
      "リテラル型は値そのものを型として扱う仕組みで、範囲チェックはコンパイル時のみ。実行時に 7 を入れたい場合は `as Dice` などのキャストが必要になります。",
  },
  {
    id: "basic-026",
    category: "basic",
    difficulty: "easy",
    prompt:
      "数値リテラル `1_000_000` の説明として正しいのはどれですか？",
    choices: [
      "アンダースコアは桁区切りで、値は 1000000 と等価。実行時の挙動も同じ",
      "アンダースコアは十進数を十六進数に変換する",
      "アンダースコアは bigint を表す接尾辞",
      "アンダースコアを含む数値リテラルは TypeScript ではエラー",
    ],
    answerIndex: 0,
    explanation:
      "ES2021 の数値区切り（numeric separator）で、可読性向上のためのものです。`0xFF_FF` のように16進数でも使えます。",
  },
  {
    id: "basic-027",
    category: "basic",
    difficulty: "medium",
    prompt:
      "`BigInt(10)` の戻り値と `10n` の関係として正しいのは？",
    choices: [
      "両者とも `bigint` 型の値で同じ。`BigInt` は通常関数として呼び、`new BigInt()` はエラー",
      "`BigInt(10)` は number で `10n` だけが bigint",
      "両者の型は異なり、`BigInt(10)` は `BigInt` クラスのインスタンス",
      "`10n` は実行時に number へ自動変換される",
    ],
    answerIndex: 0,
    explanation:
      "`BigInt` はラッパー関数として呼ぶ仕様で `new` 不可。リテラル `10n` も同じ `bigint` 型を生成します。",
  },
  {
    id: "basic-028",
    category: "basic",
    difficulty: "easy",
    prompt:
      "`new Date()` を変数に代入したときの型として正しいのは？",
    choices: [
      "Date",
      "Date | string",
      "number（ミリ秒）",
      "{ year: number; month: number; ... }",
    ],
    answerIndex: 0,
    explanation:
      "`Date` は組み込みクラスで、その型名もそのまま `Date` です。エポック秒に変換するには `getTime()` か `+date` を使います。",
  },
  {
    id: "basic-029",
    category: "basic",
    difficulty: "medium",
    prompt:
      "`function fail(msg: string): never { throw new Error(msg) }` の戻り値型 `never` の意味は？",
    choices: [
      "関数が正常に値を返すことが決してない（必ず例外を投げるか無限ループに入る）ことを示す",
      "戻り値が undefined であることを示す",
      "戻り値の型がまだ決まっていないことを示す",
      "any のサブタイプで何でも返せる",
    ],
    answerIndex: 0,
    explanation:
      "`never` はボトム型で、すべての型のサブタイプ。例外を投げる関数や網羅性チェックの default ケースなどに現れます。",
  },
  {
    id: "basic-030",
    category: "basic",
    difficulty: "hard",
    prompt:
      "コールバックの戻り値型を `void` と宣言したとき、実装側で `boolean` を返す関数を渡せるのはなぜですか？",
    choices: [
      "戻り値型 `void` は『戻り値を使わない』という契約であり、実装側が値を返してもその値が無視されるだけで型エラーにならない（substitutability）",
      "void は any と同じで何でも代入できる",
      "TypeScript のバグであり、本来はエラーになるべき",
      "boolean は void のサブタイプとして定義されている",
    ],
    answerIndex: 0,
    explanation:
      "`Array#forEach` のコールバック型が `(v: T) => void` でも `arr.forEach(v => arr2.push(v))` が許されるのはこの仕様のためです。逆に変数宣言で `let f: () => void = () => 1` の戻り値を呼び出し側で使うと undefined 扱いになります。",
  },
  {
    id: "basic-031",
    category: "basic",
    difficulty: "medium",
    prompt:
      "`type` と `interface` の違いとして正しいのはどれですか？",
    choices: [
      "interface は同名宣言マージが可能だが、type はユニオン・条件型・タプルなどより多くの型表現が書ける",
      "type の方が実行時オーバーヘッドが小さい",
      "interface はジェネリクスが書けない",
      "type alias はクラスから implements できない",
    ],
    answerIndex: 0,
    explanation:
      "オブジェクト形状の表現ならどちらでもほぼ同等で、宣言マージが必要なら interface、ユニオン等が必要なら type を選ぶのが定石です。type alias もクラスから implements 可能です。",
  },
  {
    id: "basic-032",
    category: "basic",
    difficulty: "medium",
    prompt:
      "`button.addEventListener('click', e => { ... })` で `e` の型が自動的に `MouseEvent` になる仕組みは？",
    choices: [
      "コンテキスト型付け（contextual typing）。代入先や引数の期待型から、関数式の引数型を逆算的に推論する",
      "TypeScript が DOM API を解析して動的に型を生成する",
      "明示的なジェネリック型推論",
      "`as MouseEvent` が暗黙的に挿入される",
    ],
    answerIndex: 0,
    explanation:
      "コールバックを渡す位置で関数の引数に期待型がある場合、引数の注釈なしでもその型が使われます。これにより `e.clientX` などが補完されます。",
  },
  {
    id: "basic-033",
    category: "basic",
    difficulty: "easy",
    prompt:
      "アロー関数 `() => { ... }` と通常の関数 `function() { ... }` の `this` の挙動の違いは？",
    choices: [
      "アロー関数は外側スコープの `this` をレキシカルに束縛するが、通常の関数は呼び出し方によって `this` が決まる",
      "両者とも常にグローバルオブジェクトを `this` とする",
      "アロー関数は `this` を持てず常に undefined",
      "通常の関数は strict モードで `this` を束縛しない",
    ],
    answerIndex: 0,
    explanation:
      "アロー関数は自前の `this` を持ちません。クラスメソッドのコールバックでこの違いがバグの温床になります。`this` の型を引数として宣言する `this: T` 構文も TS にあります。",
  },
  {
    id: "basic-034",
    category: "basic",
    difficulty: "hard",
    prompt:
      "関数オーバーロードの正しい書き方として、TypeScript での標準的な構文は？",
    choices: [
      "オーバーロードシグネチャを複数並べた後、それらを包含する1つの実装シグネチャを書く",
      "同じ関数名を異なる引数で複数回 export する",
      "`overload` キーワードを各シグネチャに付ける",
      "`@overload` デコレータを付与する",
    ],
    answerIndex: 0,
    explanation:
      "実装シグネチャは外部から見えず、呼び出し側はオーバーロードシグネチャの集合のみを参照します。実装シグネチャは全パターンを受け入れる広い型にします。",
  },
  {
    id: "basic-035",
    category: "basic",
    difficulty: "medium",
    prompt:
      "タプル型 `[string, number?]` の意味として正しいのは？",
    choices: [
      "長さ 1 か 2 のタプルで、2 番目の要素は number または undefined（実質的に省略可能）",
      "2 要素のタプルで、両方とも optional",
      "string と number のユニオン配列",
      "タプル中の `?` は型エラー",
    ],
    answerIndex: 0,
    explanation:
      "タプル末尾の optional 要素は長さの違いを許容します。optional 要素の後に必須要素は書けない制約があります。",
  },
  {
    id: "basic-036",
    category: "basic",
    difficulty: "medium",
    prompt:
      "`type Args = [string, ...number[]]` のレスト要素を含むタプルについて正しいのは？",
    choices: [
      "先頭が string で、残りは任意個の number になる可変長タプルを表す",
      "string と number[] の 2 要素タプルを表す",
      "レスト要素はタプル中で使えない",
      "number[] が optional になる",
    ],
    answerIndex: 0,
    explanation:
      "可変長タプル要素はジェネリクスで関数引数列を表現するのにも使えます。レスト要素はタプル中に最大1つです。",
  },
  {
    id: "basic-037",
    category: "basic",
    difficulty: "easy",
    prompt:
      "`const t: readonly [string, number] = ['a', 1]` の readonly tuple の挙動は？",
    choices: [
      "要素の代入や `push` などミューテーションが型レベルで禁止される",
      "実行時に Object.freeze される",
      "要素のうち readonly なのは先頭だけになる",
      "通常のタプルと完全に同じ",
    ],
    answerIndex: 0,
    explanation:
      "readonly tuple は ReadonlyArray と同様、ミューテーション系メソッドが取り除かれた読み取り専用ビューです。`as const` で生成される配列リテラルもこの形になります。",
  },
  {
    id: "basic-038",
    category: "basic",
    difficulty: "medium",
    prompt:
      "`const xs = [1, 2, 3] as const` の `xs` の型として正しいのは？",
    choices: [
      "readonly [1, 2, 3]",
      "number[]",
      "(1 | 2 | 3)[]",
      "[number, number, number]",
    ],
    answerIndex: 0,
    explanation:
      "`as const` を配列リテラルに付けると、要素はリテラル型のまま、長さも固定された readonly タプル型になります。",
  },
  {
    id: "basic-039",
    category: "basic",
    difficulty: "medium",
    prompt:
      "型レベルの `typeof` 演算子（`type T = typeof obj`）の説明として正しいのは？",
    choices: [
      "値の式の推論された型を取り出して型として使うクエリ。値レベルの `typeof` とは別物",
      "実行時に値の型名（'string', 'number' など）を返す",
      "TypeScript 専用で、JavaScript には存在しない演算子",
      "オブジェクトの全プロパティを optional にする",
    ],
    answerIndex: 0,
    explanation:
      "`typeof obj` を型位置で使うと、`obj` の推論型が得られます。`typeof fn`、`(typeof obj)[K]` のようにクラス・関数・定数オブジェクトから型を生成するイディオムは頻出です。",
  },
  {
    id: "basic-040",
    category: "basic",
    difficulty: "easy",
    prompt:
      "宣言型と推論型の違いに関する説明として正しいのは？",
    choices: [
      "`let x: number = 1` のように注釈で型を明示するのが宣言型、`let x = 1` のように代入から自動で決まるのが推論型",
      "宣言型は実行時にも残るが、推論型は消える",
      "推論型は常に any になる",
      "宣言型は const のみで使える",
    ],
    answerIndex: 0,
    explanation:
      "明示注釈はその型を上限として強制し、推論はリテラル文脈や const か let かで広がり方（widening）が変わります。意図する範囲を絞り込みたいときは注釈や `as const` が有効です。",
  },
  {
    id: "basic-041",
    category: "basic",
    difficulty: "easy",
    prompt:
      "truthy/falsy による絞り込みの説明として正しいのは？",
    choices: [
      "`if (x)` は x が falsy（0, '', null, undefined, NaN, false など）のときに else 側へ進み、then 側では falsy 値が除外された型に絞られる",
      "TypeScript は truthy 判定では絞り込みを行わない",
      "if 文では型は変化せず、必ず元の型のままになる",
      "`if (x)` は x が undefined のときのみ else 側に進む",
    ],
    answerIndex: 0,
    explanation:
      "`x: string | undefined` を `if (x)` で絞ると then 側は string になります。ただし `''` も除外されるので、空文字列を許容したい場合は `x !== undefined` の方が適切です。",
  },
  {
    id: "basic-042",
    category: "basic",
    difficulty: "medium",
    prompt:
      "`strictNullChecks` が有効なときの挙動として正しいのは？",
    choices: [
      "null と undefined はそれぞれ独立した型として扱われ、明示的にユニオンに含めない限り他の型に代入できない",
      "null と undefined は any のサブタイプとなり、どこにでも代入できる",
      "`x: string` は実行時に null チェックが自動挿入される",
      "`strictNullChecks` は型エイリアス内では効かない",
    ],
    answerIndex: 0,
    explanation:
      "Strict 系のフラグの中でも特に重要で、null 安全性が一気に向上します。Optional Chaining や Nullish Coalescing と組み合わせると簡潔に書けます。",
  },
  {
    id: "basic-043",
    category: "basic",
    difficulty: "hard",
    prompt:
      "`declare module '*.svg' { const src: string; export default src }` のような宣言の役割は？",
    choices: [
      "アンビエントモジュール宣言。`.svg` を import したときの型を TypeScript に教えるためのもの",
      "実行時に SVG ファイルをロードするコードを生成する",
      "`*.svg` ファイルを TypeScript コンパイラで JavaScript に変換する設定",
      "ESM の `import.meta.glob` を有効にする",
    ],
    answerIndex: 0,
    explanation:
      "Webpack や Vite などでアセットを import する際、TypeScript には型を教える必要があります。`d.ts` ファイルにこのような宣言を書くのが定番です。",
  },
  {
    id: "basic-044",
    category: "basic",
    difficulty: "medium",
    prompt:
      "`import type { User } from './user'` と `import { User } from './user'` の違いは？",
    choices: [
      "`import type` は型情報のみを取り込み、トランスパイル後の出力から完全に消える（副作用や実行時値は持ち込まない）",
      "両者は完全に同じで、好みで使い分けるだけ",
      "`import type` は実行時にも残るが require へ変換される",
      "`import type` はクラスのインポートに必須",
    ],
    answerIndex: 0,
    explanation:
      "型のみのインポートを明示することで、循環参照を回避したり、`isolatedModules` でも安全になります。値も含むインポートを混在させたい場合は `import { type X, fn } from './m'` も使えます。",
  },
  {
    id: "basic-045",
    category: "basic",
    difficulty: "medium",
    prompt:
      "`import type` を活用するメリットとして適切なのはどれですか？",
    choices: [
      "型のみの依存をビルドから取り除き、循環依存の解消やバンドル最適化（型しか使っていないモジュールが残らない）に貢献する",
      "TypeScript のコンパイル速度が必ず2倍以上速くなる",
      "実行時に型情報を取得できるリフレクション機能を提供する",
      "ES Modules を CommonJS に自動変換する",
    ],
    answerIndex: 0,
    explanation:
      "`verbatimModuleSyntax` や `isolatedModules` を有効にしているプロジェクトでは、`import type` を正しく使うことで安全かつ最適化が効くトランスパイルが可能になります。",
  },
  {
    id: "basic-046",
    category: "basic",
    difficulty: "hard",
    prompt:
      "アンビエント宣言（`declare` キーワード）の役割として正しいのはどれですか？",
    choices: [
      "実装を持たず型情報だけを宣言する。他所（ライブラリやグローバル）に存在することを TypeScript に教えるために使う",
      "実行時に変数を宣言するための新しいキーワード",
      "型エイリアスを export するための修飾子",
      "let と同じ意味でブロックスコープの変数を作る",
    ],
    answerIndex: 0,
    explanation:
      "`declare const`、`declare function`、`declare module`、`declare global` などがあり、`.d.ts` ファイルでよく使います。実装は出力されません。",
  },
  {
    id: "basic-047",
    category: "basic",
    difficulty: "easy",
    prompt:
      "`@ts-ignore` と `@ts-expect-error` の違いとして正しいのは？",
    choices: [
      "`@ts-expect-error` は次の行にエラーが存在しない場合に逆に警告を出すが、`@ts-ignore` は単にエラーを抑制する",
      "両者は完全に同じ",
      "`@ts-ignore` だけが TypeScript 5.0 以降で利用可能",
      "`@ts-expect-error` は実行時エラーを抑制する",
    ],
    answerIndex: 0,
    explanation:
      "意図的にエラーを期待する場合は `@ts-expect-error` の方が安全です。後でコードが直ったら期待が外れて警告が出るので、抑制コメントが残り続ける問題を防げます。",
  },
  {
    id: "basic-048",
    category: "basic",
    difficulty: "medium",
    prompt:
      "JavaScript ファイル先頭の `// @ts-check` コメントの役割は？",
    choices: [
      "tsconfig 全体ではなく、その JS ファイル単位で TypeScript の型チェックを有効化する",
      "ファイルを TypeScript ソースとして扱うようにする（拡張子を変更する）",
      "ESLint の検査を有効化する",
      "型エラーを全て無視する",
    ],
    answerIndex: 0,
    explanation:
      "JSDoc コメントと組み合わせれば、JS ファイルでも型チェックの恩恵を受けられます。逆に TS ファイルで一時的に無効化したい場合は `// @ts-nocheck` を使います。",
  },
  {
    id: "basic-049",
    category: "basic",
    difficulty: "hard",
    prompt:
      "`declare global { interface Window { myApp: { version: string } } }` の役割は？",
    choices: [
      "グローバルスコープの既存型に宣言マージで拡張を加え、`window.myApp` を型安全に参照できるようにする",
      "実行時に Window オブジェクトに myApp プロパティを追加する",
      "新しいグローバル変数 `Window` を宣言する",
      "モジュール内でしか使えないローカル拡張を行う",
    ],
    answerIndex: 0,
    explanation:
      "モジュールスコープのファイル内で `declare global` を使うとグローバル型を拡張できます。実装側で実際にプロパティを設定するのは別途必要です。",
  },
  {
    id: "basic-050",
    category: "basic",
    difficulty: "medium",
    prompt:
      "`/// <reference types=\"node\" />` のようなトリプルスラッシュ参照の役割として正しいのは？",
    choices: [
      "型定義ファイル（@types パッケージなど）への依存を宣言する古い構文。現在は tsconfig の `types`/`include` や通常の import で代替されることが多い",
      "実行時に外部スクリプトを読み込む命令",
      "ESM の動的 import の糖衣構文",
      "コンパイラに JSX を有効化させる指示",
    ],
    answerIndex: 0,
    explanation:
      "TypeScript 初期からあるディレクティブで、`.d.ts` 内の依存関係宣言などでまだ使われます。アプリケーションコードでは通常 tsconfig 設定のほうが扱いやすいです。",
  },
];
