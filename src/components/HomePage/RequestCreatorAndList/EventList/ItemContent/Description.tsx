import styled from "@emotion/styled";
import { useCallback, useEffect, useRef, useState } from "react";
import { borderRadiuses, colors, fontSizes, spacings, timings } from "../../../../../common/styleVariables";
import Button from "../../../../Button";
import Icon from "../../../../Icon";

const readMoreButtonClass = "read-more-button";

const Container = styled.div<{ isInteractive: boolean }>(({ isInteractive }) => ({
	position: "relative",
	color: colors.black,
	overflow: "hidden",
	cursor: isInteractive ? "pointer" : undefined,
	[`& .${readMoreButtonClass}`]: {
		opacity: 0,
	},
	"&:hover, &:focus-within": {
		[`.${readMoreButtonClass}`]: {
			opacity: 1,
		},
	},
}));

const Gradient = styled.div({
	position: "absolute",
	bottom: 0,
	left: 0,
	width: "100%",
	height: "70%",
	background: `linear-gradient(0deg, ${colors.turquoise} 0%, rgba(160, 250, 242, 0) 100%)`,
	transition: `opacity ${timings.medium} ease-in-out`,
	pointerEvents: "none",
});

const ReadMoreContainer = styled.div({
	position: "absolute",
	bottom: 0,
	left: 0,
	width: "100%",
	textAlign: "center",
});

const ReadMoreButton = styled(Button)({
	backgroundColor: colors.white,
	color: colors.blueDark,
	cursor: "pointer",
	fontSize: fontSizes.small,
	display: "inline-flex",
	alignItems: "center",
	gap: spacings.get(0.5),
	padding: `${spacings.get(1)}px ${spacings.get(2)}px`,
	borderRadius: borderRadiuses.medium,
	transition: `opacity ${timings.short} ease-in-out`,
	"&:hover": {
		backgroundColor: colors.grayLight,
	},
});

function sanitizeDescription(description: string) {
	return description.replace(/(\n)$/gm, "");
}

type Props = {
	description: string;
	attractionId: string;
	onExpanded(): void;
};

export default function Description({ description, attractionId, onExpanded }: Props) {
	const [expanded, setExpanded] = useState(false);
	const textId = `description-${attractionId}`;
	const textRef = useRef<HTMLParagraphElement>(null);
	// We want to show ~3 lines of text in the collapsed state.
	const maxCollapsedHeight = 80;
	const [textHeight, setTextHeight] = useState<number>(maxCollapsedHeight);
	const collapsedHeight = Math.min(maxCollapsedHeight, textHeight);
	const canBeExpanded = textHeight > collapsedHeight;

	const updateTotalHeight = useCallback(() => {
		const element = textRef.current!;
		const { height } = element.getBoundingClientRect();
		setTextHeight(height);
	}, []);
	useEffect(() => updateTotalHeight(), [updateTotalHeight]);

	const expand = useCallback(() => setExpanded(true), []);
	useEffect(() => {
		if (expanded) {
			onExpanded();
		}
	}, [expanded, onExpanded]);

	return (
		<Container
			style={{ height: !canBeExpanded || expanded ? undefined : collapsedHeight }}
			onClick={canBeExpanded && !expanded ? () => expand() : undefined}
			isInteractive={canBeExpanded && !expanded}
			aria-expanded={canBeExpanded ? expanded : undefined}
			aria-controls={canBeExpanded ? textId : undefined}
		>
			<p ref={textRef} id={textId}>
				{sanitizeDescription(description)}
			</p>
			{canBeExpanded && (
				<>
					<Gradient role="none" style={{ opacity: expanded ? 0 : 1 }} />
					{!expanded && (
						<ReadMoreContainer>
							<ReadMoreButton
								unstyled={true}
								onClick={expand}
								className={readMoreButtonClass}
								aria-expanded={canBeExpanded ? expanded : undefined}
								aria-controls={canBeExpanded ? textId : undefined}
							>
								<Icon name="chevron-down" size={18} /> Weiterlesen
							</ReadMoreButton>
						</ReadMoreContainer>
					)}
				</>
			)}
		</Container>
	);
}
