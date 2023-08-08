import styled from "@emotion/styled";
import { useCallback } from "react";
import { Event } from "../../../../api/client/models/Event";
import { colors, fontSizes, fontWeights, lineHeights } from "../../../../common/styleVariables";
import { Locale, fallbackLocale } from "../../../../hooks/useLocale";
import { EventWithAttraction } from "../../../../services/apiRequests";
import formatDate from "../../../../services/dates";
import Spacer from "../../../Spacer";

const Meta = styled.div({
	fontSize: fontSizes.small,
	fontWeight: fontWeights.medium,
});

const Title = styled.div({
	lineHeight: lineHeights.headline,
	fontSize: fontSizes.medium,
	fontWeight: fontWeights.medium,
});

const Description = styled.div({
	position: "relative",
	maxHeight: "5rem",
	overflow: "hidden",
	color: colors.black,
});

const DescriptionFade = styled.div({
	position: "absolute",
	bottom: 0,
	left: 0,
	width: "100%",
	height: "70%",
	background: `linear-gradient(0deg, ${colors.turquoise} 0%, rgba(160, 250, 242, 0) 100%)`,
	pointerEvents: "none",
});

type Props = {
	eventWithAttraction: EventWithAttraction;
	locale: Locale;
};

function getStartDateAsISO(event: Event) {
	return `${event.schedule?.startDate}T${event.schedule?.startTime}`;
}

function sanitizeDescription(description: string) {
	return description.replace(/(\n)*$/gm, "");
}

export default function ItemContent({ eventWithAttraction, locale }: Props) {
	const { event, attraction } = eventWithAttraction;
	const isoDate = getStartDateAsISO(event);
	const getLocalizedContent = useCallback(
		(labels: Record<string, string> | undefined) => {
			if (!labels) {
				return "";
			}
			return labels[locale] || labels[fallbackLocale];
		},
		[locale]
	);
	return (
		<>
			<Meta>
				<time dateTime={isoDate}>{formatDate(isoDate, locale, { dateStyle: "full", timeStyle: "short" })}</time>,{" "}
				{getLocalizedContent(event.locations?.[0].referenceLabel)}
			</Meta>
			<Spacer size={10} />
			<Title>{getLocalizedContent(attraction?.title)}</Title>
			<Spacer size={10} />
			<Description>
				<p>{sanitizeDescription(getLocalizedContent(attraction?.description))}</p>
				<DescriptionFade role="none" />
			</Description>
		</>
	);
}
