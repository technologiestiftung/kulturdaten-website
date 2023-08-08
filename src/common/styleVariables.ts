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
