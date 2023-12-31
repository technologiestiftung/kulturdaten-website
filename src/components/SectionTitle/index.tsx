import styled from "@emotion/styled";
import {
	borderRadiuses,
	borderWidths,
	colors,
	fontWeights,
	lineHeights,
	mediaQueries,
	spacings,
} from "../../common/styleVariables";
import FoldSvg from "./FoldSvg";

type BackgroundColor = string;

const HeaderWrapper = styled.div(() => {
	return {
		display: "flex",
		gap: spacings.get(5),
	};
});

const BannerBackdrop = styled.div(() => {
	return {
		flex: "1 1 50%",
		position: "relative",
	};
});

const Fold = styled.div({
	width: "38px",
	position: "absolute",
	bottom: 0,
	right: 0,
	background: colors.white,
});

const Title = styled.div<{ backgroundColor: BackgroundColor }>(({ backgroundColor }) => {
	return {
		display: "flex",
		position: "relative",
		justifyContent: "center",
		alignItems: "flex-start",
		minHeight: "100%",
		padding: `${spacings.get(10)} ${spacings.get(5)}`,
		backgroundColor,
		border: `${borderWidths.medium} solid ${colors.blueDark}`,
		borderRadius: borderRadiuses.small,
		color: colors.blueDark,
		fontSize: `clamp(2.0rem, 8vw, 3.5rem)`,
		fontWeight: fontWeights.medium,
		lineHeight: lineHeights.heroHeadline,
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
		backgroundPosition: "center bottom",
		border: `${borderWidths.medium} solid ${colors.blueDark}`,
		borderRadius: borderRadiuses.small,
		[mediaQueries.s]: {
			display: "block",
		},
	};
});

interface Props {
	label: string;
	headingLevel: "h1" | "h2";
	backgroundColor: BackgroundColor;
	headerImage?: string;
}

export default function SectionTitle({ label, headingLevel, backgroundColor, headerImage }: Props) {
	return (
		<HeaderWrapper>
			<BannerBackdrop>
				<Title as={headingLevel} backgroundColor={backgroundColor}>
					{label}
				</Title>
				<Fold>
					<FoldSvg />
				</Fold>
			</BannerBackdrop>
			{headerImage && <SectionImage headerImage={headerImage} />}
		</HeaderWrapper>
	);
}
