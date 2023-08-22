import { useEffect } from "react";

/**
 * Overrides the <html lang> attribute.
 */
export default function useHtmlLang(language: string) {
	useEffect(() => {
		if (document.documentElement.lang !== language) {
			document.documentElement.lang = language;
		}
	}, [language]);
}
