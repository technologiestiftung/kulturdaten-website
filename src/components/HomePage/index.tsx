import styled from "@emotion/styled";
import { useTranslations } from "next-intl";
import { Location } from "../../api/client/models/Location";
import { colors, widths } from "../../common/styleVariables";
import DummyLocationsList from "./DummyLocationsList";
import Head from "./Head";
import RequestCreator from "./RequestCreator";
import Section from "./Section";
import ArtistSection from "../ArtistSection";

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
					<Section>…</Section>
					<Section>
						<ArtistSection />
					</Section>
					<Section>
						<RequestCreator />
						<DummyLocationsList locations={locations} />
					</Section>
					<Section>…</Section>
					<Section>…</Section>
				</Main>
			</PageContainer>
		</>
	);
}
