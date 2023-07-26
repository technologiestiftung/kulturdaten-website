import { CSSObject, Global } from "@emotion/react";

const fontFaces: CSSObject[] = [
	{
		"@font-face": {
			fontFamily: "ClanPro",
			src: `local('ClanPro News'), local('ClanPro-News'), url('/fonts/ClanWebPro-News.woff') format('woff')`,
			fontStyle: "normal",
			fontWeight: 400,
			fontDisplay: "swap",
		},
	},
	{
		"@font-face": {
			fontFamily: "ClanPro",
			src: `local('ClanPro Medium'), local('ClanPro-Medium'), url('/fonts/ClanWebPro-Medium.woff') format('woff')`,
			fontStyle: "normal",
			fontWeight: 600,
			fontDisplay: "swap",
		},
	},

	{
		"@font-face": {
			fontFamily: "ClanPro",
			src: `local('ClanPro Bold'), local('ClanPro-Bold'), url('/fonts/ClanWebPro-Bold.woff') format('woff')`,
			fontStyle: "normal",
			fontWeight: 800,
			fontDisplay: "swap",
		},
	},
];

export default function FontFaces() {
	return <Global styles={fontFaces} />;
}
