import styled from "@emotion/styled";
import { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";
import { borderRadiuses, borderWidths, colors, fontWeights, lineHeights, timings } from "../../common/styleVariables";

const StyledButton = styled.button({
	appearance: "none",
	display: "inline-block",
	lineHeight: lineHeights.buttons,
	padding: `13px 18px 12px 18px`,
	color: colors.blueDark,
	background: "transparent",
	fontWeight: fontWeights.default,
	textDecoration: "none",
	border: `${borderWidths.default}px solid ${colors.blueDark}`,
	borderRadius: borderRadiuses.medium,
	transition: `all ${timings.short} ease-in-out`,
	"&:hover": {
		cursor: "pointer",
		color: colors.white,
		background: colors.blueDark,
	},
});

const StyledButtonAsLink = StyledButton.withComponent("a");

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
	as?: "button" | undefined;
};

type LinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
	as: "a";
	href: string;
	rel?: string;
	target?: string;
};

type Props = ButtonProps | LinkProps;

const isLink = (props: Props): props is LinkProps => props.as === "a";

export default function Button(props: Props) {
	if (isLink(props)) {
		return <StyledButtonAsLink {...props} />;
	}
	const { type = "button", ...otherProps } = props;
	return <StyledButton type={type} {...otherProps} />;
}
