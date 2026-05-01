import type { Question } from "../../types";

export const questions: readonly Question[] = [
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
      "引数型が反変方向で広い必要があるが、`number[]` は `ReadonlyArray<number>` より狭く strictFunctionTypes 下では関数プロパティ形式だとエラー、メソッド短縮記法だと許される",
      "常にエラー",
      "常に許される",
      "実行時に変換が走る",
    ],
    answerIndex: 0,
    explanation:
      "メソッド短縮記法はバイバリアントに緩く、関数プロパティ型は strictFunctionTypes で反変判定されます。`ReadonlyArray<T>` は `T[]` より広いので、引数として狭める方向は関数プロパティ形式では弾かれます。",
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
      "計算プロパティ名として `[K]: T`（K は const の unique symbol）の形で使える",
      "interface のキーは string/number のみ",
      "`symbol` 型なら何でも使える",
      "Symbol キーはランタイム限定で型に出せない",
    ],
    answerIndex: 0,
    explanation:
      "`const K: unique symbol = Symbol()` を計算プロパティとして `interface X { [K]: T }` に使えます。任意の `symbol` 型は使えません。",
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
      "`declare` は型のみを宣言するアンビエント宣言。.d.ts では `declare` 自体が暗黙ですが、明示しても合法です。",
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
];
