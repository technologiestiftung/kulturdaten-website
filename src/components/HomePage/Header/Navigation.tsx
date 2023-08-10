import styled from "@emotion/styled";
import { AnchorLinks } from "..";
import { mediaQueries, colors, fontWeights, fontSizes, timings } from "../../../common/styleVariables";
import { useTranslations } from "next-intl";

const NavigationWrapper = styled.nav({
	position: "absolute",
	width: "100%",
	maxWidth: "500px",
	right: "2rem",
	top: "2rem",
	[mediaQueries.m]: {
		position: "static",
	},
});

const AnchorLinkList = styled.ul({
	display: "flex",
	flexDirection: "column",
	justifyContent: "space-between",
	alignItems: "flex-end",
	width: "100%",
	gap: "1.6rem",
	[mediaQueries.m]: {
		width: "100%",
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
	activeAnchorLink?: AnchorLinks | null;
	closeBurger?: () => void;
}

export default function Navigation({ activeAnchorLink, closeBurger }: Props) {
	const t = useTranslations("Home.header");
	return (
		<NavigationWrapper>
			<AnchorLinkList>
				<AnchorLinkItem onClick={closeBurger}>
					<AnchorLink
						active={activeAnchorLink === AnchorLinks.INTERESTEDSECTION}
						href={`#${AnchorLinks.INTERESTEDSECTION}`}
					>
						{t("link-interested")}
					</AnchorLink>
				</AnchorLinkItem>
				<AnchorLinkItem onClick={closeBurger}>
					<AnchorLink active={activeAnchorLink === AnchorLinks.ARTISTSECTION} href={`#${AnchorLinks.ARTISTSECTION}`}>
						{t("link-artists")}
					</AnchorLink>
				</AnchorLinkItem>
				<AnchorLinkItem onClick={closeBurger}>
					<AnchorLink active={activeAnchorLink === AnchorLinks.DATASECTION} href={`#${AnchorLinks.DATASECTION}`}>
						{t("link-data")}
					</AnchorLink>
				</AnchorLinkItem>
			</AnchorLinkList>
		</NavigationWrapper>
	);
}
