import { PiOverFour, PiOverTwo } from './consts';

function isApproxEqual(a: number, b: number, epsilon: number = 0.001): boolean {
	return Math.abs(a - b) < epsilon;
}

/**
 * Computes the cosecant of a given angle in radians,
 * which is the reciprocal of the sine function.
 * 
 * @remarks
 * - *Domain*: `[-π/2, π/2]`
 * - *Range*: `{x ∈ R: x/π ≠ ℤ}`
 * @param x Cosine of an angle in radians
 * @returns the cosecant of an angle
 */
export function csc(x: number): number {
	if (x < -PiOverTwo || x > PiOverTwo) {
		return NaN;
	}
	if (x === 0) {
		return Infinity;
	}
	if (isApproxEqual(x, PiOverFour)) {
		return Math.SQRT2;
	}
	if (isApproxEqual(x, PiOverTwo)) {
		return 1;
	}

	return 1 / Math.sin(x);
}

/**
 * Computes the secant of a given angle in radians,
 * which is the reciprocal of the cosine function.
 *
 * @remarks
 *  - *Domain*: `{x ∈ ℝ: x/π + 1/2 ≠ ℤ}`
 *  - *Range*: `{y ∈ ℝ: y ≤ -1 ∨ y ≥ -1}`
 *  - `csc(Θ) = c/a = hypotenuse/opposite`
 * @param x - the cosine of the angle in radians
 * @returns the secant of the angle
 */
export function sec(x: number): number {
	if (Number.isInteger((x / Math.PI) + 0.5)) {
		return NaN;
	}
	if (x === 0) {
		return 1;
	}
	if (isApproxEqual(x, PiOverFour)) {
		return Math.SQRT2;
	}
	if (isApproxEqual(x, PiOverTwo)) {
		return 0;
	}

	return 1 / Math.cos(x);
}

/**
 * Computes the cotangent of a given angle in radians,
 * which is the reciprocal of the tangent function.
 * 
 * @remarks
 *  - *Domain*: `{x ∈ R: x/π ≠ ℤ}`
 *  - *Range*: `{x|x ∈ R}`
 * @example
 * cot(π/4) = 1
 * @param x - the tangent of the angle in radians
 * @returns the cotangent of the given angle in radians.
 * - If `x` equals `0`, the result is `Infinity`.
 * - If `x` equals `Infinity`, the result is `0`.
 */
export function cot(x: number): number {
	if (x === 0) {
		return Infinity;
	}
	if (
		Number.isInteger(x / Math.PI)
		|| x === Infinity
		|| x === -Infinity
		|| Number.isNaN(x)
	) {
		return Number.NaN;
	}
	if (isApproxEqual(x, PiOverFour)) {
		return 1;
	}
	if (isApproxEqual(x, PiOverTwo)) {
		return 0;
	}

	return 1 / Math.tan(x);
}
