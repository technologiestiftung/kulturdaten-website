import styled from "@emotion/styled";
import { colors, spacings } from "../../../common/styleVariables";

type BackgroundColor = keyof typeof colors;

type Props = {
	backgroundColor?: BackgroundColor;
};

const Section = styled.section<Props>(({ backgroundColor = "grayLight" }) => ({
	backgroundColor: colors[backgroundColor],
	padding: `${spacings.get(10)}px clamp(${spacings.get(2)}px, 5vw, ${spacings.get(10)}px)`,
}));

export default Section;
