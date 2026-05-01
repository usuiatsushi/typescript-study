import type { Question } from "../types";

export const QUESTIONS: readonly Question[] = [
  {
    id: "basic-001",
    category: "basic",
    difficulty: "easy",
    prompt: "次のうち、TypeScriptに存在しない基本型はどれですか？",
    choices: ["number", "string", "char", "boolean"],
    answerIndex: 2,
    explanation:
      "TypeScriptには char 型はありません。1文字も string で表現します。",
  },
  {
    id: "basic-002",
    category: "basic",
    difficulty: "easy",
    prompt: "any と unknown の違いとして正しいのはどれですか？",
    choices: [
      "any は型チェックを抑制するが、unknown は使用前に型の絞り込みが必要",
      "unknown は実行時エラーを防ぐ特殊型で、any より遅い",
      "両者は完全に同義",
      "unknown は never のエイリアス",
    ],
    answerIndex: 0,
    explanation:
      "unknown はトップ型で代入は何でも可能ですが、使う前に型ガードや絞り込みが必要です。any はチェックを無効化します。",
  },
  {
    id: "basic-003",
    category: "basic",
    difficulty: "easy",
    prompt: "`const arr: number[] = [];` と等価な型表記はどれですか？",
    choices: [
      "Array<number>",
      "ReadonlyArray<number>",
      "Tuple<number>",
      "Set<number>",
    ],
    answerIndex: 0,
    explanation:
      "`number[]` は `Array<number>` のシンタックスシュガーです。読み取り専用にするなら ReadonlyArray<number>。",
  },
  {
    id: "basic-004",
    category: "basic",
    difficulty: "easy",
    prompt: "void と undefined の関係について正しいのは？",
    choices: [
      "void は何も返さない関数の戻り値型として使われ、undefined を含む",
      "void は undefined と完全に同じ",
      "void は never の別名",
      "void はオブジェクト型",
    ],
    answerIndex: 0,
    explanation:
      "戻り値が無い関数の戻り型が void です。実行時には undefined が返ります。",
  },

  {
    id: "iface-001",
    category: "interface",
    difficulty: "easy",
    prompt: "interface と type alias の違いとして正しいのはどれ？",
    choices: [
      "interface は宣言マージ可能だが type alias は不可",
      "type alias はクラスで実装できない",
      "interface はユニオン型を定義できる",
      "両者は完全に同じ",
    ],
    answerIndex: 0,
    explanation:
      "同名 interface は宣言マージされます。type alias はマージできず、ユニオンや条件型は type のみ表現可能です。",
  },
  {
    id: "iface-002",
    category: "interface",
    difficulty: "easy",
    prompt:
      "`interface User { readonly id: number; name: string }` の readonly の意味は？",
    choices: [
      "コンパイル時に再代入を禁止する",
      "実行時に Object.freeze される",
      "JSON シリアライズ不可になる",
      "private と同義",
    ],
    answerIndex: 0,
    explanation:
      "readonly はコンパイル時のチェックのみ。実行時に値を変更しても TS は止められません（`as` でのキャストや別名参照経由）。",
  },
  {
    id: "iface-003",
    category: "interface",
    difficulty: "easy",
    prompt: "オプショナルプロパティを表す書き方は？",
    choices: ["name?: string", "name!: string", "name: string?", "name: ?string"],
    answerIndex: 0,
    explanation: "プロパティ名の後ろに `?` を付けます。",
  },

  {
    id: "gen-001",
    category: "generics",
    difficulty: "easy",
    prompt:
      "`function identity<T>(x: T): T { return x }` を `identity('hi')` と呼んだとき、推論される T は？",
    choices: ["string", "'hi'", "any", "unknown"],
    answerIndex: 0,
    explanation:
      "リテラル文脈ではないので string にウィッデンされます。`identity<'hi'>('hi')` や `as const` ならリテラル型に。",
  },
  {
    id: "gen-002",
    category: "generics",
    difficulty: "medium",
    prompt: "ジェネリック制約 `<T extends { id: number }>` の意味は？",
    choices: [
      "T は id: number を持つ型でなければならない",
      "T は number 型に制限される",
      "T は id プロパティだけを持つ",
      "T は extends できない",
    ],
    answerIndex: 0,
    explanation:
      "extends による制約。T は少なくとも { id: number } 互換である必要があります。",
  },
  {
    id: "gen-003",
    category: "generics",
    difficulty: "medium",
    prompt: "`keyof` 演算子の説明として正しいのは？",
    choices: [
      "オブジェクト型のキーのユニオン型を返す",
      "オブジェクトのキー配列を実行時に返す",
      "Symbol キーを除外する",
      "値の型を返す",
    ],
    answerIndex: 0,
    explanation:
      "`keyof T` は型レベルの操作で、T のプロパティキーのユニオン型を返します。",
  },

  {
    id: "util-001",
    category: "utility",
    difficulty: "easy",
    prompt: "`Partial<T>` の説明は？",
    choices: [
      "T の全プロパティをオプショナルにした型",
      "T の最初のプロパティだけを抜き出す",
      "T を readonly にする",
      "T をユニオンに分解する",
    ],
    answerIndex: 0,
    explanation: "`Partial<T>` は全プロパティを `?` 付きにします。",
  },
  {
    id: "util-002",
    category: "utility",
    difficulty: "easy",
    prompt: "`Pick<T, K>` と `Omit<T, K>` の関係は？",
    choices: [
      "Pick は K のキーのみ抽出、Omit は K のキーを除外",
      "両者は同じ",
      "Pick は値、Omit は型を扱う",
      "Pick は配列専用",
    ],
    answerIndex: 0,
    explanation:
      "Pick<T, K> は K のキーだけ持つ型、Omit<T, K> は K を除いた型です。",
  },
  {
    id: "util-003",
    category: "utility",
    difficulty: "medium",
    prompt:
      "`type R = ReturnType<typeof fn>` は何を返しますか？(fn は関数)",
    choices: [
      "fn の戻り値の型",
      "fn の引数の型",
      "fn の this 型",
      "fn の長さ",
    ],
    answerIndex: 0,
    explanation:
      "ReturnType は関数型の戻り値の型を取り出します。引数なら Parameters<typeof fn>。",
  },
  {
    id: "util-004",
    category: "utility",
    difficulty: "easy",
    prompt: "`Required<T>` の効果は？",
    choices: [
      "T のオプショナルプロパティを必須にする",
      "T の readonly を外す",
      "T を nullable にする",
      "T を凍結する",
    ],
    answerIndex: 0,
    explanation: "`?` を全て外して必須化します。逆は Partial<T>。",
  },

  {
    id: "adv-001",
    category: "advanced",
    difficulty: "hard",
    prompt:
      "`type IsString<T> = T extends string ? true : false` の `IsString<'a' | 1>` は？",
    choices: ["boolean", "true", "false", "never"],
    answerIndex: 0,
    explanation:
      "条件型はユニオンに対して分配されるため、`true | false` = `boolean` になります。",
  },
  {
    id: "adv-002",
    category: "advanced",
    difficulty: "hard",
    prompt:
      "`type ElementOf<T> = T extends (infer U)[] ? U : never` で `ElementOf<string[]>` は？",
    choices: ["string", "string[]", "never", "unknown"],
    answerIndex: 0,
    explanation:
      "infer U で配列要素型を取り出します。string[] なら U は string。",
  },
  {
    id: "adv-003",
    category: "advanced",
    difficulty: "hard",
    prompt:
      "Mapped Type で `[K in keyof T]-?: T[K]` の `-?` の意味は？",
    choices: [
      "オプショナル修飾子を取り除く",
      "プロパティを削除する",
      "readonly を付与する",
      "値を null 許容にする",
    ],
    answerIndex: 0,
    explanation:
      "`-?` は optional 修飾子の除去。`-readonly` も同様にミュータブル化に使われます。",
  },
  {
    id: "adv-004",
    category: "advanced",
    difficulty: "hard",
    prompt: "Template Literal Type の例として正しいのは？",
    choices: [
      "type Hello<T extends string> = `hello, ${T}`",
      "type Hello = string + 'world'",
      "type Hello = concat<'a','b'>",
      "type Hello = `${number+1}`",
    ],
    answerIndex: 0,
    explanation:
      "バッククオート内で型変数を `${T}` のように埋め込めます。型レベルの文字列操作の基礎です。",
  },
  {
    id: "adv-005",
    category: "advanced",
    difficulty: "medium",
    prompt: "Discriminated Union の判別タグとしてよく使われるのは？",
    choices: [
      "リテラル型のプロパティ (例: kind: 'circle' | 'square')",
      "Symbol のみ",
      "any 型のプロパティ",
      "関数型プロパティ",
    ],
    answerIndex: 0,
    explanation:
      "リテラル型タグ（'circle' など）で switch による網羅チェックが効きます。never で漏れ検出。",
  },

  {
    id: "basic-005",
    category: "basic",
    difficulty: "medium",
    prompt:
      "`let x = 'hello'` と `const y = 'hello'` で推論される型はそれぞれ何ですか？",
    choices: [
      "x: string / y: 'hello'",
      "x: 'hello' / y: 'hello'",
      "x: string / y: string",
      "x: 'hello' / y: string",
    ],
    answerIndex: 0,
    explanation:
      "let では再代入されうるためリテラル型から string へウィッデン（拡大）されます。const は再代入不可なのでリテラル型 'hello' のまま保持されます。",
  },
  {
    id: "basic-006",
    category: "basic",
    difficulty: "medium",
    prompt:
      "`const t: [string, number] = ['age', 20]` のタプル型と `(string | number)[]` の違いは？",
    choices: [
      "タプルは要素数と各位置の型が固定、ユニオン配列は順序や個数が自由",
      "両者は完全に同じ",
      "タプルは実行時に長さが変えられない",
      "ユニオン配列の方がメモリ効率が良い",
    ],
    answerIndex: 0,
    explanation:
      "タプル型は長さと各インデックスの型が決まっています。`(string | number)[]` は任意の個数の string か number を許容する配列です。",
  },

  {
    id: "iface-004",
    category: "interface",
    difficulty: "medium",
    prompt:
      "`interface Dict { [key: string]: number }` のインデックスシグネチャの説明として正しいのは？",
    choices: [
      "任意の string キーに対して値が number であることを示す",
      "key という名前のプロパティのみ許す",
      "実行時に存在チェックを行う",
      "string キーを number に変換する",
    ],
    answerIndex: 0,
    explanation:
      "インデックスシグネチャは「任意のキー名に対する値の型」を表します。具体的なプロパティを併記する場合、その値型もインデックス型に代入可能でなければなりません。",
  },
  {
    id: "iface-005",
    category: "interface",
    difficulty: "medium",
    prompt:
      "`interface A { run(x: number): void }` と `interface B { run: (x: number) => void }` の違いとして正しいのは？",
    choices: [
      "メソッド記法はオーバーロードのバリアンスが緩く、関数プロパティ形式（strictFunctionTypes 下）の方が引数チェックが厳格",
      "両者は実行時に異なる挙動になる",
      "メソッド記法は this を持てない",
      "関数プロパティ形式は呼び出せない",
    ],
    answerIndex: 0,
    explanation:
      "メソッド短縮記法は引数のバイバリアントとして扱われ、関数プロパティ形式は strictFunctionTypes により引数が反変（contravariant）にチェックされます。",
  },

  {
    id: "gen-004",
    category: "generics",
    difficulty: "hard",
    prompt:
      "`function wrap<T = string>(x?: T): T[] { return x === undefined ? [] : [x] }` のデフォルト型パラメータの効果は？",
    choices: [
      "型引数を省略した場合、T は string として扱われる",
      "T が常に string になり上書きできない",
      "実行時に T が string に変換される",
      "デフォルト値が string になる",
    ],
    answerIndex: 0,
    explanation:
      "ジェネリクスの `= string` はデフォルト型パラメータ。明示しない場合に使われ、`wrap<number>()` のように上書きも可能です。",
  },
  {
    id: "gen-005",
    category: "generics",
    difficulty: "hard",
    prompt:
      "`type FirstArg<T> = T extends (a: infer A, ...rest: any[]) => any ? A : never` で `FirstArg<(s: string, n: number) => void>` は？",
    choices: ["string", "number", "[string, number]", "never"],
    answerIndex: 0,
    explanation:
      "infer A で第一引数の型を取り出します。関数 `(s: string, n: number) => void` の最初の引数は string です。",
  },

  {
    id: "util-005",
    category: "utility",
    difficulty: "medium",
    prompt:
      "`type Scores = Record<'math' | 'eng', number>` と等価な型はどれ？",
    choices: [
      "{ math: number; eng: number }",
      "{ [k: string]: number }",
      "['math', 'eng', number]",
      "{ math?: number; eng?: number }",
    ],
    answerIndex: 0,
    explanation:
      "`Record<K, V>` は K の各リテラルをキー、V を値の型に持つオブジェクト型を作ります。ここでは math と eng が必須の number プロパティになります。",
  },
  {
    id: "util-006",
    category: "utility",
    difficulty: "medium",
    prompt: "`NonNullable<T>` の説明として正しいのは？",
    choices: [
      "T から null と undefined を除去したユニオン型",
      "T を必須プロパティに変換する",
      "T が null のとき例外を投げる",
      "T を Required<T> と同義にする",
    ],
    answerIndex: 0,
    explanation:
      "`NonNullable<T>` は `T extends null | undefined ? never : T` 相当で、null と undefined を除外します。値レベルのチェックは別途必要です。",
  },

  {
    id: "adv-006",
    category: "advanced",
    difficulty: "hard",
    prompt:
      "`const config = { mode: 'dark', size: 12 } as const` の `as const` の効果は？",
    choices: [
      "全プロパティを readonly にし、値をリテラル型に固定する",
      "実行時に Object.freeze する",
      "オブジェクトを const 変数として束縛する",
      "型エラーを抑制する",
    ],
    answerIndex: 0,
    explanation:
      "`as const`（const アサーション）は、リテラル値をウィッデンせずそのままのリテラル型で推論し、配列をタプル化、プロパティを readonly にします。",
  },
  {
    id: "adv-007",
    category: "advanced",
    difficulty: "hard",
    prompt:
      "`satisfies` 演算子の役割として正しいのは？",
    choices: [
      "値が指定型に適合することを検査しつつ、より具体的な推論型を保持する",
      "値の型を強制的に上書きする（as と同じ）",
      "実行時に型チェックを行う",
      "型エイリアスを作る",
    ],
    answerIndex: 0,
    explanation:
      "`satisfies` は型注釈と異なり、値の具体的な推論型(リテラル型など)を失わずに、指定した型への適合性だけを検査します。`as` と違い不正な型へのキャストはできません。",
  },

  {
    id: "narrow-001",
    category: "narrowing",
    difficulty: "medium",
    prompt:
      "`function f(x: string | number) { if (typeof x === 'string') { /* ここでの x の型は？ */ } }`",
    choices: ["string", "number", "string | number", "unknown"],
    answerIndex: 0,
    explanation:
      "`typeof` ガードにより、then ブロック内では x は string に絞り込まれます。else 側では number になります。",
  },
  {
    id: "narrow-002",
    category: "narrowing",
    difficulty: "medium",
    prompt:
      "ユーザー定義型ガードを書く正しい構文はどれですか？",
    choices: [
      "function isCat(x: unknown): x is Cat { ... }",
      "function isCat(x: unknown): boolean<Cat> { ... }",
      "function isCat(x: unknown) as Cat { ... }",
      "function isCat<Cat>(x): boolean { ... }",
    ],
    answerIndex: 0,
    explanation:
      "戻り値の型を `引数 is 型` の形式（型述語）にすることで、true を返したスコープでその型に絞り込まれます。",
  },
  {
    id: "narrow-003",
    category: "narrowing",
    difficulty: "medium",
    prompt:
      "`in` 演算子の絞り込みとして正しいのは？",
    choices: [
      "`'swim' in animal` のように、特定プロパティを持つ型に絞り込める",
      "オブジェクトを iterate する",
      "配列の要素検索に使う",
      "型エイリアスを生成する",
    ],
    answerIndex: 0,
    explanation:
      "`in` 演算子はランタイム検査ですが、TS は then 側で「そのキーを持つメンバー型」に絞り込んでくれます。Discriminated Union とともによく使います。",
  },
  {
    id: "narrow-004",
    category: "narrowing",
    difficulty: "medium",
    prompt:
      "switch で網羅性を保証するために default で使うべき型はどれですか？",
    choices: ["never", "void", "unknown", "any"],
    answerIndex: 0,
    explanation:
      "`const _exhaustive: never = x` を default に書くと、ケース漏れがあった瞬間に never への代入エラーになり、コンパイル時に検出できます。",
  },
  {
    id: "narrow-005",
    category: "narrowing",
    difficulty: "medium",
    prompt:
      "`x: string | null` を非 null に絞り込む最も簡潔な方法は？",
    choices: [
      "if (x !== null) { /* ここで x は string */ }",
      "if (typeof x === 'string') を使う以外にない",
      "as string でキャストする",
      "Object.is(x, null) を使う",
    ],
    answerIndex: 0,
    explanation:
      "等価/不等価チェック（`!== null`、`!= null`、truthiness）も TS の絞り込み対象です。`!= null` は null と undefined の両方を一度に除外できます。",
  },

  {
    id: "class-001",
    category: "classes",
    difficulty: "medium",
    prompt:
      "TypeScript のクラスにおける `private` と `#` プライベートフィールドの違いは？",
    choices: [
      "private はコンパイル時のみ、# は実行時にも真にプライベート",
      "両者は完全に同じ",
      "# は ES5 でも動く",
      "private は継承先で見える",
    ],
    answerIndex: 0,
    explanation:
      "`private` は TS の型レベルのアクセス制限で実行時には普通にアクセス可能。`#field` は ECMAScript の Private Class Fields で実行時にも本当にプライベートです。",
  },
  {
    id: "class-002",
    category: "classes",
    difficulty: "medium",
    prompt:
      "`constructor(public readonly id: number) {}` の意味として正しいのは？",
    choices: [
      "id プロパティを宣言・初期化・public readonly にする省略記法（パラメータプロパティ）",
      "id を引数として受け取るだけ",
      "id を private にする",
      "構文エラー",
    ],
    answerIndex: 0,
    explanation:
      "コンストラクタ引数にアクセス修飾子や readonly を付けると、同名プロパティの宣言と代入を自動で行ってくれます（パラメータプロパティ）。",
  },
  {
    id: "class-003",
    category: "classes",
    difficulty: "medium",
    prompt:
      "`abstract class` の特徴として正しいのは？",
    choices: [
      "直接インスタンス化できず、サブクラスで abstract メンバーを実装する必要がある",
      "実行時に存在しない型情報",
      "interface と完全に同じ",
      "extends できない",
    ],
    answerIndex: 0,
    explanation:
      "`abstract` クラスは `new` で直接生成不可。`abstract` メソッド/プロパティはサブクラスで実装が強制されます。",
  },
  {
    id: "class-004",
    category: "classes",
    difficulty: "medium",
    prompt:
      "`class Dog implements Animal {}` の `implements` の意味は？",
    choices: [
      "Dog が Animal の構造（プロパティ・メソッド）を満たすことを契約として保証する",
      "Animal のメソッド実装を継承する",
      "Animal の private 実装を流用する",
      "Animal の static メンバーを取り込む",
    ],
    answerIndex: 0,
    explanation:
      "`implements` は形状のチェックのみで実装の継承はしません。実装も継承したいときは `extends` を使います。",
  },
  {
    id: "class-005",
    category: "classes",
    difficulty: "medium",
    prompt:
      "クラスのアクセス修飾子で「派生クラスからは見えるが外部からは見えない」のは？",
    choices: ["protected", "private", "public", "readonly"],
    answerIndex: 0,
    explanation:
      "`protected` は同クラスとその派生クラスからアクセス可能。外部のインスタンスからはアクセスできません。",
  },

  {
    id: "basic-007",
    category: "basic",
    difficulty: "easy",
    prompt:
      "`enum Color { Red, Green }` と `const Color = { Red: 'Red', Green: 'Green' } as const` の違いとして正しいのは？",
    choices: [
      "enum はコンパイル後に実行時オブジェクトを生成し、`as const` オブジェクトは型をリテラル値に固定するだけで実行時の構造はオブジェクトリテラルのまま",
      "両者は完全に同義で、実行時の挙動も同じ",
      "`as const` の方がツリーシェイクされず常にバンドルに残る",
      "enum はコンパイル時に消える型のみで、実行時には何も残らない",
    ],
    answerIndex: 0,
    explanation:
      "数値 enum は逆引きマップ付きの実行時オブジェクトを生成しますが、`as const` オブジェクトは普通のオブジェクトリテラルにリテラル型を付けただけです。最近は `as const` の方が好まれることも多いです。",
  },
  {
    id: "basic-008",
    category: "basic",
    difficulty: "medium",
    prompt:
      "`symbol` 型の説明として正しいのはどれですか？",
    choices: [
      "`Symbol()` で作られる一意な値の型で、リテラル相当の型を扱うには `unique symbol` を使う",
      "`symbol` 型のリテラルは存在しないので、必ず any として扱われる",
      "`symbol` は string のサブタイプで自動的に変換される",
      "`Symbol()` の戻り値は string 型である",
    ],
    answerIndex: 0,
    explanation:
      "`Symbol()` で生成される値は一意で、型は `symbol`。`const s: unique symbol = Symbol()` のようにすると、その値固有の `unique symbol` 型として扱えます。",
  },
  {
    id: "basic-009",
    category: "basic",
    difficulty: "easy",
    prompt:
      "`bigint` と `number` の違いとして正しいのはどれですか？",
    choices: [
      "`bigint` は任意精度整数を扱う型で、`number` と直接演算できない（混在は型エラー）",
      "`bigint` は `number` のサブタイプで自由に混ぜて演算できる",
      "`bigint` は浮動小数を含めた精度を保証する",
      "`bigint` は実行時には存在しない、型だけの存在である",
    ],
    answerIndex: 0,
    explanation:
      "`bigint` は ES2020 で追加された任意精度整数型。`1n + 1` のような `number` との直接演算は型エラー（実行時もエラー）になります。",
  },

  {
    id: "iface-006",
    category: "interface",
    difficulty: "easy",
    prompt:
      "`interface Dog extends Animal, HasName {}` のようにインタフェースを継承する記法の説明として正しいのは？",
    choices: [
      "複数の interface を `extends` でまとめて継承し、メンバーが結合された新しい型になる",
      "クラスのみで使え、interface 同士の継承はできない",
      "継承元のメンバーは optional になる",
      "extends は1つしか書けない",
    ],
    answerIndex: 0,
    explanation:
      "interface は複数 interface を `extends` で継承可能で、メンバーが合成された型になります。同名メンバーの型が衝突すれば型エラーです。",
  },
  {
    id: "iface-007",
    category: "interface",
    difficulty: "medium",
    prompt:
      "`interface Config { readonly tags: readonly string[] }` の `readonly string[]` の意味は？",
    choices: [
      "配列要素の追加・変更・削除（push, splice, インデックス代入など）が型レベルで禁止される",
      "配列の中身が実行時に Object.freeze される",
      "配列の長さが固定される（タプル化される）",
      "配列要素のみが readonly になり、配列自体は変更可能",
    ],
    answerIndex: 0,
    explanation:
      "`readonly T[]` は `ReadonlyArray<T>` の糖衣で、push や splice、インデックス代入などミューテーション系メソッドが型から取り除かれます。実行時には普通の配列です。",
  },
  {
    id: "iface-008",
    category: "interface",
    difficulty: "medium",
    prompt:
      "`interface Callable { (x: number): string }` のような呼び出しシグネチャを持つ interface の意味は？",
    choices: [
      "そのインタフェース型の値は関数として呼び出せ、(x: number) => string と同等の呼び出し可能型を表す",
      "`new` でしかインスタンス化できないコンストラクタ型を表す",
      "interface 内に関数 `Callable` を実装する宣言である",
      "実行時に関数オブジェクトを生成する宣言である",
    ],
    answerIndex: 0,
    explanation:
      "プロパティ名のないシグネチャは呼び出しシグネチャで、その型の値が関数として使えることを示します。プロパティと併記すれば「呼べてプロパティも持つ」関数型を表現できます。",
  },

  {
    id: "gen-006",
    category: "generics",
    difficulty: "medium",
    prompt:
      "`type Box<T> = { value: T }` のようなジェネリック型エイリアスについて正しいのは？",
    choices: [
      "interface と異なり、ユニオン型・条件型・タプルなど任意の型を右辺に書けるジェネリック型を作れる",
      "ジェネリック型エイリアスは interface と完全に同じで、宣言マージも可能",
      "型エイリアスにジェネリクスは使えない",
      "実行時に Box クラスが生成される",
    ],
    answerIndex: 0,
    explanation:
      "型エイリアスはあらゆる型の別名にジェネリクスを付けられる柔軟な仕組みです。interface と違い宣言マージはできませんが、ユニオンや条件型を扱えます。",
  },
  {
    id: "gen-007",
    category: "generics",
    difficulty: "hard",
    prompt:
      "TypeScript の関数型における引数の変位について、`strictFunctionTypes` 有効下で正しいのはどれですか？",
    choices: [
      "関数プロパティ形式の引数は反変（contravariant）にチェックされ、より広い型を受け取る関数は狭い型を期待する場所に代入できる",
      "関数の引数は常に共変（covariant）として扱われる",
      "関数の戻り値は反変、引数は共変として扱われる",
      "`strictFunctionTypes` は引数を不変（invariant）にする",
    ],
    answerIndex: 0,
    explanation:
      "関数の戻り値は共変、引数は反変が安全です。`strictFunctionTypes` を有効にすると関数プロパティ形式は反変になります（メソッド短縮記法は互換性のためバイバリアントのまま）。",
  },
  {
    id: "gen-008",
    category: "generics",
    difficulty: "hard",
    prompt:
      "`type DeepReadonly<T> = { readonly [K in keyof T]: DeepReadonly<T[K]> }` のような再帰的なジェネリック型の説明として正しいのは？",
    choices: [
      "Mapped Type の中で自分自身を参照することで、ネストしたオブジェクト全体に readonly を伝播できる",
      "TypeScript は再帰的な型エイリアスをサポートしないため、コンパイルエラーになる",
      "実行時に Object.freeze が再帰的に呼ばれる",
      "プリミティブ型もすべてオブジェクト化される",
    ],
    answerIndex: 0,
    explanation:
      "型エイリアスは Mapped Type の中などで再帰参照可能で、ネストした構造を再帰的に変換できます。プリミティブはそのままで、オブジェクト型のみ深く readonly になります。",
  },

  {
    id: "util-007",
    category: "utility",
    difficulty: "medium",
    prompt:
      "`Awaited<T>` の説明として正しいのはどれですか？",
    choices: [
      "Promise のチェーンを再帰的に剥がし、最終的に解決される値の型を取り出す",
      "Promise を実行時に await する関数",
      "T を必ず Promise<T> でラップする型",
      "T が Promise でなければ never になる",
    ],
    answerIndex: 0,
    explanation:
      "`Awaited<Promise<Promise<number>>>` は number になります。`async` 関数の戻り型推論にも内部的に使われています。",
  },
  {
    id: "util-008",
    category: "utility",
    difficulty: "medium",
    prompt:
      "`function add(a: number, b: number): number { return a + b }` に対し、`Parameters<typeof add>` は何になりますか？",
    choices: [
      "[a: number, b: number]",
      "{ a: number; b: number }",
      "number",
      "(a: number, b: number) => number",
    ],
    answerIndex: 0,
    explanation:
      "`Parameters<T>` は関数型の引数をタプル型として返します。ラベル付きタプルとして引数名も保持されます。",
  },
  {
    id: "util-009",
    category: "utility",
    difficulty: "medium",
    prompt:
      "`Extract<T, U>` と `Exclude<T, U>` の関係として正しいのは？",
    choices: [
      "Extract は T のうち U に代入可能なメンバーだけを取り出し、Exclude はそれを除外する",
      "両者は同義で、引数の順序だけが違う",
      "Extract は配列専用、Exclude はオブジェクト専用",
      "Exclude は null と undefined を除去する（NonNullable と同じ）",
    ],
    answerIndex: 0,
    explanation:
      "`Extract<'a' | 'b' | 1, string>` は `'a' | 'b'`、`Exclude<'a' | 'b' | 1, string>` は `1` になります。条件型のユニオン分配を利用した型です。",
  },

  {
    id: "adv-008",
    category: "advanced",
    difficulty: "hard",
    prompt:
      "`type JSONValue = string | number | boolean | null | JSONValue[] | { [k: string]: JSONValue }` のような再帰型の説明として正しいのは？",
    choices: [
      "型エイリアスは自身を参照する再帰型を定義でき、JSON のような任意深さの構造を表現できる",
      "型エイリアス内で自身を参照すると常にコンパイルエラーになる",
      "再帰参照には必ず `infer` が必要",
      "再帰型はクラスでしか定義できない",
    ],
    answerIndex: 0,
    explanation:
      "型エイリアスはオブジェクト型・配列型などの「コンストラクタ位置」で自身を参照可能です。これによって木構造や JSON のような再帰的な型を素直に書けます。",
  },
  {
    id: "adv-009",
    category: "advanced",
    difficulty: "hard",
    prompt:
      "Mapped Type の `as` 句（key remapping）の役割として正しいのは？",
    choices: [
      "`[K in keyof T as NewKey]` の形でキー名を変換でき、never を返したキーを除外することもできる",
      "値の型を別の型にキャストする（`as` キャストと同じ）",
      "プロパティを readonly にする修飾子",
      "Mapped Type を interface に変換する",
    ],
    answerIndex: 0,
    explanation:
      "TS 4.1 で導入された key remapping により、テンプレートリテラル型と組み合わせて `getXxx` のようなキー変換や、never を返してキーを除外する処理が型レベルで書けます。",
  },
  {
    id: "adv-010",
    category: "advanced",
    difficulty: "hard",
    prompt:
      "Discriminated Union の網羅性チェックを `never` で行う典型的な実装として正しいのは？",
    choices: [
      "`switch` の `default` で `const _exhaustive: never = shape;` のように never に代入し、新しいケース追加時に型エラーで漏れを検出する",
      "`if (typeof shape === 'never')` で判定する",
      "`as never` で強制キャストし、ランタイムでエラーを投げる",
      "`Exclude<Shape, never>` を使う",
    ],
    answerIndex: 0,
    explanation:
      "全ケースを処理し終えた位置では値の型は never に絞り込まれます。そこへ never 変数として代入することで、追加ケースを処理し忘れたときにコンパイル時に検出できます。",
  },

  {
    id: "narrow-006",
    category: "narrowing",
    difficulty: "hard",
    prompt:
      "`function assertIsString(x: unknown): asserts x is string { if (typeof x !== 'string') throw new Error() }` の `asserts x is string` の意味は？",
    choices: [
      "関数が正常に return したら、呼び出し元で x が string であることをコンパイラに伝えるアサーション関数の宣言",
      "実行時に x の型を string に変換する",
      "x が string でなければ常に false を返す型述語",
      "関数の戻り値型を string にする糖衣構文",
    ],
    answerIndex: 0,
    explanation:
      "アサーション関数（assertion function）は、return すれば条件を満たすことが保証される、という形で呼び出し元の型を絞り込みます。例外を投げて return しない実装が必須です。",
  },
  {
    id: "narrow-007",
    category: "narrowing",
    difficulty: "medium",
    prompt:
      "`const x = Math.random() > 0.5 ? 'a' : 'b'` で推論される `x` の型として正しいのはどれですか？",
    choices: [
      "'a' | 'b'",
      "string",
      "'a'",
      "boolean",
    ],
    answerIndex: 0,
    explanation:
      "`const` 宣言かつ条件式の各分岐がリテラルなので、制御フロー解析と const のリテラル保持により `'a' | 'b'` のユニオンリテラル型になります。`let` だと string にウィッデンされます。",
  },
  {
    id: "narrow-008",
    category: "narrowing",
    difficulty: "medium",
    prompt:
      "`x: { kind: 'a'; v: number } | { kind: 'b'; v: string }` を `kind` で絞り込むとき、最も適切なのは？",
    choices: [
      "`if (x.kind === 'a') { /* x.v は number */ }` のように判別タグの等価チェックを使う",
      "`if (x instanceof Object)` で絞り込む",
      "`if ('v' in x)` で絞り込む",
      "`as` で型をキャストする",
    ],
    answerIndex: 0,
    explanation:
      "Discriminated Union ではリテラルタグの等価チェックが最も自然で安全な絞り込み方法です。`v` は両者にあるため `in` では絞り込めず、`instanceof` はクラスでしか有効に働きません。",
  },

  {
    id: "class-006",
    category: "classes",
    difficulty: "easy",
    prompt:
      "`class Counter { static count = 0; static inc() { Counter.count++ } }` の `static` メンバーの説明として正しいのは？",
    choices: [
      "クラス自身に紐づくプロパティ・メソッドで、インスタンスを生成しなくても `Counter.count` のようにアクセスできる",
      "インスタンスごとに別々の値を持つプロパティを宣言する",
      "実行時に1回だけ評価される定数を宣言する修飾子",
      "private と同義で、クラス外部から見えなくなる",
    ],
    answerIndex: 0,
    explanation:
      "static メンバーはクラス（コンストラクタ関数）側に直接生えます。インスタンスからは this 経由ではアクセスできず、クラス名から呼び出します。",
  },
  {
    id: "class-007",
    category: "classes",
    difficulty: "medium",
    prompt:
      "`class Temperature { #c = 0; get celsius() { return this.#c } set celsius(v: number) { if (v < -273.15) throw new Error(); this.#c = v } }` の getter/setter の説明として正しいのは？",
    choices: [
      "`obj.celsius` の読み取り・代入時に getter / setter が呼ばれ、プロパティアクセスの文法で計算やバリデーションを挟める",
      "getter/setter はメソッドと同じで、`obj.celsius()` のように `()` を付けて呼び出す",
      "TypeScript では getter/setter はサポートされていない",
      "setter は必ず void を返さなければならず、引数の型は string に固定される",
    ],
    answerIndex: 0,
    explanation:
      "ECMAScript の getter/setter は `obj.celsius = 10` のような代入で setter が呼ばれます。TypeScript では setter の引数型と getter の戻り値型が一致している必要があります。",
  },
  {
    id: "class-008",
    category: "classes",
    difficulty: "hard",
    prompt:
      "`class Bag { [key: string]: number; size = 0 }` のクラスにおけるインデックスシグネチャの制約として正しいのは？",
    choices: [
      "宣言する全ての具体的なプロパティ（ここでは `size`）の型は、インデックスシグネチャの値型（ここでは number）に代入可能でなければならない",
      "クラスではインデックスシグネチャを宣言できない",
      "インデックスシグネチャは static メンバーにしか付けられない",
      "インデックスシグネチャを書くと具体的なプロパティは一切宣言できなくなる",
    ],
    answerIndex: 0,
    explanation:
      "interface と同じく、クラスでもインデックスシグネチャと具体的プロパティを併記する場合、後者の型はインデックス値型のサブタイプである必要があります。`size: string` だとエラーになります。",
  },
];
