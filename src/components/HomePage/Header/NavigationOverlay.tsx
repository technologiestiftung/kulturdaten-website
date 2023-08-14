import styled from "@emotion/styled";
import { colors, headerHeight } from "../../../common/styleVariables";
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
}
export default function NavigationOverlay({ onLinkClick }: Props) {
	return (
		<Backdrop>
			<Navigation onLinkClick={onLinkClick} />
		</Backdrop>
	);
}
