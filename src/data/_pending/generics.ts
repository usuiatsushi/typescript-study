import type { Question } from "../../types";

export const questions: readonly Question[] = [
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
      "代入できない（引数は反変、戻り値は共変のため Animal を要求する側に Dog 専用関数は危険）",
      "代入できる（戻り値が共変なので OK）",
      "両方とも常にエラー",
      "実装依存で決まる",
    ],
    answerIndex: 0,
    explanation:
      "関数を `(x: Dog) => Dog` の場所に渡したいなら、引数はより広い型 (Animal) を受け付ける関数なら可。逆向き（広い→狭い）の代入は引数の反変性のため不可。",
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
];
