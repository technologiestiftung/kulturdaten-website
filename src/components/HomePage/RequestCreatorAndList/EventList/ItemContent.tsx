import styled from "@emotion/styled";
import { Event } from "../../../../api/client/models/Event";
import { colors, fontSizes, fontWeights, lineHeights } from "../../../../common/styleVariables";
import { Locale } from "../../../../hooks/useLocale";
import { EventWithAttraction } from "../../../../services/apiRequests";
import formatDate from "../../../../services/dates";
import Spacer from "../../../Spacer";

const Meta = styled.div({
	fontSize: fontSizes.small,
	fontWeight: fontWeights.medium,
});

const Title = styled.div({
	lineHeight: lineHeights.single,
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

export default function ItemContent({ eventWithAttraction, locale }: Props) {
	const { event, attraction } = eventWithAttraction;
	const isoDate = getStartDateAsISO(event);
	return (
		<>
			<Meta>
				<time dateTime={isoDate}>{formatDate(isoDate, locale, { dateStyle: "full", timeStyle: "short" })}</time>,{" "}
				{event.locations?.[0].referenceLabel?.[locale]}
			</Meta>
			<Spacer size={5} />
			<Title>{attraction?.title?.[locale]}</Title>
			<Spacer size={5} />
			<Description>{attraction?.description?.[locale]}</Description>
		</>
	);
}
