import { useTranslations } from "next-intl";
import SectionTitle from "../SectionTitle";
import { colors } from "../../common/styleVariables";
import SectionSubtitle from "../SectionSubtitle";

const ArtistSection = () => {
	const t = useTranslations("Home");

	return (
		<>
			<SectionTitle
				backgroundColor={colors.yellow}
				label={t("artist-section.title")}
				headerImage="/images/kulturakteure-header-image.jpg"
			/>
			<SectionSubtitle label={t("artist-section.subtitle")} />
			<p>{t("artist-section.description")}</p>
		</>
	);
};

export default ArtistSection;