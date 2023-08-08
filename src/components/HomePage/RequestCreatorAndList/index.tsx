import styled from "@emotion/styled";
import { useTranslations } from "next-intl";
import { useCallback, useRef, useState } from "react";
import apiClient from "../../../api/client";
import { colors, fontSizes, fontWeights, lineHeights } from "../../../common/styleVariables";
import { PartialEvent } from "../../../common/types";
import Spacer from "../../Spacer";
import Tooltip from "../../Tooltip";
import EventList from "./EventList";
import RequestCreator from "./RequestCreator";
import { Request } from "./requests";

type PromptStatus = "idle" | "creating prompt" | "loading" | "done";

const ResultsTitle = styled.h3({
	color: colors.blueDark,
	fontSize: fontSizes.medium,
	fontWeight: fontWeights.medium,
	lineHeight: lineHeights.single,
});

export default function RequestCreatorAndList() {
	const t = useTranslations("Home.for-interested");
	const [status, setStatus] = useState<PromptStatus>("idle");
	const [events, setEvents] = useState<PartialEvent[]>([]);
	const handleRequestStarted = useCallback(() => {
		setStatus("creating prompt");
		setEvents([]);
	}, []);
	const timeoutId = useRef(0);
	const handleRequestCreated = useCallback(async (_request: Request) => {
		window.clearTimeout(timeoutId.current);
		setStatus("loading");
		const response = await apiClient.discoverCulturalData.postEventsSearch({ searchFilter: _request.searchFilter });
		const newEvents = (response.data?.events || []) as PartialEvent[];
		const first5Events = newEvents.slice(0, 5);
		const artificalDelayMs = 1_000;
		timeoutId.current = window.setTimeout(() => {
			setEvents(first5Events);
			setStatus("done");
		}, artificalDelayMs);
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
