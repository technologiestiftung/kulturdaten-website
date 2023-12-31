import { CSSObject, Global } from "@emotion/react";
import { colors, fontFamilies, fontSizes, fontWeights, headerHeight, lineHeights } from "../../common/styleVariables";
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
	p: {
		overflowWrap: "break-word",
		whiteSpace: "pre-line",
	},
	"strong, b": {
		fontWeight: fontWeights.medium,
	},
	a: {
		color: colors.blueDark,
		textDecoration: "underline",
		"&:hover": {
			textDecoration: "none",
		},
	},
	html: {
		scrollBehavior: "smooth",
		scrollPaddingTop: headerHeight,
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
