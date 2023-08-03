import { SearchEventsRequest } from "../../../api/client/models/SearchEventsRequest";

export type Request = {
	i18nKey: keyof IntlMessages["Home"]["for-interested"];
	apiRequest: SearchEventsRequest;
};

// TODO: Add apiRequest to query API accordingly.
export const REQUESTS: Request[] = [
	{
		i18nKey: "request-1-text",
		apiRequest: {},
	},
	{
		i18nKey: "request-2-text",
		apiRequest: {},
	},
	{
		i18nKey: "request-3-text",
		apiRequest: {},
	},
	{
		i18nKey: "request-4-text",
		apiRequest: {},
	},
	{
		i18nKey: "request-5-text",
		apiRequest: {},
	},
];
