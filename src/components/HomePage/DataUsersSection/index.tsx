import { useTranslations } from "next-intl";
import { colors } from "../../../common/styleVariables";
import SectionDescription from "../../SectionDescription";
import SectionSubtitle from "../../SectionSubtitle";
import SectionTitle from "../../SectionTitle";
import Spacer from "../../Spacer";
import UseCases from "./UseCases";

export default function DataUsersSection() {
	const t = useTranslations("Home.data-users-section");
	return (
		<>
			<SectionTitle
				label={t("title")}
				headingLevel="h2"
				backgroundColor={colors.red}
				headerImage="/images/data-users-header-image@2x.jpg"
			/>
			<SectionSubtitle label={t("subtitle")} textType="h2" textAs="h3" />
			<SectionDescription description={t.raw("description")} />
			<Spacer size={64} />
			<UseCases />
			<SectionSubtitle label={t("how-to-subtitle")} textType="h4" textAs="h3" />
			<SectionDescription description={t.raw("how-to-description")} />
		</>
	);
}
