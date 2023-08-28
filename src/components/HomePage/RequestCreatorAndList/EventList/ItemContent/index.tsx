import styled from "@emotion/styled";
import { useCallback } from "react";
import { fontSizes, fontWeights, lineHeights } from "../../../../../common/styleVariables";
import { Locale, fallbackLocale } from "../../../../../hooks/useLocale";
import { EventWithAttraction } from "../../../../../services/apiRequests";
import formatDate from "../../../../../services/dates";
import { getStartDateAsISO } from "../../../../../services/events";
import Spacer from "../../../../Spacer";
import Description from "./Description";

const Meta = styled.div({
	fontSize: fontSizes.small,
	fontWeight: fontWeights.medium,
});

const Title = styled.div({
	lineHeight: lineHeights.headline,
	fontSize: fontSizes.medium,
	fontWeight: fontWeights.medium,
});

interface Props {
	eventWithAttraction: EventWithAttraction;
	locale: Locale;
	onExpandedDescription(): void;
}

export default function ItemContent({ eventWithAttraction, locale, onExpandedDescription }: Props) {
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
			<Description
				description={getLocalizedContent(attraction?.description)}
				attractionId={attraction?.identifier || ""}
				onExpanded={onExpandedDescription}
			/>
		</>
	);
}
