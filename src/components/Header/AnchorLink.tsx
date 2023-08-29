import styled from "@emotion/styled";
import { colors, fontSizes, fontWeights, timings } from "../../common/styleVariables";

interface Props {
	isActive: boolean;
}

const AnchorLink = styled("a", {
	shouldForwardProp: (prop) => prop !== "isActive",
})<Props>((props) => ({
	color: colors.blueDark,
	fontSize: fontSizes.default,
	fontWeight: fontWeights.default,
	textDecoration: "none",
	borderBottom: `2px solid ${props.isActive ? colors.blueDark : "transparent"}`,
	transition: `all ${timings.short} ease-in-out`,
	"&:hover": {
		borderBottom: `2px solid ${colors.blueDark}`,
	},
}));

export default AnchorLink;
