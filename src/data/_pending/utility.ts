import type { Question } from "../../types";

export const questions: readonly Question[] = [
  {
    id: "util-010",
    category: "utility",
    difficulty: "easy",
    prompt: "`Readonly<T>` の役割として正しいものはどれですか?",
    choices: [
      "`T` の全プロパティを `readonly` にした型を返す",
      "`T` の全プロパティを `optional` にした型を返す",
      "`T` を凍結した値を返すランタイム関数",
      "`T` の `readonly` 修飾を取り除いた型を返す",
    ],
    answerIndex: 0,
    explanation:
      "`Readonly<T>` は `{ readonly [P in keyof T]: T[P] }` と定義され、すべてのプロパティに `readonly` 修飾子を付けた型を返します。",
  },
  {
    id: "util-011",
    category: "utility",
    difficulty: "medium",
    prompt:
      "TypeScript には `Mutable<T>` のような `readonly` を外す組み込みユーティリティ型がない理由として最も適切なものはどれですか?",
    choices: [
      "実装が不可能だから",
      "`readonly` を外すのは `-readonly` 修飾子で簡単に書ける一方、不変性を壊す操作を標準で推奨しないため、自作で `type Mutable<T> = { -readonly [P in keyof T]: T[P] }` と書く必要がある",
      "`Mutable<T>` は内部的に存在し常に利用できる",
      "`readonly` は型レベルでは外せないため",
    ],
    answerIndex: 1,
    explanation:
      "`-readonly` 修飾子で `readonly` を取り除けますが、不変性を壊す操作を標準で勧めない設計思想のため、組み込みでは提供されていません。",
  },
  {
    id: "util-012",
    category: "utility",
    difficulty: "easy",
    prompt:
      "`class Foo { constructor(public a: number, public b: string) {} }` に対し `ConstructorParameters<typeof Foo>` の結果は?",
    choices: [
      "`{ a: number; b: string }`",
      "`Foo`",
      "`[a: number, b: string]`",
      "`(a: number, b: string) => Foo`",
    ],
    answerIndex: 2,
    explanation:
      "`ConstructorParameters<T>` はコンストラクタの引数をタプル型として取得します。引数名はラベル付きタプルとして保持されます。",
  },
  {
    id: "util-013",
    category: "utility",
    difficulty: "easy",
    prompt:
      "`class Foo { x = 1; }` に対する `InstanceType<typeof Foo>` は何になりますか?",
    choices: ["`typeof Foo`", "`Foo`", "`{ new(): Foo }`", "`never`"],
    answerIndex: 1,
    explanation:
      "`InstanceType<T>` はコンストラクタ型 `T` のインスタンス型を返します。`typeof Foo` から `Foo` を取り出すのに使えます。",
  },
  {
    id: "util-014",
    category: "utility",
    difficulty: "medium",
    prompt:
      "`function f(this: { name: string }, greet: string) {}` における `ThisParameterType<typeof f>` は?",
    choices: [
      "`{ name: string }`",
      "`string`",
      "`unknown`",
      "`[greet: string]`",
    ],
    answerIndex: 0,
    explanation:
      "`ThisParameterType<T>` は関数型 `T` の `this` 引数の型を抽出します。`this` 引数がない場合は `unknown` となります。",
  },
  {
    id: "util-015",
    category: "utility",
    difficulty: "medium",
    prompt:
      "`OmitThisParameter<T>` の説明として正しいものはどれですか?",
    choices: [
      "`T` から `this` 引数を取り除いた関数型を返す",
      "`T` のすべての引数を取り除いた関数型を返す",
      "`T` の戻り値を `this` 型にする",
      "`T` の `this` を `unknown` で固定する",
    ],
    answerIndex: 0,
    explanation:
      "`OmitThisParameter<T>` は関数型 `T` から `this` 引数の宣言を取り除いた関数型を返します。",
  },
  {
    id: "util-016",
    category: "utility",
    difficulty: "hard",
    prompt: "`ThisType<T>` の正しい使用文脈はどれですか?",
    choices: [
      "クラス継承で `this` の型を固定するために使う",
      "オブジェクトリテラルにおいて、メソッド内の `this` の型をコンテキストから推論させるためのマーカー型として使う(`noImplicitThis` 下で意味がある)",
      "`this` バインドを実行時に変更する",
      "関数の戻り値に `this` を設定する",
    ],
    answerIndex: 1,
    explanation:
      "`ThisType<T>` は中身を持たないマーカー型で、オブジェクトリテラルのメソッド内 `this` の型を `T` として推論させる際に使われます(例: Vue の options pattern)。",
  },
  {
    id: "util-017",
    category: "utility",
    difficulty: "easy",
    prompt: "`Uppercase<\"hello\">` の結果は何ですか?",
    choices: ["`\"HELLO\"`", "`\"hello\"`", "`\"Hello\"`", "`string`"],
    answerIndex: 0,
    explanation:
      "`Uppercase<S>` は文字列リテラル型 `S` をすべて大文字に変換した型を返す組み込みのインストリンシック型です。",
  },
  {
    id: "util-018",
    category: "utility",
    difficulty: "easy",
    prompt: "`Lowercase<\"FooBar\">` の結果は?",
    choices: ["`\"FOOBAR\"`", "`\"foobar\"`", "`\"FooBar\"`", "`string`"],
    answerIndex: 1,
    explanation:
      "`Lowercase<S>` は文字列リテラル型をすべて小文字に変換します。",
  },
  {
    id: "util-019",
    category: "utility",
    difficulty: "easy",
    prompt: "`Capitalize<\"hello\">` の結果は?",
    choices: ["`\"hello\"`", "`\"HELLO\"`", "`\"Hello\"`", "`\"hELLO\"`"],
    answerIndex: 2,
    explanation:
      "`Capitalize<S>` は先頭文字のみを大文字に変換した型を返します。",
  },
  {
    id: "util-020",
    category: "utility",
    difficulty: "easy",
    prompt: "`Uncapitalize<\"FooBar\">` の結果は?",
    choices: ["`\"fooBar\"`", "`\"foobar\"`", "`\"FooBar\"`", "`\"FOOBAR\"`"],
    answerIndex: 0,
    explanation:
      "`Uncapitalize<S>` は先頭文字のみを小文字に変換し、その他はそのままにします。",
  },
  {
    id: "util-021",
    category: "utility",
    difficulty: "hard",
    prompt:
      "TypeScript 5.4 で追加された `NoInfer<T>` の役割として正しいものはどれですか?",
    choices: [
      "`T` を `never` に変換する",
      "`T` を推論候補から除外し、別の型引数で推論させたい場面で使う",
      "`T` を強制的に推論する",
      "`T` を `any` として扱う",
    ],
    answerIndex: 1,
    explanation:
      "`NoInfer<T>` で囲まれた位置の引数は型引数の推論ソースとして使われなくなり、他の引数からの推論結果がその位置に流し込まれます。",
  },
  {
    id: "util-022",
    category: "utility",
    difficulty: "medium",
    prompt:
      "`Pick<T, K>` と自作の `{ [P in K]: T[P] }`(K extends keyof T)の違いとして正しいものはどれですか?",
    choices: [
      "全く違う型を返す",
      "意味的にはほぼ同等だが、`Pick` はライブラリ全体で意図が伝わりやすく、JSDocやエラーメッセージで `Pick` のまま表示されることがある",
      "`Pick` は実行時にも動作するが、自作版は型のみ",
      "`Pick` は `readonly` を付与する",
    ],
    answerIndex: 1,
    explanation:
      "両者は構造的には等価ですが、`Pick` を使うことでコードの意図が明確になり、エラーメッセージなどで保持されやすくなります。",
  },
  {
    id: "util-023",
    category: "utility",
    difficulty: "medium",
    prompt:
      "ネストしたオブジェクトを再帰的にオプショナルにする `DeepPartial<T>` の正しい定義はどれですか?",
    choices: [
      "`type DeepPartial<T> = Partial<T>`",
      "`type DeepPartial<T> = { [K in keyof T]?: T[K] extends object ? DeepPartial<T[K]> : T[K] }`",
      "`type DeepPartial<T> = { [K in keyof T]: Partial<T[K]> }`",
      "`type DeepPartial<T> = Readonly<T>`",
    ],
    answerIndex: 1,
    explanation:
      "再帰的な分岐型を使い、`object` を継承するプロパティはさらに `DeepPartial` を適用、それ以外はそのまま残すのが基本形です。",
  },
  {
    id: "util-024",
    category: "utility",
    difficulty: "medium",
    prompt:
      "`DeepReadonly<T>` の最も典型的な定義として正しいものはどれですか?",
    choices: [
      "`type DeepReadonly<T> = Readonly<T>`",
      "`type DeepReadonly<T> = { readonly [K in keyof T]: T[K] extends object ? DeepReadonly<T[K]> : T[K] }`",
      "`type DeepReadonly<T> = { [K in keyof T]?: DeepReadonly<T[K]> }`",
      "`type DeepReadonly<T> = T`",
    ],
    answerIndex: 1,
    explanation:
      "ネストしたオブジェクトに対しても再帰的に `readonly` を付与する形がシンプルで一般的です。関数型を除外する厳密版も存在します。",
  },
  {
    id: "util-025",
    category: "utility",
    difficulty: "hard",
    prompt: "`DeepMutable<T>` の典型的な定義として正しいものはどれですか?",
    choices: [
      "`type DeepMutable<T> = { -readonly [K in keyof T]: T[K] extends object ? DeepMutable<T[K]> : T[K] }`",
      "`type DeepMutable<T> = { [K in keyof T]: T[K] }`",
      "`type DeepMutable<T> = Partial<T>`",
      "`type DeepMutable<T> = { readonly [K in keyof T]: T[K] }`",
    ],
    answerIndex: 0,
    explanation:
      "`-readonly` 修飾子で `readonly` を取り除き、ネストにも再帰的に適用するのが定型です。",
  },
  {
    id: "util-026",
    category: "utility",
    difficulty: "medium",
    prompt:
      "自作の `type Diff<A, B> = A extends B ? never : A` は組み込みのどのユーティリティ型と等価ですか?",
    choices: [
      "`Extract<A, B>`",
      "`Exclude<A, B>`",
      "`Omit<A, B>`",
      "`NonNullable<A>`",
    ],
    answerIndex: 1,
    explanation:
      "`Exclude<A, B>` は `A` のうち `B` に代入可能なメンバーを除外するもので、`Diff` と等価です。",
  },
  {
    id: "util-027",
    category: "utility",
    difficulty: "medium",
    prompt:
      "`type Filter<T, U> = T extends U ? T : never` は組み込みのどれと等価ですか?",
    choices: [
      "`Exclude<T, U>`",
      "`Pick<T, U>`",
      "`Extract<T, U>`",
      "`Required<T>`",
    ],
    answerIndex: 2,
    explanation:
      "`Extract<T, U>` はユニオン `T` から `U` に代入可能なメンバーだけを抽出するもので、`Filter` と等価です。",
  },
  {
    id: "util-028",
    category: "utility",
    difficulty: "medium",
    prompt:
      "オブジェクト `T` の値の型のユニオンを得る `ValueOf<T>` の定義として正しいのは?",
    choices: [
      "`type ValueOf<T> = keyof T`",
      "`type ValueOf<T> = T[keyof T]`",
      "`type ValueOf<T> = T extends infer U ? U : never`",
      "`type ValueOf<T> = T[number]`",
    ],
    answerIndex: 1,
    explanation:
      "`T[keyof T]` でキー型ごとのインデックスアクセスをユニオンとして取得でき、これが `ValueOf<T>` の定型です。",
  },
  {
    id: "util-029",
    category: "utility",
    difficulty: "hard",
    prompt:
      "`type XOR<A, B> = (A | B) extends object ? (A & Without<B, A>) | (B & Without<A, B>) : A | B` のような XOR 型の意図は何ですか?",
    choices: [
      "両方のキーを必須にする",
      "`A` と `B` のどちらか片方のキーセットだけを持つ排他的なオブジェクト型を表す",
      "`A` と `B` の交差を取る",
      "ユニオンを単純化する",
    ],
    answerIndex: 1,
    explanation:
      "XOR 型は二つのプロパティセットの片方だけを持つ排他的オブジェクト型を表現するのに使われます。`Without` で片方の余剰キーを `never` 化するのが定石です。",
  },
  {
    id: "util-030",
    category: "utility",
    difficulty: "hard",
    prompt:
      "`type UnionToIntersection<U> = (U extends any ? (k: U) => void : never) extends ((k: infer I) => void) ? I : never` の仕組みは?",
    choices: [
      "ユニオンの要素数を数える",
      "ユニオン `U` を関数引数の反変位置に置き、`infer` で交差として推論させる",
      "ユニオンをタプル化する",
      "ユニオンの最初の要素を返す",
    ],
    answerIndex: 1,
    explanation:
      "関数引数は反変なので、ユニオンが反変位置にあると推論時に交差型に変換されるテクニックを利用します。",
  },
  {
    id: "util-031",
    category: "utility",
    difficulty: "hard",
    prompt:
      "`UnionToTuple<U>` を作る一般的な手法は次のどれですか?",
    choices: [
      "`U[]` を直接タプルに変換する",
      "`UnionToIntersection` を使ってユニオンの最後の要素を取り出し、再帰的に削っていく",
      "`keyof U` を使う",
      "`infer R extends any[]` で一発で得られる",
    ],
    answerIndex: 1,
    explanation:
      "`UnionToIntersection` でオーバーロード関数の最後のシグネチャを取得し、ユニオンの末尾要素を抽出して再帰的にタプル化するのが定型のテクニックです。順序は保証されません。",
  },
  {
    id: "util-032",
    category: "utility",
    difficulty: "easy",
    prompt: "`type T = [1, 2, 3][number]` の結果はどれですか?",
    choices: ["`number`", "`1 | 2 | 3`", "`[1,2,3]`", "`3`"],
    answerIndex: 1,
    explanation:
      "タプル型に `[number]` でインデックスアクセスすると、要素のユニオン型が得られます。これが TupleToUnion の典型例です。",
  },
  {
    id: "util-033",
    category: "utility",
    difficulty: "hard",
    prompt:
      "`IsEqual<A, B>` を実装する有名な手法として正しいのはどれですか?",
    choices: [
      "`A extends B ? true : false`",
      "`(<T>() => T extends A ? 1 : 2) extends (<T>() => T extends B ? 1 : 2) ? true : false`",
      "`A == B`",
      "`A & B extends never ? false : true`",
    ],
    answerIndex: 1,
    explanation:
      "ジェネリック関数の構造的等価性を比較するイディオムを使うと、`any` や分配を含めて厳密に二つの型の等価性を判定できます。",
  },
  {
    id: "util-034",
    category: "utility",
    difficulty: "medium",
    prompt:
      "`type IsAny<T> = 0 extends 1 & T ? true : false` の仕組みとして正しいものは?",
    choices: [
      "`T` が `unknown` のときだけ `true`",
      "`1 & T` は `T` が `any` のときに `any` になり、`0 extends any` が成立するため `true` になる",
      "`T` が `never` のときだけ `true`",
      "常に `false`",
    ],
    answerIndex: 1,
    explanation:
      "`any` との交差はすべて `any` になる性質を利用し、`0 extends 1 & T` が成立するかで判定します。",
  },
  {
    id: "util-035",
    category: "utility",
    difficulty: "medium",
    prompt:
      "`type IsNever<T> = [T] extends [never] ? true : false` のように `[T]` で囲む理由は?",
    choices: [
      "見た目を整えるため",
      "裸の型引数を `extends` に置くと `T` が `never` の場合に分配が起きて `never` になるのを防ぐため",
      "`never` を `null` に変換するため",
      "`T` を配列にしたいため",
    ],
    answerIndex: 1,
    explanation:
      "条件型では裸の型引数が `never` のとき分配が起こり、結果が `never` になります。タプルで包むことで分配を抑制できます。",
  },
  {
    id: "util-036",
    category: "utility",
    difficulty: "hard",
    prompt:
      "`type IsUnknown<T> = unknown extends T ? (T extends unknown ? true : false) : false` における `T extends unknown` は何のため?",
    choices: [
      "`unknown` 自身を弾くため",
      "`T` が `any` のときに `IsUnknown` が `true` にならないように分配を経由する仕掛け",
      "実行時の挙動を制御するため",
      "意味はなく省略可能",
    ],
    answerIndex: 1,
    explanation:
      "`any` も `unknown extends T` を満たしてしまうため、もう一段の条件型で `any` を排除する必要があります。",
  },
  {
    id: "util-037",
    category: "utility",
    difficulty: "easy",
    prompt:
      "`type Length<T extends readonly any[]> = T[\"length\"]` に `[\"a\", \"b\", \"c\"]` を渡すと?",
    choices: ["`number`", "`3`", "`\"length\"`", "`[\"a\",\"b\",\"c\"]`"],
    answerIndex: 1,
    explanation:
      "タプル型の `\"length\"` プロパティはリテラル数値型として保持されているため、`3` というリテラル数値型が得られます。",
  },
  {
    id: "util-038",
    category: "utility",
    difficulty: "medium",
    prompt:
      "`Promise.all([Promise.resolve(1), Promise.resolve(\"a\")])` の戻り値の型は?",
    choices: [
      "`Promise<any[]>`",
      "`Promise<[number, string]>`",
      "`Promise<unknown[]>`",
      "`[Promise<number>, Promise<string>]`",
    ],
    answerIndex: 1,
    explanation:
      "`Promise.all` は引数のタプル型から各要素を `Awaited` した結果のタプルを返す型シグネチャを持ちます。",
  },
  {
    id: "util-039",
    category: "utility",
    difficulty: "medium",
    prompt:
      "`Promise.allSettled` の戻り値配列の各要素の型として正しいのは?",
    choices: [
      "`PromiseSettledResult<T>`(`{ status: \"fulfilled\"; value: T } | { status: \"rejected\"; reason: any }`)",
      "`Promise<T>`",
      "`T | Error`",
      "`Awaited<T>`",
    ],
    answerIndex: 0,
    explanation:
      "`Promise.allSettled` は各 Promise の結果を `PromiseSettledResult<T>` のユニオン型として返します。`fulfilled` か `rejected` のいずれかです。",
  },
  {
    id: "util-040",
    category: "utility",
    difficulty: "medium",
    prompt:
      "`interface I { f?(): void; x?: number }` に `Required<I>` を適用すると?",
    choices: [
      "メソッド `f` は依然 optional のまま、`x` だけ必須になる",
      "`f` も `x` も必須プロパティとなり、`f(): void` の必須メソッドおよび必須 `x: number` を持つ型になる",
      "`f` が `never` 型になる",
      "全プロパティが `readonly` になる",
    ],
    answerIndex: 1,
    explanation:
      "`Required<T>` は optional 修飾子 `?` を `-?` で除去するため、メソッドの optional も含めてすべて必須化されます。",
  },
  {
    id: "util-041",
    category: "utility",
    difficulty: "hard",
    prompt:
      "値が `string` のキーだけ取り出す `PickByValue<T, V>` の典型的な実装は?",
    choices: [
      "`Pick<T, V>`",
      "`{ [K in keyof T as T[K] extends V ? K : never]: T[K] }`",
      "`{ [K in keyof T]: V }`",
      "`Omit<T, V>`",
    ],
    answerIndex: 1,
    explanation:
      "Mapped Types のキー再マッピング(`as` 句)で、値型が `V` に一致するキーだけを残し、それ以外を `never` にして除外します。",
  },
  {
    id: "util-042",
    category: "utility",
    difficulty: "medium",
    prompt:
      "値の型 `V` を持つキーを除外する `OmitByValue<T, V>` の正しい定義は?",
    choices: [
      "`Omit<T, V>`",
      "`{ [K in keyof T as T[K] extends V ? never : K]: T[K] }`",
      "`{ [K in keyof T]: Exclude<T[K], V> }`",
      "`Pick<T, keyof T>`",
    ],
    answerIndex: 1,
    explanation:
      "`as` 句で値型が `V` の場合に `never` を返すことで、当該キーをマッピング結果から除外します。",
  },
  {
    id: "util-043",
    category: "utility",
    difficulty: "medium",
    prompt:
      "Mapped Types の Key Remapping(`as`)が導入されたバージョンと用途として正しいのは?",
    choices: [
      "TypeScript 4.1 で導入され、Mapped Types の各キーを別の文字列リテラルや `never` に再マッピングできる",
      "TypeScript 3.0 で導入された",
      "`as` は実行時の型変換のみに使われる",
      "`as const` と同じ意味",
    ],
    answerIndex: 0,
    explanation:
      "Key Remapping は TS 4.1 で追加され、`{ [K in keyof T as NewKey]: T[K] }` のように key を変換・除外できるようになりました。",
  },
  {
    id: "util-044",
    category: "utility",
    difficulty: "medium",
    prompt:
      "`type ConditionalPick<T, U> = { [K in keyof T as T[K] extends U ? K : never]: T[K] }` の意味として正しいのは?",
    choices: [
      "値が `U` に代入可能なプロパティだけを残す型",
      "キーが `U` のものを残す",
      "`T` を `U` で初期化する",
      "`U` を `T` のキーで絞り込む",
    ],
    answerIndex: 0,
    explanation:
      "値の型を条件にプロパティを取捨選択する Conditional Pick のパターンです。`never` のキーは Mapped Types の結果から消えます。",
  },
  {
    id: "util-045",
    category: "utility",
    difficulty: "easy",
    prompt:
      "`ReadonlyArray<T>` と `Readonly<Array<T>>` の関係として正しいものは?",
    choices: [
      "`Readonly<Array<T>>` は `T[]` をプロパティ単位で `readonly` にするだけで、`push` などのメソッドが残るので `ReadonlyArray<T>` とは異なる",
      "両者は完全に同じ",
      "`ReadonlyArray<T>` は存在しない型",
      "`Readonly<Array<T>>` の方が制約が強い",
    ],
    answerIndex: 0,
    explanation:
      "`Readonly<Array<T>>` は `length` などをプロパティとして `readonly` にするだけで、`push` 等の変更系メソッドは残ります。要素の追加・変更まで禁止したい場合は `ReadonlyArray<T>` か `readonly T[]` を使います。",
  },
];
