/**
 * Computes the inverse cotangent (or: *arcus cotangent*,
 * *antitrigonometric tangent*).
 * Formally known as `arccot(x) = tan^-1(1/x)`.
 *
 * @remarks
 *  - **Domain**: All real numbers, `{x|x ∈ ℝ}`
 *  - **Range**: `{y ∈ ℝ: 0 < y < π}`
 *  - It is most known by it's inverse name in mathematics,
 *    and it's abbreviated arcus name in computer science.
 * @param x - value of a floating-point or integer, where `x`
 * is the opposite side of a triangle.
 * @returns The implementation-approximated angle in radians,
 * based on the trigonometric ratio of tan^-1(1/x).
 */
export function arccot(x: number): number {
	return Math.atan(1 / x);
}

/**
 * Computes the inverse cosecant (or: *arcus cosecant*,
 * *antitrigonometric cosecant*).
 * Formally known as `arccsc(x) = sin^-1(1/x)`.
 *
 * @remarks
 *  - **Domain**: `{x ∈ ℝ: x ≤ -1 ∨ x ≥ -1}`
 *  - **Range**: `{y ∈ ℝ: -π⁄2 ≤ y < 0 ∨ 0 < y ≤ π⁄2}`
 *  - It is most known by it's inverse name in mathematics,
 *    and it's abbreviated arcus name in computer science.
 * @param x - value of a floating-point or integer, within
 * the acceptable domain, where `x` is the opposite side
 * of the triangle.
 * @returns The implementation-approximated angle in radians,
 * based on the trigonometric ratio of sin^-1(1/x). If `x` is
 * not within the domain, it returns `Number.NaN`.
 */
export function arccsc(x: number): number {
	if(x <= -1 || x >= 1) { return Number.NaN; }
	return Math.asin(1 / x);
}

/**
 * Computes the inverse secant (or: *arcus secant*,
 * *antitrigonometric secant*).
 * Formally known as `arcsec(x) = cos^-1(1/x)`.
 *
 * @remarks
 *  - **Domain**: `{x ∈ ℝ: x ≤ -1 ∨ x ≥ -1}`
 *  - **Range**: `{y ∈ ℝ: 0 ≤ y < π/2 ∨ π/2 < y < π}`
 *  - It is most known by it's inverse name in mathematics,
 *    and it's abbreviated arcus name in computer science.
 * @param x - value of a floating-point or integer, within
 * the acceptable domain, where `x` is the adjacent side
 * of a triangle.
 * @returns The implementation-approximated angle in radians,
 * based on the trigonometric ratio of cos^-1(1/x). If `x` is
 * not within the domain, it returns `Number.NaN`.
 */
export function arcsec(x: number): number {
	if(x <= -1 || x >= 1) { return Number.NaN; }
	return Math.acos(1 / x);
}
