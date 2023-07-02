import { describe, expect, test } from 'vitest';
import { isBetweenInclusive } from '../../src/math';

describe('isBetweenInclusive()', () => {
	test('inclusive interval comparison returns true', () => {
		expect(isBetweenInclusive(0, 0, 1)).toBe(true);
	});

	test('inclusive interval comparison returns false', () => {
		expect(isBetweenInclusive(-1, 0, 1)).toBe(false);
	});

	test('inclusive interval comparison throws an error if minimum boundary is >= to maximum boundary', () => {
		expect(() => isBetweenInclusive(-1, 2, 1)).toThrowError(RangeError);
	});
});
