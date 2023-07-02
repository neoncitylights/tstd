import { describe, expect, test } from 'vitest';
import { chunkString, getNGrams, truncateString, truncateStringMiddle } from './../src/strings';

describe('chunkString()', () => {
	test('string is chunked correctly', () => {
		expect(chunkString('GTTTAATTTTGTATGGCAAG', 3)).toStrictEqual(
			['GTT', 'TAA', 'TTT', 'TGT', 'ATG', 'GCA', 'AG'],
		);
	});	
});

describe('truncateString()', () => {
	test('example string 1 truncates correctly', () => {
		expect(truncateString('chromium', 6)).toBe('chrom…');
	});

	test('string returns itself if less than/equal to the max length', () => {
		expect(truncateString('testing', 8)).toBe('testing');
	});
});

describe('truncateStringMiddle()', () => {
	test('string returns itself if less than or equal to max length', () => {
		expect(truncateStringMiddle('Oganesson', 9)).toBe('Oganesson');
	});
	test('string correctly truncates within the middle', () => {
		expect(truncateStringMiddle('Oganesson', 8)).toBe('Ogan…son');
	});
});

describe('getNGrams()', () => {
	test('create a bigram out of a sequence of numbers', () => {
		expect(getNGrams<number>([1, 2, 3, 4, 5, 6, 7, 8, 9], 2)).toStrictEqual(
			[[1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [6, 7], [7, 8], [8, 9]],
		);
	});

	test('create a trigram out of an English sentence', () => {
		expect(getNGrams<string>('the fox jumped over the fence'.split(' '), 3)).toStrictEqual(
			[['the', 'fox', 'jumped'], ['fox', 'jumped', 'over'], ['jumped', 'over', 'the'], ['over', 'the', 'fence']],
		);
	});

	test('create a trigram out of a biological protein sequence', () => {
		expect(getNGrams<string>('Cys-Gly-Leu-Ser-Trp'.split('-'), 3)).toStrictEqual(
			[['Cys', 'Gly', 'Leu'], ['Gly', 'Leu', 'Ser'], ['Leu', 'Ser', 'Trp']],
		);
	});

	test('create a trigram out of codons using a biological DNA sequence', () => {
		expect(getNGrams<string>('GGTATCGTG'.split(''), 3)).toStrictEqual(
			[['G', 'G', 'T'], ['G', 'T', 'A'], ['T', 'A', 'T'], ['A', 'T', 'C'], ['T', 'C', 'G'], ['C', 'G', 'T'], ['G', 'T', 'G']],
		);
	});
});