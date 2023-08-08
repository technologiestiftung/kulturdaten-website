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

const Description = styled.p({
	color: colors.black,
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
			<Description>{sanitizeDescription(getLocalizedContent(attraction?.description))}</Description>
		</>
	);
}
