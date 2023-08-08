import apiClient from "../api/client";
import { Attraction } from "../api/client/models/Attraction";
import { Event } from "../api/client/models/Event";
import { SearchEventsRequest } from "../api/client/models/SearchEventsRequest";

const getAttractionId = (event: Event) => event.attractions?.[0].referenceId || null;

export type EventWithAttraction = {
	event: Event;
	attraction: Attraction | null;
};

/**
 * Loads all events with their matching (first) attraction and returns a nested list.
 */
export async function loadEventsWithAttractions(
	searchFilter: SearchEventsRequest["searchFilter"]
): Promise<EventWithAttraction[]> {
	const eventsResponse = await apiClient.discoverCulturalData.postEventsSearch({ searchFilter });
	const events = eventsResponse.data?.events || [];
	const first5Events = events.slice(0, 5);
	const attractionIds = first5Events.map(getAttractionId).filter(Boolean);
	const attractionsResponse = await apiClient.discoverCulturalData.postAttractionsSearch({
		searchFilter: {
			identifier: {
				$regex: attractionIds.join("|"),
				$options: "i",
			},
		},
	});
	const attractions = attractionsResponse.data?.attractions || [];
	const eventsWithAttractions = first5Events.map((event) => {
		const attractionId = getAttractionId(event);
		const matchingAttraction = attractionId
			? attractions.find((attraction) => attraction.identifier === attractionId) || null
			: null;
		return {
			event,
			attraction: matchingAttraction,
		};
	});
	return eventsWithAttractions;
}
