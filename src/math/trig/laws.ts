export function computeLawOfCosines(s1: number, s2: number, angle: number): number {
	return Math.sqrt(s1 * s1 + s2 * s2 - 2 * s1 * s2 * Math.cos(angle));
}

export function computeLawOfSines(a1: number, b2: number, side: number): number {
	return side * (Math.sin(a1) / Math.sin(b2));
}
