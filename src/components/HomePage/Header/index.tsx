import styled from "@emotion/styled";
import {
	borderRadiuses,
	borderWidths,
	breakpoints,
	colors,
	fontSizes,
	fontWeights,
	mediaQueries,
	zIndexes,
} from "../../../common/styleVariables";
import { AnchorLinks } from "..";
import Navigation from "./Navigation";
import Burger from "./Burger";

const HeaderContainer = styled.header({
	position: "fixed",
	left: 0,
	width: "100vw",
	zIndex: zIndexes.header,
	color: colors.blueDark,
	borderBottom: `${borderWidths.default}px solid ${colors.blueDark}`,
	backgroundColor: colors.white,
});

const ContentWrapper = styled.div({
	maxWidth: breakpoints.l,
	margin: "0 auto",
	display: "flex",
	gap: "0.8rem",
	alignItems: "center",
	justifyContent: "space-between",
	padding: "0 1.4rem",
	height: "100%",
	[mediaQueries.s]: {
		flexWrap: "wrap",
		alignItems: "center",
	},
});

const LogoWrapper = styled.div({
	display: "flex",
	alignItems: "center",
	gap: ".8rem",
});

const Logo = styled.div({
	width: "2rem",
	height: "2rem",
	backgroundColor: colors.blueDark,
	borderRadius: borderRadiuses.round,
});

const Title = styled.span({
	fontWeight: fontWeights.medium,
	fontSize: fontSizes.small,
});

const LightTitle = styled.span({
	fontWeight: fontWeights.light,
});

interface Props {
	activeAnchorLink: AnchorLinks | null;
}

const Mobile = styled.div({
	[mediaQueries.m]: {
		display: "none",
	},
});

const Desktop = styled.div({
	display: "none",
	[mediaQueries.m]: {
		display: "block",
	},
});

const Header = ({ activeAnchorLink }: Props) => {
	return (
		<HeaderContainer>
			<ContentWrapper>
				<LogoWrapper>
					<Logo />
					<Title>
						KULTURDATEN
						<LightTitle>BERLIN</LightTitle>
					</Title>
				</LogoWrapper>
				<Desktop>
					<Navigation activeAnchorLink={activeAnchorLink} />
				</Desktop>
				<Mobile>
					<Burger />
				</Mobile>
			</ContentWrapper>
		</HeaderContainer>
	);
};

export default Header;
