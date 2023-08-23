import { push } from "@socialgouv/matomo-next";

type EventCategory = "Homepage";

/**
 * Track a custom analytics event via Matomo.
 * Docs: https://matomo.org/faq/reports/implement-event-tracking-with-matomo/
 */
export function trackEvent(eventCategory: EventCategory, eventAction: string, eventName?: string, eventValue?: number) {
	const filledParameters = ["trackEvent", eventCategory, eventAction, eventName, eventValue].filter(
		(parameter) => parameter !== undefined
	);
	push(filledParameters);
}
