import { useRouter } from "next/router";

export type Locale = "de" | "en";

export default function useLocale(): Locale {
	const router = useRouter();
	const fallbackLocale: Locale = "de";
	const routerLocale = router.locale as Locale;
	const locale = routerLocale || fallbackLocale;
	return locale;
}
