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

describe('getRandI8()', () => {
	test('randomly generates between -128 and 127', () => {
		const random = getRandI8();
		expectToBeBetweenInclusive(random, -128, 127);
	})
})

describe('getRandI16()', () => {
	test('randomly generates between -32768 and 32767', () => {
		const random = getRandI16();
		expectToBeBetweenInclusive(random, -32768, 32767);
	})
})

describe('getRandI32()', () => {
	test('randomly generates between -2147483648 and 2147483647', () => {
		const random = getRandI32();
		expectToBeBetweenInclusive(random, -2147483648, 2147483647);
	})
})

describe('getRandU8()', () => {
	test('randomly generates between 0 and 255', () => {
		const random = getRandU8();
		expectToBeBetweenInclusive(random, 0, 255);
	})
})

describe('getRandU16()', () => {
	test('randomly generates between 0 and 65535', () => {
		const random = getRandU16();
		expectToBeBetweenInclusive(random, 0, 65535);
	})
})

describe('getRandU32()', () => {
	test('randomly generates between 0 and 4294967295', () => {
		const random = getRandU32();
		expectToBeBetweenInclusive(random, 0, 4294967295);
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
