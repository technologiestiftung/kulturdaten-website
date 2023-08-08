import styled, { CSSObject } from "@emotion/styled";
import { HTMLAttributes } from "react";
import { colors, fontSizes, fontWeights, lineHeights } from "../../common/styleVariables";

type TextType = "p" | "h1" | "h2" | "h3";

const textStyles: Record<TextType, CSSObject> = {
	p: {
		fontSize: fontSizes.default,
		lineHeight: lineHeights.default,
	},
	h1: {
		fontSize: fontSizes.extraLarge,
		fontWeight: fontWeights.bold,
		lineHeight: lineHeights.headline,
	},
	h2: {
		fontSize: fontSizes.large,
		fontWeight: fontWeights.bold,
		lineHeight: lineHeights.headline,
	},
	h3: {
		fontSize: fontSizes.medium,
		fontWeight: fontWeights.medium,
		lineHeight: lineHeights.headline,
	},
};

const StyledDiv = styled.div<Props>(({ type, color }) => ({
	...textStyles[type],
	color: color ? colors[color] : undefined,
}));

type Props = HTMLAttributes<HTMLDivElement> & {
	type: TextType;
	as?: keyof JSX.IntrinsicElements;
	color?: keyof typeof colors;
};

export default function Text({ as, ...props }: Props) {
	return <StyledDiv as={as} {...props} />;
}
