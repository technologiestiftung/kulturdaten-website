import styled from "@emotion/styled";
import { borderWidths, colors } from "../../common/styleVariables";

const StyledHr = styled.hr({
	border: `none`,
	backgroundColor: colors.blueDark,
});

interface Props {
	height?: string | number;
}

export default function Hr({ height = borderWidths.default }: Props) {
	return <StyledHr style={{ height }} />;
}
