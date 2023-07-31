import { useTranslations } from "next-intl";
import SectionTitle from "../SectionTitle";
import { colors } from "../../common/styleVariables";

const ArtistSection = () => {
	const t = useTranslations("Home");

	return (
		<>
			<SectionTitle
				backgroundColor={colors.yellow50}
				label={t("artist-section.title")}
				headerImage="/images/kulturaktuere-header-image.jpg"
			/>
		</>
	);
};

export default ArtistSection;
