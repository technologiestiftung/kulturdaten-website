import styled from "@emotion/styled";
import { useState } from "react";
import { colors } from "../../../common/styleVariables";

const BurgerPack = styled.div({
	display: "flex",
	flexDirection: "column",
	justifyContent: "center",
	alignItems: "center",
	width: "40px",
	height: "40px",
	cursor: "pointer",
});

const Bar = styled.div<{ open: boolean }>(({ open }) => ({
	width: open ? "38px" : "30px",
	height: "3px",
	position: "relative",
	backgroundColor: colors.blueDark,
	margin: "4px 0",
	transition: "background-color 0.3s ease",
	borderRadius: "3px",
	"&:nth-of-type(1)": {
		transform: open ? "rotate(45deg) translate(8px, 8px)" : "none",
	},
	"&:nth-of-type(2)": {
		opacity: open ? 0 : 1,
	},
	"&:nth-of-type(3)": {
		transform: open ? "rotate(-45deg) translate(8px, -8px)" : "none",
	},
}));

export default function Burger() {
	const [open, setOpen] = useState(false);

	return (
		<BurgerPack onClick={() => setOpen(!open)}>
			<Bar open={open} />
			<Bar open={open} />
			<Bar open={open} />
		</BurgerPack>
	);
}
