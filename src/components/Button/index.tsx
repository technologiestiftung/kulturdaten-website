import styled from "@emotion/styled";
import { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";
import { borderRadiuses, colors, fontWeights, lineHeights, timings } from "../../common/styleVariables";

const UnstyledButton = styled.button({
	border: "none",
	background: "none",
});

const StyledButton = styled.button({
	appearance: "none",
	display: "inline-block",
	lineHeight: lineHeights.buttons,
	padding: "13px 20px",
	color: colors.white,
	background: colors.blueDark,
	fontWeight: fontWeights.default,
	textDecoration: "none",
	border: "none",
	borderRadius: borderRadiuses.medium,
	transition: `all ${timings.short} ease-in-out`,
	"&:hover": {
		cursor: "pointer",
		color: colors.white,
		background: colors.blueDarkHover,
	},
});

interface StyledButtonProps {
	as?: "button" | undefined;
	unstyled?: boolean;
}

const StyledButtonAsLink = StyledButton.withComponent("a");

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, StyledButtonProps {}

interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
	as: "a";
	href: string;
	rel?: string;
	target?: string;
}

type Props = ButtonProps | LinkProps;

const isLink = (props: Props): props is LinkProps => props.as === "a";

export default function Button(props: Props) {
	if (isLink(props)) {
		return <StyledButtonAsLink {...props} />;
	}
	const { type = "button", ...otherProps } = props;
	if (props.unstyled) {
		return <UnstyledButton type={type} {...otherProps} />;
	} else {
		return <StyledButton type={type} {...otherProps} />;
	}
}
