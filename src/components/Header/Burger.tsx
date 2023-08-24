import styled from "@emotion/styled";
import { colors, spacings } from "../../common/styleVariables";
import Button from "../Button";
import { useTranslations } from "next-intl";

const BurgerPack = styled(Button)({
	display: "flex",
	flexDirection: "column",
	justifyContent: "center",
	alignItems: "center",
	width: spacings.get(8),
	height: spacings.get(8),
	cursor: "pointer",
});

const Bar = styled.div<{ open: boolean }>(({ open }) => ({
	width: open ? "38px" : "30px",
	height: "3px",
	position: "relative",
	backgroundColor: colors.blueDark,
	margin: "4px 0",
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

interface Props {
	open: boolean;
	onToggle: () => void;
	navId: string;
}

export default function Burger({ open, onToggle, navId }: Props) {
	const t = useTranslations("Home.header");

	return (
		<BurgerPack
			unstyled
			aria-label={t("burger-aria-label")}
			aria-expanded={open}
			aria-controls={navId}
			onClick={onToggle}
		>
			<Bar open={open} />
			<Bar open={open} />
			<Bar open={open} />
		</BurgerPack>
	);
}
