import { SearchEventsRequest } from "../../../api/client/models/SearchEventsRequest";

export type Request = {
	i18nKey: keyof IntlMessages["Home"]["for-interested"];
	searchFilter: SearchEventsRequest["searchFilter"];
};

// TODO: Add apiRequest to query API accordingly.
export const REQUESTS: Request[] = [
	{
		i18nKey: "request-1-text",
		searchFilter: {},
	},
	{
		i18nKey: "request-2-text",
		searchFilter: {},
	},
	{
		i18nKey: "request-3-text",
		searchFilter: {},
	},
	{
		i18nKey: "request-4-text",
		searchFilter: {},
	},
	{
		i18nKey: "request-5-text",
		searchFilter: {},
	},
	{
		i18nKey: "request-6-text",
		searchFilter: {
			"attractions.referenceLabel.de": {
				$regex: "exkursion",
				$options: "i",
			},
		},
	},
];
