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

export type PromptStatus = "idle" | "creating prompt" | "loading" | "done";

const ResultsTitle = styled.h3({
	color: colors.blueDark,
	fontSize: fontSizes.medium,
	fontWeight: fontWeights.medium,
	lineHeight: 1.0,
});

export default function RequestCreatorAndList() {
	const t = useTranslations("Home.for-interested");
	const [status, setStatus] = useState<PromptStatus>("idle");
	const [events, setEvents] = useState<PartialEvent[]>([]);
	const handleRequestStarted = useCallback(() => {
		setStatus("creating prompt");
		setEvents([]);
	}, []);
	const handleRequestCreated = useCallback(async (_request: Request) => {
		setStatus("loading");
		const response = await apiClient.discoverCulturalData.postEventsSearch({ searchFilter: _request.searchFilter });
		const newEvents = (response.data?.events || []) as PartialEvent[];
		const first5Events = newEvents.slice(0, 5);
		setEvents(first5Events);
		setStatus("done");
	}, []);
	return (
		<>
			<RequestCreator onStartRequestCreation={handleRequestStarted} onRequestCreated={handleRequestCreated} />
			{(status === "loading" || status === "done") && (
				<>
					<Spacer size={40} />
					<ResultsTitle>{t("results-title")}</ResultsTitle>
					<Spacer size={5} />
					<Tooltip id="results-source-tooltip" tooltip={t("results-source-tooltip")}>
						{t("results-source-title")}
					</Tooltip>
					<Spacer size={10} />
					<EventList isLoading={status === "loading"} events={events} />
				</>
			)}
		</>
	);
}
