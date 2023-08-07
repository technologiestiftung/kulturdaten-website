import styled from "@emotion/styled";
import { FC } from "react";
import { colors, fontSizes, lineHeights, mediaQueries } from "../../common/styleVariables";

type BackgroundColor = string;
const backgroundImageWidth = "500px";

const HeaderWrapper = styled.div(() => {
	return {
		display: "flex",
		gap: "1.6rem",
	};
});

const BannerBackdrop = styled.div<{ backgroundColor: BackgroundColor }>(({ backgroundColor }) => {
	return {
		position: "relative",
		backgroundColor: `${backgroundColor}80`,
		maxWidth: backgroundImageWidth,
		minHeight: "100%",
	};
});

const Fold = styled.div(() => {
	const foldWidth = "30px";
	const foldHeight = "36px";
	return {
		position: "absolute",
		bottom: 0,
		right: 0,
		background: colors.white,
		width: foldWidth,
		height: foldHeight,
	};
});

const TitleWrapper = styled.div(() => {
	return {
		display: "flex",
		position: "relative",
		justifyContent: "center",
		alignItems: "center",
		maxWidth: backgroundImageWidth,
		minHeight: "100%",
		margin: "0 auto",
		padding: `20px 36px 20px 20px`,
		backgroundImage: `url("/images/title-frame-blue-corner.svg")`,
		backgroundSize: backgroundImageWidth,
		backgroundRepeat: "no-repeat",
		backgroundPosition: "bottom right",
		borderTop: `4px solid ${colors.blueDark}`,
		borderLeft: `4px solid ${colors.blueDark}`,
	};
});

const Label = styled.h2(() => ({
	fontSize: fontSizes.extraLarge,
	lineHeight: lineHeights.headline,
	color: colors.blueDark,
}));

const SectionImage = styled.div<{ headerImage: string }>(({ headerImage }) => {
	return {
		display: "none",
		flex: "0 0 50%",
		aspectRatio: "6 / 8",
		backgroundImage: `url(${headerImage})`,
		backgroundSize: "cover",
		backgroundRepeat: "no-repeat",
		backgroundPosition: "center center",
		border: `4px solid ${colors.blueDark}`,
		[mediaQueries.s]: {
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
