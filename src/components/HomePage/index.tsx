import styled from "@emotion/styled";
import { useTranslations } from "next-intl";
import { Location } from "../../api/client/models/Location";
import { breakpoints, widths } from "../../common/styleVariables";
import Head from "./Head";
import RequestCreatorAndList from "./RequestCreatorAndList";
import Section from "./Section";
import ArtistSection from "../ArtistSection";

const PageContainer = styled.div(() => ({
	width: `min(100%, ${widths.maxContentWidth})`,
	margin: "0 auto",
}));

const Main = styled.main(() => ({
	maxWidth: `${breakpoints.m}px`,
	margin: "0 auto",
}));

type Props = {
	locations: Location[];
};

export default function HomePage({}: Props) {
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
						<RequestCreatorAndList />
					</Section>
					<Section>…</Section>
					<Section>…</Section>
				</Main>
			</PageContainer>
		</>
	);
}
