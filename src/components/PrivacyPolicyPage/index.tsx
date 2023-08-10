import { useTranslations } from "next-intl";
import Page from "../Page";

export default function PrivacyPolicyPage() {
	const t = useTranslations("Privacy-Policy");
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
