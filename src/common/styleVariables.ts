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
	heroHeadline: 1.25,
	single: 1.0,
};

export const colors = {
	black: "#3b3b3a",
	blueDark: "#1e3791",
	blueDarkHover: "#152666",
	green: "#8fff8f",
	magenta: "#ff8fff",
	turquoise: "#8fffff",
	grayLight: "#fafafa",
	white: "#ffffff",
};

const getSpacing = (factor: number) => {
	const SPACING_UNIT = 5;
	return factor * SPACING_UNIT;
};

export const spacings = {
	get: (factor: number) => `${getSpacing(factor)}px`,
	getNumber: (factor: number) => getSpacing(factor),
	horizontalPagePadding: `clamp(${getSpacing(2)}px, 5vw, ${getSpacing(11)}px)`,
};

export const breakpoints = {
	s: 580,
	m: 800,
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
	default: "3px",
	medium: "5px",
};

export const borderRadiuses = {
	small: "2px",
	medium: "4px",
	round: "50%",
};

export const timings = {
	short: "100ms",
	medium: "250ms",
};

export const zIndexes = {
	header: 100,
};
