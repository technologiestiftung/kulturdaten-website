import styled from "@emotion/styled";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import {
	borderWidths,
	breakpoints,
	colors,
	headerHeight,
	mediaQueries,
	spacings,
	zIndexes,
} from "../../common/styleVariables";
import { AnchorLinks } from "../../common/types";
import Burger from "./Burger";
import LanguageSwitch from "./LanguageSwitch";
import Logo from "./Logo";
import Navigation from "./Navigation";
import NavigationOverlay from "./NavigationOverlay";

const HeaderContainer = styled.header({
	position: "fixed",
	left: 0,
	width: "100vw",
	height: headerHeight,
	zIndex: zIndexes.header,
	color: colors.blueDark,
	borderBottom: `${borderWidths.default} solid ${colors.blueDark}`,
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

interface Props {
	activeAnchorLink: AnchorLinks | null;
}

const Mobile = styled.div({
	flex: "1 1 auto",
	display: "flex",
	justifyContent: "space-between",
	alignItems: "center",
	[mediaQueries.m]: {
		display: "none",
	},
});

const Desktop = styled.div({
	display: "none",
	[mediaQueries.m]: {
		flex: "1 1 auto",
		display: "flex",
		justifyContent: "space-between",
		alignItems: "center",
	},
});

export default function Header({ activeAnchorLink }: Props) {
	const navId = "navigation";

	const [navigationOpen, setNavigationOpen] = useState(false);
	const toggleOpen = () => setNavigationOpen(!navigationOpen);

	const router = useRouter();
	// Close the navigation overlay when the language is changed.
	useEffect(() => {
		const handleRouteChangeComplete = () => {
			setNavigationOpen(false);
		};
		router.events.on("routeChangeComplete", handleRouteChangeComplete);
		return () => {
			router.events.off("routeChangeComplete", handleRouteChangeComplete);
		};
	}, [router.events]);
	return (
		<HeaderContainer>
			<ContentWrapper>
				<Desktop>
					<Logo />
					<Navigation activeAnchorLink={activeAnchorLink} />
					<LanguageSwitch />
				</Desktop>
				<Mobile>
					<Logo />
					<Burger open={navigationOpen} onToggle={toggleOpen} navId={navId} />
					{navigationOpen && <NavigationOverlay navId={navId} onLinkClick={() => setNavigationOpen(false)} />}
				</Mobile>
			</ContentWrapper>
		</HeaderContainer>
	);
}

export function HeaderSimple() {
	return (
		<HeaderContainer>
			<ContentWrapper>
				<Logo />
			</ContentWrapper>
		</HeaderContainer>
	);
}
