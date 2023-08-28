import { useTranslations } from "next-intl";
import { useCallback, useRef, useState } from "react";
import { EventWithAttraction } from "../../../services/apiRequests";
import Spacer from "../../Spacer";
import Text from "../../Text";
import Tooltip from "../../Tooltip";
import EventList from "./EventList";
import RequestCreator from "./RequestCreator";
import { Request } from "./requests";
import SectionSubtitle from "../../SectionSubtitle";

type PromptStatus = "idle" | "creating prompt" | "loading" | "done";

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
		const newEventsWithAttractions = await request.loadData();
		timeoutId.current = window.setTimeout(() => {
			setEventsWithAttractions(newEventsWithAttractions);
			setStatus("done");
		}, artificalDelayMs);
	}, []);
	return (
		<>
			<SectionSubtitle label={t("subtitle")} textType="h4" textAs="h2" />
			<RequestCreator onStartRequestCreation={handleRequestStarted} onRequestCreated={handleRequestCreated} />
			{(status === "loading" || status === "done") && (
				<>
					<Spacer size={32} />
					<Text type="h3" color="blueDark">
						{t("results-title")}
					</Text>
					<Spacer size={4} />
					<Tooltip
						id="results-source-tooltip"
						tooltip={t.raw("results-source-tooltip")}
						tooltipAsHTML={true}
						clickable={true}
						place="top-start"
						style={{ maxWidth: "min(85vw, 35em)" }}
					>
						{t("results-source-title")}
					</Tooltip>
					<Spacer size={10} />
					<EventList isLoading={status === "loading"} eventsWithAttractions={eventsWithAttractions} />
				</>
			)}
		</>
	);
}
