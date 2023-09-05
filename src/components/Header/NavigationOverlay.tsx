import styled from "@emotion/styled";
import { colors, headerHeight, spacings } from "../../common/styleVariables";
import LanguageSwitch from "./LanguageSwitch";
import Navigation from "./Navigation";

const Backdrop = styled.div({
	position: "fixed",
	top: headerHeight,
	left: 0,
	width: "100vw",
	height: `calc(100dvh - ${headerHeight})`,
	"@supports not (height: 100dvh)": {
		height: `calc(90vh - ${headerHeight})`,
	},
	backgroundColor: colors.white,
	display: "flex",
	flexDirection: "column",
	justifyContent: "space-between",
	alignItems: "flex-end",
	gap: spacings.get(5),
	padding: spacings.get(6),
});

interface Props {
	onLinkClick: () => void;
	navId: string;
}
export default function NavigationOverlay({ onLinkClick, navId }: Props) {
	return (
		<Backdrop id={navId}>
			<Navigation onLinkClick={onLinkClick} />
			<LanguageSwitch onLinkClick={onLinkClick} />
		</Backdrop>
	);
}
