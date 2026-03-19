import { useTranslations } from "next-intl";
import { colors } from "../../../common/styleVariables";
import SectionDescription from "../../SectionDescription";
import SectionSubtitle from "../../SectionSubtitle";
import SectionTitle from "../../SectionTitle";
import CompletionSection from "../../Completion";

export default function IntroSection() {
	const t = useTranslations("Home.intro-section");
	return (
		<>
			<SectionTitle
				label={t("hero-title")}
				headingLevel="h1"
				backgroundColor={colors.magenta}
				headerImage="/images/intro-header-image@2x.jpg"
			/>
			<CompletionSection label={t("completion")} />
			<SectionSubtitle label={t("subtitle")} />
			<SectionDescription description={t.raw("description")} />
		</>
	);
}
