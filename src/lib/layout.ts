// Region positions from the screen mockups, as percentages of the 1920×1080 stage.
// Use them as the `style` of a `.at` element inside a Frame.
//
// Everything ends by 88% of the height, so the bottom of the screen stays clear even when
// the browser window is a little taller than what's visible.

const at = (left: number, top: number, width: number, height?: number) =>
	`--l: ${left}%; --t: ${top}%; --w: ${width}%;` + (height ? ` --h: ${height}%;` : '');

/** screeen2.png: copy top right, two boxes side by side, copy bottom left. */
export const T2 = {
	lead: at(43.65, 11.2, 54.06),
	a: at(2.66, 29.17, 37.97, 46),
	b: at(43.65, 29.17, 54.06, 46),
	foot: at(2.66, 78, 37.5)
};

/** screen3.png: copy at the top, a wide box bottom left, a tall box on the right. */
export const T3 = {
	lead: at(23.85, 11, 37.5),
	a: at(6.04, 31, 51.82, 57),
	b: at(66.56, 12.5, 31.15, 66)
};

/** screen4.png: three tall boxes, copy under the middle one. */
export const T4 = {
	a: at(4.06, 30.93, 26.51, 57),
	b: at(35.31, 12.78, 28.13, 61.5),
	c: at(66.56, 12.5, 31.15, 66),
	foot: at(35.31, 77.5, 27.4)
};
