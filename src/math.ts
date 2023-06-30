import { areAllEqual } from './collections';

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
 * 
 * @param numbers - a sequence of numbers
 * @returns the total sum of the series
 */
export function getSum(numbers: number[]): number {
	return numbers.reduce((sum, num) => sum + num, 0);
}

/**
 * Returns the product of a series of numbers, which is the
 * multiplicative result of all the numbers together.
 *
 * This function returns in linear time, or `O(n)`, where `n`
 * is the length of the array.
 * @param numbers - a sequence of numbers
 * @returns The product of all numbers together
 */
export function getProduct(numbers: number[]): number {
	return numbers.reduce((product, num) => product * num, 1);
}

/**
 * Counts the discrete frequency of items within a list,
 * where each key-value pair consists of an item matching to its count
 * @example
 * const absolute = getAbsoluteFrequency([1, 2, 3, 3, 4, 5]);
 * absolute.get(3); // 2
 * @example
 * const sentence = "the best of the best";
 * const wordsFrequency = getAbsoluteFrequency(sentence.split(" "));
 * wordsFrequency.get("best"); // 2
 * @param items - An array of items of type `<T>`
 */
export function getAbsoluteFrequency<T>(items: T[]): Map<T, number> {
	if(items.length === 0) {
		return new Map<T, number>();
	}

	const frequency = new Map<T, number>();
	for (const item of items) {
		if (frequency.has(item)) {
			frequency.set(item, (frequency.get(item) as number) + 1);
		} else {
			frequency.set(item, 1);
		}
	}

	return frequency;
}

/**
 * computes the total of the absolute frequencies and all running
 * frequencies from an absolute frequency distribution
 * @param items - a dataset of items of type `<T>`
 * @param absoluteFrequency - a discrete distribution showing the
 * frequency of items
 */
export function getCumulativeFrequency<T>(items: T[], absoluteFrequency?: Map<T, number>): Map<T, number> {
	const absolute: Map<T, number> = absoluteFrequency === undefined
		? getAbsoluteFrequency(items)
		: absoluteFrequency;
	const cumulative: Map<T, number> = new Map<T, number>();
	let runningCount = 0;

	absolute.forEach((value, key) => {
		runningCount = value + runningCount;
		cumulative.set(key, value);
	});

	return cumulative;
}

/**
 * Returns a map that pairs a value of type `<T>` to its empirical probability,
 * which is computed by normalizing the event's absolute frequency by the total
 * number of events
 *
 * @example
 * const relative = getRelativeFrequency([1, 1, 1, 1, 2, 3, 4, 5]);
 * relative.get(1); // 0.50
 * @param items - a dataset of items of type `<T>`
 * @param absoluteFrequency - a discrete distribution showing the
 * frequency of items
 */
export function getRelativeFrequency<T>(items: T[], absoluteFrequency?: Map<T, number>): Map<T, number> {
	const absolute: Map<T, number> = absoluteFrequency === undefined
		? getAbsoluteFrequency(items)
		: absoluteFrequency;
	const relative: Map<T, number> = new Map<T, number>();
	const sum: number = getSum(Array.from(absolute.values()));

	absolute.forEach((value, key) => {
		relative.set(key, value/sum);
	});

	return relative;
}

export function getArithmeticMean(numbers: number[]): number {
	return getSum(numbers)/numbers.length;
}

/**
 * Returns the middle value in a sorted dataset. If the dataset
 * is an even length, it returns the two closest middle values together,
 * divided by 2.
 *
 * This function will run in linear time, or `O(n)`, where `n` is the length
 * of the array.
 *
 * **Example**: in a dataset of `[2, 3, 5, 7]`, the two closest values
 * to the middle will be `3` and `5`. The median is computed by calculating
 * `(3+5)/2 = 4`.
 * @example
 * ```ts
 * getMedian([2, 3, 5, 7]) // 4
 * getMedian([1, 3, 5, 7, 10]) // 5
 * ```
 * @param numbers - a sequence of numbers
 */
export function getMedian(numbers: number[]): number {
	if (numbers.length === 0) { return Number.NaN; }
	if (numbers.length === 1) { return numbers[0]; }

	numbers.sort((a, b) => { return a - b; });
	const half = numbers.length / 2;
	if (numbers.length % 2 !== 0) {
		return numbers[Math.floor(half)];
	}

	return (numbers[half] + numbers[half - 1]) / 2;
}

/**
 * Returns the value or values that appear most in a dataset.
 * The mode will depend on the dataset's distribution:
 * - *uniform* distribution: return `undefined` (all values occur
 *   equally often)
 * - *unimodal* distribution: return a `T[]` with 1 item
 * - *multimodal* distribution: return a `T[]` with at least 2
 *   or more items
 *
 * This function runs in linear time, or `O(n)`, where `n` is
 * the length of the array.
 * @example
 * ```ts
 * getMode([]) // undefined
 * getMode([1]) // [1]
 * getMode([1, 2, 3]) // undefined
 * getMode([1, 2, 3, 3]) // [3]
 * getMode([1, 2, 3, 3, 4, 4]) // [3, 4]
 * ```
 * @param items - a sequence of items of type `<T>`
 * @returns 1 or more values of type `<T>`, otherwise `undefined` if
 * either:
 *  - the array passed is empty,
 *  - or all values occur equally often.
 */
export function getMode<T>(items: T[]): T[]|undefined {
	if (items.length === 0) { return undefined; }
	if (items.length === 1) { return [ items[0] ]; }

	const absoluteFrequency: Map<T, number> = getAbsoluteFrequency(items);
	const frequencies: number[] = Array.from(absoluteFrequency.values());

	if (areAllEqual(frequencies)) { return undefined; }

	const max: number = Math.max(...frequencies);
	const modes: T[] = [];
	absoluteFrequency.forEach((value, key) => {
		if (value === max) {
			modes.push(key);
		}
	});

	return modes;
}

export function getMeanAbsoluteDeviation(numbers: number[]): number {
	const mean = getArithmeticMean(numbers);
	const deviations: number[] = [];
	for (const n of numbers) {
		deviations.push(n - mean);
	}

	return getArithmeticMean(deviations);
}

export function getMedianAbsoluteDeviation(numbers: number[]): number {
	const median = getMedian(numbers);
	const deviations: number[] = [];
	numbers.sort();

	for(const number of numbers) {
		deviations.push(Math.abs(number - median));
	}

	return getMedian(deviations);
}

export function getStandardDeviation(numbers: number[]): number {
	const mean: number = getArithmeticMean(numbers);
	const deviations: number[] = [];
	for(const number of numbers) {
		deviations.push(Math.pow((number - mean), 2));
	}

	const variance: number = getArithmeticMean(deviations);
	return Math.sqrt(variance);
}

/**
 * A probability density function of a normal distribution
 * @param x - The value that we possibly expect variate could equal
 * @param location - A number representing how to translate the distribution
 * @param scale - A number representing the amount of stretch/squeeze to apply
 * @returns the probability that a variate equals `x` in a normal distribution
 */
export function getNormalPdf(x: number, location: number, scale: number): number {
	const denominator = scale * Math.sqrt(2 * Math.PI);
	const numeratorExponent = Math.pow(-1 * (x - location), 2) / (2 * scale * scale);
	const numerator = Math.pow(Math.E, numeratorExponent);

	return numerator / denominator;
}

/**
 * A probability density function of the uniform distribution
 * @param x - The value that we possibly expect the variate could equal
 * @param a - The inclusive lower boundary
 * @param b - The inclusive upper boundary
 * @returns the probability that a variate equals `x` in a uniform distribution
 */
export function getUniformPdf(x: number, a: number, b: number): number {
	if (a === 0 && b === 1 && isBetweenInclusive(x, a, b)) { return 1; }
	if (isBetweenInclusive(x, a, b)) { return 1 / (b - a); }
	return 0;
}
