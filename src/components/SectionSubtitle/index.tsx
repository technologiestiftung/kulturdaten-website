import styled from "@emotion/styled";
import { colors, spacings } from "../../common/styleVariables";
import Text from "../Text";

const SubtitleWrapper = styled.div({
	borderTop: `4px solid ${colors.blueDark}`,
	marginTop: spacings.get(12),
	padding: `${spacings.get(2)} 0 ${spacings.get(8)}`,
});

interface Props {
	label: string;
}

export default function SectionSubtitle({ label }: Props) {
	return (
		<SubtitleWrapper>
			<Text type="h3" as="h2" color="blueDark">
				{label}
			</Text>
		</SubtitleWrapper>
	);
}
