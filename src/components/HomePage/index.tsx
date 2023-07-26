import styled from "@emotion/styled";
import { useTranslations } from "next-intl";
import { Location } from "../../api/client/models/Location";
import { colors, widths } from "../../common/styleVariables";
import DummyLocationsList from "./DummyLocationsList";
import Head from "./Head";
import Section from "./Section";

const PageContainer = styled.div(() => ({
	width: `min(100%, ${widths.maxContentWidth})`,
	margin: "0 auto",
}));

const Main = styled.main(() => ({}));

type Props = {
	locations: Location[];
};

export default function HomePage({ locations }: Props) {
	const t = useTranslations("Home");
	return (
		<>
			<Head />
			<PageContainer>
				<Main>
					<h1>{t("title")}</h1>
					<Section backgroundColor={colors.blueLight}>…</Section>
					<Section backgroundColor={colors.lind60}>
						<DummyLocationsList locations={locations} />
					</Section>
					<Section backgroundColor={colors.yellow50}>…</Section>
					<Section backgroundColor={colors.grayLight}>…</Section>
				</Main>
			</PageContainer>
		</>
	);
}
