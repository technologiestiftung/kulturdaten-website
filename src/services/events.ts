import { Event } from "../api/client/models/Event";

export function getStartDateAsISO(event: Event) {
	return `${event.schedule?.startDate}T${event.schedule?.startTime}`;
}
