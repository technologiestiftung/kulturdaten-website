// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styled from "@emotion/styled";
import { FC } from "react";
import { colors, mqMinWidth } from "../../common/styleVariables";

type BackgroundColor = string;
const backgroundImageWidth = "500px";

const HeaderWrapper = styled.div(() => {
	return {
		display: "flex",
		gap: "1.6rem",
		justifyContent: "center",
	};
});

const BannerBackdrop = styled.div<{ backgroundColor: BackgroundColor }>(({ backgroundColor = "red" }) => {
	return {
		backgroundColor,
		maxWidth: backgroundImageWidth,
		display: "flex",
		justifyContent: "flex-end",
		alignItems: "flex-end",
	};
});

const Fold = styled.div(() => {
	const foldWidth = "30px";
	const foldHeight = "36px";
	return {
		position: "absolute",
		background: colors.white,
		width: foldWidth,
		height: foldHeight,
	};
});

const TitleWrapper = styled.div(() => {
	return {
		display: "flex",
		zIndex: 1000,
		justifyContent: "center",
		alignItems: "center",
		maxWidth: backgroundImageWidth,
		minHeight: "13rem",
		margin: "0 auto",
		padding: "30px",
		backgroundImage: `url("/images/title-frame-blue-corner.svg")`,
		backgroundSize: backgroundImageWidth,
		backgroundRepeat: "no-repeat",
		backgroundPosition: "bottom right",
		borderTop: `4px solid ${colors.blueDark}`,
		borderLeft: `4px solid ${colors.blueDark}`,
	};
});

const Label = styled.h2(() => ({
	color: colors.blueDark,
	textAlign: "center",
}));

const SectionImage = styled.div<{ headerImage: string }>(({ headerImage }) => {
	const imageWidth = "10rem";
	return {
		display: "none",
		minHeight: "13rem",
		minWidth: imageWidth,
		backgroundImage: `url(${headerImage})`,
		backgroundSize: "cover",
		backgroundRepeat: "no-repeat",
		backgroundPosition: "center center",
		border: `4px solid ${colors.blueDark}`,
		[mqMinWidth.s]: {
			display: "block",
		},
	};
});

interface SectionTitleProps {
	label: string;
	backgroundColor: BackgroundColor;
	headerImage: string;
}
const SectionTitle: FC<SectionTitleProps> = ({ label, backgroundColor, headerImage }) => {
	return (
		<HeaderWrapper>
			<BannerBackdrop backgroundColor={backgroundColor}>
				<Fold />
				<TitleWrapper>
					<Label>{label}</Label>
				</TitleWrapper>
			</BannerBackdrop>
			<SectionImage headerImage={headerImage} />
		</HeaderWrapper>
	);
};

export default SectionTitle;
