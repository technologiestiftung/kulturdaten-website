import styled from "@emotion/styled";
import { useState } from "react";
import { borderRadiuses, colors, fontSizes, spacings, timings } from "../../../../../common/styleVariables";
import Button from "../../../../Button";
import Icon from "../../../../Icon";
import Text from "../../../../Text";

const readMoreButtonClass = "read-more-button";

const Container = styled.div<{ expanded: boolean }>(({ expanded }) => {
	const collapsedStyles = {
		maxHeight: "5rem",
		overflow: "hidden",
		[`.${readMoreButtonClass}`]: {
			opacity: 0,
		},
		[`&:hover .${readMoreButtonClass}`]: {
			opacity: 1,
		},
	};
	return {
		position: "relative",
		color: colors.black,
		...(expanded ? {} : collapsedStyles),
	};
});

const FadeOut = styled.div({
	position: "absolute",
	bottom: 0,
	left: 0,
	width: "100%",
	height: "70%",
	background: `linear-gradient(0deg, ${colors.turquoise} 0%, rgba(160, 250, 242, 0) 100%)`,
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
	cursor: "pointer",
	fontSize: fontSizes.small,
	display: "inline-flex",
	alignItems: "center",
	gap: spacings.get(1),
	padding: `${spacings.get(1)}px ${spacings.get(2)}px`,
	borderRadius: borderRadiuses.medium,
	transition: `opacity ${timings.short} ease-in-out`,
});

function sanitizeDescription(description: string) {
	return description.replace(/(\n)$/gm, "");
}

type Props = {
	description: string;
};

export default function Description({ description }: Props) {
	const [expanded, setExpanded] = useState(false);
	return (
		<Container expanded={expanded}>
			<Text type="p">{sanitizeDescription(description)}</Text>
			{!expanded && (
				<>
					<FadeOut role="none" />
					<ReadMoreContainer>
						<ReadMoreButton unstyled={true} onClick={() => setExpanded(!expanded)} className={readMoreButtonClass}>
							<Icon name="chevron-down" /> Weiterlesen
						</ReadMoreButton>
					</ReadMoreContainer>
				</>
			)}
		</Container>
	);
}
