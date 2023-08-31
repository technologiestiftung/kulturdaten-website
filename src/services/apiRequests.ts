import apiClient from "../api/client";
import { Attraction } from "../api/client/models/Attraction";
import { Event } from "../api/client/models/Event";
import { SearchEventsRequest } from "../api/client/models/SearchEventsRequest";
import { getStartDateAsISO } from "./events";

const getAttractionId = (event: Event) => event.attractions?.[0].referenceId || null;

export type EventWithAttraction = {
	event: Event;
	attraction: Attraction | null;
};

/**
 * Returns a list of events that all have different attraction titles (to have some variety).
 */
function getDifferentEvents(events: Event[], amount: number) {
	const differentEvents = [];
	const attractionTitles = new Set<string>();
	for (const event of events) {
		if (differentEvents.length >= amount) {
			break;
		}
		const attractionTitle = event.attractions?.[0].referenceLabel?.de || event.identifier;
		if (!attractionTitles.has(attractionTitle)) {
			attractionTitles.add(attractionTitle);
			differentEvents.push(event);
		}
	}
	return differentEvents;
}

/**
 * Loads all events with their matching (first) attraction and returns a nested list, sorted by the event start time.
 */
export async function loadEventsWithAttractions(
	searchEventsRequest: SearchEventsRequest
): Promise<EventWithAttraction[]> {
	const eventsResponse = await apiClient.discoverCulturalData.postEventsSearch(1, 500, searchEventsRequest);
	const events = eventsResponse.data?.events || [];
	const fiveDifferentEvents = getDifferentEvents(events, 5);
	const attractionIds = fiveDifferentEvents.map(getAttractionId).filter(Boolean);
	const attractionsResponse = await apiClient.discoverCulturalData.postAttractionsSearch(1, 500, {
		searchFilter: {
			identifier: {
				$regex: attractionIds.join("|"),
				$options: "i",
			},
		},
	});
	const attractions = attractionsResponse.data?.attractions || [];
	const eventsWithAttractions = fiveDifferentEvents
		.map((event) => {
			const attractionId = getAttractionId(event);
			const matchingAttraction = attractionId
				? attractions.find((attraction) => attraction.identifier === attractionId) || null
				: null;
			return {
				event,
				attraction: matchingAttraction,
			};
		})
		.sort((a, b) => {
			const dateA = new Date(getStartDateAsISO(a.event));
			const dateB = new Date(getStartDateAsISO(b.event));
			return dateA.getTime() - dateB.getTime();
		});
	return eventsWithAttractions;
}
