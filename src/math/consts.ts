export const PHI = 1.618033988749895;
export const TAU: number = Math.PI * 2;

/**
 * Minimum and maximum values of signed integers
 * @see https://en.wikipedia.org/wiki/Integer_(computer_science)#Common_integral_data_types
 */

/** minimum value of a signed 8-bit (1 byte) integer */
export const I8_MIN = -128;
/** maximum value of a signed 8-bit (1 byte) integer */
export const I8_MAX = 127;

/** minimum value of a signed 16-bit (2 bytes) integer */
export const I16_MIN = -32_768;
/** maximum value of a signed 16-bit (2 bytes) integer */
export const I16_MAX = 32_767;

/** minimum value of a signed 32-bit (4 bytes) integer */
export const I32_MIN = -2_147_483_648;
/** minimum value of a signed 32-bit (4 bytes) integer */
export const I32_MAX = 2_147_483_647;

/**
 * minimum and maximum values of unsigned integers
 */

/** minimum value of an unsigned 8-bit (1 byte) integer */
export const U8_MIN = 0;
/** maximum value of an unsigned 8-bit (1 byte) integer */
export const U8_MAX = 255;

/** minimum value of a signed 16-bit (2 bytes) integer */
export const U16_MIN = 0;
/** maximum value of a signed 16-bit (2 bytes) integer */
export const U16_MAX = 65_535;

/** minimum value of an unsigned 32-bit (4 bytes) integer */
export const U32_MIN = 0;
/** minimum value of an unsigned 32-bit (4 bytes) integer */
export const U32_MAX = 4_294_967_295;

/**
 * Minimum and maximum values of floating-point numbers
 */

/** minimum value of a 32-bit floating-point number (IEEE 754 binary32) */
export const F32_MIN = -3.4E38;
/** maximum value of a 32-bit floating-point number (IEEE 754 binary32) */
export const F32_MAX = 3.4E38;

/**
 * @see https://rwaldron.github.io/proposal-math-extensions/#sec-math.rad_to_deg
 */
export const RAD_PER_DEG = 57.29577951308232;

/**
 * @see https://rwaldron.github.io/proposal-math-extensions/#sec-math.deg_to_rad
 */
export const DEG_PER_RAD = 0.0174532925199432;
