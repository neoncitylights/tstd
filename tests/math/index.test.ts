import { describe, expect, test } from 'vitest';

import { getAbsoluteFrequency, getArithmeticMean, getMedian, getMode, getStandardDeviation } from '../../src/math';

describe('getAbsoluteFrequency()', () => {
	test('computes correctly', () => {
		const absolute = new Map<number, number>();
		absolute.set(1, 1);
		absolute.set(2, 1);
		absolute.set(3, 1);
		absolute.set(4, 1);
		absolute.set(5, 2);
	
		expect(getAbsoluteFrequency([1, 2, 3, 4, 5, 5])).toStrictEqual(absolute);
	});

	test('returns an empty Map object if there are no items', () => {
		expect(getAbsoluteFrequency([])).toStrictEqual(new Map<number, number>());
	});
});

describe('getArithmeticMean()', () => {
	test('computes correctly', () => {
		expect(getArithmeticMean([4, 36, 45, 50, 75])).toBe(42);
	});
});

describe('getMedian()', () => {
	test('computes correctly out of an odd-length numeric array', () => {
		expect(getMedian([1, 3, 3, 6, 7, 8, 9])).toBe(6);
	});

	test('computes correctly out of an even-length numeric array', () => {
		expect(getMedian([1, 2, 3, 4, 5, 6, 8, 9])).toBe(4.5);
	});

	test('is not-a-number if no numbers given', () => {
		expect(getMedian([])).toBe(Number.NaN);
	});

	test('is the only number in a numeric array of 1 length', () => {
		expect(getMedian([1])).toBe(1);
	});
});

describe('getMode()', () => {
	test('unimodal mode in list of numbers', () => {
		expect(getMode<number>([1, 2, 3, 3, 3, 4, 5])).toStrictEqual([3]);
	});
	
	test('bimodal mode in list of numbers', () => {
		expect(getMode<number>([1, 1, 2, 4, 4])).toStrictEqual([1, 4]);
	});
	
	test('works with strings', () => {
		expect(getMode<string>(
			'The irony of the situation wasn\'t lost on anyone in the room'.split(' '),
		)).toStrictEqual(['the']);
	});

	test('returns undefined if all items occur equally often', () => {
		expect(getMode<number>([1, 2, 3, 4, 5])).toBeUndefined();
	});

	test('returns undefined if array is empty', () => {
		expect(getMode<number>([])).toBeUndefined();
	});

	test('returns the first item if there is only one item', () => {
		expect(getMode<number>([1])).toStrictEqual([1]);
	});
});

describe('getStandardDeviation()', () => {
	test('standard deviation is computed correctly', () => {
		expect(getStandardDeviation([2, 4, 4, 4, 5, 5, 7, 9])).toBe(2);
	});
});
