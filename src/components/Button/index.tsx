import styled from "@emotion/styled";
import { ButtonHTMLAttributes } from "react";
import { borderRadiuses, borderWidths, colors, fontWeights, lineHeights, timings } from "../../common/styleVariables";

const StyledButton = styled.button({
	appearance: "none",
	lineHeight: lineHeights.buttons,
	padding: `13px 18px 12px 18px`,
	color: colors.blueDark,
	background: "transparent",
	fontWeight: fontWeights.default,
	border: `${borderWidths.default}px solid ${colors.blueDark}`,
	borderRadius: borderRadiuses.medium,
	transition: `all ${timings.short} ease-in-out`,
	"&:hover": {
		cursor: "pointer",
		color: colors.white,
		background: colors.blueDark,
	},
});

type Props = ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({ type = "button", ...otherProps }: Props) {
	return <StyledButton type={type} {...otherProps} />;
}
