import { CSSObject, Global } from "@emotion/react";
import { colors, fontFamilies, fontSizes, lineHeights } from "../../common/styleVariables";
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
	},
	html: {
		fontSize: fontSizes.default,
		fontFamily: fontFamilies.default,
		lineHeight: lineHeights.default,
		color: colors.black,
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
