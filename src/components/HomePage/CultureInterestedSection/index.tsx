import { useTranslations } from "next-intl";
import { colors } from "../../../common/styleVariables";
import SectionDescription from "../../SectionDescription";
import SectionSubtitle from "../../SectionSubtitle";
import SectionTitle from "../../SectionTitle";

export default function CultureInterestedSection() {
	const t = useTranslations("Home.culture-interested-section");
	return (
		<>
			<SectionTitle
				label={t("title")}
				headingLevel="h2"
				backgroundColor={colors.yellow}
				headerImage="/images/interested-header-image@2x.jpg"
			/>
			<SectionSubtitle label={t("subtitle")} />
			<SectionDescription description={t.raw("description")} />
		</>
	);
}
