import { ArrayIterFn, Primitive } from '.';
import { ArgumentError } from './exceptions';

/**
 * Checks if all numbers in a series of numbers are all approximately
 * equal to each other.
 * This function runs in `O(2n)` time, where `n` is the length of the array.
 * @param numbers - a sequence of numbers
 * @returns Whether or not all numbers are all approximately equal
 */
export function areAllApproxEqual(numbers: number[]): boolean {
	return areAllEqual(numbers.map((n) => {
		return Math.round(n);
	}));
}

/**
 * Checks if all items in an array are equal to each other
 *
 * Time complexity:
 * - **On average**: this method runs in linear time, or `O(n)`,
 *   where n is the length of the array.
 * - **Best case scenario**: it will run on two items, if the second item
 *   in the array is not equal to the first item.
 * - **Worst case scenario**: It will run on every item, and either all items
 *   are equal, or the item at the last index (`items.length - 1`) is
 *   not equal to every other item.
 *
 * @param items - An array of type `<T>`
 * @returns whether or not all items in an array are equal to each other
 */
export function areAllEqual<T>(items: T[]): boolean {
	return items.every((value) => value === items[0]);
}

/**
 * Asserts that each item in an array are all of the same length.
 *
 * This function runs in linear time, or `O(n)`, where `n`
 * is the length of the array.
 * @param items - An array of type <T> having a `length` property
 */
export function areAllSameLength<T extends { length: number }>(items: T[]): boolean {
	return items.every(collection => collection.length === items[0].length);
}

export function arePrimitiveArraysEqual<T extends Primitive>(a: T[], b: T[]): boolean {
	return a.length === b.length &&
		a.every((val, index) => val === b[index]);
}

/**
 * Allows dividing an array into sub-arrays of size `maxSize`. If
 * the length of the array is not divisible by `maxSize`, the leftover
 * items will be appended.
 *
 * This method runs in `O(n * m)` time, where:
 * - `n` is the length of the array
 * - `m` is the chunk size
 * @example
 * chunk([1, 2, 3, 4, 5, 6, 7, 8, 9], 3)
 * // [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
 * chunk([1, 2, 3, 4, 5, 6, 7, 8, 9], 4)
 * // [[1, 2, 3, 4], [5, 6, 7, 8], [9]]
 * @param items - An array of type `<T>`
 * @param maxSize - the maximum size a chunk can be
 * @throws {@link ArgumentError} if `maxSize` is not a positive number or not an integer
 * @returns A 2-dimensional array of `<T>` type
 */
export function chunk<T>(items: T[], maxSize: number): T[][] {
	if (maxSize < 1 || !Number.isInteger(maxSize)) { throw new ArgumentError(); }
	if (maxSize >= items.length) { return [items]; }

	const chunks: T[][] = [];
	for (let i = 0; i < items.length; i += maxSize) {
		chunks.push(items.slice(i, i + maxSize));
	}

	return chunks;
}

/**
 * A similar function as chunk<T>(), except each chunk represents a substring,
 * and the returning value is a 1-dimensional array of strings (`string[]`).
 * @param value - a string to equally chunk into substrings as much as possible
 * @param maxSize - the maximum size a chunk can be
 */
export function chunkString(value: string, maxSize: number): string[] {
	const numChunks = Math.ceil(value.length / maxSize);
	const chunks = new Array<string>(numChunks);

	for (let i = 0, k = 0; i < numChunks; i++, k += maxSize) {
		chunks[i] = value.substr(k, maxSize);
	}

	return chunks;
}

/**
 * Generic function for iterating an array in reverse, without mutating
 * the original array via `Array.prototype.reverse()`. This method is akin
 * to `Array.prototype.forEach()`
 *
 * This method runs in linear time, or `O(n)`, where `n` is the length
 * of the array.
 * @param items - an array of items of type `<T>`
 * @param iterFn - a function to call on each element
 */
export function forEachReverse<T>(items: T[], iterFn: ArrayIterFn<T, void>): void {
	for(let i = items.length - 1; i >= 0; i-- ) {
		iterFn(items[i], i, items);
	}
}

/**
 * Allows iterating an array of type `T` without mutating the original array
 * via `Array.prototype.reverse()`. This method is akin to `Array.prototype.map()`
 *
 * This method runs in linear time, or `O(n)`, where `n` is the length
 * of the array.
 * @param items - an array of items of type `<T>`
 * @param iterFn - a function to execute on each element
 */
export function mapReverse<T, U>(items: T[], iterFn: ArrayIterFn<T, U>): U[] {
	const map: U[] = [];
	for(let i = items.length - 1; i >= 0; i-- ) {
		map.push(iterFn(items[i], i, items));
	}

	return map;
}

/**
 * Sorts an array of numbers in descending order, where it goes
 * from greatest to least.
 * - *Time complexity*: Depends on the JS engine's implementation
 *   of `Array.prototype.sort()`. On average, it runs in linearithmic
 *   time, or `O(n log n)`, where `n` is the length of the array.
 * - *Note*: This array is sorted in place via `Array.prototype.sort()`.
 * @see {@link https://tc39.es/ecma262/multipage/indexed-collections.html#sec-array.prototype.sort|ECMAScript Language Specification (ECMAScript)}
 */
export function sortNumsAsc(dataset: number[]): number[] {
	return dataset.sort((a, b) => a - b);
}

/**
 * Sorts an array of numbers in descending order, where it goes
 * from greatest to least.
 * - *Time complexity*: Depends on the JS engine's implementation
 *   of `Array.prototype.sort()`. On average, it runs in linearithmic
 *   time, or `O(n log n)`, where `n` is the length of the array.
 * - *Note*: This array is sorted in place via `Array.prototype.sort()`.
 * @see {@link https://tc39.es/ecma262/multipage/indexed-collections.html#sec-array.prototype.sort|ECMAScript Language Specification (ECMAScript)}
 */
export function sortNumsDesc(dataset: number[]): number[] {
	return dataset.sort((a, b) => b - a);
}

export function invertMap<K, V>(map: Map<K, V>): Map<V, K> {
	const inverted = new Map<V, K>();
	map.forEach((value, key) => {
		inverted.set(value, key);
	});

	return inverted;
}
