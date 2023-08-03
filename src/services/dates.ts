import { Locale } from "../hooks/useLocale";

export default function formatDate(date: Date | string, locale: Locale, options?: Intl.DateTimeFormatOptions) {
	const dateObject = typeof date === "string" ? new Date(date) : date;
	const format = new Intl.DateTimeFormat(locale, {
		timeZone: "Europe/Berlin",
		...options,
	});
	return format.format(dateObject);
}
