import styled from "@emotion/styled";
import { FC } from "react";
import { colors, fontWeights, lineHeights, mediaQueries, spacings } from "../../common/styleVariables";
import FoldSvg from "./FoldSvg";

type BackgroundColor = string;

const HeaderWrapper = styled.div(() => {
	return {
		display: "flex",
		gap: spacings.get(5),
	};
});

const BannerBackdrop = styled.div<{ backgroundColor: BackgroundColor }>(({ backgroundColor }) => {
	return {
		flex: "1 1 50%",
		position: "relative",
		backgroundColor,
	};
});

const Fold = styled.div({
	width: "38px",
	position: "absolute",
	bottom: 0,
	right: 0,
	background: colors.grayLight,
});

const Title = styled.div(() => {
	return {
		display: "flex",
		position: "relative",
		justifyContent: "center",
		alignItems: "center",
		minHeight: "100%",
		padding: `${spacings.get(10)}px ${spacings.get(5)}px`,
		border: `4px solid ${colors.blueDark}`,
		color: colors.blueDark,
		fontSize: `clamp(2.0rem, 8vw, 3.5rem)`,
		fontWeight: fontWeights.medium,
		lineHeight: lineHeights.headline,
	};
});

const SectionImage = styled.div<{ headerImage: string }>(({ headerImage }) => {
	return {
		display: "none",
		flex: "0 1 50%",
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
	headingLevel: "h1" | "h2";
	backgroundColor: BackgroundColor;
	headerImage: string;
}

const SectionTitle: FC<SectionTitleProps> = ({ label, headingLevel, backgroundColor, headerImage }) => {
	return (
		<HeaderWrapper>
			<BannerBackdrop backgroundColor={backgroundColor}>
				<Title as={headingLevel}>{label}</Title>
				<Fold>
					<FoldSvg />
				</Fold>
			</BannerBackdrop>
			<SectionImage headerImage={headerImage} />
		</HeaderWrapper>
	);
};

export default SectionTitle;
