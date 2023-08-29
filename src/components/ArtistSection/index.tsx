import { useTranslations } from "next-intl";
import { colors } from "../../common/styleVariables";
import SectionDescription from "../SectionDescription";
import SectionSubtitle from "../SectionSubtitle";
import SectionTitle from "../SectionTitle";

export default function ArtistSection() {
	const t = useTranslations("Home.artist-section");

	return (
		<>
			<SectionTitle
				label={t("title")}
				headingLevel="h2"
				backgroundColor={colors.green}
				headerImage="/images/kulturakteure-header-image.jpg"
			/>
			<SectionSubtitle label={t("subtitle")} textType="h2" textAs="h3" />
			<SectionDescription description={t.raw("description")} />
		</>
	);
}
