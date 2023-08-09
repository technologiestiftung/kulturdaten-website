import styled from "@emotion/styled";
import { widths } from "../../common/styleVariables";
import ArtistSection from "../ArtistSection";
import Footer from "./Footer";
import Head from "./Head";
import IntroSection from "./IntroSection";
import NewsletterSection from "./NewsletterSection";
import RequestCreatorAndList from "./RequestCreatorAndList";
import Section from "./Section";

const Main = styled.main(() => ({
	width: `min(100%, ${widths.maxContentWidth})`,
	margin: "0 auto",
}));

export default function HomePage() {
	return (
		<>
			<Head />
			<Main>
				<Section>
					<IntroSection />
					<RequestCreatorAndList />
				</Section>
				<NewsletterSection />
				<Section>
					<ArtistSection />
				</Section>
				<NewsletterSection />
				<Section>…</Section>
				<NewsletterSection />
				<Section>…</Section>
				<NewsletterSection />
			</Main>
			<Footer />
		</>
	);
}
