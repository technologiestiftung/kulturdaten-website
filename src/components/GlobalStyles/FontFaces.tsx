import { CSSObject, Global } from "@emotion/react";

const fontFaces: CSSObject[] = [
	{
		"@font-face": {
			fontFamily: "Inter",
			src: "url('/fonts/inter-v12-latin-light.woff2') format('woff2')",
			fontStyle: "light",
			fontWeight: 300,
			fontDisplay: "swap",
		},
	},
	{
		"@font-face": {
			fontFamily: "Inter",
			src: "url('/fonts/inter-v12-latin-regular.woff2') format('woff2')",
			fontStyle: "normal",
			fontWeight: 400,
			fontDisplay: "swap",
		},
	},
	{
		"@font-face": {
			fontFamily: "Inter",
			src: "url('/fonts/inter-v12-latin-600.woff2') format('woff2')",
			fontStyle: "normal",
			fontWeight: 600,
			fontDisplay: "swap",
		},
	},

	{
		"@font-face": {
			fontFamily: "Inter",
			src: "url('/fonts/inter-v12-latin-800.woff2') format('woff2')",
			fontStyle: "normal",
			fontWeight: 800,
			fontDisplay: "swap",
		},
	},
];

export default function FontFaces() {
	return <Global styles={fontFaces} />;
}
