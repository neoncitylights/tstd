/**
 * Generic error to throw when a value passed to an argument does not
 * match the required conditions/constraints
 */
export class ArgumentError extends Error {}

/**
 * Generic exception to throw for when a given input fails to match
 * a structured grammar of a parser
 */
export class ParseError extends ArgumentError {}

/**
 * Generic exception to throw for when a given input will knowingly
 * cause a division-by-zero error
 */
export class DivideByZeroError extends ArgumentError {}
