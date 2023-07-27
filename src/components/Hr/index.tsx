import styled from "@emotion/styled";
import { colors } from "../../common/styleVariables";

const StyledHr = styled.hr({
	border: `none`,
	backgroundColor: colors.blueDark,
});

type Props = {
	height?: number;
};

export default function Hr({ height = 2 }: Props) {
	return <StyledHr style={{ height }} />;
}
