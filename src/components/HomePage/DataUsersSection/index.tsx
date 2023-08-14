import { useTranslations } from "next-intl";
import { colors } from "../../../common/styleVariables";
import HTMLText from "../../HTMLText";
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
				headingLevel="h1"
				backgroundColor={colors.red}
				headerImage="/images/data-users-header-image@2x.jpg"
			/>
			<SectionSubtitle label={t("subtitle")} />
			<p>{t("description")}</p>
			<Spacer size={64} />
			<UseCases />
			<SectionSubtitle label={t("project-future-subtitle")} />
			<HTMLText text={t.raw("project-future-description")} />
		</>
	);
}
