import type { Question } from "../../types";

export const questions: readonly Question[] = [
  {
    id: "adv-011",
    category: "advanced",
    difficulty: "easy",
    prompt:
      "条件型 `T extends U ? X : Y` の基本的な評価規則として正しいのは？",
    choices: [
      "`T` が `U` に代入可能なら `X`、そうでなければ `Y` に評価される",
      "`T` と `U` が完全一致なら `X`、それ以外は `Y`",
      "`T` の値が真なら `X`、偽なら `Y`",
      "コンパイル時には評価されず、実行時に分岐する",
    ],
    answerIndex: 0,
    explanation:
      "条件型は型レベルの三項演算子で、代入可能性 (assignability) によって分岐します。実行時に何かが起きるわけではありません。",
  },
  {
    id: "adv-012",
    category: "advanced",
    difficulty: "hard",
    prompt:
      "`type IsUnion<T> = [T] extends [infer _] ? false : never` のように `[T] extends [U]` と書く狙いは？",
    choices: [
      "ユニオン分配を抑制し、`T` を一塊として扱うため",
      "タプル比較に強制するための構文糖衣",
      "実行時に配列として比較するため",
      "infer をタプル要素から取り出す唯一の方法だから",
    ],
    answerIndex: 0,
    explanation:
      "条件型は「裸の型パラメータ (naked T)」がユニオンのときに分配されます。`[T]` のようにタプルでラップすると分配が止まり、ユニオン全体を一つの型として扱えます。",
  },
  {
    id: "adv-013",
    category: "advanced",
    difficulty: "medium",
    prompt:
      "`type Naked<T> = T extends string ? T : never` に対し `Naked<'a' | 1 | 'b'>` の評価結果は？",
    choices: ["'a' | 'b'", "string", "never", "'a' | 1 | 'b'"],
    answerIndex: 0,
    explanation:
      "裸の `T` で条件型を書くとユニオンに対して分配されます。各構成要素を string と比較し、'a' と 'b' のみが残るため `'a' | 'b'` になります。",
  },
  {
    id: "adv-014",
    category: "advanced",
    difficulty: "medium",
    prompt:
      "標準ユーティリティ `Exclude<T, U>` の内部実装として最も近いのは？",
    choices: [
      "`type Exclude<T, U> = T extends U ? never : T`",
      "`type Exclude<T, U> = T extends U ? T : never`",
      "`type Exclude<T, U> = U extends T ? never : T`",
      "`type Exclude<T, U> = T & (U extends T ? never : unknown)`",
    ],
    answerIndex: 0,
    explanation:
      "`Exclude` は分配条件型で `T extends U` のとき `never` を返して構成要素を捨てます。逆に残すのが `Extract<T, U>`。",
  },
  {
    id: "adv-015",
    category: "advanced",
    difficulty: "medium",
    prompt:
      "標準ユーティリティ `Extract<T, U>` の内部実装として最も近いのは？",
    choices: [
      "`type Extract<T, U> = T extends U ? T : never`",
      "`type Extract<T, U> = T extends U ? never : T`",
      "`type Extract<T, U> = T & U`",
      "`type Extract<T, U> = keyof T & keyof U`",
    ],
    answerIndex: 0,
    explanation:
      "`Extract` は条件を満たす構成要素のみ残します。単純な `T & U` ではユニオン分配が起きず期待通りに動きません。",
  },
  {
    id: "adv-016",
    category: "advanced",
    difficulty: "medium",
    prompt:
      "`type ReturnType2<F> = F extends (...a: any) => infer R ? R : never` で `ReturnType2<() => number>` は？",
    choices: ["number", "() => number", "any", "never"],
    answerIndex: 0,
    explanation:
      "`infer R` は条件型のマッチ位置で型を捕捉します。関数の戻り値位置に書けば返り値型を取り出せます。",
  },
  {
    id: "adv-017",
    category: "advanced",
    difficulty: "medium",
    prompt:
      "`type First<T> = T extends [infer A, ...any[]] ? A : never` で `First<[1, 2, 3]>` は？",
    choices: ["1", "[1]", "number", "never"],
    answerIndex: 0,
    explanation:
      "タプル分解 `[infer A, ...any[]]` で先頭要素のリテラル型 `1` を取り出します。`number` ではなく `1` になる点に注意。",
  },
  {
    id: "adv-018",
    category: "advanced",
    difficulty: "easy",
    prompt:
      "`type Awaited2<T> = T extends Promise<infer R> ? R : T` で `Awaited2<Promise<string>>` は？",
    choices: ["string", "Promise<string>", "never", "unknown"],
    answerIndex: 0,
    explanation:
      "`Promise<infer R>` のパターンマッチで内部型を取り出します。標準 `Awaited<T>` はネストした Promise も剥がす点が違います。",
  },
  {
    id: "adv-019",
    category: "advanced",
    difficulty: "hard",
    prompt:
      "TS 4.7 で導入された `infer R extends string` の意味として正しいのは？",
    choices: [
      "捕捉した `R` を `string` に制約 (narrow) しつつ infer する",
      "`R` を後から `as string` でキャストする",
      "`R` の代わりに `string` を返す",
      "`R extends string` の型ガードを実行時に挿入する",
    ],
    answerIndex: 0,
    explanation:
      "infer に `extends` を付けると、捕捉位置で同時に制約を課せます。テンプレートリテラル型から数値文字列を取り出す際などに便利です。",
  },
  {
    id: "adv-020",
    category: "advanced",
    difficulty: "hard",
    prompt:
      "可変長の infer (variadic infer) の例として正しいのは？",
    choices: [
      "`T extends [infer H, ...infer R] ? [H, R] : never`",
      "`T extends [...infer R, ...infer S] ? R : never`",
      "`T extends infer ...R ? R : never`",
      "`T extends infer R[] ? R : never`",
    ],
    answerIndex: 0,
    explanation:
      "可変長タプル要素は `...infer R` で捕捉できます。1 つの位置にしか書けないため、(2) のように複数置くと曖昧でエラーになります。",
  },
  {
    id: "adv-021",
    category: "advanced",
    difficulty: "hard",
    prompt:
      "`type DeepReturn<F> = F extends (...a: any) => infer R ? R extends (...a: any) => any ? DeepReturn<R> : R : never` のように条件型内で自分自身を参照することは？",
    choices: [
      "再帰条件型として許可されており、ネストした関数の最終戻り値型を辿るような用途に使える",
      "TypeScript では一切できない",
      "`infer` を使わなければ可能",
      "実行時にスタックオーバーフローを起こすため禁止",
    ],
    answerIndex: 0,
    explanation:
      "条件型は再帰可能で、ネストした構造を畳み込むのに頻用されます。ただしインスタンス化深さの上限があり、深すぎると型エラーになります。",
  },
  {
    id: "adv-022",
    category: "advanced",
    difficulty: "hard",
    prompt:
      "`type Split<S extends string, D extends string> = S extends `${infer H}${D}${infer T}` ? [H, ...Split<T, D>] : [S]` で `Split<'a,b,c', ','>` は？",
    choices: [
      "['a', 'b', 'c']",
      "['a,b,c']",
      "['a', 'b,c']",
      "string[]",
    ],
    answerIndex: 0,
    explanation:
      "テンプレートリテラル + `infer` の再帰でひとつずつ区切り文字で分割します。最終的に区切り文字が見つからない `T` がベースケースになります。",
  },
  {
    id: "adv-023",
    category: "advanced",
    difficulty: "hard",
    prompt:
      "`type Join<T extends readonly string[], D extends string> = T extends readonly [infer H extends string, ...infer R extends string[]] ? R['length'] extends 0 ? H : `${H}${D}${Join<R, D>}` : ''` の `Join<['a','b','c'], '-'>` は？",
    choices: ["'a-b-c'", "'abc'", "'a,b,c'", "string"],
    answerIndex: 0,
    explanation:
      "タプルを先頭と残りに分解しながらテンプレートリテラルで連結します。長さ 0 がベースケースで、最後の要素には区切り文字を付けません。",
  },
  {
    id: "adv-024",
    category: "advanced",
    difficulty: "hard",
    prompt:
      "`type Replace<S extends string, From extends string, To extends string> = S extends `${infer A}${From}${infer B}` ? `${A}${To}${B}` : S` の `Replace<'foo bar foo', 'foo', 'baz'>` は？",
    choices: [
      "'baz bar foo'",
      "'baz bar baz'",
      "'foo bar foo'",
      "never",
    ],
    answerIndex: 0,
    explanation:
      "この実装は最初の出現のみを置換します。全置換にしたい場合は再帰呼び出し `Replace<\`${A}${To}${B}\`, From, To>` を加える必要があります。",
  },
  {
    id: "adv-025",
    category: "advanced",
    difficulty: "medium",
    prompt:
      "`type Trim<S extends string> = S extends ` ${infer R}` | `${infer R} ` ? Trim<R> : S` の `Trim<'  hi  '>` は？",
    choices: ["'hi'", "'  hi  '", "' hi '", "string"],
    answerIndex: 0,
    explanation:
      "両端のスペースに対するパターンを再帰的に剥がします。空白文字種を増やすには `' ' | '\\n' | '\\t'` のようにユニオンで条件を拡張します。",
  },
  {
    id: "adv-026",
    category: "advanced",
    difficulty: "easy",
    prompt:
      "`type StartsWith<S extends string, T extends string> = S extends `${T}${string}` ? true : false` で `StartsWith<'hello', 'he'>` は？",
    choices: ["true", "false", "boolean", "never"],
    answerIndex: 0,
    explanation:
      "テンプレートリテラル型 `${T}${string}` は「T で始まり任意の文字列が続く」を表します。`'hello'` はこれに当てはまるので `true`。",
  },
  {
    id: "adv-027",
    category: "advanced",
    difficulty: "easy",
    prompt:
      "`type EndsWith<S extends string, T extends string> = S extends `${string}${T}` ? true : false` で `EndsWith<'index.ts', '.js'>` は？",
    choices: ["false", "true", "boolean", "never"],
    answerIndex: 0,
    explanation:
      "末尾を判定するには `${string}${T}` のパターンを使います。`'index.ts'` は `.js` で終わらないため `false`。",
  },
  {
    id: "adv-028",
    category: "advanced",
    difficulty: "medium",
    prompt:
      "`type Prefix<T, P extends string> = { [K in keyof T & string as `${P}${K}`]: T[K] }` を `Prefix<{a:1; b:2}, 'on_'>` に適用した結果のキーは？",
    choices: [
      "'on_a' | 'on_b'",
      "'a' | 'b'",
      "`on_${string}`",
      "string",
    ],
    answerIndex: 0,
    explanation:
      "key remapping (`as`) とテンプレートリテラル型を組み合わせて、各キーにプレフィックスを付けた型を生成しています。",
  },
  {
    id: "adv-029",
    category: "advanced",
    difficulty: "hard",
    prompt:
      "タプル長を使った型レベル加算 `type Add<A extends number, B extends number> = [...Tuple<A>, ...Tuple<B>]['length']` のポイントは？",
    choices: [
      "長さ A と B のタプルを連結し、その `length` プロパティから合計長 (= A+B) を読み取る",
      "TypeScript の組み込み算術演算子 `+` を型に持ち込んでいる",
      "`number` 同士の `extends` 比較で計算している",
      "再帰せずに組み込みの `Math.add` 型を呼び出している",
    ],
    answerIndex: 0,
    explanation:
      "TS の型システムには算術演算子はありませんが、タプル長として表現すれば連結の長さで加算が再現できます。引き算はスライス、減算は infer での分解で表現します。",
  },
  {
    id: "adv-030",
    category: "advanced",
    difficulty: "easy",
    prompt:
      "`type Length<T extends readonly unknown[]> = T['length']` で `Length<[1,2,3]>` は？",
    choices: ["3", "number", "[1,2,3]", "never"],
    answerIndex: 0,
    explanation:
      "タプル型は `length` プロパティに具体的なリテラル数値型を持ちます。通常配列 `number[]` の `length` はただの `number` になります。",
  },
  {
    id: "adv-031",
    category: "advanced",
    difficulty: "medium",
    prompt:
      "`type Reverse<T extends readonly unknown[]> = T extends [infer H, ...infer R] ? [...Reverse<R>, H] : []` で `Reverse<[1,2,3]>` は？",
    choices: ["[3, 2, 1]", "[1, 2, 3]", "number[]", "[1 | 2 | 3]"],
    answerIndex: 0,
    explanation:
      "先頭を取り出して残りを逆順にした末尾に結合する典型的な再帰パターンです。",
  },
  {
    id: "adv-032",
    category: "advanced",
    difficulty: "hard",
    prompt:
      "`type Permutation<T, K = T> = [T] extends [never] ? [] : T extends T ? [T, ...Permutation<Exclude<K, T>>] : []` の役割は？",
    choices: [
      "ユニオン T の全順列をタプルのユニオンとして列挙する",
      "T の組合せ (順序無視) を列挙する",
      "T の冪集合を列挙する",
      "T のサイズを返す",
    ],
    answerIndex: 0,
    explanation:
      "`T extends T ?` は分配を強制してユニオン要素ごとに展開し、`Exclude<K, T>` で残りから再帰的に順列を生成します。`[T] extends [never]` で空ユニオンを終端にしています。",
  },
  {
    id: "adv-033",
    category: "advanced",
    difficulty: "easy",
    prompt:
      "`type Concat<A extends readonly unknown[], B extends readonly unknown[]> = [...A, ...B]` で `Concat<[1,2],[3,4]>` は？",
    choices: ["[1,2,3,4]", "[[1,2],[3,4]]", "(1|2|3|4)[]", "number[]"],
    answerIndex: 0,
    explanation:
      "可変長タプルの spread で型レベル連結を表現できます。要素のリテラル型もそのまま保持されます。",
  },
  {
    id: "adv-034",
    category: "advanced",
    difficulty: "medium",
    prompt:
      "`Push<T, V> = [...T, V]` / `Pop<T> = T extends [...infer R, any] ? R : never` の組み合わせで、`Pop<Push<[1,2], 3>>` は？",
    choices: ["[1, 2]", "[1, 2, 3]", "3", "never"],
    answerIndex: 0,
    explanation:
      "Push で末尾追加し、Pop で `...infer R, any` パターンから末尾を捨てた残りを取り出します。結果として元のタプルに戻ります。",
  },
  {
    id: "adv-035",
    category: "advanced",
    difficulty: "medium",
    prompt:
      "`type FilterString<T extends readonly unknown[]> = T extends [infer H, ...infer R] ? H extends string ? [H, ...FilterString<R>] : FilterString<R> : []` で `FilterString<[1,'a',2,'b']>` は？",
    choices: [
      "['a', 'b']",
      "[1, 2]",
      "[1, 'a', 2, 'b']",
      "string[]",
    ],
    answerIndex: 0,
    explanation:
      "先頭要素ごとに条件分岐し、合致するものだけ残しながら再帰します。型レベルの `Array.prototype.filter` 相当です。",
  },
  {
    id: "adv-036",
    category: "advanced",
    difficulty: "hard",
    prompt:
      "深いキーパス型 `type Paths<T> = { [K in keyof T & string]: T[K] extends object ? K | `${K}.${Paths<T[K]>}` : K }[keyof T & string]` の挙動として正しいのは？",
    choices: [
      "ネストしたオブジェクトに対し `'a' | 'a.b' | 'a.b.c'` のようなドット区切りキーパスをユニオン生成する",
      "深さ 1 のキーしか取得できない",
      "値の型のみを列挙する",
      "配列のインデックスを列挙する",
    ],
    answerIndex: 0,
    explanation:
      "Mapped Type の値側で再帰的に Paths を呼び、`[keyof T & string]` で値のユニオンに変換することで、全パスを文字列リテラル型のユニオンとして取り出します。",
  },
  {
    id: "adv-037",
    category: "advanced",
    difficulty: "hard",
    prompt:
      "`type Get<T, P extends string> = P extends `${infer K}.${infer R}` ? K extends keyof T ? Get<T[K], R> : never : P extends keyof T ? T[P] : never` の主目的は？",
    choices: [
      "ドット区切りパス文字列で深いプロパティ型を取り出す",
      "オブジェクトを Map に変換する",
      "プロパティを動的に追加する",
      "値を実行時に取得する",
    ],
    answerIndex: 0,
    explanation:
      "テンプレートリテラル + infer でパスを先頭キーと残りに分け、再帰的に降りて該当プロパティ型を取得します。実行時のロジックは別途必要です。",
  },
  {
    id: "adv-038",
    category: "advanced",
    difficulty: "hard",
    prompt:
      "深い `Set<T, P, V>` 型を実装する際、再帰的に「残りのプロパティはそのまま」「対象キーだけ書き換え」を表現するために通常使うのは？",
    choices: [
      "Mapped Type と条件型の組合せ (`{ [K in keyof T]: K extends Head ? Set<T[K], Rest, V> : T[K] }`)",
      "実行時の `Object.assign` を型に持ち込む",
      "`as const` だけで十分",
      "interface の宣言マージ",
    ],
    answerIndex: 0,
    explanation:
      "対象キーのみ再帰的に書き換え、その他は素通しにする Mapped + 条件型のパターンが一般的です。タプルや配列は別ケースとして扱います。",
  },
  {
    id: "adv-039",
    category: "advanced",
    difficulty: "medium",
    prompt:
      "Mapped Type の key remapping で `as never` を返したキーはどうなる？",
    choices: [
      "結果の型から取り除かれる",
      "値が never に置き換えられる",
      "キー名が文字列 'never' になる",
      "コンパイルエラーになる",
    ],
    answerIndex: 0,
    explanation:
      "`as` 句で `never` に再マップしたプロパティは出力型から除外されます。`Omit` 風の選択的削除を実装する常套手段です。",
  },
  {
    id: "adv-040",
    category: "advanced",
    difficulty: "medium",
    prompt:
      "`type ToArray<T> = T extends any ? T[] : never` を `ToArray<string | number>` に適用した結果は？",
    choices: [
      "string[] | number[]",
      "(string | number)[]",
      "string[] & number[]",
      "never",
    ],
    answerIndex: 0,
    explanation:
      "裸の `T` に対する条件型はユニオン分配が起きるため、各要素ごとに `T[]` を作って結果がユニオンになります。`[T] extends [any]` ならば `(string|number)[]` になります。",
  },
  {
    id: "adv-041",
    category: "advanced",
    difficulty: "hard",
    prompt:
      "TypeScript で「高階型 (Higher-Kinded Types, HKT)」が直接サポートされていないとは具体的にどういう状況？",
    choices: [
      "`type F<G, A> = G<A>` のように型コンストラクタ自体を型変数に取れない",
      "ジェネリック型を一切定義できない",
      "型エイリアスをネストできない",
      "条件型を再帰させられない",
    ],
    answerIndex: 0,
    explanation:
      "型コンストラクタ (`Array`, `Promise` など) を型変数に渡せないため、fp-ts などはインデックスアクセスや「URI」で HKT を擬似的に表現する回避策を採用しています。",
  },
  {
    id: "adv-042",
    category: "advanced",
    difficulty: "hard",
    prompt:
      "ブランド型 (Branded / Phantom Type) の典型的な実装として正しいのは？",
    choices: [
      "`type UserId = string & { readonly __brand: 'UserId' }` のように交差型でユニークなタグを付与する",
      "`class UserId extends String {}` を必ず使う",
      "`type UserId = unique symbol` を使うのが唯一の方法",
      "`as const` を付けるだけで自動的に作られる",
    ],
    answerIndex: 0,
    explanation:
      "実体は string ですが、構造的型システム上で別物として扱わせるためにダミーの `__brand` プロパティを交差で付けます。値レベルでは `as UserId` で生成します。",
  },
  {
    id: "adv-043",
    category: "advanced",
    difficulty: "medium",
    prompt:
      "Mapped Type が「同型 (homomorphic)」とみなされる条件として正しいのは？",
    choices: [
      "`{ [K in keyof T]: ... }` の形で、`T` の `readonly` / `?` 修飾子を自動的に保持する",
      "戻り値の型が必ず `T` と等しい",
      "プロパティ数が変わらないこと",
      "`as` で key remapping していること",
    ],
    answerIndex: 0,
    explanation:
      "`keyof T` をそのままイテレートする形 (homomorphic) は元の修飾子を保ちます。`K in 'a' | 'b'` のように外部から与えた union を回す非同型版では修飾子が失われます。",
  },
  {
    id: "adv-044",
    category: "advanced",
    difficulty: "easy",
    prompt:
      "`type Mut<T> = { -readonly [K in keyof T]: T[K] }` の `-readonly` の意味は？",
    choices: [
      "readonly 修飾子を取り除いてミュータブルにする",
      "プロパティを削除する",
      "値を null にする",
      "型を反転させる",
    ],
    answerIndex: 0,
    explanation:
      "Mapped Type では `+` / `-` で修飾子を加減できます。`-readonly` は読み取り専用属性の除去、`-?` は optional 属性の除去です。",
  },
  {
    id: "adv-045",
    category: "advanced",
    difficulty: "easy",
    prompt:
      "`type Optional<T> = { [K in keyof T]+?: T[K] }` の `+?` の意味は？",
    choices: [
      "明示的に optional 修飾子を付与する (省略時の `?` と同じ)",
      "optional を取り除く",
      "値に undefined を加える型ユニオンだけを作る",
      "プロパティ名を変更する",
    ],
    answerIndex: 0,
    explanation:
      "`+?` は optional の付与で、何も書かない `?` と等価です。明示することで `-?` (除去) と対比したい場合に使います。",
  },
  {
    id: "adv-046",
    category: "advanced",
    difficulty: "hard",
    prompt:
      "`type DeepRequired<T> = { [K in keyof T]-?: T[K] extends object ? DeepRequired<T[K]> : T[K] }` の挙動として正しいのは？",
    choices: [
      "ネストしたオブジェクトの全プロパティから optional 修飾子を再帰的に外す",
      "トップレベルのみ Required にする",
      "実行時に欠落プロパティを補う",
      "全プロパティを readonly にする",
    ],
    answerIndex: 0,
    explanation:
      "`-?` で optional を外しつつ、値がオブジェクトなら再帰的に同じ処理を施します。配列・関数を別扱いしたい場合は条件で除外するのが定石です。",
  },
  {
    id: "adv-047",
    category: "advanced",
    difficulty: "medium",
    prompt:
      "`type DeepReadonly<T> = { readonly [K in keyof T]: T[K] extends object ? DeepReadonly<T[K]> : T[K] }` のポイントは？",
    choices: [
      "Mapped Type の `readonly` 修飾子と再帰参照を組み合わせ、ネスト全体を読み取り専用にする",
      "`Object.freeze` を実行時に呼ぶ",
      "プリミティブも `readonly` 化する",
      "interface でしか実現できない",
    ],
    answerIndex: 0,
    explanation:
      "`readonly` 修飾子はそのプロパティのみに効くため、ネストにも適用したい場合は再帰的な Mapped Type が必要です。値レベルの不変性は別途確保します。",
  },
  {
    id: "adv-048",
    category: "advanced",
    difficulty: "hard",
    prompt:
      "条件型における型変数の分散 (variance) について正しい記述は？",
    choices: [
      "`T extends U ? X : Y` の `T` の位置は基本的に共変だが、関数の引数位置で使うと反変として扱われる",
      "条件型の中ではすべての型変数が常に不変 (invariant)",
      "条件型は variance に影響を与えない",
      "`infer` を使うと variance は完全に消える",
    ],
    answerIndex: 0,
    explanation:
      "関数型の引数は反変位置のため、infer を関数引数で行うと交差ではなくユニオンになるなどの挙動差があります。意図しない反変結合に注意が必要です。",
  },
  {
    id: "adv-049",
    category: "advanced",
    difficulty: "hard",
    prompt:
      "深い再帰型を書いていると `Type instantiation is excessively deep and possibly infinite.` エラーが出ることがある。原因として正しいのは？",
    choices: [
      "TypeScript には型のインスタンス化深さに上限があり、無限ループの可能性を保護するために打ち切られている",
      "ランタイムでスタックオーバーフローが起きている",
      "`infer` を使うと必ずこのエラーになる",
      "型エイリアスでは再帰できないため",
    ],
    answerIndex: 0,
    explanation:
      "コンパイラは型計算の停止性を保つため上限を設けています。回避策としてはアキュムレータを使う書き換えや、計算量を削減するパターンが取られます。",
  },
  {
    id: "adv-050",
    category: "advanced",
    difficulty: "hard",
    prompt:
      "型エイリアス同士の循環参照で「直接的な循環」を避けるためによく使う回避策は？",
    choices: [
      "オブジェクト型や配列型などの「遅延される位置」で参照することで循環を許容させる",
      "必ず interface に書き換える",
      "`any` で置換する",
      "型を分割代入する",
    ],
    answerIndex: 0,
    explanation:
      "型エイリアスは即時評価ですが、オブジェクトのプロパティや配列要素位置は遅延されるため自己参照が許されます。JSON 型などの再帰定義はこの性質を利用しています。",
  },
  {
    id: "adv-051",
    category: "advanced",
    difficulty: "medium",
    prompt:
      "`type NonEmpty<T> = T extends '' ? never : T` を `NonEmpty<'' | 'a' | 'b'>` に適用した結果は？",
    choices: ["'a' | 'b'", "never", "'' | 'a' | 'b'", "string"],
    answerIndex: 0,
    explanation:
      "裸の `T` の条件型はユニオン分配されます。`''` のケースだけ `never` となり、ユニオン中の `never` は吸収されるため `'a' | 'b'` が残ります。",
  },
];
