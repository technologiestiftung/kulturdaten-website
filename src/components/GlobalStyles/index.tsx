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
		whiteSpace: "pre-line",
	},
	h2: {
		fontSize: "1.6rem",
		fontWeight: 800,
	},
	h3: {
		fontSize: "1.2rem",
		fontWeight: 600,
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
