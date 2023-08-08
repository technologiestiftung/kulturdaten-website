import { useRouter } from "next/router";

export type Locale = "de" | "en";

export const fallbackLocale: Locale = "de";

export default function useLocale(): Locale {
	const router = useRouter();
	const routerLocale = router.locale as Locale;
	const locale = routerLocale || fallbackLocale;
	return locale;
}
