import { useTranslations } from "next-intl";
import Page from "../Page";

export default function ImprintPage() {
	const t = useTranslations("Imprint");
	return (
		<Page
			// TODO: Update/add more metadata before release.
			metadata={{
				title: t("meta-title"),
			}}
		>
			Hallooo.
		</Page>
	);
}
