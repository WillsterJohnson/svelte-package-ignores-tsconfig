/**
 * the following compiler options in tsconfig.json mean that `const enum`s will only be emitted as types
 * ```
 * "preserveConstEnums": false,
 * "isolatedModules": false
 * ```
 */
export const enum ShouldBeTypeOnly {
  a,
  b,
  c,
}

export enum ShouldBeRuntimeObject {
  a,
  b,
  c,
}
