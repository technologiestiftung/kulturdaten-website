import styled from "@emotion/styled";
import { colors, spacings } from "../../common/styleVariables";
import { textStyles } from "../Text";

/**
 * UI component to render HTML-style content with some default styles.
 */
const Reader = styled.div({
	backgroundColor: colors.white,
	padding: `0 ${spacings.horizontalPagePadding}`,
	...textStyles,
	"h2, h3, h4": {
		margin: `${spacings.get(4)}px 0 ${spacings.get(1)}px 0`,
	},
	p: {
		margin: `0 0 ${spacings.get(2)}px 0`,
		"&:last-of-type": {
			margin: 0,
		},
	},
	ul: {
		margin: `0 0 ${spacings.get(2)}px 0`,
	},
});

export default Reader;
