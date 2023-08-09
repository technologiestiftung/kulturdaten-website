import styled from "@emotion/styled";
import { FC } from "react";
import { colors, mediaQueries } from "../../common/styleVariables";
import Text from "../Text";

type BackgroundColor = string;
const backgroundImageWidth = "600px";

const HeaderWrapper = styled.div(() => {
	return {
		display: "flex",
		gap: "1.6rem",
	};
});

const BannerBackdrop = styled.div<{ backgroundColor: BackgroundColor }>(({ backgroundColor }) => {
	return {
		flex: "1 1 50%",
		position: "relative",
		backgroundColor,
		maxWidth: backgroundImageWidth,
	};
});

const Fold = styled.div(() => {
	const foldWidth = "36px";
	const foldHeight = "46px";
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
		minHeight: "100%",
		padding: `20px 40px 20px 20px`,
		backgroundImage: `url("/images/title-frame-blue-corner.svg")`,
		backgroundSize: backgroundImageWidth,
		backgroundRepeat: "no-repeat",
		backgroundPosition: "bottom right",
		borderTop: `4px solid ${colors.blueDark}`,
		borderLeft: `4px solid ${colors.blueDark}`,
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
	backgroundColor: BackgroundColor;
	headerImage: string;
}
const SectionTitle: FC<SectionTitleProps> = ({ label, backgroundColor, headerImage }) => {
	return (
		<HeaderWrapper>
			<BannerBackdrop backgroundColor={backgroundColor}>
				<Fold />
				<TitleWrapper>
					<Text type="h1" color="blueDark">
						{label}
					</Text>
				</TitleWrapper>
			</BannerBackdrop>
			<SectionImage headerImage={headerImage} />
		</HeaderWrapper>
	);
};

export default SectionTitle;
