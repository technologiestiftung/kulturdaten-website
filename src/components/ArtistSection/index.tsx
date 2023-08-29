import { useTranslations } from "next-intl";
import { colors } from "../../common/styleVariables";
import SectionDescription from "../SectionDescription";
import SectionSubtitle from "../SectionSubtitle";
import SectionTitle from "../SectionTitle";

export default function ArtistSection() {
	const t = useTranslations("Home.artist-section");

	return (
		<>
			<SectionTitle label={t("title")} headingLevel="h2" backgroundColor={colors.green} />
			<SectionSubtitle label={t("subtitle")} textType="h2" textAs="h3" />
			<SectionDescription description={t.raw("description")} />
			<SectionSubtitle label={t("how-to-subtitle")} textType="h4" textAs="h3" />
			<SectionDescription description={t.raw("how-to-description")} />
		</>
	);
}
