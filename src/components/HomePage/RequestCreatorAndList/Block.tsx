import styled from "@emotion/styled";
import { borderRadiuses, borderWidths, colors, spacings } from "../../../common/styleVariables";

type Props = {
	padding?: string | number;
};

const Block = styled.div<Props>(({ padding = spacings.get(5) }) => ({
	padding,
	color: colors.blueDark,
	backgroundColor: colors.turquoise,
	border: `${borderWidths.default}px solid ${colors.blueDark}`,
	borderRadius: borderRadiuses.big,
}));

export default Block;
