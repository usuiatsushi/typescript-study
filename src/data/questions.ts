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
      "void は関数の戻り値型として使われ、戻り値を利用しない契約を表す（undefined を返しても代入互換）",
      "void は undefined と完全に同じ",
      "void は never の別名",
      "void はオブジェクト型",
    ],
    answerIndex: 0,
    explanation:
      "void は「戻り値を利用しない」ことを示す型で、関数戻り値型の文脈では undefined を返しても代入互換です（実行時には undefined が返る）。ただし `void` 型自体に undefined が「含まれる」わけではなく、変数として `void` を宣言してもその値を取り出して使うことはできません。",
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
      "メソッド短縮記法は引数がバイバリアントに緩く扱われ、関数プロパティ形式は strictFunctionTypes 下で引数が反変として厳格にチェックされる",
      "両者は実行時に異なる挙動になる",
      "メソッド記法は this を持てない",
      "関数プロパティ形式は呼び出せない",
    ],
    answerIndex: 0,
    explanation:
      "メソッド短縮記法は歴史的経緯で引数がバイバリアント（双変）に緩く扱われ、関数プロパティ形式は strictFunctionTypes 下で引数が反変として厳格にチェックされます。安全性を取るなら関数プロパティ形式を使うとよいでしょう。",
  },

  {
    id: "gen-004",
    category: "generics",
    difficulty: "hard",
    prompt:
      "`function wrap<T = string>(x?: T): T[] { return x === undefined ? [] : [x] }` のデフォルト型パラメータの効果は？",
    choices: [
      "型引数も指定されず引数からも推論できない場合、T は string にフォールバックする",
      "T が常に string になり上書きできない",
      "実行時に T が string に変換される",
      "引数 x のデフォルト値が string になる",
    ],
    answerIndex: 0,
    explanation:
      "`<T = string>` はデフォルト**型**パラメータ。引数から T を推論できる場合は推論が優先されます（例: `wrap(42)` の T は number）。引数が省略され型引数も無い `wrap()` のときに T は string になります。`wrap<number>()` のように明示で上書きも可能です。実行時の値変換やデフォルト値設定とは無関係です。",
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

  // === basic batch ===
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
      "`Array.isArray` の型述語は `arg is any[]` のため、`unknown` は `any[]` に絞り込まれます（`unknown[]` ではない点に注意）。要素型は別途検査が必要です。",
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
      "オブジェクト形状の表現ならどちらでもほぼ同等で、宣言マージが必要なら interface、ユニオン等が必要なら type を選ぶのが定石です。オブジェクト形状を表す type alias であればクラスから implements も可能です（ユニオンや primitive を含む type alias は不可）。",
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

  // === interface batch ===
  {
    id: "iface-009",
    category: "interface",
    difficulty: "easy",
    prompt:
      "`interface C extends A, B {}` のように複数 interface を継承することは？",
    choices: [
      "可能で、A と B のメンバを両方継承する",
      "1 つしか継承できない",
      "クラスでしか使えない",
      "type alias でしかできない",
    ],
    answerIndex: 0,
    explanation:
      "interface はカンマ区切りで複数を extends できます。同名メンバが衝突する場合は型が互換でなければエラーになります。",
  },
  {
    id: "iface-010",
    category: "interface",
    difficulty: "medium",
    prompt:
      "`interface C extends A, B {}` と `type C = A & B` の違いとして正しいのは？",
    choices: [
      "interface の extends は同名メンバの型が非互換だとエラー、`&` はインターセクションを取って never になることがある",
      "両者は完全に同じ意味",
      "extends は実行時にコピーが起きる",
      "`&` は interface には使えない",
    ],
    answerIndex: 0,
    explanation:
      "extends は宣言時にメンバ衝突をチェックしてエラー化します。インターセクションは静かに合成し、結果プロパティ型が never になることがあります。",
  },
  {
    id: "iface-011",
    category: "interface",
    difficulty: "medium",
    prompt:
      "呼び出し可能でプロパティも持つ「ハイブリッド型」を表す interface の例として正しいのは？",
    choices: [
      "`interface Counter { (start: number): string; count: number; reset(): void }`",
      "`interface Counter { call: (n: number) => string }` のみ",
      "`interface Counter extends Function {}` 必須",
      "interface では関数とプロパティを同居できない",
    ],
    answerIndex: 0,
    explanation:
      "コールシグネチャと通常メンバを併記することで、関数としても呼べてプロパティも持つ型を表現できます。",
  },
  {
    id: "iface-012",
    category: "interface",
    difficulty: "medium",
    prompt:
      "`interface DateCtor { new (s: string): Date }` の `new` シグネチャの意味は？",
    choices: [
      "`new` 演算子で呼び出せるコンストラクタ型",
      "新しいインスタンスを実行時に生成する",
      "クラス専用の修飾子",
      "通常の関数呼び出し型と同じ",
    ],
    answerIndex: 0,
    explanation:
      "`new (...): T` はコンストラクトシグネチャで、`new` で呼び出せる型を表します。クラスを値として渡すときの型に使います。",
  },
  {
    id: "iface-013",
    category: "interface",
    difficulty: "easy",
    prompt: "オブジェクト型を定義したいとき、interface と type alias の選択基準は？",
    choices: [
      "拡張・宣言マージが必要なら interface、ユニオンや条件型が必要なら type",
      "interface は遅いので常に type",
      "type は実行時に存在しないので使えない",
      "interface はオブジェクト型に使えない",
    ],
    answerIndex: 0,
    explanation:
      "公開 API の拡張余地や宣言マージが欲しい場面では interface、ユニオン・タプル・条件型・mapped type などは type alias が向きます。",
  },
  {
    id: "iface-014",
    category: "interface",
    difficulty: "medium",
    prompt:
      "同じファイル内で `interface User { id: number }` と `interface User { name: string }` を書くと？",
    choices: [
      "宣言マージされ User は { id: number; name: string } になる",
      "後の宣言が前を上書きする",
      "コンパイルエラーになる",
      "実行時に統合される",
    ],
    answerIndex: 0,
    explanation:
      "同名 interface は宣言マージされ、メンバが合成されます。型 alias では同名定義はエラーです。",
  },
  {
    id: "iface-015",
    category: "interface",
    difficulty: "hard",
    prompt:
      "サードパーティの型 `Express.Request` に `user` プロパティを追加したい。正しい手段は？",
    choices: [
      "`declare module 'express-serve-static-core' { interface Request { user?: User } }` のようにモジュール拡張する",
      "元の .d.ts を直接書き換える",
      "type alias で `type Request = OldRequest & { user?: User }` を定義し直す",
      "interface に `override` キーワードを付ける",
    ],
    answerIndex: 0,
    explanation:
      "宣言マージ可能な interface を持つモジュールには module augmentation で追加メンバを宣言できます。これは interface ならではの機能です。",
  },
  {
    id: "iface-016",
    category: "interface",
    difficulty: "hard",
    prompt:
      "グローバルな `Window` 型に `myApp` プロパティを追加する宣言として正しいのは？",
    choices: [
      "`declare global { interface Window { myApp: MyApp } }` を module スコープで書く",
      "`window.myApp = ...` だけで型が広がる",
      "`type Window = Window & { myApp: MyApp }`",
      "interface 拡張はグローバルでは動作しない",
    ],
    answerIndex: 0,
    explanation:
      "module（import/export を持つファイル）から `declare global` ブロック内で interface 宣言マージを行うと、グローバル型を拡張できます。",
  },
  {
    id: "iface-017",
    category: "interface",
    difficulty: "easy",
    prompt: "ジェネリック interface の宣言として正しいのは？",
    choices: [
      "`interface Box<T> { value: T }`",
      "`interface<T> Box { value: T }`",
      "`generic interface Box(T) { value: T }`",
      "`interface Box { <T>value: T }`",
    ],
    answerIndex: 0,
    explanation:
      "型パラメータは interface 名の直後に `<...>` で書きます。",
  },
  {
    id: "iface-018",
    category: "interface",
    difficulty: "medium",
    prompt:
      "`interface Repo<T extends { id: number }> { find(id: number): T | undefined }` の `extends` の意味は？",
    choices: [
      "T は { id: number } 互換でなければならないという制約",
      "Repo が他の interface を継承する",
      "T を id: number 型に置き換える",
      "実行時のチェック",
    ],
    answerIndex: 0,
    explanation:
      "型パラメータの extends は制約を表します。継承の extends と文法は同じですが、型パラメータの位置では制約として働きます。",
  },
  {
    id: "iface-019",
    category: "interface",
    difficulty: "medium",
    prompt:
      "連結リストの再帰 interface 宣言として正しいのは？",
    choices: [
      "`interface Node<T> { value: T; next: Node<T> | null }`",
      "再帰的に自分自身を参照できないので不可能",
      "`interface Node<T> { value: T; next: typeof Node }`",
      "`interface Node<T> { value: T; next: this }` 必須",
    ],
    answerIndex: 0,
    explanation:
      "interface はそのプロパティ型として自分自身を参照可能で、再帰構造を自然に表現できます。",
  },
  {
    id: "iface-020",
    category: "interface",
    difficulty: "easy",
    prompt:
      "TypeScript の構造的部分型（structural typing）の説明として正しいのは？",
    choices: [
      "型名ではなくプロパティの形が一致すれば代入可能",
      "クラス名が一致しないと代入できない",
      "実行時に prototype を比較する",
      "interface 名が一致する必要がある",
    ],
    answerIndex: 0,
    explanation:
      "TS は構造的型システムで、互換性は形（メンバの構造）で判定されます。同形なら別 interface 同士でも代入可能です。",
  },
  {
    id: "iface-021",
    category: "interface",
    difficulty: "medium",
    prompt:
      "`interface P { x: number }` に対し `const p: P = { x: 1, y: 2 }` がエラーになる理由は？",
    choices: [
      "オブジェクトリテラルの過剰プロパティチェック（excess property check）",
      "構造的部分型のため代入不可",
      "y は any なので暗黙エラー",
      "リテラルは interface に代入できない",
    ],
    answerIndex: 0,
    explanation:
      "新鮮なオブジェクトリテラルを直接代入する場合のみ、宣言にないプロパティは過剰プロパティチェックで弾かれます。一旦変数に入れて代入すれば通ります。",
  },
  {
    id: "iface-022",
    category: "interface",
    difficulty: "hard",
    prompt:
      "空 interface `interface Empty {}` の落とし穴として正しいのは？",
    choices: [
      "`null` と `undefined` 以外のほぼ全ての値を許容してしまう",
      "any と完全に同じ",
      "コンパイルエラーになる",
      "宣言マージ不可",
    ],
    answerIndex: 0,
    explanation:
      "空 interface は `{}` 同様、null/undefined を除く任意の値を受け付けます。意図しない代入を許してしまうため lint で警告されることが多いです。",
  },
  {
    id: "iface-023",
    category: "interface",
    difficulty: "medium",
    prompt:
      "「任意の string キーを持つオブジェクト」を厳密に表すには？",
    choices: [
      "`Record<string, unknown>`（または `{ [k: string]: unknown }`）",
      "空 interface `interface X {}`",
      "`object` 型",
      "`any`",
    ],
    answerIndex: 0,
    explanation:
      "空 interface は null/undefined 以外を許容する緩い型です。任意キーのオブジェクトを表すなら `Record<string, unknown>` が適切です。",
  },
  {
    id: "iface-024",
    category: "interface",
    difficulty: "hard",
    prompt:
      "Builder で `set(...).set(...)` のような流暢 API を作るとき、メソッド戻り値型として有効なのは？",
    choices: [
      "`this` 型（polymorphic this）を返す",
      "`Builder` を返す",
      "`any` を返す",
      "戻り値を省略する",
    ],
    answerIndex: 0,
    explanation:
      "interface のメソッド戻り値を `this` にすると、サブタイプで呼んだ時にサブタイプ自身が戻る多相 this 型として働きます。",
  },
  {
    id: "iface-025",
    category: "interface",
    difficulty: "hard",
    prompt:
      "「公称型（nominal）」を擬似的に実現するブランド型の典型は？",
    choices: [
      "`type UserId = string & { readonly __brand: 'UserId' }`",
      "`interface UserId extends string {}`",
      "`class UserId extends String {}`",
      "TS は公称型を完全サポートしている",
    ],
    answerIndex: 0,
    explanation:
      "TS は構造的型なので、ユニーク symbol や private brand プロパティをインターセクションして区別する手法が一般的です。",
  },
  {
    id: "iface-026",
    category: "interface",
    difficulty: "hard",
    prompt:
      "interface のメンバ位置で mapped type を直接書くことは？",
    choices: [
      "できない。mapped type は type alias でのみ書ける（interface には extends で取り込む形）",
      "interface でしか書けない",
      "interface でも `[K in keyof T]: T[K]` を直接書ける",
      "宣言マージで自動生成される",
    ],
    answerIndex: 0,
    explanation:
      "mapped type は型 alias の構文で、interface 本体には書けません。interface で使いたい場合は alias を作って `extends` する形にします。",
  },
  {
    id: "iface-027",
    category: "interface",
    difficulty: "medium",
    prompt:
      "`interface Handlers { [event: string]: (payload: unknown) => void }` のように、インデックスシグネチャの値が関数型であることは？",
    choices: [
      "可能。任意のキーに対する関数を表せる",
      "不可能。値型は primitive のみ",
      "可能だが void しか返せない",
      "可能だが `this` は禁止",
    ],
    answerIndex: 0,
    explanation:
      "インデックスシグネチャの値型に関数型を置けます。具体的メソッドを併記する場合、その関数型もインデックス型に代入可能でなければなりません。",
  },
  {
    id: "iface-028",
    category: "interface",
    difficulty: "medium",
    prompt:
      "interface に複数のコールシグネチャを書くと？",
    choices: [
      "関数オーバーロードを表現できる",
      "後ろの宣言が前を上書きする",
      "重複定義としてエラー",
      "ユニオンに自動変換される",
    ],
    answerIndex: 0,
    explanation:
      "`interface F { (x: number): number; (x: string): string }` のように複数のコールシグネチャでオーバーロード型を表せます。",
  },
  {
    id: "iface-029",
    category: "interface",
    difficulty: "hard",
    prompt:
      "ミックスイン用に「コンストラクタ型」を表す典型イディオムは？",
    choices: [
      "`type Constructor<T = {}> = new (...args: any[]) => T`",
      "`interface Constructor { create(): unknown }`",
      "`type Constructor = Function`",
      "`interface Constructor extends Object {}`",
    ],
    answerIndex: 0,
    explanation:
      "ミックスインでは `Constructor` 型を引数に取り、サブクラスを返す関数を組み合わせます。`new (...args: any[]) => T` が定石です。",
  },
  {
    id: "iface-030",
    category: "interface",
    difficulty: "medium",
    prompt:
      "interface と abstract class の違いとして正しいのは？",
    choices: [
      "interface はコンパイル後に消えるが abstract class はランタイムに残る",
      "interface は実装を持てるが abstract class は持てない",
      "abstract class は instanceof できない",
      "両者は完全に同じ",
    ],
    answerIndex: 0,
    explanation:
      "interface は型情報のみで JS には残りません。abstract class はクラスとしてランタイムに存在し、共通実装を持てます。",
  },
  {
    id: "iface-031",
    category: "interface",
    difficulty: "easy",
    prompt:
      "`interface A { x: number; y: string }` と `interface B { y: string; x: number }` の関係は？",
    choices: [
      "プロパティ順序は型に影響せず、互いに代入可能",
      "順序が違うので別型として扱われる",
      "B は A の subtype",
      "代入は同名 interface 間でしかできない",
    ],
    answerIndex: 0,
    explanation:
      "TS の型はメンバ集合で決まり、宣言順序は影響しません。",
  },
  {
    id: "iface-032",
    category: "interface",
    difficulty: "hard",
    prompt:
      "`interface I { fn(xs: ReadonlyArray<number>): void }` を実装するクラスで `fn(xs: number[])` と書くと？",
    choices: [
      "関数プロパティ形式では引数は反変なので、より狭い `number[]` への絞り込みは strictFunctionTypes 下でエラー。メソッド短縮記法ならバイバリアントとして許容される",
      "常にエラー",
      "常に許される",
      "実行時に変換が走る",
    ],
    answerIndex: 0,
    explanation:
      "`number[]` は `ReadonlyArray<number>` のサブタイプ（より狭い型）です。関数プロパティ形式は strictFunctionTypes 下で引数を反変（広い方向のみ許容）として扱うため、狭める方向はエラー。メソッド短縮記法はバイバリアントなので許されます。",
  },
  {
    id: "iface-033",
    category: "interface",
    difficulty: "medium",
    prompt:
      "`interface A { x: number }` と `interface B { x: string }` を継承した `interface C extends A, B {}` は？",
    choices: [
      "`x` の型が衝突するためエラーになる",
      "後ろの B が優先され string になる",
      "x は number | string になる",
      "x は never になるが宣言は通る",
    ],
    answerIndex: 0,
    explanation:
      "extends による継承では同名メンバの型が互換でないとエラーになります。インターセクション `A & B` だと `x` は `never` 型として静かに合成されます。",
  },
  {
    id: "iface-034",
    category: "interface",
    difficulty: "medium",
    prompt:
      "interface 内でメソッドをオーバーロード宣言する書き方は？",
    choices: [
      "同名メソッドを複数のシグネチャで列挙する",
      "`overload` キーワードを使う",
      "1 つにまとめてユニオン引数にする以外できない",
      "デコレータが必要",
    ],
    answerIndex: 0,
    explanation:
      "`interface X { f(x: number): number; f(x: string): string }` のように複数シグネチャを並べてオーバーロード型を表します。",
  },
  {
    id: "iface-035",
    category: "interface",
    difficulty: "medium",
    prompt:
      "`type Box<T> = { value: T }` と `interface Box<T> { value: T }` の差として正しいのは？",
    choices: [
      "interface 版は宣言マージ可能、type alias 版は不可",
      "interface 版だけが implements される",
      "type alias 版はジェネリックにできない",
      "両者は完全に同じ",
    ],
    answerIndex: 0,
    explanation:
      "ジェネリックでも interface のほうが宣言マージ可能で、ライブラリ拡張に向きます。多くの場面で両者は互換に使えますが、マージとモジュール拡張の点で interface に分があります。",
  },
  {
    id: "iface-036",
    category: "interface",
    difficulty: "hard",
    prompt:
      "再帰的な型を書く際 `type` だと「直接の自己参照は不可」だが interface だと可能、というよくある落とし穴。次のうち type alias で問題が起きるのは？",
    choices: [
      "`type T = T` のような自己参照（プロパティを介さない）",
      "`type Tree = { children: Tree[] }`",
      "`interface Tree { children: Tree[] }`",
      "`type List<T> = { value: T; next: List<T> | null }`",
    ],
    answerIndex: 0,
    explanation:
      "プロパティ位置（遅延参照）を経由する自己参照は type alias でも可能ですが、`type T = T` のような直接参照はエラーです。interface は宣言ごとに名前で参照されるため自己参照が安全です。",
  },
  {
    id: "iface-037",
    category: "interface",
    difficulty: "hard",
    prompt:
      "TypeScript で「exact type（余計なプロパティを完全に禁止する型）」は？",
    choices: [
      "言語機能としては存在せず、過剰プロパティチェックや brand プロパティで擬似的に実現するのみ",
      "`exact` キーワードで宣言できる",
      "interface はデフォルトで exact",
      "`Readonly` を付ければ exact になる",
    ],
    answerIndex: 0,
    explanation:
      "TS は構造的型のため exact 型は組み込みでは無く、リテラルの過剰プロパティチェック・ブランド・mapped type による拒否などで近似します。",
  },
  {
    id: "iface-038",
    category: "interface",
    difficulty: "medium",
    prompt:
      "`interface Arr { [index: number]: string; length: number }` の数値インデックスシグネチャの注意は？",
    choices: [
      "string インデックスシグネチャと併記する場合、number 側の値型は string 側の値型に代入可能でなければならない",
      "number キーは実行時に文字列化されないので独立",
      "数値インデックスは interface には書けない",
      "length プロパティを必ず併記する必要がある",
    ],
    answerIndex: 0,
    explanation:
      "JS のキーは内部的に文字列化されるため、TS では number 側の値型が string 側の値型に代入可能であることが要求されます。",
  },
  {
    id: "iface-039",
    category: "interface",
    difficulty: "hard",
    prompt:
      "interface のキーに `unique symbol` を使えるか？",
    choices: [
      "`unique symbol` 型の const をブラケット内に書く計算プロパティ名（`interface X { [K]: T }`）として使える。任意の `symbol` 型変数は不可",
      "interface のキーは string/number のみ",
      "`symbol` 型なら何でも使える",
      "Symbol キーはランタイム限定で型に出せない",
    ],
    answerIndex: 0,
    explanation:
      "`const K: unique symbol = Symbol()` のように `unique symbol` 型を持つ const を、計算プロパティ名 `[K]` として `interface X { [K]: T }` で利用できます。これはインデックスシグネチャではなく特定キーの宣言です。任意の `symbol` 型変数では型レベルで識別できないため使えません。",
  },
  {
    id: "iface-040",
    category: "interface",
    difficulty: "medium",
    prompt:
      "`interface F { (): Animal }` を `interface G { (): Dog }`（Dog extends Animal）に代入できるか？（strictFunctionTypes 下、Dog は Animal のサブタイプ）",
    choices: [
      "G を F に代入できる（戻り値型は共変）",
      "F を G に代入できる",
      "どちらも代入できない",
      "interface 同士の関数型は代入不能",
    ],
    answerIndex: 0,
    explanation:
      "関数型の戻り値は共変。Dog を返す関数は Animal を返す関数として使えるので G を F に代入できます。",
  },
  {
    id: "iface-041",
    category: "interface",
    difficulty: "easy",
    prompt:
      "クラスが interface を実装することを示すキーワードは？",
    choices: [
      "implements",
      "extends",
      "satisfies",
      "include",
    ],
    answerIndex: 0,
    explanation:
      "`class C implements I {}` で interface への準拠を表明します。`extends` はクラス・interface の継承用です。",
  },
  {
    id: "iface-042",
    category: "interface",
    difficulty: "medium",
    prompt:
      "interface に `private` や `protected` 修飾子を書くと？",
    choices: [
      "interface は public メンバのみを記述可能でアクセス修飾子は書けない",
      "private が暗黙で付与される",
      "protected のみ書ける",
      "クラスと同様に書ける",
    ],
    answerIndex: 0,
    explanation:
      "interface は外部に公開されるシェイプを表すので、private/protected といったクラス特有のアクセス修飾子は書けません（readonly や ? は可）。",
  },
  {
    id: "iface-043",
    category: "interface",
    difficulty: "easy",
    prompt:
      "オプショナルなメソッドを表す書き方は？",
    choices: [
      "`onError?(e: Error): void`",
      "`onError(e?: Error): void`",
      "`onError!: (e: Error) => void`",
      "`?onError(e: Error): void`",
    ],
    answerIndex: 0,
    explanation:
      "メソッド名の直後に `?` を置きます。引数の `?` は引数の省略可で意味が異なります。",
  },
  {
    id: "iface-044",
    category: "interface",
    difficulty: "easy",
    prompt:
      "`declare interface MyGlobal { id: number }` を .d.ts に書くと？",
    choices: [
      "アンビエント宣言として型のみが提供される（実装は無い）",
      "実行時にグローバル変数が生まれる",
      "コンパイルエラー",
      "interface には declare を付けられない",
    ],
    answerIndex: 0,
    explanation:
      "interface はもともと型のみを宣言するため `declare` は冗長ですが、文法的には許容されます。.d.ts かどうかに関わらず挙動は同じで、実行時の値は生まれません。",
  },
  {
    id: "iface-045",
    category: "interface",
    difficulty: "easy",
    prompt:
      "`class C implements I {}` で C が I のメンバを満たさない場合は？",
    choices: [
      "コンパイルエラーになる",
      "実行時にスローされる",
      "暗黙に any で埋められる",
      "警告のみで通る",
    ],
    answerIndex: 0,
    explanation:
      "`implements` は静的にメンバ充足を要求します。不足や型不一致はコンパイル時エラーになります。",
  },

  // === generics batch ===
  {
    id: "gen-009",
    category: "generics",
    difficulty: "easy",
    prompt:
      "`function pair<A, B>(a: A, b: B): [A, B] { return [a, b] }` を `pair(1, 'x')` と呼んだ際の戻り値の型は？",
    choices: [
      "[number, string]",
      "[1, 'x']",
      "[any, any]",
      "[number | string, number | string]",
    ],
    answerIndex: 0,
    explanation:
      "型パラメータ A と B はそれぞれ独立して推論され、リテラルではない引数はウィッデンされて `[number, string]` になります。",
  },
  {
    id: "gen-010",
    category: "generics",
    difficulty: "easy",
    prompt:
      "`function first<T>(arr: T[]): T | undefined { return arr[0] }` を `first([1,2,3])` で呼ぶと戻り値の型は？",
    choices: [
      "number | undefined",
      "number",
      "1 | 2 | 3",
      "any",
    ],
    answerIndex: 0,
    explanation:
      "配列リテラルの要素型は `number` に推論され、戻り値の型注釈どおり `number | undefined` になります。",
  },
  {
    id: "gen-011",
    category: "generics",
    difficulty: "easy",
    prompt:
      "ジェネリッククラス `class Box<T> { constructor(public value: T) {} }` を `new Box('hello')` で生成したときの型は？",
    choices: [
      "Box<string>",
      "Box<'hello'>",
      "Box<any>",
      "Box<unknown>",
    ],
    answerIndex: 0,
    explanation:
      "コンストラクタ引数からの推論ではリテラルがウィッデンされ `Box<string>` になります。",
  },
  {
    id: "gen-012",
    category: "generics",
    difficulty: "easy",
    prompt:
      "型引数を明示する記法として正しいのはどれ？",
    choices: [
      "identity<string>('hi')",
      "identity('hi')<string>",
      "identity::<string>('hi')",
      "identity['string']('hi')",
    ],
    answerIndex: 0,
    explanation:
      "TypeScript では関数名の直後に `<T>` を置いて明示的に型引数を渡します。",
  },
  {
    id: "gen-013",
    category: "generics",
    difficulty: "easy",
    prompt:
      "`Array<number>` と等価な記法は？",
    choices: [
      "number[]",
      "[number]",
      "(number)[]",
      "Array[number]",
    ],
    answerIndex: 0,
    explanation:
      "`Array<T>` と `T[]` は同等です。`[number]` は要素 1 個のタプル型なので別物。",
  },
  {
    id: "gen-014",
    category: "generics",
    difficulty: "easy",
    prompt:
      "ジェネリックインターフェース `interface Container<T> { value: T }` の使用例として正しいのは？",
    choices: [
      "const c: Container<number> = { value: 1 }",
      "const c: Container = { value: 1 }",
      "const c: Container<> = { value: 1 }",
      "const c: Container[number] = { value: 1 }",
    ],
    answerIndex: 0,
    explanation:
      "ジェネリックインターフェースは利用時に型引数 `<T>` を必ず指定します（デフォルトを与えていない場合）。",
  },
  {
    id: "gen-015",
    category: "generics",
    difficulty: "easy",
    prompt:
      "`function wrap<T>(x: T): { value: T } { return { value: x } }` の `wrap(42)` の戻り値の型は？",
    choices: [
      "{ value: number }",
      "{ value: 42 }",
      "{ value: any }",
      "number",
    ],
    answerIndex: 0,
    explanation:
      "数値リテラルはウィッデンされ `T = number` になり、戻り値は `{ value: number }`。",
  },
  {
    id: "gen-016",
    category: "generics",
    difficulty: "easy",
    prompt:
      "`Promise.resolve(123)` の型は？",
    choices: [
      "Promise<number>",
      "Promise<123>",
      "Promise<any>",
      "number",
    ],
    answerIndex: 0,
    explanation:
      "`Promise.resolve<T>(value: T): Promise<T>` のシグネチャから、リテラルはウィッデンされて `Promise<number>` になります。",
  },
  {
    id: "gen-017",
    category: "generics",
    difficulty: "easy",
    prompt:
      "`[1, 2, 3].map(n => n * 2)` の戻り値の型は？",
    choices: [
      "number[]",
      "readonly number[]",
      "[number, number, number]",
      "any[]",
    ],
    answerIndex: 0,
    explanation:
      "`Array<T>.map<U>(cb): U[]` のシグネチャから `U = number` で `number[]` を返します。タプル長は保たれません。",
  },
  {
    id: "gen-018",
    category: "generics",
    difficulty: "easy",
    prompt:
      "`function getProp<T, K extends keyof T>(o: T, k: K): T[K]` の制約 `K extends keyof T` の役割は？",
    choices: [
      "K を T のプロパティ名に限定する",
      "K を string に限定する",
      "T を K の値型に限定する",
      "K を必ず 'id' にする",
    ],
    answerIndex: 0,
    explanation:
      "`keyof T` は T のキーのユニオンなので、K はその中のいずれかに制約されます。これにより `T[K]` が安全に取り出せます。",
  },
  {
    id: "gen-019",
    category: "generics",
    difficulty: "medium",
    prompt:
      "`function tup<T extends readonly unknown[]>(...args: T): T { return args }` を `tup(1, 'a', true)` と呼ぶと T は？",
    choices: [
      "readonly [1, 'a', true]",
      "[number, string, boolean]",
      "(number | string | boolean)[]",
      "unknown[]",
    ],
    answerIndex: 0,
    explanation:
      "rest 引数を `T extends readonly unknown[]` で受けると、TS はタプル型かつ readonly のリテラルとして推論します（const-like inference）。",
  },
  {
    id: "gen-020",
    category: "generics",
    difficulty: "medium",
    prompt:
      "`type ValueOf<T> = T[keyof T]` を `ValueOf<{ a: 1; b: 'x' }>` に適用した結果は？",
    choices: [
      "1 | 'x'",
      "'a' | 'b'",
      "number | string",
      "{ a: 1; b: 'x' }",
    ],
    answerIndex: 0,
    explanation:
      "`keyof T` は `'a' | 'b'`、`T[keyof T]` はその各キーの値型のユニオン `1 | 'x'`。",
  },
  {
    id: "gen-021",
    category: "generics",
    difficulty: "medium",
    prompt:
      "条件型のユニオン分配: `type ToArray<T> = T extends any ? T[] : never` を `ToArray<string | number>` に適用した結果は？",
    choices: [
      "string[] | number[]",
      "(string | number)[]",
      "string[] & number[]",
      "never",
    ],
    answerIndex: 0,
    explanation:
      "裸の型パラメータに条件型を適用するとユニオンに分配され、各要素ごとに評価された結果のユニオンになります。",
  },
  {
    id: "gen-022",
    category: "generics",
    difficulty: "medium",
    prompt:
      "`type ToArray<T> = [T] extends [any] ? T[] : never` を `ToArray<string | number>` に適用した結果は？",
    choices: [
      "(string | number)[]",
      "string[] | number[]",
      "string[] & number[]",
      "never",
    ],
    answerIndex: 0,
    explanation:
      "型を `[T]` のようにタプルで包むと分配が抑止され、ユニオン全体に対して 1 回だけ評価されます。",
  },
  {
    id: "gen-023",
    category: "generics",
    difficulty: "medium",
    prompt:
      "`function create<T extends new (...args: any[]) => any>(C: T): InstanceType<T> { return new C() }` の `InstanceType<T>` は何を表す？",
    choices: [
      "コンストラクタ T が生成するインスタンスの型",
      "T のプロパティ型",
      "T の引数型",
      "T 自身のクラス型",
    ],
    answerIndex: 0,
    explanation:
      "`InstanceType<T>` は `T extends new (...args:any[]) => infer R ? R : any` で、コンストラクタの戻り値（インスタンス）型を取り出します。",
  },
  {
    id: "gen-024",
    category: "generics",
    difficulty: "medium",
    prompt:
      "`function pluck<T, K extends keyof T>(items: T[], key: K): T[K][]` を `pluck([{id:1}], 'id')` で呼ぶと戻り値の型は？",
    choices: [
      "number[]",
      "{ id: number }[]",
      "'id'[]",
      "unknown[]",
    ],
    answerIndex: 0,
    explanation:
      "`T = { id: number }`, `K = 'id'` で `T[K] = number`、よって `number[]`。",
  },
  {
    id: "gen-025",
    category: "generics",
    difficulty: "medium",
    prompt:
      "`type PickByValue<T, V> = { [K in keyof T as T[K] extends V ? K : never]: T[K] }` を `PickByValue<{a: number; b: string; c: number}, number>` に適用した結果は？",
    choices: [
      "{ a: number; c: number }",
      "{ a: number }",
      "{ b: string }",
      "{ a: number; b: string; c: number }",
    ],
    answerIndex: 0,
    explanation:
      "`as` 句で値型が `V` でないキーを `never` にし、結果から除外しています。`number` 値を持つ `a` と `c` だけ残ります。",
  },
  {
    id: "gen-026",
    category: "generics",
    difficulty: "medium",
    prompt:
      "デフォルト型引数で前のパラメータを参照: `interface State<T, U = T[]>` で `State<number>` の `U` は？",
    choices: [
      "number[]",
      "T[]",
      "any[]",
      "never",
    ],
    answerIndex: 0,
    explanation:
      "デフォルト型引数は宣言順に解決されるため、`T = number` を反映して `U = number[]`。",
  },
  {
    id: "gen-027",
    category: "generics",
    difficulty: "medium",
    prompt:
      "`function f<T>(x: T): void { /* 関数本体内で T を狭めようとする */ }` 関数本体での型ガード（例 `typeof x === 'string'`）の効果は？",
    choices: [
      "T 自体は狭まらず、x の型が分岐内で絞り込まれるだけ",
      "T が string 型に上書きされる",
      "コンパイルエラーになる",
      "T が実行時に変化する",
    ],
    answerIndex: 0,
    explanation:
      "型パラメータ T はジェネリック関数の利用側が決めるもので、本体内の絞り込みは式の型のみに作用します。",
  },
  {
    id: "gen-028",
    category: "generics",
    difficulty: "medium",
    prompt:
      "部分的な型引数推論について TS 5.4 時点の動作として正しいのは？",
    choices: [
      "`f<string, _>(x)` のように一部を `_` で省略する構文は存在しない",
      "`f<string, ?>(x)` のように `?` で残りを推論できる",
      "型引数は必ず全部省略するか全部書くかのいずれか",
      "TS は部分推論を完全サポートする",
    ],
    answerIndex: 0,
    explanation:
      "TypeScript には部分的型引数推論のシンタックスがありません。型引数は全部書くか全部省略するかが基本です（curry など別の関数に分割するのが回避策）。",
  },
  {
    id: "gen-029",
    category: "generics",
    difficulty: "medium",
    prompt:
      "`function head<T extends readonly unknown[]>(t: T): T[0]` を `head([1,2,3] as const)` で呼ぶと戻り値の型は？",
    choices: [
      "1",
      "number",
      "1 | 2 | 3",
      "readonly [1,2,3]",
    ],
    answerIndex: 0,
    explanation:
      "`as const` でタプル型 `readonly [1,2,3]` になり、`T[0]` はその先頭要素型 `1`。",
  },
  {
    id: "gen-030",
    category: "generics",
    difficulty: "medium",
    prompt:
      "`function concat<A extends readonly unknown[], B extends readonly unknown[]>(a: A, b: B): [...A, ...B]` の戻り値の型は何と呼ばれる？",
    choices: [
      "可変長タプル型 (variadic tuple types)",
      "ユニオン型",
      "交差型",
      "マッピング型",
    ],
    answerIndex: 0,
    explanation:
      "TS 4.0 で導入された可変長タプル型（variadic tuple types）。タプル中で `...T` を展開できます。",
  },
  {
    id: "gen-031",
    category: "generics",
    difficulty: "medium",
    prompt:
      "`Promise.all([Promise.resolve(1), Promise.resolve('a')])` の解決値の型は？",
    choices: [
      "[number, string]",
      "(number | string)[]",
      "[Promise<number>, Promise<string>]",
      "any[]",
    ],
    answerIndex: 0,
    explanation:
      "`Promise.all` は可変長タプル + 条件型 `Awaited<T>` を用いてタプルとして解決値型を保ちます。",
  },
  {
    id: "gen-032",
    category: "generics",
    difficulty: "medium",
    prompt:
      "`type Merge<A, B> = { [K in keyof A | keyof B]: K extends keyof B ? B[K] : K extends keyof A ? A[K] : never }` を `Merge<{a:1; b:2},{b:3; c:4}>` に適用した結果は？",
    choices: [
      "{ a: 1; b: 3; c: 4 }",
      "{ a: 1; b: 2; c: 4 }",
      "{ a: 1; b: 2 | 3; c: 4 }",
      "{ a: 1; b: never; c: 4 }",
    ],
    answerIndex: 0,
    explanation:
      "B のキーを優先しているため `b` は B の `3`、A 固有の `a` と B 固有の `c` も残ります。",
  },
  {
    id: "gen-033",
    category: "generics",
    difficulty: "medium",
    prompt:
      "`function buildRecord<K extends string, V>(keys: readonly K[], v: V): Record<K, V>` を `buildRecord(['a','b'] as const, 0)` と呼ぶと戻り値の型は？",
    choices: [
      "Record<'a' | 'b', number>",
      "Record<string, number>",
      "{ a: 0; b: 0 }",
      "Record<'a' | 'b', 0>",
    ],
    answerIndex: 0,
    explanation:
      "`as const` で `K = 'a' | 'b'`、V は通常の推論でウィッデンされ `number`。",
  },
  {
    id: "gen-034",
    category: "generics",
    difficulty: "medium",
    prompt:
      "型述語 (type predicate) を返すジェネリック関数: `function isOf<T>(v: unknown, c: new (...a: any[]) => T): v is T` の利用効果は？",
    choices: [
      "true 分岐で v の静的型が T に絞り込まれる",
      "v を T にキャストする",
      "実行時に T インスタンスを生成する",
      "戻り値は常に true",
    ],
    answerIndex: 0,
    explanation:
      "`v is T` はユーザー定義型ガードで、true を返した分岐内で v の静的型が T に narrow されます。",
  },
  {
    id: "gen-035",
    category: "generics",
    difficulty: "medium",
    prompt:
      "`type ReturnTypeOf<T> = T extends (...args: any[]) => infer R ? R : never` の `infer R` の役割は？",
    choices: [
      "条件型のマッチング中にローカル型変数 R を導入し、関数の戻り値型を取り出す",
      "ジェネリック T のデフォルト型を指定する",
      "実行時に値を推論する",
      "T を never にする",
    ],
    answerIndex: 0,
    explanation:
      "`infer` は条件型 `extends` 句の中だけで使えるパターン束縛で、マッチした位置の型を変数として取り出します。",
  },
  {
    id: "gen-036",
    category: "generics",
    difficulty: "hard",
    prompt:
      "メソッドショートハンド構文 `interface A { f(x: string): void }` と `interface B { f: (x: string) => void }` での引数のバリアンスの違いは？",
    choices: [
      "メソッド形式は引数が双変的に扱われ、関数プロパティ形式は strictFunctionTypes 下で反変",
      "両者は完全に同じ",
      "メソッド形式は反変、関数プロパティは双変",
      "メソッド形式はエラー",
    ],
    answerIndex: 0,
    explanation:
      "TS は歴史的経緯からメソッドショートハンドのみ双変（bivariant）を許す代替的扱いをします。`strictFunctionTypes` は関数プロパティ形のみを反変的にチェック。",
  },
  {
    id: "gen-037",
    category: "generics",
    difficulty: "hard",
    prompt:
      "TypeScript における高階種 (HKT) のサポート状況として正しいのは？",
    choices: [
      "TS は HKT を直接サポートせず、シミュレーション（インターフェース拡張）で代替する",
      "TS は HKT を `kind T<*>` 構文でサポートする",
      "TS の `K extends *` で表現できる",
      "TS 5.4 から正式サポートされた",
    ],
    answerIndex: 0,
    explanation:
      "TS は型コンストラクタを型変数化できないため、`URI` をキーにモジュール拡張で擬似的に表現するパターンが知られています（fp-ts 等）。",
  },
  {
    id: "gen-038",
    category: "generics",
    difficulty: "hard",
    prompt:
      "F-bounded polymorphism を表すのはどれ？",
    choices: [
      "<T extends Comparable<T>>",
      "<T extends string>",
      "<T = unknown>",
      "<T, U extends T>",
    ],
    answerIndex: 0,
    explanation:
      "F-bounded は型パラメータが「自分自身を引数に取る型」で制約されるパターン。`Comparable<T>` のように再帰的制約を意味します。",
  },
  {
    id: "gen-039",
    category: "generics",
    difficulty: "hard",
    prompt:
      "ジェネリック関数型 `<T>(x: T) => T` をジェネリック関数値で代入したい。`const f: <T>(x: T) => T = x => x` の `x => x` の型は？",
    choices: [
      "<T>(x: T) => T として推論されコンテキスト型が当たる",
      "(x: any) => any",
      "<T>(x: T) => unknown",
      "コンパイルエラー",
    ],
    answerIndex: 0,
    explanation:
      "コンテキスト型から関数式自体がジェネリック関数として型付けされます（contextual typing of generic functions）。",
  },
  {
    id: "gen-040",
    category: "generics",
    difficulty: "hard",
    prompt:
      "`type Path<T> = T extends object ? { [K in keyof T & string]: K | \\`${K}.${Path<T[K]>}\\` }[keyof T & string] : never` のような再帰条件型の主な制限は？",
    choices: [
      "再帰深さに上限があり、循環参照のあるオブジェクトでは無限再帰エラーになる",
      "object 型のみで使える",
      "TS 5.4 では一切動かない",
      "K に number 型が含まれない",
    ],
    answerIndex: 0,
    explanation:
      "条件型の再帰には深さ制限があり、循環参照や深すぎるネストでは「Type instantiation is excessively deep」エラーになります。",
  },
  {
    id: "gen-041",
    category: "generics",
    difficulty: "hard",
    prompt:
      "可変長タプルでの `Tail` 型: `type Tail<T extends readonly unknown[]> = T extends readonly [unknown, ...infer R] ? R : []` を `Tail<[1,2,3]>` に適用した結果は？",
    choices: [
      "[2, 3]",
      "[1, 2]",
      "[3]",
      "[]",
    ],
    answerIndex: 0,
    explanation:
      "先頭を `unknown` で消費し、残りを `infer R` で `[2, 3]` として捕捉。",
  },
  {
    id: "gen-042",
    category: "generics",
    difficulty: "hard",
    prompt:
      "共変・反変について `(x: Animal) => Animal` を `(x: Dog) => Dog` に代入できるかどうか（strictFunctionTypes 下、Dog extends Animal）？",
    choices: [
      "代入できない（戻り値は共変のため、Animal を返す関数を Dog を返すべき場所に置けない）",
      "代入できる（引数も戻り値も共変なので問題ない）",
      "両方とも常にエラー",
      "実装依存で決まる",
    ],
    answerIndex: 0,
    explanation:
      "引数の反変性から、`(x: Animal) => ...` は `(x: Dog) => ...` の場所に置いても引数面は安全（Dog を渡せば Animal として受け取れる）。一方、戻り値は共変なので Animal を返す関数を Dog を返すべき場所に置けない。よって全体としては代入不可。",
  },
  {
    id: "gen-043",
    category: "generics",
    difficulty: "hard",
    prompt:
      "カリー化のジェネリック型 `type Curry2<A, B, R> = (a: A) => (b: B) => R` を使い `curry((a: number, b: string) => a + b)` の型を書くと、戻り値は？",
    choices: [
      "(a: number) => (b: string) => string",
      "(a: number, b: string) => string",
      "(b: string) => (a: number) => string",
      "() => string",
    ],
    answerIndex: 0,
    explanation:
      "`Curry2<number, string, string>` の展開は `(a: number) => (b: string) => string`。",
  },
  {
    id: "gen-044",
    category: "generics",
    difficulty: "hard",
    prompt:
      "ジェネリックでの readonly 配列保持: `function id<T>(x: T): T` を `id([1,2,3] as const)` で呼ぶと戻り値の型は？",
    choices: [
      "readonly [1, 2, 3]",
      "[1, 2, 3]",
      "number[]",
      "readonly number[]",
    ],
    answerIndex: 0,
    explanation:
      "`as const` で生成された `readonly [1,2,3]` がそのまま T に推論され、戻り値もそれを保ちます。",
  },
  {
    id: "gen-045",
    category: "generics",
    difficulty: "hard",
    prompt:
      "オーバーロードとジェネリックの併用: 関数オーバーロード宣言 `function f(x: string): number; function f<T>(x: T): T;` を `f('a')` で呼んだとき選ばれるシグネチャは？",
    choices: [
      "1 番目 (x: string) => number",
      "2 番目 <T>(x: T) => T",
      "曖昧でエラー",
      "両方が同時に適用される",
    ],
    answerIndex: 0,
    explanation:
      "オーバーロード解決は宣言順に行われ、最初に適合する非ジェネリックなシグネチャ（より具体的）が選ばれます。",
  },

  // === utility batch ===
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
      "`--noImplicitThis` を有効にした際に、オブジェクトリテラルのメソッド内 `this` の型を `T` として推論させるためのマーカー型として使う",
      "`this` バインドを実行時に変更する",
      "関数の戻り値に `this` を設定する",
    ],
    answerIndex: 1,
    explanation:
      "`ThisType<T>` は中身を持たないマーカー型で、`--noImplicitThis` 有効下のオブジェクトリテラル文脈で、メソッド内 `this` を `T` として推論させる目的に使います（例: Vue の options pattern）。",
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
      "再帰的な分岐型を使い、`object` を継承するプロパティにさらに `DeepPartial` を適用、それ以外はそのまま残すのが基本形です。注意点として、関数や配列も `object` を継承するため `T[K] extends Function` や `T[K] extends Array<infer U> ? Array<DeepPartial<U>> : ...` の分岐を加えるのが実用的です。",
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
      "`Readonly<Array<T>>` は `length` 等を readonly にするのみで、`push`/`pop` の呼び出しまでは禁止しない。要素変更を防ぐには `ReadonlyArray<T>` か `readonly T[]` を使う",
      "両者は完全に同じ",
      "`ReadonlyArray<T>` は存在しない型",
      "`Readonly<Array<T>>` の方が制約が強い",
    ],
    answerIndex: 0,
    explanation:
      "`Readonly<Array<T>>` は `Array<T>` の各プロパティを `readonly` にマップしますが、`push` 等の変更系メソッドはプロパティ自体が readonly になっても呼び出して中身を書き換えることまでは止められません。`ReadonlyArray<T>`（または `readonly T[]`）は専用の型で、変更系メソッドが定義されていません。",
  },

  // === advanced batch ===
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
      "条件型で `T extends U ? ... : ...` ではなく `[T] extends [U] ? ... : ...` と書く狙いは？",
    choices: [
      "ユニオン分配を抑制し、`T` を一塊として扱うため",
      "タプル比較に強制するための構文糖衣",
      "実行時に配列として比較するため",
      "infer をタプル要素から取り出す唯一の方法だから",
    ],
    answerIndex: 0,
    explanation:
      "条件型は「裸の型パラメータ (naked T)」がユニオンのときに各メンバーに分配されます。`[T]` のようにタプルでラップすると分配が止まり、ユニオン全体を一つの型として扱えます。たとえばユニオン判定を作る場合は `type IsUnion<T, U = T> = T extends any ? ([U] extends [T] ? false : true) : never` のように、コピー型変数を使って分配挙動と非分配比較を組み合わせます。",
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
      "`type Join<T extends readonly string[], D extends string> = T extends readonly [infer H extends string, ...infer R extends readonly string[]] ? R['length'] extends 0 ? H : `${H}${D}${Join<R, D>}` : ''` の `Join<['a','b','c'], '-'>` は？",
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
      "タプル長を使った型レベル加算 `type Add<A extends number, B extends number> = [...Tuple<A>, ...Tuple<B>]['length']` のポイントは？（ここで `Tuple<N>` は長さ N の任意要素タプルを構築する補助型）",
    choices: [
      "長さ A と B のタプルを連結し、その `length` プロパティから合計長 (= A+B) を読み取る",
      "TypeScript の組み込み算術演算子 `+` を型に持ち込んでいる",
      "`number` 同士の `extends` 比較で計算している",
      "再帰せずに組み込みの `Math.add` 型を呼び出している",
    ],
    answerIndex: 0,
    explanation:
      "TS の型システムには算術演算子はありませんが、タプル長として表現すれば連結の長さで加算が再現できます。`Tuple<N>` は典型的に `BuildTuple<N, R extends unknown[] = []> = R['length'] extends N ? R : BuildTuple<N, [...R, unknown]>` のように再帰で構築します。引き算は infer での分解で表現します。",
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
      "対象キーのみ再帰的に書き換え、その他は素通しにする Mapped + 条件型のパターンが一般的です。完全な実装ではパスを `${infer Head}.${infer Rest}` で分解し、`Rest` が空のベースケース（`{ [K in keyof T]: K extends P ? V : T[K] }`）と再帰ケースを2分岐します。例で示したのは再帰アームのみ。タプルや配列は別ケースとして扱います。",
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
      "関数型の引数は反変位置のため、`infer` で複数の候補が反変位置（関数引数）から得られると **交差 (intersection)** として結合されます。逆に共変位置（戻り値など）では **和 (union)** として結合されます。意図しない交差結合に注意が必要です。",
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

  // === narrowing batch ===
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
      "`typeof x === \"function\"` で絞り込まれると、TypeScript は `x` を組み込みの `Function` インターフェースとして扱います。`Function` は `(...args: any[]) => any` 相当で意図的に緩い型のため、引数や戻り値までは推論しません。",
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
      "`number`（実行時には `0` も入らないが型上は `number`）",
      "`number | undefined`",
      "`undefined`",
      "`never`",
    ],
    answerIndex: 0,
    explanation:
      "truthiness 絞り込みは `undefined` を除外するため型上は `number` になります。実行時には `0` も falsy として除外されますが、型システムは「`number` から `0` を除いた型」までは表現せず、ただの `number` として扱います。`0` の場合も処理したいなら `n !== undefined` で絞り込みます。",
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
    answerIndex: 2,
    explanation:
      "`==`（緩い等値）は異なる型同士でも暗黙変換で真になりうる（例: `1 == '1'` は true）ため、TypeScript は安全側に倒して絞り込みません。`x` は `number | string` のままです。確実に絞りたい場合は `===` を使ってください。",
  },
  {
    id: "narrow-022",
    category: "narrowing",
    difficulty: "medium",
    prompt:
      "TS 5.4 以前で次のコードの `filtered` の推論型はどれですか？\n```ts\nconst arr: (string | undefined)[] = [\"a\", undefined, \"b\"];\nconst filtered = arr.filter(x => x !== undefined);\n```",
    choices: [
      "`filtered` は `string[]` に推論される",
      "`filtered` は `(string | undefined)[]` のままになる",
      "`filtered` は `undefined[]` になる",
      "コンパイルエラーになる",
    ],
    answerIndex: 1,
    explanation:
      "TS 5.4 以前では `filter` のコールバックが単に boolean を返すと結果型は元の配列と同じになります。`string[]` にしたい場合は型述語を使い `(x): x is string => x !== undefined` のように書きます。なお TS 5.5 以降ではアロー関数からの型述語推論が改善され、本コードのままでも `string[]` に推論されるようになりました。",
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
      "`Array.isArray` の型述語は `arg is any[]` ですが、ユニオンの絞り込みでは「配列メンバーのみ残す」効果として働きます。元のユニオンに含まれる `readonly string[]` だけが残るため、ここでは `readonly string[]` に絞り込まれます。",
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

  // === classes batch ===
  {
    id: "class-009",
    category: "classes",
    difficulty: "easy",
    prompt: "サブクラスでスーパークラスのメソッドを呼び出す構文として正しいのはどれですか？",
    choices: [
      "`parent.method()`",
      "`super.method()`",
      "`this.super.method()`",
      "`base.method()`",
    ],
    answerIndex: 1,
    explanation: "`super.method()` でスーパークラスの同名メソッドを呼び出せます。`super` はキーワードであり、変数として扱うことはできません。",
  },
  {
    id: "class-010",
    category: "classes",
    difficulty: "easy",
    prompt: "サブクラスのコンストラクタで `this` を使うために必要なことは何ですか？",
    choices: [
      "`super()` を呼び出す前に `this` を使ってよい",
      "`this` を使う前に `super()` を呼び出す必要がある",
      "`super()` の呼び出しは任意である",
      "`this` を使う前に `init()` を呼ぶ必要がある",
    ],
    answerIndex: 1,
    explanation: "派生クラスのコンストラクタでは、`this` にアクセスする前に必ず `super()` を呼び出す必要があります。違反するとコンパイルエラーになります。",
  },
  {
    id: "class-011",
    category: "classes",
    difficulty: "easy",
    prompt: "次のうち、抽象クラスについて正しい記述はどれですか？\n```ts\nabstract class Animal {\n  abstract speak(): void;\n  move() { console.log(\"moving\"); }\n}\n```",
    choices: [
      "`new Animal()` でインスタンス化できる",
      "`abstract` メソッドだけでなく実装済みメソッドも持てる",
      "抽象クラスは継承できない",
      "抽象メソッドは必ず本体を持たなければならない",
    ],
    answerIndex: 1,
    explanation: "抽象クラスは抽象メソッドと通常のメソッドの両方を持てます。`new` でインスタンス化することはできず、サブクラスで抽象メソッドを実装する必要があります。",
  },
  {
    id: "class-012",
    category: "classes",
    difficulty: "easy",
    prompt: "`override` キーワードの主な目的はどれですか？",
    choices: [
      "メソッドを抽象化する",
      "親クラスのメソッドをオーバーライドしていることを明示し、タイプミスを防ぐ",
      "メソッドを private にする",
      "メソッドの戻り値の型を強制する",
    ],
    answerIndex: 1,
    explanation: "`override` を付けると、親クラスに同名のメソッドが存在しない場合にエラーとなります。`noImplicitOverride` を有効にすると `override` の付け忘れも検出できます。",
  },
  {
    id: "class-013",
    category: "classes",
    difficulty: "easy",
    prompt: "次の `Box<T>` の使い方として正しいのはどれですか？\n```ts\nclass Box<T> {\n  constructor(public value: T) {}\n}\n```",
    choices: [
      "`new Box(42)` は `Box<number>` 型になる",
      "`new Box(42)` は型エラーになる",
      "ジェネリッククラスはインスタンス化できない",
      "`T` はランタイムでも値として参照できる",
    ],
    answerIndex: 0,
    explanation: "ジェネリッククラスは型推論により実引数から型パラメータを推論します。`new Box(42)` は `Box<number>` 型になります。`T` は型情報のみでランタイムには残りません。",
  },
  {
    id: "class-014",
    category: "classes",
    difficulty: "easy",
    prompt: "`readonly` プロパティに関する記述として正しいのはどれですか？",
    choices: [
      "クラスの外からも内部からも書き換えできない",
      "コンストラクタ内では代入できるが、それ以外では書き換えできない",
      "`readonly` はインターフェースでしか使えない",
      "`readonly` はランタイムで強制される",
    ],
    answerIndex: 1,
    explanation: "クラスの `readonly` プロパティは、宣言時の初期化子またはコンストラクタ内でのみ代入が可能です。型レベルのチェックでありランタイムには影響しません。",
  },
  {
    id: "class-015",
    category: "classes",
    difficulty: "easy",
    prompt: "クラスのアクセス修飾子の可視性が広い順に並んでいるのはどれですか？",
    choices: [
      "`private` > `protected` > `public`",
      "`public` > `protected` > `private`",
      "`protected` > `public` > `private`",
      "`public` > `private` > `protected`",
    ],
    answerIndex: 1,
    explanation: "`public` はどこからでもアクセス可能、`protected` はサブクラスからもアクセス可能、`private` は宣言クラス内からのみアクセス可能です。",
  },
  {
    id: "class-016",
    category: "classes",
    difficulty: "medium",
    prompt: "次のコードのコンパイル結果はどれですか？\n```ts\nabstract class Shape {\n  abstract area(): number;\n}\nclass Circle extends Shape {\n  constructor(public r: number) { super(); }\n}\n```",
    choices: [
      "問題なくコンパイルできる",
      "`Circle` は `area` を実装していないためエラー",
      "`Shape` は抽象クラスなので継承できない",
      "`Circle` の `super()` は不要なのでエラー",
    ],
    answerIndex: 1,
    explanation: "抽象メソッド `area` を実装しないサブクラスは、自身も抽象クラスとしてマークしない限りコンパイルエラーになります。",
  },
  {
    id: "class-017",
    category: "classes",
    difficulty: "medium",
    prompt: "次のコードについて正しいのはどれですか？\n```ts\nclass Singleton {\n  private static instance: Singleton;\n  private constructor() {}\n  static getInstance() {\n    return this.instance ??= new Singleton();\n  }\n}\n```",
    choices: [
      "`new Singleton()` は外部からも呼び出せる",
      "`private constructor` のため、外部からは `Singleton.getInstance()` 経由でしか取得できない",
      "`private constructor` は TypeScript ではサポートされない",
      "`getInstance` 内でも `new Singleton()` は呼べない",
    ],
    answerIndex: 1,
    explanation: "コンストラクタを `private` にすると外部からの `new` は禁止されますが、クラス内部の static メソッドからは生成できます。これがシングルトンパターンの典型実装です。",
  },
  {
    id: "class-018",
    category: "classes",
    difficulty: "medium",
    prompt: "次のジェネリッククラスについて、正しいのはどれですか？\n```ts\nclass Repo<T extends { id: number }> {\n  items: T[] = [];\n  add(item: T) { this.items.push(item); }\n}\n```",
    choices: [
      "`new Repo<string>()` は問題なく動く",
      "`new Repo<{ id: number; name: string }>()` は有効",
      "制約があるためジェネリックを省略するとデフォルトで `unknown` になる",
      "`T` は `number` のみ受け付ける",
    ],
    answerIndex: 1,
    explanation: "`T extends { id: number }` は「`id: number` を持つ型」を要求するので、`{ id: number; name: string }` は有効です。`string` は制約に合致しないためエラーになります。",
  },
  {
    id: "class-019",
    category: "classes",
    difficulty: "medium",
    prompt: "次のコードの `typeof Foo` と `Foo` の違いとして正しいのはどれですか？\n```ts\nclass Foo { x = 1; }\n```",
    choices: [
      "`Foo` はインスタンス型、`typeof Foo` はクラス（コンストラクタ）の型",
      "両方とも同じ型を表す",
      "`typeof Foo` はインスタンス型、`Foo` はコンストラクタ型",
      "`typeof Foo` はランタイム値であり型としては使えない",
    ],
    answerIndex: 0,
    explanation: "クラス名 `Foo` を型として使うとインスタンス型を表し、`typeof Foo` はクラス自体（`new` できるコンストラクタ）の型を表します。",
  },
  {
    id: "class-020",
    category: "classes",
    difficulty: "medium",
    prompt: "`InstanceType<typeof Foo>` の型は何になりますか？\n```ts\nclass Foo { x = 1; }\n```",
    choices: [
      "`typeof Foo`",
      "`Foo`（インスタンス型）",
      "`{ new(): Foo }`",
      "`never`",
    ],
    answerIndex: 1,
    explanation: "`InstanceType<T>` はコンストラクタ型 `T` の戻り値（インスタンス型）を取り出します。`InstanceType<typeof Foo>` は `Foo` と等価です。",
  },
  {
    id: "class-021",
    category: "classes",
    difficulty: "medium",
    prompt: "`ConstructorParameters<typeof Foo>` の型は何ですか？\n```ts\nclass Foo {\n  constructor(public name: string, public age: number) {}\n}\n```",
    choices: [
      "`string`",
      "`[name: string, age: number]`",
      "`{ name: string; age: number }`",
      "`Foo`",
    ],
    answerIndex: 1,
    explanation: "`ConstructorParameters<T>` はコンストラクタ型 `T` の引数をタプル型として取り出します。ここでは `[name: string, age: number]` になります。",
  },
  {
    id: "class-022",
    category: "classes",
    difficulty: "medium",
    prompt: "次の流れるようなインターフェース（fluent interface）を実現するためのメソッドの戻り値の型として最も適切なのはどれですか？\n```ts\nclass Builder {\n  step1() { /* ... */ return this; }\n  step2() { /* ... */ return this; }\n}\n```",
    choices: [
      "`Builder`",
      "`this`",
      "`void`",
      "`object`",
    ],
    answerIndex: 1,
    explanation: "戻り値の型を `this` にすると、サブクラスでメソッドチェーンしたときも具象サブクラスの型が保たれます。`Builder` を返すとサブクラス特有のメソッドにチェーンできなくなります。",
  },
  {
    id: "class-023",
    category: "classes",
    difficulty: "medium",
    prompt: "次の型述語メソッドの結果として正しいのはどれですか？\n```ts\nclass Cat {\n  isHappy(): this is HappyCat { return false; }\n}\nclass HappyCat extends Cat { purr() {} }\nconst c: Cat = new Cat();\nif (c.isHappy()) { c.purr(); }\n```",
    choices: [
      "`c.purr()` は型エラーになる",
      "`isHappy()` 内で `true` を返した場合のみ `c` は `HappyCat` 型に絞り込まれ、`purr()` を呼べる",
      "`this is T` 構文はクラスでは使えない",
      "`isHappy()` の戻り値型は `boolean` にしないとコンパイルできない",
    ],
    answerIndex: 1,
    explanation: "`this is T` 形式の型述語をメソッドの戻り値型に書くと、`true` を返したときに呼び出し側で `this` が `T` に絞り込まれます。",
  },
  {
    id: "class-024",
    category: "classes",
    difficulty: "medium",
    prompt: "`implements` キーワードについて正しいのはどれですか？",
    choices: [
      "親クラスのメソッド実装が継承される",
      "構造的にインターフェースを満たすかチェックするだけで、実装は継承されない",
      "複数のクラスを継承できる",
      "`abstract class` は `implements` できない",
    ],
    answerIndex: 1,
    explanation: "`implements` は構造的な型チェックのみを行い、メソッドや状態を継承するわけではありません。継承は `extends` の役割です。",
  },
  {
    id: "class-025",
    category: "classes",
    difficulty: "medium",
    prompt: "次のコードについて正しいのはどれですか？\n```ts\nclass Counter {\n  static #count = 0;\n  static increment() { Counter.#count++; }\n  static get value() { return Counter.#count; }\n}\n```",
    choices: [
      "`Counter.#count` はサブクラスからアクセスできる",
      "`#count` は ECMAScript の真にプライベートなフィールドで、外部からは一切アクセスできない",
      "`#count` は TypeScript の `private` と完全に同じ意味",
      "`static #count` は構文エラー",
    ],
    answerIndex: 1,
    explanation: "`#` プレフィックス（ECMAScript private）はランタイムでも強制される真のプライベートで、サブクラスからもアクセスできません。TypeScript の `private` は型レベルのみのチェックです。",
  },
  {
    id: "class-026",
    category: "classes",
    difficulty: "medium",
    prompt: "`static {}` 初期化ブロックの使い道として最も適切なのはどれですか？",
    choices: [
      "インスタンスフィールドを初期化する",
      "クラスが評価されたタイミングでクラス自身（static メンバ）を初期化する",
      "コンストラクタ内のロジックを記述する",
      "サブクラスで上書きできる初期化ロジックを書く",
    ],
    answerIndex: 1,
    explanation: "`static` ブロックはクラス定義評価時に一度だけ実行され、`private` static フィールドへのアクセスや複雑な初期化ロジックを書くのに使えます。",
  },
  {
    id: "class-027",
    category: "classes",
    difficulty: "hard",
    prompt: "次のクラスフィールド初期化順序として正しいのはどれですか？\n```ts\nclass A {\n  x = 1;\n  constructor() { console.log(this.x); }\n}\nclass B extends A {\n  x = 2;\n}\nnew B();\n```",
    choices: [
      "`1` が出力される",
      "`2` が出力される",
      "`undefined` が出力される",
      "コンパイルエラーになる",
    ],
    answerIndex: 0,
    explanation: "`super()` の呼び出し（`A` のコンストラクタ）は `B` のフィールド初期化より前に実行されます。`A` のコンストラクタ実行時にはまだ `B` の `x = 2` は適用されていないので、`A` の `x = 1` が出力されます。",
  },
  {
    id: "class-028",
    category: "classes",
    difficulty: "hard",
    prompt: "次のコードについて正しいのはどれですか？\n```ts\nclass Model {\n  declare id: number;\n}\n```",
    choices: [
      "`id` は実行時に初期化されるフィールドになる",
      "`declare` はコンパイラに「このフィールドは別の手段で初期化されるので JS コードを生成しない」ことを伝える",
      "`declare` はクラス内では使えない",
      "`declare` を付けると `id` は `readonly` になる",
    ],
    answerIndex: 1,
    explanation: "クラス内の `declare` 修飾子は型情報のみを宣言し、フィールド初期化用の JS コードを出力させません。基底クラスやデコレータ等で初期化される場合に使います。",
  },
  {
    id: "class-029",
    category: "classes",
    difficulty: "hard",
    prompt: "次のミックスインパターンについて正しいのはどれですか？\n```ts\ntype Ctor<T = {}> = new (...args: any[]) => T;\nfunction Timestamped<TBase extends Ctor>(Base: TBase) {\n  return class extends Base {\n    timestamp = Date.now();\n  };\n}\nclass User { name = \"\"; }\nconst TU = Timestamped(User);\n```",
    choices: [
      "`new TU()` のインスタンスは `name` と `timestamp` の両方を持つ",
      "ミックスインは TypeScript ではサポートされない",
      "`Base` のインスタンスメンバは継承されない",
      "`TU` は抽象クラスになる",
    ],
    answerIndex: 0,
    explanation: "ミックスインは関数がクラス式を返すパターンで、`Base` を継承するためインスタンスメンバが受け継がれます。`new TU()` は `name`（`User` 由来）と `timestamp`（ミックスイン由来）の両方を持ちます。",
  },
  {
    id: "class-030",
    category: "classes",
    difficulty: "hard",
    prompt: "次のコンストラクタオーバーロードについて正しいのはどれですか？\n```ts\nclass Box {\n  constructor(value: number);\n  constructor(value: string);\n  constructor(public value: number | string) {}\n}\n```",
    choices: [
      "問題なくコンパイルできる",
      "実装シグネチャでパラメータプロパティ（`public value`）を使うとエラーになる",
      "オーバーロードシグネチャにも `public` を付けないとエラーになる",
      "コンストラクタオーバーロードは TypeScript では許可されない",
    ],
    answerIndex: 0,
    explanation: "パラメータプロパティ（`public`/`private`/`readonly` 付き引数）はコンストラクタの **実装シグネチャでのみ** 許可されます。オーバーロードシグネチャには付けられません。よってこのコードは問題なくコンパイルでき、`value` プロパティが自動で生成されます。",
  },
];
