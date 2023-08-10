import styled from "@emotion/styled";
import { mediaQueries, colors, fontWeights, fontSizes, timings } from "../../../common/styleVariables";
import { useTranslations } from "next-intl";
import { AnchorLinks } from "../../../common/types";

const NavigationWrapper = styled.nav({
	position: "absolute",
	width: "100%",
	maxWidth: "520px",
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
	gap: "1.6rem",
	[mediaQueries.m]: {
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

const navigationItems = [
	{
		id: AnchorLinks.INTERESTEDSECTION,
		label: "link-interested" as const,
	},
	{
		id: AnchorLinks.ARTISTSECTION,
		label: "link-artists" as const,
	},
	{
		id: AnchorLinks.DATASECTION,
		label: "link-data" as const,
	},
];

export default function Navigation({ activeAnchorLink, closeBurger }: Props) {
	const t = useTranslations("Home.header");
	return (
		<NavigationWrapper>
			<AnchorLinkList>
				{navigationItems.map((item) => (
					<AnchorLinkItem key={item.id} onClick={closeBurger}>
						<AnchorLink active={activeAnchorLink === item.id} href={`#${item.id}`}>
							{t(item.label)}
						</AnchorLink>
					</AnchorLinkItem>
				))}
			</AnchorLinkList>
		</NavigationWrapper>
	);
}
