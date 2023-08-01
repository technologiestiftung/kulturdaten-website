import styled from "@emotion/styled";
import { colors } from "../../common/styleVariables";
import { FC } from "react";

const SubtitleWrapper = styled.div(() => {
	return {
		borderTop: `4px solid ${colors.blueDark}`,
		marginTop: "6rem",
		paddingTop: ".5rem",
		paddingBottom: "2rem",
	};
});

const SubtitleLabel = styled.h3(() => {
	return {
		color: colors.blueDark,
	};
});

interface Props {
	label: string;
}

const SectionSubtitle: FC<Props> = ({ label }) => {
	return (
		<SubtitleWrapper>
			<SubtitleLabel>{label}</SubtitleLabel>
		</SubtitleWrapper>
	);
};

export default SectionSubtitle;
