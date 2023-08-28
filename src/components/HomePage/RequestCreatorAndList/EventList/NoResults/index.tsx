import styled from "@emotion/styled";
import { useTranslations } from "next-intl";
import { spacings } from "../../../../../common/styleVariables";
import Icon from "../../../../Icon";

const Container = styled.div({
	display: "flex",
	gap: spacings.get(1),
	padding: spacings.get(5),
});

export default function NoResults() {
	const t = useTranslations("Home.for-interested");
	return (
		<Container>
			<Icon name="x-circle" /> {t("no-results")}
		</Container>
	);
}
