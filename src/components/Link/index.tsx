import styled from "@emotion/styled";
import { AnchorHTMLAttributes, ReactNode } from "react";
import { colors } from "../../common/styleVariables";

const A = styled.a({
	color: colors.blueDark,
	textDecoration: "underline",
	"&:hover": {
		textDecoration: "none",
	},
});

type Props = AnchorHTMLAttributes<HTMLAnchorElement> & {
	href: string;
	children: ReactNode;
};

export default function Link(props: Props) {
	return <A {...props} />;
}
