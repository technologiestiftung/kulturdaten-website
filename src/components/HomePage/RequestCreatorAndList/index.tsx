import styled from "@emotion/styled";
import { useTranslations } from "next-intl";
import { useCallback, useRef, useState } from "react";
import { colors, fontSizes, fontWeights, lineHeights } from "../../../common/styleVariables";
import { EventWithAttraction, loadEventsWithAttractions } from "../../../services/apiRequests";
import SectionSubtitle from "../../SectionSubtitle";
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
	const [eventsWithAttractions, setEventsWithAttractions] = useState<EventWithAttraction[]>([]);
	const handleRequestStarted = useCallback(() => {
		setStatus("creating prompt");
		setEventsWithAttractions([]);
	}, []);
	const timeoutId = useRef(0);
	const handleRequestCreated = useCallback(async (request: Request) => {
		window.clearTimeout(timeoutId.current);
		setStatus("loading");
		const artificalDelayMs = 1_000;
		const newEventsWithAttractions = await loadEventsWithAttractions(request.searchFilter);
		timeoutId.current = window.setTimeout(() => {
			setEventsWithAttractions(newEventsWithAttractions);
			setStatus("done");
		}, artificalDelayMs);
	}, []);
	return (
		<>
			<SectionSubtitle label={t("subtitle")} />
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
					<EventList isLoading={status === "loading"} eventsWithAttractions={eventsWithAttractions} />
				</>
			)}
		</>
	);
}
