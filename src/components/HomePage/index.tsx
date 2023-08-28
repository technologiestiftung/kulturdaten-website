import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { AnchorLinks } from "../../common/types";
import ArtistSection from "../ArtistSection";
import Header from "../Header";
import Page from "../Page";
import Spacer from "../Spacer";
import CultureInterestedSection from "./CultureInterestedSection";
import DataUsersSection from "./DataUsersSection";
import IntroSection from "./IntroSection";
import NewsletterSection from "./NewsletterSection";
import RequestCreatorAndList from "./RequestCreatorAndList";
import Section from "./Section";

interface InView {
	interestedSectionInView: boolean;
	artistSectionInView: boolean;
	dataSectionInView: boolean;
}

const inViewOptions = {
	threshold: 0.3,
};

export default function HomePage() {
	const t = useTranslations("Home");
	const [activeAnchorLink, setActiveAnchorLink] = useState<AnchorLinks | null>(null);
	const getLatestInView = (inView: InView) => {
		const orderedSections: Array<keyof InView> = [
			"interestedSectionInView",
			"artistSectionInView",
			"dataSectionInView",
		];
		const trueInViewKeys = orderedSections.filter((key) => inView[key]);

		return trueInViewKeys[trueInViewKeys.length - 1] || null;
	};

	const { ref: interestedSectionRef, inView: interestedSectionInView } = useInView(inViewOptions);
	const { ref: artistSectionRef, inView: artistSectionInView } = useInView(inViewOptions);
	const { ref: dataSectionRef, inView: dataSectionInView } = useInView(inViewOptions);

	useEffect(() => {
		const latestInView = getLatestInView({ interestedSectionInView, artistSectionInView, dataSectionInView });

		const linkMap: Record<keyof InView, AnchorLinks> = {
			interestedSectionInView: AnchorLinks.INTERESTEDSECTION,
			artistSectionInView: AnchorLinks.ARTISTSECTION,
			dataSectionInView: AnchorLinks.DATASECTION,
		};
		const newAnchorLink = latestInView ? linkMap[latestInView] : null;
		setActiveAnchorLink(newAnchorLink);
	}, [artistSectionInView, interestedSectionInView, dataSectionInView]);

	return (
		<Page
			// TODO: Update/add more metadata before release.
			metadata={{
				title: t("meta-title"),
				description: t("meta-description"),
			}}
			header={<Header activeAnchorLink={activeAnchorLink} />}
		>
			<Spacer size={32} />
			<Section>
				<IntroSection />
				<Spacer size={64} />
				<RequestCreatorAndList />
			</Section>
			<NewsletterSection trackingPosition="first" />
			<Section ref={artistSectionRef} id={AnchorLinks.ARTISTSECTION}>
				<ArtistSection />
			</Section>
			<NewsletterSection trackingPosition="second" />
			<Section ref={interestedSectionRef} id={AnchorLinks.INTERESTEDSECTION}>
				<CultureInterestedSection />
			</Section>
			<NewsletterSection trackingPosition="third" />
			<Section ref={dataSectionRef} id={AnchorLinks.DATASECTION}>
				<DataUsersSection />
			</Section>
			<NewsletterSection trackingPosition="fourth" />
		</Page>
	);
}
