export type Request = {
	i18nKey: keyof IntlMessages["Home"]["for-interested"];
	apiRequest: string;
};

// TODO: Add metadata to query API accordingly.
export const REQUESTS: Request[] = [
	{
		i18nKey: "request-1-text",
		apiRequest: "TODO",
	},
	{
		i18nKey: "request-2-text",
		apiRequest: "TODO",
	},
	{
		i18nKey: "request-3-text",
		apiRequest: "TODO",
	},
	{
		i18nKey: "request-4-text",
		apiRequest: "TODO",
	},
	{
		i18nKey: "request-5-text",
		apiRequest: "TODO",
	},
];
