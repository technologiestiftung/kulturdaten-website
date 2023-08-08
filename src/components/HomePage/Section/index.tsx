import styled from "@emotion/styled";
import { spacings } from "../../../common/styleVariables";

const Section = styled.section(() => ({
	padding: `clamp(${spacings.get(2)}px, 5vw, ${spacings.get(10)}px)`,
}));

export default Section;
