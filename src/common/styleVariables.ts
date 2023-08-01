export const fontFamilies = {
	default: "'Inter', sans-serif",
};

export const fontSizes = {
	default: "16px",
};

export const fontWeights = {
	default: 400,
	medium: 600,
	bold: 800,
};

export const lineHeights = {
	default: 1.6,
	buttons: 1.3,
};

export const colors = {
	black: "#3b3b3a",
	blueLight: "#a8daf4",
	blueDark: "#1e3791",
	red40: "#f5afa5",
	lind60: "#c3dcb9",
	yellow50: "#f1ff5480",
	grayLight: "#f9f9f9",
	white: "#ffffff",
};

export const spacings = {
	get: (factor = 1.0) => factor * 5,
};

export const breakpoints: { [key: string]: number } = {
	xs: 400,
	s: 580,
	m: 768,
	l: 1044,
	xl: 1280,
};
//TODO: MAKE BREAKPOINTS AN OBJECT WITH KEYS
export const mqMinWidth = {
	xs: `@media (min-width: ${breakpoints.xs}px)`,
	s: `@media (min-width: ${breakpoints.s}px)`,
	m: `@media (min-width: ${breakpoints.m}px)`,
	l: `@media (min-width: ${breakpoints.l}px)`,
	xl: `@media (min-width: ${breakpoints.xl}px)`,
};

export const widths = {
	maxContentWidth: `${breakpoints.xl}px`,
};

export const borderRadiuses = {
	big: 20,
};

export const timings = {
	short: "100ms",
};
