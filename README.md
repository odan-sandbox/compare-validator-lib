# compare-validator-lib

比較
https://www.npmtrends.com/joi-vs-yup-vs-zod-vs-ajv

あんまり複雑な Schema の validate はせずに表面をなぞっただけの比較です

## zod

- https://github.com/colinhacks/zod
- TS フレンドリーに感じた
- Schema から TS の型を取り出せて便利
- io-ts をうまく使いこなせなかったマンとしてはいい感じのインタフェースで助かる

## joi

- https://github.com/sideway/joi
- 機能がたくさんある
  - `.with` とか `.xor`
- フロントエンドのフォーム向きな感じがした
- TS との親和性あんまり高くなさそう
  - Schema => TS の型がない
  - 先に TS の型を書く世界観ぽい？

## yup

- https://github.com/jquense/yup
- 機能がまあまあある
  - xor 的なやつは自分で書くらしい
    - https://github.com/jquense/yup/issues/505#issuecomment-476996642
- Schema => TS の型がある
- 依存に lodash を持っていてやばそう
- 2021-09-02 時点だと v1 系がアルファ版で今後に期待？
  - 最後のリリースが `on 19 Dec 2020` だった...

## ajv

- https://github.com/ajv-validator/ajv
- DL 回数は断トツで実績がありそう

# メモ

https://github.com/react-hook-form/resolvers にあるライブラリがよく使われるやつなのかも
