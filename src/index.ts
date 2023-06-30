export type Primitive = string | number | bigint | boolean | symbol | null | undefined;

export type PredicateFn<T> = (expression: T) => boolean;
export type ArrayIterFn<T, U> = (value: T, index: number, items: T[]) => U;
export type ArrayRelativeIterFn<T, U> = (currentValue: T, previousValue: T, index: number, items: T[]) => U;
export type Nullable<T> = T | null;
export type Nullish = null | undefined;
export type Falsy = false | '' | 0 | null | undefined;

export * as collections from './collections';
export * as dom from './dom';
export * as exceptions from './exceptions';
export * as math from './math';
export * as strings from './strings';
