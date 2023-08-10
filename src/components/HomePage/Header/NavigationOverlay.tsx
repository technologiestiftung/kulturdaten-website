import styled from "@emotion/styled";
import { colors } from "../../../common/styleVariables";
import { headerHeight } from ".";
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
	closeBurger: () => void;
}
export default function NavigationOverlay({ closeBurger }: Props) {
	return (
		<Backdrop>
			<Navigation closeBurger={closeBurger} />
		</Backdrop>
	);
}
