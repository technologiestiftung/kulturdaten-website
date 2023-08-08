import { useTranslations } from "next-intl";
import { colors } from "../../../common/styleVariables";
import SectionSubtitle from "../../SectionSubtitle";
import SectionTitle from "../../SectionTitle";

export default function IntroSection() {
	const t = useTranslations("Home.intro-section");
	return (
		<>
			<SectionTitle
				backgroundColor={colors.turquoise}
				label={t("hero-title")}
				headerImage="/images/intro-header-image@2x.jpg"
			/>
			<SectionSubtitle label={t("subtitle")} />
			<p>{t("description")}</p>
		</>
	);
}
