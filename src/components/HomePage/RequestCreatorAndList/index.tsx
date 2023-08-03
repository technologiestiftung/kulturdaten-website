import styled from "@emotion/styled";
import { useTranslations } from "next-intl";
import { useCallback, useState } from "react";
import apiClient from "../../../api/client";
import { colors, fontSizes, fontWeights } from "../../../common/styleVariables";
import { PartialEvent } from "../../../common/types";
import Spacer from "../../Spacer";
import Tooltip from "../../Tooltip";
import EventList from "./EventList";
import RequestCreator from "./RequestCreator";
import { Request } from "./requests";

const ResultsTitle = styled.h3({
	color: colors.blueDark,
	fontSize: fontSizes.medium,
	fontWeight: fontWeights.medium,
	lineHeight: 1.0,
});

export default function RequestCreatorAndList() {
	const t = useTranslations("Home.for-interested");
	const [events, setEvents] = useState<PartialEvent[]>([]);
	const handleNewRequest = useCallback(async (_request: Request) => {
		const response = await apiClient.discoverCulturalData.postEventsSearch({ searchFilter: _request.searchFilter });
		const newEvents = (response.data?.events || []) as PartialEvent[];
		const first5Events = newEvents.slice(0, 5);
		setEvents(first5Events);
	}, []);
	return (
		<>
			<RequestCreator onStartRequestCreation={() => setEvents([])} onRequestCreated={handleNewRequest} />
			<Spacer size={40} />
			<ResultsTitle>{t("results-title")}</ResultsTitle>
			<Spacer size={5} />
			<Tooltip id="results-source-tooltip" tooltip={t("results-source-tooltip")}>
				{t("results-source-title")}
			</Tooltip>
			<Spacer size={10} />
			<EventList events={events} />
		</>
	);
}
