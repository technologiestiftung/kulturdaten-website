import styled from "@emotion/styled";
import { AnchorLinks } from "..";
import { mediaQueries, colors, fontWeights, fontSizes, timings } from "../../../common/styleVariables";
import { useTranslations } from "next-intl";

const NavigationWrapper = styled.nav({
	width: "100%",
	maxWidth: "500px",
});

const AnchorLinkList = styled.ul({
	display: "flex",
	flexDirection: "column",
	flexWrap: "wrap",
	justifyContent: "space-between",
	alignItems: "flex-end",
	width: "100%",
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
export default function Navigation({ activeAnchorLink }: Props) {
	const t = useTranslations("Home.header");
	return (
		<NavigationWrapper>
			<AnchorLinkList>
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
			</AnchorLinkList>
		</NavigationWrapper>
	);
}
