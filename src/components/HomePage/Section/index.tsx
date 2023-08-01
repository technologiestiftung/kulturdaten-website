import styled from "@emotion/styled";
import { breakpoints, colors, spacings } from "../../../common/styleVariables";

const Section = styled.section(() => ({
	borderTop: `5px solid ${colors.blueDark}`,
	padding: `clamp(${spacings.get(2)}px, 5vw, ${spacings.get(10)}px)`,
	maxWidth: `${breakpoints.m}px`,
	margin: "0 auto",
}));

export default Section;
