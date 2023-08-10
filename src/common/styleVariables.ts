export const fontFamilies = {
	default: "'Inter', sans-serif",
};

export const fontSizes = {
	small: "0.8rem",
	default: "16px",
	medium: "1.2rem",
	large: "1.6rem",
	extraLarge: "2.0rem",
};

export const fontWeights = {
	light: 300,
	default: 400,
	medium: 600,
	bold: 800,
};

export const lineHeights = {
	default: 1.6,
	headline: 1.4,
	buttons: 1.3,
	single: 1.0,
};

export const colors = {
	black: "#3b3b3a",
	blueDark: "#1e3791",
	yellow: "#f1ff54",
	green: "#beffa9",
	turquoise: "#a0faf2",
	grayLight: "#fafafa",
	white: "#ffffff",
};

const spacingUnit = 5;

export const spacings = {
	get: (factor: number) => factor * spacingUnit,
	horizontalPagePadding: `clamp(${2 * spacingUnit}px, 5vw, ${10 * spacingUnit}px)`,
};

export const breakpoints = {
	s: 580,
	m: 900,
	l: 1024,
};

export const mediaQueries = {
	s: `@media (min-width: ${breakpoints.s}px)`,
	m: `@media (min-width: ${breakpoints.m}px)`,
};

export const widths = {
	maxContentWidth: `${breakpoints.m}px`,
};

export const headerHeight = "4rem";

export const borderWidths = {
	default: 3,
};

export const borderRadiuses = {
	medium: 10,
	round: "50%",
};

export const timings = {
	short: "100ms",
	medium: "250ms",
};

export const zIndexes = {
	header: 100,
};
