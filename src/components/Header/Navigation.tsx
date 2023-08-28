import styled from "@emotion/styled";
import { mediaQueries, colors, fontWeights, fontSizes, timings, spacings } from "../../common/styleVariables";
import { useTranslations } from "next-intl";
import { AnchorLinks } from "../../common/types";

const NavigationWrapper = styled.nav({
	position: "absolute",
	right: spacings.get(6),
	top: spacings.get(6),
	[mediaQueries.m]: {
		position: "static",
	},
});

const AnchorLinkList = styled.ul({
	display: "flex",
	flexDirection: "column",
	alignItems: "flex-end",
	gap: spacings.get(5),
	paddingLeft: 0,
	listStyle: "none",
	[mediaQueries.m]: {
		flexDirection: "row",
	},
});

const AnchorLinkItem = styled.li({});

const AnchorLink = styled.a<{ active: boolean }>((props) => ({
	color: colors.blueDark,
	fontSize: fontSizes.default,
	fontWeight: fontWeights.default,
	textDecoration: "none",
	borderBottom: props.active ? `2px solid ${colors.blueDark}` : "none",
	transition: `all ${timings.short} ease-in-out`,
	"&:hover": {
		borderBottom: `2px solid ${colors.blueDark}`,
	},
}));

interface Props {
	activeAnchorLink?: AnchorLinks | null;
	onLinkClick?: () => void;
}

const navigationItems = [
	{
		id: AnchorLinks.ARTISTSECTION,
		label: "link-artists" as const,
	},
	{
		id: AnchorLinks.INTERESTEDSECTION,
		label: "link-interested" as const,
	},
	{
		id: AnchorLinks.DATASECTION,
		label: "link-data" as const,
	},
];

export default function Navigation({ activeAnchorLink, onLinkClick }: Props) {
	const t = useTranslations("Home.header");
	return (
		<NavigationWrapper>
			<AnchorLinkList>
				{navigationItems.map((item) => (
					<AnchorLinkItem key={item.id} onClick={onLinkClick}>
						<AnchorLink active={activeAnchorLink === item.id} href={`#${item.id}`}>
							{t(item.label)}
						</AnchorLink>
					</AnchorLinkItem>
				))}
			</AnchorLinkList>
		</NavigationWrapper>
	);
}
