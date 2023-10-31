import { expect, test } from 'vitest';

import {ArgumentError, DivideByZeroError, ParseError} from '../src/exceptions';

test('ArgumentError throws correctly', () => {
	expect(() => { throw new ArgumentError(); }).toThrow(ArgumentError);
});

test('RangeError throws correctly', () => {
	expect(() => { throw new RangeError(); }).toThrow(RangeError);
});

test('ParseError throws correctly', () => {
	expect(() => { throw new ParseError(); }).toThrow(ParseError);
});

test('DivideByZero throws correctly', () => {
	expect(() => { throw new DivideByZeroError(); }).toThrow(DivideByZeroError);
});
