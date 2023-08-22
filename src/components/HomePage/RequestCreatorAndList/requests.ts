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
				"attractions.referenceLabel.de": {
					$regex: "exkursion",
					$options: "i",
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
			const attractionsResponse = await apiClient.discoverCulturalData.postAttractionsSearch(1, 500, {
				searchFilter: {
					tags: {
						$in: ["attraction.category.Exhibitions"],
					},
				},
			});
			const attractions = attractionsResponse.data?.attractions || [];
			return await loadEventsWithAttractions({
				"attractions.referenceId": {
					$in: attractions.map((attraction) => attraction.identifier),
				},
				"locations.referenceId": {
					$in: locations.map((location) => location.identifier),
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
				"attractions.referenceId": {
					$in: attractions.map((attraction) => attraction.identifier),
				},
				"attractions.referenceLabel.de": {
					$regex: "robot",
					$options: "i",
				},
			});
		},
	},
	{
		i18nKey: "request-4-text",
		loadData: async () =>
			await loadEventsWithAttractions({
				"attractions.referenceLabel.de": {
					$regex: "konzert",
					$options: "i",
				},
				"admission.ticketType": {
					$regex: "ticketType.freeOfCharge",
					$options: "i",
				},
			}),
	},
];
