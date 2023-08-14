import styled from "@emotion/styled";
import { FC } from "react";
import { colors, spacings } from "../../common/styleVariables";
import Text from "../Text";

const SubtitleWrapper = styled.div({
	borderTop: `4px solid ${colors.blueDark}`,
	marginTop: spacings.get(12),
	padding: `${spacings.get(2)}px 0 ${spacings.get(8)}px`,
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
