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
		loadData: async () =>
			await loadEventsWithAttractions({
				byAttractionTags: {
					tags: ["attraction.category.Exhibitions"],
				},
				byLocationAccessibilityTags: {
					tags: ["location.accessibility.WheelchairAccessible"],
				},
			}),
	},
	{
		i18nKey: "request-3-text",
		loadData: async () =>
			await loadEventsWithAttractions({
				searchFilter: {
					"attractions.referenceLabel.de": {
						$regex: "robot",
						$options: "i",
					},
				},
				byAttractionTags: {
					tags: ["attraction.category.Children"],
				},
			}),
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
