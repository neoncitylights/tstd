export type SideTwo = { side2: number; };
export type SideThree = { side3: number; };
export type AngleOne = { angle1: number; };
export type AngleTwo = { angle2: number; };
export type AngleThree = { angle3: number; };
export type OneAngleTwoSides = AngleThree & SideTwo & SideThree;
export type OneSideTwoAngles = SideThree & AngleTwo & AngleThree;
export type ThreeAngles = AngleOne & AngleTwo & AngleThree;
