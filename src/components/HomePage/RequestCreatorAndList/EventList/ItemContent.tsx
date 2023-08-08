import styled from "@emotion/styled";
import { fontSizes, fontWeights, lineHeights } from "../../../../common/styleVariables";
import { PartialEvent } from "../../../../common/types";
import { Locale } from "../../../../hooks/useLocale";
import formatDate from "../../../../services/dates";
import Spacer from "../../../Spacer";

const Meta = styled.div({
	fontSize: fontSizes.small,
	fontWeight: fontWeights.medium,
});

const Title = styled.div({
	display: "inline-block",
	lineHeight: lineHeights.single,
	fontSize: fontSizes.medium,
	fontWeight: fontWeights.medium,
});

type Props = {
	event: PartialEvent;
	locale: Locale;
};

function getStartDateAsISO(event: PartialEvent) {
	return `${event.schedule?.startDate}T${event.schedule?.startTime}`;
}

export default function ItemContent({ event, locale }: Props) {
	const isoDate = getStartDateAsISO(event);
	return (
		<>
			<Meta>
				<time dateTime={isoDate}>{formatDate(isoDate, locale, { dateStyle: "full", timeStyle: "short" })}</time>,{" "}
				{event.locations?.[0].referenceLabel?.[locale]}
			</Meta>
			<Spacer size={5} />
			<Title>{event.attractions?.[0].referenceLabel?.[locale]}</Title>
		</>
	);
}
