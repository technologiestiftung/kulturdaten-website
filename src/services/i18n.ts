export async function loadMessages(locale: string) {
	return (await import(`../../i18n/${locale}.json`)).default;
}
