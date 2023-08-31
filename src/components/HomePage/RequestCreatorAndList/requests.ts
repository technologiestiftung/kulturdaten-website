import apiClient from "../../../api/client";
import { EventWithAttraction, loadEventsWithAttractions } from "../../../services/apiRequests";

export type Request = {
	i18nKey: keyof IntlMessages["Home"]["for-interested"];
	loadData(): Promise<EventWithAttraction[]>;
};

export const REQUESTS: Request[] = [
	{
		i18nKey: "request-1-text",
		loadData: async () =>
			await loadEventsWithAttractions({
				searchFilter: {
					"attractions.referenceLabel.de": {
						$regex: "exkursion",
						$options: "i",
					},
				},
			}),
	},
	{
		i18nKey: "request-2-text",
		loadData: async () => {
			const locationsResponse = await apiClient.discoverCulturalData.postLocationsSearch(1, 500, {
				searchFilter: {
					accessibility: {
						$in: ["Rollstuhlgerecht"],
					},
				},
			});
			const locations = locationsResponse.data?.locations || [];
			return await loadEventsWithAttractions({
				matchMode: "all",
				searchFilter: {
					"locations.referenceId": {
						$in: locations.map((location) => location.identifier),
					},
				},
				byAttractionTags: {
					tags: ["attraction.category.Exhibitions"],
				},
			});
		},
	},
	{
		i18nKey: "request-3-text",
		loadData: async () => {
			const attractionsResponse = await apiClient.discoverCulturalData.postAttractionsSearch(1, 500, {
				searchFilter: {
					tags: {
						$in: ["attraction.category.Children"],
					},
				},
			});
			const attractions = attractionsResponse.data?.attractions || [];
			return await loadEventsWithAttractions({
				searchFilter: {
					"attractions.referenceId": {
						$in: attractions.map((attraction) => attraction.identifier),
					},
					"attractions.referenceLabel.de": {
						$regex: "robot",
						$options: "i",
					},
				},
			});
		},
	},
	{
		i18nKey: "request-4-text",
		loadData: async () =>
			await loadEventsWithAttractions({
				searchFilter: {
					"attractions.referenceLabel.de": {
						$regex: "konzert",
						$options: "i",
					},
					"admission.ticketType": {
						$regex: "ticketType.freeOfCharge",
						$options: "i",
					},
				},
			}),
	},
];
