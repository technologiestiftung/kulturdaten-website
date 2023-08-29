import styled from "@emotion/styled";
import { useTranslations } from "next-intl";
import { mediaQueries, spacings } from "../../common/styleVariables";
import { AnchorLinks } from "../../common/types";
import AnchorLink from "./AnchorLink";
import LanguageSwitch from "./LanguageSwitch";

const NavigationWrapper = styled.nav({
	position: "absolute",
	inset: spacings.get(6),
	display: "flex",
	flexDirection: "column",
	justifyContent: "space-between",
	alignItems: "flex-end",
	gap: spacings.get(5),
	[mediaQueries.m]: {
		position: "static",
		flexDirection: "row",
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
						<AnchorLink isActive={activeAnchorLink === item.id} href={`#${item.id}`}>
							{t(item.label)}
						</AnchorLink>
					</AnchorLinkItem>
				))}
			</AnchorLinkList>
			<LanguageSwitch />
		</NavigationWrapper>
	);
}
