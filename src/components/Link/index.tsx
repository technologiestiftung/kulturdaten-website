import styled, { CSSObject } from "@emotion/styled";
import NextLink from "next/link";
import { AnchorHTMLAttributes, ReactNode } from "react";
import { colors } from "../../common/styleVariables";

const linkStyles: CSSObject = {
	color: colors.blueDark,
	textDecoration: "underline",
	"&:hover": {
		textDecoration: "none",
	},
};
const Link = styled.a<Props>(linkStyles);

interface Props extends AnchorHTMLAttributes<HTMLAnchorElement> {
	href: string;
	children: ReactNode;
}

export default Link;

export const LinkInternal = styled(NextLink)(linkStyles);
