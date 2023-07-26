import styled from "@emotion/styled";
import { colors, spacings } from "../../../common/styleVariables";

type BackgroundColor = string;

type Props = {
	backgroundColor: BackgroundColor;
};

const Section = styled.section<Props>(({ backgroundColor }) => ({
	backgroundColor,
	borderTop: `5px solid ${colors.blueDark}`,
	padding: `clamp(${spacings.get(2)}px, 5vw, ${spacings.get(10)}px)`,
}));

export default Section;
