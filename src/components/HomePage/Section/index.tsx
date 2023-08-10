import styled from "@emotion/styled";
import { colors, spacings } from "../../../common/styleVariables";

const Section = styled.section({
	backgroundColor: colors.grayLight,
	padding: `${spacings.get(10)}px ${spacings.horizontalPagePadding}`,
});

export default Section;
