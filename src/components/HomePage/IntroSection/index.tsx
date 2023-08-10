import { useTranslations } from "next-intl";
import { colors } from "../../../common/styleVariables";
import SectionSubtitle from "../../SectionSubtitle";
import SectionTitle from "../../SectionTitle";

export default function IntroSection() {
	const t = useTranslations("Home.intro-section");
	return (
		<>
			<SectionTitle
				label={t("hero-title")}
				headingLevel="h1"
				backgroundColor={colors.turquoise}
				headerImage="/images/intro-header-image@2x.jpg"
			/>
			<SectionSubtitle label={t("subtitle")} />
			<p>{t("description")}</p>
		</>
	);
}
