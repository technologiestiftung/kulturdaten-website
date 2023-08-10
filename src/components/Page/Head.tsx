import { useTranslations } from "next-intl";
import NextHead from "next/head";

export default function Head() {
	const t = useTranslations("Home");
	return (
		<NextHead>
			{/* TODO: Update/add metadata before release. */}
			<title>{t("meta-title")}</title>
			<meta name="description" content={t("meta-description")} />
			<meta name="viewport" content="width=device-width, initial-scale=1" />
			<link rel="icon" href="/favicon.ico" />
		</NextHead>
	);
}
