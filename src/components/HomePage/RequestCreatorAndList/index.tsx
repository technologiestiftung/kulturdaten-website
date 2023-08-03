import styled from "@emotion/styled";
import { useTranslations } from "next-intl";
import { useCallback, useState } from "react";
import apiClient from "../../../api/client";
import { colors, fontSizes, fontWeights } from "../../../common/styleVariables";
import { PartialEvent } from "../../../common/types";
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
	const [events, setEvents] = useState<PartialEvent[]>([]);
	const handleNewRequest = useCallback(async (_request: Request) => {
		const response = await apiClient.discoverCulturalData.postEventsSearch(_request.apiRequest);
		const newEvents = (response.data?.events || []) as PartialEvent[];
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
