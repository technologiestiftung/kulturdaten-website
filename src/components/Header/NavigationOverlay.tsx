import styled from "@emotion/styled";
import { colors, headerHeight } from "../../common/styleVariables";
import Navigation from "./Navigation";

const Backdrop = styled.div({
	position: "fixed",
	top: headerHeight,
	left: 0,
	width: "100vw",
	height: `calc(100vh - ${headerHeight})`,
	backgroundColor: colors.white,
});

interface Props {
	onLinkClick: () => void;
	navId: string;
}
export default function NavigationOverlay({ onLinkClick, navId }: Props) {
	return (
		<Backdrop id={navId}>
			<Navigation onLinkClick={onLinkClick} />
		</Backdrop>
	);
}
