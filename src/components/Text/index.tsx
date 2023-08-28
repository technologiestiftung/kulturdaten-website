import styled, { CSSObject } from "@emotion/styled";
import { HTMLAttributes } from "react";
import { colors, fontSizes, fontWeights, lineHeights } from "../../common/styleVariables";

export type TextType = "p" | "h1" | "h2" | "h3" | "h4";

export const textStyles: Record<TextType, CSSObject> = {
	p: {
		fontSize: fontSizes.default,
		lineHeight: lineHeights.default,
	},
	h1: {
		fontSize: fontSizes.extraLarge,
		fontWeight: fontWeights.medium,
		lineHeight: lineHeights.headline,
	},
	h2: {
		fontSize: fontSizes.large,
		fontWeight: fontWeights.medium,
		lineHeight: lineHeights.headline,
	},
	h3: {
		fontSize: fontSizes.medium,
		fontWeight: fontWeights.medium,
		lineHeight: lineHeights.headline,
	},
	h4: {
		fontSize: fontSizes.medium,
		fontWeight: fontWeights.medium,
		lineHeight: lineHeights.headline,
	},
};

const StyledDiv = styled("div", {
	shouldForwardProp: (prop) => !["as", "color", "type"].includes(prop),
})<Props>(({ type, color }) => ({
	...textStyles[type],
	color: color ? colors[color] : undefined,
	overflowWrap: "break-word",
	whiteSpace: "pre-line",
}));

interface Props extends HTMLAttributes<HTMLDivElement> {
	type: TextType;
	as?: keyof JSX.IntrinsicElements;
	color?: keyof typeof colors;
}

export default function Text({ type, as = type, ...props }: Props) {
	return <StyledDiv type={type} as={as} {...props} />;
}
