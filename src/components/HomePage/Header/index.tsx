import styled from "@emotion/styled";
import {
	borderRadiuses,
	borderWidths,
	breakpoints,
	colors,
	fontSizes,
	fontWeights,
	mediaQueries,
	timings,
	zIndexes,
} from "../../../common/styleVariables";
import { AnchorLinks } from "..";
import { useTranslations } from "next-intl";

const HeaderContainer = styled.header({
	position: "fixed",
	left: 0,
	width: "100vw",
	zIndex: zIndexes.header,
	color: colors.blueDark,
	borderBottom: `${borderWidths.default}px solid ${colors.blueDark}`,
	backgroundColor: colors.white,
});

const Navigation = styled.nav({
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

const AnchorLinkWrapper = styled.ul({
	display: "flex",
	flexDirection: "column",
	flexWrap: "wrap",
	justifyContent: "space-between",
	alignItems: "flex-end",
	width: "100%",
	maxWidth: "500px",
	gap: "1.6rem",
	[mediaQueries.s]: {
		flexDirection: "row",
	},
});

const AnchorLinkItem = styled.li({
	listStyle: "none",
});

const AnchorLink = styled.a<{ active: boolean }>((props) => ({
	color: colors.blueDark,
	fontWeight: fontWeights.medium,
	textDecoration: "none",
	borderBottom: props.active ? `2px solid ${colors.blueDark}` : "none",
	fontSize: fontSizes.small,
	transition: `all ${timings.short} ease-in-out`,
	"&:hover": {
		borderBottom: `2px solid ${colors.blueDark}`,
	},
}));

interface Props {
	activeAnchorLink: AnchorLinks | null;
}

const Header = ({ activeAnchorLink }: Props) => {
	const t = useTranslations("Home.header");
	return (
		<HeaderContainer>
			<Navigation>
				<LogoWrapper>
					<Logo />
					<Title>
						KULTURDATEN
						<LightTitle>BERLIN</LightTitle>
					</Title>
				</LogoWrapper>
				<AnchorLinkWrapper>
					<AnchorLinkItem>
						<AnchorLink
							active={activeAnchorLink === AnchorLinks.INTERESTEDSECTION}
							href={`#${AnchorLinks.INTERESTEDSECTION}`}
						>
							{t("link-interested")}
						</AnchorLink>
					</AnchorLinkItem>
					<AnchorLinkItem>
						<AnchorLink active={activeAnchorLink === AnchorLinks.ARTISTSECTION} href={`#${AnchorLinks.ARTISTSECTION}`}>
							{t("link-artists")}
						</AnchorLink>
					</AnchorLinkItem>
					<AnchorLinkItem>
						<AnchorLink active={activeAnchorLink === AnchorLinks.DATASECTION} href={`#${AnchorLinks.DATASECTION}`}>
							{t("link-data")}
						</AnchorLink>
					</AnchorLinkItem>
				</AnchorLinkWrapper>
			</Navigation>
		</HeaderContainer>
	);
};

export default Header;
