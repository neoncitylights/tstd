import * as consts from './consts';

export function getRandBool(): boolean {
	return Math.random() < 0.5;
}

/**
 * Generates a random floating-point number between the closed interval
 * of (min, max)
 *
 * @example
 * ```ts
 * getRandomFloat(0, 1e6);
 * ```
 * @param min - the exclusive minimum boundary of the floating-point
 * @param max - the exclusive maximum boundary of the floating-point
 */
export function getRandFloat(
	min: number,
	max: number,
): number {
	if(min > max || max < min) { throw new RangeError(); }
	return Math.floor(Math.random() * (max - min + 1) + min);
}


/**
 * Generates an integer between the inclusive open interval of [min, max]
 *
 * This function runs roughly in constant time, or `O(1)`.
 * @example
 * getRandInt(0, 100);
 * @param min - Inclusive minimum boundary
 * @param max - Inclusive maximum boundary
 */
export function getRandInt(min: number, max: number): number {
	if(min >= max || max <= min) { throw new RangeError(); }

	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1) + min);
}

/**
 * Retrieves a random item from an array by accessing a random
 * index between `[0, n - 1]`, where `n` is the length of the array
 *
 * This function runs in constant time, or `O(1)`.
 * @example
 * ```ts
 * getRandomItem(['apples', 'bananas', 'mangoes']) // 'apples', 'bananas', or 'mangoes'
 * ```
 * @param array - an array of items of type `<T>`
 */
export function getRandItem<T>(array: T[]): T {
	return array[getRandInt(0, array.length - 1)];
}

export function getRandString(length: number, characters: string|string[]): string {
	const pool: string[] = typeof characters === 'string'
		? characters.split('')
		: characters;

	let random = '';
	for(let i = 0; i < length; i++) {
		random += getRandItem<string>(pool);
	}

	return random;
}

/**
 * Generates a random array of floating-point numbers between an inclusive
 * open interval of `[min, max]` of a given length
 *
 * This function runs in linear time, or `O(n)`, where `n` is the
 * length of the array to generate.
 * @example
 * // generates an array of 20 random floating-point numbers between [0, 1e6]
 * getRandArrayFloat(20, 0, 1e6);
 * @param length - Length of the generated array
 * @param min - Inclusive lower bound
 * @param max - Inclusive upper bound
 * @throws {@link RangeError} if `min >= max` or `max <= min`
 */
export function getRandArrayFloat(
	length: number,
	min: number,
	max: number,
): number[] {
	const randomArray: number[] = [];
	for (let i = 0; i < length; i++) {
		randomArray.push(getRandFloat(min, max));
	}

	return randomArray;
}

/**
 * Generates a random array of integers between an inclusive open
 * interval of `[min, max]` of a given length
 *
 * This function runs in linear time, or `O(n)`, where `n` is the
 * length of the array to generate.
 * @example
 * // generates an array of 20 random integers between [0, 100]
 * getRandArrayInt(25, 0, 100);
 * @param length - the length of the array
 * @param min - the inclusive minimum boundary of the integer
 * @param max - the inclusive maximum boundary of the integer
 */
export function getRandArrayInt(
	length: number,
	min: number,
	max: number,
): number[] {
	const randomArray = [];
	for (let i = 0; i < length; i++) {
		randomArray.push(getRandInt(min, max));
	}

	return randomArray;
}

/**
 * Generates `Float32Array` of n length with random 32-bit floating point numbers
 * @param length - Length of the array
 */
export function getRandArrayF32(length: number): Float32Array {
	return Float32Array.from(getRandArrayFloat(length, consts.F32_MIN, consts.F32_MAX));
}

/**
 * Generates an `Int8Array` of n length with 8-bit signed integers
 * @param length - Length of the array
 */
export function getRandArrayI8(length: number): Int8Array {
	return Int8Array.from(getRandArrayInt(length, consts.I8_MIN, consts.I8_MAX));
}

/**
 * Generates an `Int16Array` of n length with random 16-bit signed integers
 * @param length - Length of the array
 */
export function getRandArrayI16(length: number): Int16Array {
	return Int16Array.from(getRandArrayInt(length, consts.I16_MIN, consts.I16_MAX));
}

/**
 * Generates a `Int32Array` of n length with random 32-bit signed integers
 * @param length - Length of the array
 */
export function getRandArrayInt32(length: number): Int32Array {
	return Int32Array.from(getRandArrayInt(length, consts.I32_MIN, consts.I32_MAX));
}

/**
 * Generates a `Uint8Array` of n length with random 8-bit unsigned integers
 * @param length - Length of the array
 */
export function getRandArrayU8(length: number): Uint8Array {
	return Uint8Array.from(getRandArrayInt(length, consts.U8_MIN, consts.U8_MAX));
}

/**
 * Generates a `Uint16Array` of n length with random 16-bit unsigned integers
 * @param length - Length of the array
 */
export function getRandArrayU16(length: number): Uint16Array {
	return Uint16Array.from(getRandArrayInt(length, consts.U16_MIN, consts.U16_MAX));
}

/**
 * Generates a `Uint32Array` of n length with random 32-bit unsigned integers
 * @param length - Length of the array
 */
export function getRandArrayU32(length: number): Uint32Array {
	return Uint32Array.from(getRandArrayInt(length, consts.U32_MIN, consts.U32_MAX));
}

/**
 * Generates a number within the inclusive range of a signed 8-bit integer
 */
export function getRandI8(): number {
	return getRandInt(consts.I8_MIN, consts.I8_MAX);
}

/**
 * Generates a number within the inclusive range of a signed 16-bit integer
 */
export function getRandI16(): number {
	return getRandInt(consts.I16_MIN, consts.I16_MAX);
}

/**
 * Generates a number within the inclusive range of a signed 32-bit integer
 */
export function getRandI32(): number {
	return getRandInt(consts.I32_MIN, consts.I32_MAX);
}

/**
 * Generates a number within the inclusive range of an unsigned 8-bit integer
 */
export function getRandomU8(): number {
	return getRandInt(consts.I8_MIN, consts.I8_MAX);
}

/**
 * Generates a number within the inclusive range of a 16-bit unsigned integer
 */
export function getRandomU16(): number {
	return getRandInt(consts.I16_MIN, consts.I16_MAX);
}

/**
 * Generates a number within the inclusive range of a 32-bit unsigned integer
 */
export function getRandomU32(): number {
	return getRandInt(consts.I32_MIN, consts.I32_MAX);
}