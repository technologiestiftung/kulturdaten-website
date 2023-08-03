import { Event } from "../api/client/models/Event";

/**
 * The type that’s currently being returned from the backend via the postEventsSearch route.
 * The SearchEventsResponse type is promising too many keys that don’t exist.
 */
export type PartialEvent = {
	attractions: Event["attractions"];
	identifier: Event["identifier"];
	locations: Event["locations"];
	metadata: Event["metadata"];
	organizer: Event["organizer"];
	referenceId: string;
	schedule: Event["schedule"];
};
