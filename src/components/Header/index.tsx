import styled from "@emotion/styled";
import {
	borderRadiuses,
	borderWidths,
	breakpoints,
	colors,
	fontSizes,
	fontWeights,
	headerHeight,
	mediaQueries,
	spacings,
	zIndexes,
} from "../../common/styleVariables";
import Link from "next/link";
import { useState } from "react";
import { AnchorLinks } from "../../common/types";
import Burger from "./Burger";
import Navigation from "./Navigation";
import NavigationOverlay from "./NavigationOverlay";

const HeaderContainer = styled.header({
	position: "fixed",
	left: 0,
	width: "100vw",
	height: headerHeight,
	zIndex: zIndexes.header,
	color: colors.blueDark,
	borderBottom: `${borderWidths.default}px solid ${colors.blueDark}`,
	backgroundColor: colors.white,
});

const ContentWrapper = styled.div({
	maxWidth: breakpoints.l,
	margin: "0 auto",
	display: "flex",
	alignItems: "center",
	justifyContent: "space-between",
	padding: `0 ${spacings.horizontalPagePadding}`,
	height: "100%",
	[mediaQueries.s]: {
		flexWrap: "wrap",
		alignItems: "center",
	},
});

const LogoLink = styled(Link)({
	display: "flex",
	alignItems: "center",
	gap: `0 ${spacings.get(3)}px`,
	color: colors.blueDark,
	textDecoration: "none",
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

export default function Header({ activeAnchorLink }: Props) {
	const [navigationOpen, setNavigationOpen] = useState(false);
	const toggleOpen = () => setNavigationOpen(!navigationOpen);
	return (
		<HeaderContainer>
			<ContentWrapper>
				<LogoLink href="/">
					<Logo />
					<Title aria-label="Kulturdaten Berlin">
						KULTURDATEN
						<LightTitle>BERLIN</LightTitle>
					</Title>
				</LogoLink>
				<Desktop>
					<Navigation activeAnchorLink={activeAnchorLink} />
				</Desktop>
				<Mobile>
					<Burger open={navigationOpen} onToggle={toggleOpen} />
					{navigationOpen && <NavigationOverlay onLinkClick={() => setNavigationOpen(false)} />}
				</Mobile>
			</ContentWrapper>
		</HeaderContainer>
	);
}
