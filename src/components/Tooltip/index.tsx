import styled from "@emotion/styled";
import { ReactNode } from "react";
import { borderRadiuses, colors } from "../../common/styleVariables";
import { ITooltip, Tooltip as ReactTooltip } from "react-tooltip";

const Element = styled.span({
	color: colors.blueDark,
	borderBottom: `1px dotted ${colors.blueDark}`,
	cursor: "help",
});

const StyledTooltip = styled(ReactTooltip)({
	maxWidth: "80vw",
	color: colors.white,
	backgroundColor: colors.black,
	a: {
		color: colors.white,
		"&:hover": {
			color: colors.white,
		},
	},
});

type Props = ITooltip & {
	element?: keyof JSX.IntrinsicElements;
	children: ReactNode;
	tooltip: string;
	tooltipAsHTML?: boolean;
	id: string;
};

export default function Tooltip({
	element = "span",
	children,
	tooltip,
	tooltipAsHTML,
	id,
	style,
	...otherProps
}: Props) {
	return (
		<>
			<Element as={element} data-tooltip-id={id} aria-describedby={id}>
				{children}
			</Element>
			<StyledTooltip
				id={id}
				offset={5}
				opacity={1.0}
				{...otherProps}
				style={{ borderRadius: borderRadiuses.medium, ...style }}
			>
				{tooltipAsHTML ? <div dangerouslySetInnerHTML={{ __html: tooltip }} /> : tooltip}
			</StyledTooltip>
		</>
	);
}
