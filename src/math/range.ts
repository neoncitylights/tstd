import * as consts from './consts';

/**
 * Models a closed interval (`min ≤ value ≤ max`), where the closed interval
 * includes the minimum, maximum, and all numbers between.
 * @param value - A value to check if it fits within the minimum and maximum
 * @param min - Inclusive minimum boundary
 * @param max - Inclusive maximum boundary
 * @throws {@link RangeError} if minimum boundary is greater than the maximum boundary
 */
export function isBetweenInclusive(value: number, min: number, max: number): boolean {
	if (min > max) { throw new RangeError(); }
	return value >= min && value <= max;
}

/**
 * Forces a number to be inclusively between a lower bound and an upper bound.
 * - If a number is less than the lower bound, it returns the lower bound.
 * - If a number is greater than the upper bound, it returns the upper bound.
 * - Otherwise, it returns the original number.
 *
 * @param value - Value to inclusively force between two boundaries
 * @param min - Inclusive minimum boundary
 * @param max - Inclusive maximum boundary
 * @see https://rwaldron.github.io/proposal-math-extensions/#sec-math.clamp
 */
export function clamp(value: number, min: number, max: number): number {
	return Math.min(Math.max(value, min), max);
}

/**
 * Forces a number to be between the inclusive range of an 8-bit signed integer,
 * which is `[-128, 127]`
 */
export function clampI8(value: number): number {
	return clamp(value, consts.I8_MIN, consts.I8_MAX);
}

/**
 * Forces a number to be between the inclusive range of a 16-bit signed integer,
 * which is `[-32,768, 32,767]`
 */
export function clampI16(value: number): number {
	return clamp(value, consts.I16_MIN, consts.I16_MAX);
}

/**
 * Forces a number to be between the inclusive range of a 32-bit signed integer,
 * which is `[-2,147,483,648, 2,147,483,647]`
 */
export function clampI32(value: number): number {
	return clamp(value, consts.I32_MIN, consts.I32_MAX);
}

/**
 * Forces a number to be between the inclusive range of an unsigned 8-bit integer,
 * which is `[0, 255]`
 */
export function clampU8(value: number): number {
	return clamp(value, consts.U8_MIN, consts.U8_MAX);
}

/**
 * Forces a number to be between the inclusive range of an unsigned 16-bit integer,
 * which is `[0, 65,535]`
 */
export function clampU16(value: number): number {
	return clamp(value, consts.U16_MIN, consts.U16_MAX);
}

/**
 * Forces a number to be between the inclusive range of an unsigned 32-bit integer,
 * which is `[0, 4,294,967,295]`
 */
export function clampU32(value: number): number {
	return clamp(value, consts.U32_MIN, consts.U32_MAX);
}

/**
 * Forces a value to be between the inclusive range of a 32-bit floating-point number
 * (IEEE 754 binary32), which is `[-3.4E38, 3.4E38]`
 */
export function clampF32(value: number): number {
	return clamp(value, consts.F32_MIN, consts.F32_MAX);
}
