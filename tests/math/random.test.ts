import { describe, expect, expectTypeOf, test } from 'vitest';
import {
	getRandString,
	getRandItem,
	getAbsoluteFrequency,
	getRandBool,
	getRandArrayF32,
	F32_MIN,
	F32_MAX,
} from '../../src/math';

describe('getRandString()', () => {
	test('random string generates to constraints', () => {
		const random = getRandString(24, ['A', 'B', 'C', 'D']);
		expect(random.length).toBe(24);
		expect(Array.from(getAbsoluteFrequency(random.split('')).keys()).sort()).toStrictEqual(
			['A', 'B', 'C', 'D'],
		);
	});
});

describe('getRandItem()', () => {
	test('gets a random item out of an array', () => {
		const items = [0, 15, 180, 24, -35, -62, -9, 10];
		const randomItem = getRandItem<number>(items);
		expect(items.includes(randomItem)).toBe(true);
	});
});

describe('getRandBool()', () => {
	test('gets a random boolean', () => {
		expectTypeOf(getRandBool()).toBeBoolean();
	});
});

describe('getRandArrayF32()', () => {
	test('Randomly generating an Float32Array generates an array within the float32 range', () => {
		const random = getRandArrayF32(25);
		expect(random).toBeInstanceOf(Float32Array);
		random.forEach(n => {
			expect(n).toBeGreaterThanOrEqual(F32_MIN);
			expect(n).toBeLessThanOrEqual(F32_MAX);
		});
	});
});

