import styled from "@emotion/styled";
import { ButtonHTMLAttributes } from "react";
import Button from "../Button";
import Icon, { IconProps } from "../Icon";
import { spacings } from "../../common/styleVariables";

const StyledButton = styled(Button)({
	display: "inline-flex",
	alignItems: "center",
	gap: spacings.get(2),
});

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
	icon: IconProps["name"];
};

export default function ButtonWithIcon({ icon, children, ...otherProps }: Props) {
	return (
		<StyledButton {...otherProps}>
			<Icon name={icon} />
			{children}
		</StyledButton>
	);
}
