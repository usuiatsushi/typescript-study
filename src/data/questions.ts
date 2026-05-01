import type { Question } from "../types";

export const QUESTIONS: readonly Question[] = [
  {
    id: "basic-001",
    category: "basic",
    prompt: "次のうち、TypeScriptに存在しない基本型はどれですか？",
    choices: ["number", "string", "char", "boolean"],
    answerIndex: 2,
    explanation:
      "TypeScriptには char 型はありません。1文字も string で表現します。",
  },
  {
    id: "basic-002",
    category: "basic",
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
    prompt: "オプショナルプロパティを表す書き方は？",
    choices: ["name?: string", "name!: string", "name: string?", "name: ?string"],
    answerIndex: 0,
    explanation: "プロパティ名の後ろに `?` を付けます。",
  },

  {
    id: "gen-001",
    category: "generics",
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
      "`satisfies` は型注釈と異なり、値の具体的な推論型（リテラル型など）を失わずに、指定した型への適合性だけを検査します。`as` と違い不正な型へのキャストはできません。",
  },

  {
    id: "narrow-001",
    category: "narrowing",
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
    prompt:
      "クラスのアクセス修飾子で「派生クラスからは見えるが外部からは見えない」のは？",
    choices: ["protected", "private", "public", "readonly"],
    answerIndex: 0,
    explanation:
      "`protected` は同クラスとその派生クラスからアクセス可能。外部のインスタンスからはアクセスできません。",
  },
];
