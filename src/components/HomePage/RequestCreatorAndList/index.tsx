import styled from "@emotion/styled";
import { useTranslations } from "next-intl";
import { useCallback, useState } from "react";
import apiClient from "../../../api/client";
import { Event } from "../../../api/client/models/Event";
import { colors, fontSizes, fontWeights } from "../../../common/styleVariables";
import Spacer from "../../Spacer";
import EventList from "./EventList";
import RequestCreator from "./RequestCreator";
import { Request } from "./requests";

const ResultsTitle = styled.h3({
	color: colors.blueDark,
	fontSize: fontSizes.medium,
	fontWeight: fontWeights.medium,
});

export default function RequestCreatorAndList() {
	const t = useTranslations("Home.for-interested");
	const [events, setEvents] = useState<Event[]>([]);
	const handleNewRequest = useCallback(async (_request: Request) => {
		const response = await apiClient.discoverCulturalData.postEventsSearch(_request.apiRequest);
		// TODO: There is a slight type hiccup with event.type (enum vs. string representation)!
		const newEvents = (response.data?.events || []) as Event[];
		setEvents(newEvents);
	}, []);
	return (
		<>
			<RequestCreator onStartRequestCreation={() => setEvents([])} onRequestCreated={handleNewRequest} />
			<Spacer size={50} />
			<ResultsTitle>{t("results-title")}</ResultsTitle>
			<Spacer size={10} />
			<EventList events={events} />
		</>
	);
}
