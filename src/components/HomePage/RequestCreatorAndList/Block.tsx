import styled from "@emotion/styled";
import { borderRadiuses, borderWidths, colors, spacings } from "../../../common/styleVariables";

const Block = styled.div({
	padding: spacings.get(5),
	backgroundColor: colors.turquoise,
	border: `${borderWidths.default}px solid ${colors.blueDark}`,
	borderRadius: borderRadiuses.big,
});

export default Block;
