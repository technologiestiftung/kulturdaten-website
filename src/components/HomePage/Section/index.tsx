import styled from "@emotion/styled";
import { colors, spacings } from "../../../common/styleVariables";

const Section = styled.section(() => ({
	borderTop: `5px solid ${colors.blueDark}`,
	padding: `clamp(${spacings.get(2)}px, 5vw, ${spacings.get(10)}px)`,
}));

export default Section;
