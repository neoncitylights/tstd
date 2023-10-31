import { describe, expect, test } from 'vitest';

import { ArgumentError } from '../src/exceptions';
import {
	areAllApproxEqual,
	areAllEqual,
	areAllSameLength,
	arePrimitiveArraysEqual,
	chunk,
	forEachReverse,
	mapReverse,
	sortNumsAsc,
	sortNumsDesc,
} from './../src/collections';

describe('areAllApproxEqual()', () => {
	test('all numbers in array are all approximately equal to each other', () => {
		expect(areAllApproxEqual([1, 1.1, 1.01, 1.001, 1.49, 1.32, 1.27, 1.49999])).toBe(true);
	});
});

describe('areAllEqual()', () => {
	test('all true values in array are equal', () => {
		expect(areAllEqual([true, true, true])).toBe(true);
	});

	test('all false values in array are equal', () => {
		expect(areAllEqual([false, false, false])).toBe(true);
	});
});

describe('areAllSameLength()', () => {
	test('array of strings are all same length', () => {
		expect(areAllSameLength(['boat', 'dark', 'cost', 'even'])).toBe(true);
	});
});

describe('arePrimitiveArraysEqual()', () => {
	test('two primitive-typed arrays are strictly equal to each other', () => {
		expect(arePrimitiveArraysEqual(
			[1, 2, 3, 4, 5],
			[1, 2, 3, 4, 5],
		)).toBe(true);
	});
});

describe('chunk()', () => {
	test('chunks an array into separate groups', () => {
		expect(chunk([1, 2, 3, 4, 5, 6, 7, 8, 9], 3)).toStrictEqual(
			[
				[1, 2, 3],
				[4, 5, 6],
				[7, 8, 9],
			],
		);
	});

	test('chunks into single chunks', () => {
		expect(chunk([1, 2, 3, 4, 5, 6, 7, 8, 9], 1)).toStrictEqual([[1], [2], [3], [4], [5], [6], [7], [8], [9]]);
	});
	
	test('throws an error if chunk size is less than 1', () => {
		expect(() => chunk([1, 2, 3, 4, 5, 6, 7, 8, 9], 0)).toThrow(ArgumentError);
	});

	test('throws an error if chunk size value is not an integer', () => {
		expect(() => chunk([1, 2, 3, 4, 5, 6, 7, 8, 9], 1.5)).toThrow(ArgumentError);
	});
});

describe('forEachReverse()', () => {
	test('iterates an array in reverse', () => {
		const reverseArray: number[] = [];
		forEachReverse<number>([1, 2, 3, 4, 5], (value) => {
			reverseArray.push(value);
		});

		expect(reverseArray).toStrictEqual([5, 4, 3, 2, 1]);
	});
});

describe('mapReverse()', () => {
	test('iterates an array in reverse', () => {
		const reversed: number[] = mapReverse([1, 2, 3, 4, 5], (value => value));
		expect(reversed).toStrictEqual([5, 4, 3, 2, 1]);
	});
});

describe('sortNumsAsc()', () => {
	test('sorts numerical array in ascending order correctly', () => {
		expect(sortNumsAsc([0, 18, 2, 1, -2, 3, 14, 11]))
			.toStrictEqual([-2, 0, 1, 2, 3, 11, 14, 18]);
	});
});

describe('sortNumsDesc()', () => {
	test('numerical array is in descending order', () => {
		expect(sortNumsDesc([54, 99, 102, 86, 37, 1, 11, -1, 4009, 72]))
			.toStrictEqual([4009, 102, 99, 86, 72, 54, 37, 11, 1, -1]);
	});
});
