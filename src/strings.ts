/**
 * Checks whether or not the input is `null` or an empty string, `''`
 * @example
 * ```ts
 * stringIsNullOrEmpty(null) // true
 * stringIsNullOrEmpty('') // true
 * stringIsNullOrEmpty('Hello World!') // false
 * ```
 * @param value - the string to test
 */
export function stringIsNullOrEmpty(value: string|null): value is null|string {
	return (
			typeof value === 'string'
			&& value.length === 0
			&& value === ''
		)
		|| value === null
}

export function truncateString(value: string, maxLength: number): string {
	if (value.length <= maxLength) { return value; }
	return value.slice(0, maxLength - 1) + '\u2026';
}

/**
 * @see https://stackoverflow.com/a/5723274/7368162
 * @param value
 * @param maxLength
 * @param separator
 */
export function truncateStringMiddle(
	value: string,
	maxLength: number,
	separator: string = '\u2026'
): string {
	if (value.length <= maxLength) { return value; }

	const charsToShow = maxLength - separator.length;
	const frontChars = Math.ceil(charsToShow/2);
	const backChars = Math.floor(charsToShow/2);

	return value.substr(0, frontChars) +
		separator +
		value.substr(value.length - backChars);
}


/**
 * Partitions a collection of `<T>` typed items into n-grams, which
 * gives contextual, chronological-based information of items.
 * It can be used for making prediction models, and covers multiple
 * fields of study:
 *  - *Bioinformatics*: Biological sequences; n-grams in biology are
 *    instead known as k-mers, which are polymers of `n`-length)
 *  - *Computational linguistics*: Natural language processing using a
 *    dataset of text documents
 *
 * Where `n` is the length of the array, and `m` is the size of the max chunk:
 * - **Time complexity**: This method runs in *subquadratic* time, or `O(n * m)`.
 * - **Space complexity**: This method requires a total space of `-n^2 + (m+1)n`.
 * @example
 * ```ts
 * getNGrams<number>([1, 2, 3, 4, 5, 6, 7, 8, 9], 2)
 * // creates a bigram out of a series of numbers
 * // [[1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [6, 7], [7, 8], [8, 9]]
 * ```
 * @example
 * ```ts
 * getNGrams<string>("the fox jumped over the fence".split(" "), 3)
 * // creates a trigram out of an English sentence
 * // [["the", "fox", "jumped"], ["fox", "jumped", "over"], ["jumped", "over", "the"], ["over", "the", "fence"]]
 * ```
 * @example
 * ```ts
 * getNGrams<string>("Cys-Gly-Leu-Ser-Trp".split("-"), 3)
 * // creates a trigram out of a biological protein sequence
 * // [["Cys", "Gly", "Leu"], ["Gly", "Leu", "Ser"], ["Leu", "Ser", "Trp"]]
 * ```
 * @example
 * ```ts
 * getNGrams<string>("GGTATCGTG".split(""), 3)
 * // creates a trigram out of codons using a biological DNA sequence
 * // [["G", "G", "T"], ["G", "T", "A"], ["T", "A", "T"], ["A", "T", "C"], ["T", "C", "G"], ["C", "G", "T"], ["G", "T", "G"]]
 * ```
 * @param items - A collection of `<T>` typed items
 * @param n - the size of the n-gram
 * @throws {@link RangeError} if n-gram size is bigger than the
 * length of the given array
 */
export function getNGrams<T>(items: T[], n: number): [T[]] {
	if (n > items.length) { throw new RangeError(); }

	const partition = new Array<T[]>();
	for (let i = 0; i < items.length - (n - 1); i++) {
		const subpartition: T[] = [];
		for(let j = 0; j < n; j++ ) {
			subpartition.push(items[i + j]);
		}
		partition.push(subpartition);
	}

	return partition as [T[]];
}
