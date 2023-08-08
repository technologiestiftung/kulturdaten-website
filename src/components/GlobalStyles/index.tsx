import { CSSObject, Global } from "@emotion/react";
import { colors, fontFamilies, fontSizes, fontWeights, lineHeights } from "../../common/styleVariables";
import FontFaces from "./FontFaces";

const styles: CSSObject = {
	"*, *::before, *::after": {
		boxSizing: "border-box",
	},
	"*": {
		margin: 0,
	},
	"img, picture, video, canvas, svg": {
		display: "block",
		maxWidth: "100%",
	},
	"input, button, textarea, select": {
		font: "inherit",
	},
	"p, h1, h2, h3, h4, h5, h6": {
		overflowWrap: "break-word",
		whiteSpace: "pre-line",
	},
	a: {
		color: colors.blueDark,
		textDecoration: "underline",
		"&:hover": {
			textDecoration: "none",
		},
	},
	h2: {
		fontSize: fontSizes.large,
		fontWeight: fontWeights.bold,
	},
	h3: {
		fontSize: fontSizes.medium,
		fontWeight: fontWeights.medium,
	},
	html: {
		fontSize: fontSizes.default,
		fontFamily: fontFamilies.default,
		lineHeight: lineHeights.default,
		color: colors.black,
		backgroundColor: colors.white,
	},
};

export default function GlobalStyles() {
	return (
		<>
			<Global styles={styles} />
			<FontFaces />
		</>
	);
}
