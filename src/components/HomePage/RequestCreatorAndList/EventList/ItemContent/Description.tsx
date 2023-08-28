import styled from "@emotion/styled";
import { useTranslations } from "next-intl";
import { useCallback, useEffect, useRef, useState } from "react";
import { borderRadiuses, colors, fontSizes, spacings, timings } from "../../../../../common/styleVariables";
import Button from "../../../../Button";
import Icon from "../../../../Icon";

const readMoreButtonClass = "read-more-button";

const Container = styled.div(({ onClick }) => ({
	position: "relative",
	color: colors.black,
	overflow: "hidden",
	cursor: onClick ? "pointer" : undefined,
	[`& .${readMoreButtonClass}`]: {
		opacity: 0,
	},
	"@media (hover: hover)": {
		"&:hover, &:focus-within": {
			[`.${readMoreButtonClass}`]: {
				opacity: 1,
			},
		},
	},
}));

const Gradient = styled.div({
	position: "absolute",
	bottom: 0,
	left: 0,
	width: "100%",
	height: "70%",
	background: `linear-gradient(0deg, ${colors.white} 0%, rgba(255, 255, 255, 0) 100%)`,
	transition: `opacity ${timings.medium} ease-in-out`,
	pointerEvents: "none",
});

const ReadMoreContainer = styled.div({
	position: "absolute",
	bottom: 0,
	left: 0,
	width: "100%",
	textAlign: "center",
	paddingBottom: "2px",
});

const ReadMoreButton = styled(Button)({
	backgroundColor: colors.blueDark,
	color: colors.white,
	cursor: "pointer",
	fontSize: fontSizes.small,
	display: "inline-flex",
	alignItems: "center",
	gap: spacings.get(0.5),
	padding: `${spacings.get(1)} ${spacings.get(2)}`,
	borderRadius: borderRadiuses.medium,
	transition: `opacity ${timings.short} ease-in-out`,
});

function sanitizeDescription(description: string) {
	return description.replace(/&shy;/g, "").replace(/(\n)$/gm, "");
}

interface Props {
	description: string;
	attractionId: string;
	onExpanded(): void;
}

export default function Description({ description, attractionId, onExpanded }: Props) {
	const t = useTranslations("Home.for-interested");
	const textId = `description-${attractionId}`;
	const textRef = useRef<HTMLParagraphElement>(null);
	// We want to show ~3 lines of text in the collapsed state.
	const collapsedHeight = 80;
	const [expanded, setExpanded] = useState(false);
	const [isInteractive, setIsInteractive] = useState(false);

	const initialize = useCallback(() => {
		const element = textRef.current!;
		const { height } = element.getBoundingClientRect();
		const isExpandable = height > collapsedHeight;
		if (isExpandable) {
			setIsInteractive(true);
		} else {
			setExpanded(true);
		}
	}, []);

	useEffect(() => initialize(), [initialize]);

	const expand = useCallback(() => setExpanded(true), []);
	useEffect(() => {
		if (isInteractive && expanded) {
			onExpanded();
		}
	}, [expanded, isInteractive, onExpanded]);

	const a11yButtonProps = isInteractive ? { "aria-expanded": expanded, "aria-controls": textId } : {};

	return (
		<Container
			style={{ height: expanded ? undefined : collapsedHeight }}
			onClick={!expanded ? () => expand() : undefined}
			{...a11yButtonProps}
		>
			<p ref={textRef} id={textId}>
				{sanitizeDescription(description)}
			</p>
			{isInteractive && <Gradient role="none" style={{ opacity: expanded ? 0 : 1 }} />}
			{!expanded && (
				<ReadMoreContainer>
					<ReadMoreButton unstyled={true} onClick={expand} className={readMoreButtonClass} {...a11yButtonProps}>
						<Icon name="chevron-down" size={18} /> {t("description-read-more")}
					</ReadMoreButton>
				</ReadMoreContainer>
			)}
		</Container>
	);
}
