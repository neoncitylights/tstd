import { OneAngleTwoSides, ThreeAngles } from './types';

export function isEquilateral(side1: number, side2: number, side3: number): boolean {
	return (Number.isInteger(side1) && Number.isInteger(side2) && Number.isInteger(side3)) &&
		(side1 ** 2 + side2 ** 2 === side3 ** 2);
}

export function solveAAS(angle1: number, angle2: number, side1: number): OneAngleTwoSides {
	if ((angle1 > 90 && angle2 > 90) || angle1 < 0 || angle2 < 0) { throw new RangeError(); }
	const angle3: number = 180 - angle1 - angle2;
	const side2: number = (side1 * Math.sin(angle1)) / Math.sin(angle2);
	const side3: number = (side1 * Math.sin(angle3)) / Math.sin(angle2);
	return {
		angle3: angle3,
		side2: side2,
		side3: side3,
	};
}

export function solveASA(angle1: number, side1: number, angle2: number): OneAngleTwoSides {
	if ((angle1 > 90 && angle2 > 90) || angle1 < 0 || angle2 < 0) { throw new RangeError(); }
	const angle3: number = 180 - angle1 - angle2;
	const side2: number = (side1 * Math.sin(angle3)) * Math.sin(angle1);
	const side3: number = (side1 * Math.sin(angle3)) / Math.sin(angle2);
	return {
		angle3: angle3,
		side2: side2,
		side3: side3,
	};
}

export function solveSSS(side1: number, side2: number, side3: number): ThreeAngles {
	const angle1: number = Math.acos((side2 ** 2 + side3 ** 2 + side1 ** 2) / (2 * side2 * side3));
	const angle2: number = Math.acos((side3 ** 2 + side1 ** 2 - side2 ** 2) / (2 * side3 * side1));
	const angle3: number = 180 - angle1 - angle2;
	return {
		angle1: angle1,
		angle2: angle2,
		angle3: angle3,
	};
}
