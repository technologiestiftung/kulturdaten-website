import styled from "@emotion/styled";
import { ReactNode } from "react";
import { Tooltip as ReactTooltip } from "react-tooltip";
import { colors } from "../../common/styleVariables";

const Element = styled.a({
	color: colors.blueDark,
	borderBottom: `1px dotted ${colors.blueDark}`,
	cursor: "help",
});

const StyledTooltip = styled(ReactTooltip)({
	maxWidth: "80vw",
	color: colors.white,
	backgroundColor: colors.black,
});

type Props = {
	element?: keyof JSX.IntrinsicElements;
	children: ReactNode;
	tooltip: string;
	id: string;
};

export default function Tooltip({ element = "span", children, tooltip, id }: Props) {
	return (
		<>
			<Element as={element} data-tooltip-id={id} aria-describedby={id}>
				{children}
			</Element>
			<StyledTooltip id={id} offset={5} opacity={1.0}>
				{tooltip}
			</StyledTooltip>
		</>
	);
}
