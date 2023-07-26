import styled from "@emotion/styled";
import React, { FC } from "react";
import { colors } from "../../common/styleVariables";

const TitleWrapper = styled.div(() => ({
	position: "relative",
	minHeight: "calc(1/3 * 100vw)",
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
}));

const ImageFrame = styled.img(() => ({
	width: "100%",
}));

const Label = styled.h2(() => ({
	color: colors.blueDark,
	fontSize: "1.6rem",
	position: "absolute",
	padding: "0 20px",
	textAlign: "center",
}));

interface SectionTitleProps {
	label: string;
}
const SectionTitle: FC<SectionTitleProps> = ({ label }) => {
	return (
		<TitleWrapper>
			<ImageFrame src="/images/title-frame-blue.svg" alt="title frame" />
			<Label>{label}</Label>
		</TitleWrapper>
	);
};

export default SectionTitle;
