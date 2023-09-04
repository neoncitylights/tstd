import { describe, expect, expectTypeOf, test } from 'vitest';
import {
	F32_MIN,
	F32_MAX,
	getAbsoluteFrequency,
	getRandArrayF32,
	getRandBool,
	getRandItem,
	getRandString,
	getRandU8,
	getRandU16,
	getRandU32,
	getRandI8,
	getRandI16,
	getRandI32,
	getRandArrayI8,
	getRandArrayI16,
	getRandArrayI32,
	getRandArrayU8,
	getRandArrayU16,
	getRandArrayU32,
} from '../../src/math';

describe('random', () => {
	describe('string', () => {
		test('from an array of characters', () => {
			const random = getRandString(24, ['A', 'B', 'C', 'D']);
			expect(random.length).toBe(24);
			expect(Array.from(getAbsoluteFrequency(random.split('')).keys()).sort()).toStrictEqual(
				['A', 'B', 'C', 'D'],
			);
		})
		test('from a string of characters', () => {
			const random = getRandString(24, 'ABCD');
			expect(random.length).toBe(24);
			expect(Array.from(getAbsoluteFrequency(random.split('')).keys()).sort()).toStrictEqual(
				['A', 'B', 'C', 'D'],
			);
		})
	})

	test('boolean', () => {
		expectTypeOf(getRandBool()).toBeBoolean();
	})

	test('item in array', () => {
		const items = [0, 15, 180, 24, -35, -62, -9, 10];
		const randomItem = getRandItem<number>(items);
		expect(items.includes(randomItem)).toBe(true);
	})

	describe('signed', () => {
		describe('8-bit integer', () => {
			test('generates between [-128, 127]', () => {
				expectToBeBetweenInclusive(getRandI8(), -128, 127);
			})
		})
		describe('16-bit integer', () => {
			test('generates between [-32768, 32767]', () => {
				expectToBeBetweenInclusive(getRandI16(), -32768, 32767);
			})
		})
		describe('32-bit integer', () => {
			test('generates between [-2147483648, 2147483647]', () => {
				expectToBeBetweenInclusive(getRandI32(), -2147483648, 2147483647);
			})
		})
	})
	describe('unsigned', () => {
		describe('8-bit integer', () => {
			test('generates between [0, 255]', () => {
				expectToBeBetweenInclusive(getRandU8(), 0, 255);
			})
		})
		describe('16-bit integer', () => {
			test('generates between [0, 65535]', () => {
				expectToBeBetweenInclusive(getRandU16(), 0, 65535);
			})
		})
		describe('32-bit integer', () => {
			test('generates between [0, 4294967295]', () => {
				expectToBeBetweenInclusive(getRandU32(), 0, 4294967295);
			})
		})
	})

	describe('typed array of', () => {
		test('32-bit floats', () => {
			const random = getRandArrayF32(25);
			expect(random).toBeInstanceOf(Float32Array);
			random.forEach(n => {
				expect(n).toBeGreaterThanOrEqual(F32_MIN);
				expect(n).toBeLessThanOrEqual(F32_MAX);
			});
		})

		describe('signed', () => {
			test('8-bit integers', () => {
				const random = getRandArrayI8(25);
				expect(random).toBeInstanceOf(Int8Array);
				random.forEach(n => {
					expectToBeBetweenInclusive(n, -128, 127);
				})
			})
			test('16-bit integers', () => {
				const random = getRandArrayI16(25);
				expect(random).toBeInstanceOf(Int16Array);
				random.forEach(n => {
					expectToBeBetweenInclusive(n, -32768, 32767);
				})
			})
			test('32-bit integers', () => {
				const random = getRandArrayI32(25);
				expect(random).toBeInstanceOf(Int32Array);
				random.forEach(n => {
					expectToBeBetweenInclusive(n, -2147483648, 2147483647);
				})
			})
		})

		describe('unsigned', () => {
			test('8-bit integers', () => {
				const random = getRandArrayU8(25);
				expect(random).toBeInstanceOf(Uint8Array);
				random.forEach(n => {
					expectToBeBetweenInclusive(n, 0, 255);
				})
			})
			test('16-bit integers', () => {
				const random = getRandArrayU16(25);
				expect(random).toBeInstanceOf(Uint16Array);
				random.forEach(n => {
					expectToBeBetweenInclusive(n, 0, 65535);
				})
			})
			test('32-bit integers', () => {
				const random = getRandArrayU32(25);
				expect(random).toBeInstanceOf(Uint32Array);
				random.forEach(n => {
					expectToBeBetweenInclusive(n, 0, 4294967295);
				})
			})
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
