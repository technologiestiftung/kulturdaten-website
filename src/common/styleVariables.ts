export const fontFamilies = {
	default: "'Inter', sans-serif",
};

export const fontSizes = {
	small: "15px",
	default: "16px",
	medium: "1.2rem",
	large: "1.6rem",
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
	yellow: "#f1ff54",
	green: "#cffdba",
	turquoise: "#a0faf2",
	grayLight: "#f9f9f9",
	white: "#ffffff",
};

export const spacings = {
	get: (factor = 1.0) => factor * 5,
};

export const breakpoints: { [key: string]: number } = {
	s: 580,
	m: 768,
};

export const mediaQueries = {
	s: `@media (min-width: ${breakpoints.s}px)`,
	m: `@media (min-width: ${breakpoints.m}px)`,
};

export const widths = {
	maxContentWidth: `${breakpoints.xl}px`,
};

export const borderWidths = {
	default: 3,
};

export const borderRadiuses = {
	big: 20,
};

export const timings = {
	short: "100ms",
	medium: "250ms",
};
