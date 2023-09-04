import { describe, expect, test } from 'vitest';
import {
	clampI8,
	clampI16,
	clampI32,
	clampU8,
	clampU16,
	clampU32,
	isBetweenInclusive,
} from '../../src/math';

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

describe('clamp', () => {
	describe('signed', () => {
		test('8-bit integer', () => {
			expectToBeBetweenInclusive(clampI8(240), -128, 127);
		})
		test('16-bit integer', () => {
			expectToBeBetweenInclusive(clampI16(40000), -32768, 32767);
			
		})
		test('32-bit integer', () => {
			expectToBeBetweenInclusive(clampI32(3000000000), -2147483648, 2147483647);
		})
	})

	describe('unsigned', () => {
		test('8-bit integer', () => {
			expectToBeBetweenInclusive(clampU8(300), 0, 255);
		})
		test('16-bit integer', () => {
			expectToBeBetweenInclusive(clampU16(70000), 0, 65535);
		})
		test('32-bit integer', () => {
			expectToBeBetweenInclusive(clampU32(5000000000), 0, 4294967295);
		})
	})
})

function expectToBeBetweenInclusive(
	value: number,
	min: number,
	max: number,
) {
	expect(value).toBeGreaterThanOrEqual(min);
	expect(value).toBeLessThanOrEqual(max);
}
