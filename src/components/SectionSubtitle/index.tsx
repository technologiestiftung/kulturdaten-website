import styled from "@emotion/styled";
import { FC } from "react";
import { colors } from "../../common/styleVariables";
import Text from "../Text";

const SubtitleWrapper = styled.div({
	borderTop: `4px solid ${colors.blueDark}`,
	marginTop: "6rem",
	paddingTop: ".5rem",
	paddingBottom: "2rem",
});

interface Props {
	label: string;
}

const SectionSubtitle: FC<Props> = ({ label }) => {
	return (
		<SubtitleWrapper>
			<Text type="h3" as="h2" color="blueDark">
				{label}
			</Text>
		</SubtitleWrapper>
	);
};

export default SectionSubtitle;
