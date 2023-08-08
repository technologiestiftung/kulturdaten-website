import styled from "@emotion/styled";
import { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";
import { spacings } from "../../common/styleVariables";
import Button from "../Button";
import Icon, { IconProps } from "../Icon";

const StyledButton = styled(Button)({
	display: "inline-flex",
	alignItems: "center",
	gap: spacings.get(2),
});

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
	as?: "button" | undefined;
	icon: IconProps["name"];
};

type LinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
	as: "a";
	icon: IconProps["name"];
	href: string;
	rel?: string;
	target?: string;
};

type Props = ButtonProps | LinkProps;

export default function ButtonWithIcon(props: Props) {
	const { icon, children, ...otherProps } = props;
	return (
		<StyledButton {...otherProps}>
			<Icon name={icon} />
			{children}
		</StyledButton>
	);
}
