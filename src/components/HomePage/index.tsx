import styled from "@emotion/styled";
import { widths } from "../../common/styleVariables";
import ArtistSection from "../ArtistSection";
import Footer from "./Footer";
import Head from "./Head";
import IntroSection from "./IntroSection";
import NewsletterSection from "./NewsletterSection";
import RequestCreatorAndList from "./RequestCreatorAndList";
import Section from "./Section";
import Header from "./Header";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";

const Main = styled.main(() => ({
	width: `min(100%, ${widths.maxContentWidth})`,
	margin: "0 auto",
}));

export interface InView {
	interestedSectionInView: boolean;
	artistSectionInView: boolean;
	dataSectionInView: boolean;
}

export enum AnchorLinks {
	INTERESTEDSECTION = "interestedSection",
	ARTISTSECTION = "artistSection",
	DATASECTION = "dataSection",
}

const inViewOptions = {
	threshold: 0.5,
};
export default function HomePage() {
	const [activeAnchorLink, setActiveAnchorLink] = useState<AnchorLinks | null>(null);
	const getLatestInView = (inView: InView) => {
		const inViewKeys = Object.keys(inView) as Array<keyof InView>;
		const trueInViewKeys = inViewKeys.filter((key) => inView[key]);

		return trueInViewKeys.length === 0
			? null
			: trueInViewKeys.length === 1
			? trueInViewKeys[0]
			: trueInViewKeys[trueInViewKeys.length - 1];
	};

	const { ref: interestedSectionRef, inView: interestedSectionInView } = useInView(inViewOptions);
	const { ref: artistSectionRef, inView: artistSectionInView } = useInView(inViewOptions);
	const { ref: dataSectionRef, inView: dataSectionInView } = useInView(inViewOptions);

	useEffect(() => {
		const latestInView = getLatestInView({ interestedSectionInView, artistSectionInView, dataSectionInView });
		setActiveAnchorLink(
			latestInView === "interestedSectionInView"
				? AnchorLinks.INTERESTEDSECTION
				: latestInView === "artistSectionInView"
				? AnchorLinks.ARTISTSECTION
				: latestInView === "dataSectionInView"
				? AnchorLinks.DATASECTION
				: null
		);
	}, [artistSectionInView, interestedSectionInView, dataSectionInView]);

	return (
		<>
			<Head />
			<Main>
				<Header activeAnchorLink={activeAnchorLink} />
				<Section>
					<IntroSection />
				</Section>
				<NewsletterSection />
				<Section ref={interestedSectionRef} id={AnchorLinks.INTERESTEDSECTION}>
					<RequestCreatorAndList />
				</Section>
				<Section ref={artistSectionRef} id={AnchorLinks.ARTISTSECTION}>
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
