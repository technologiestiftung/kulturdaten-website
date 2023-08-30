import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { AnchorLinks } from "../../common/types";
import ArtistSection from "../ArtistSection";
import Header from "../Header";
import Page from "../Page";
import Spacer from "../Spacer";
import DataUsersSection from "./DataUsersSection";
import IntroSection from "./IntroSection";
import NewsletterSection from "./NewsletterSection";
import RequestCreatorAndList from "./RequestCreatorAndList";
import Section from "./Section";

interface InView {
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
		const orderedSections: Array<keyof InView> = ["artistSectionInView", "dataSectionInView"];
		const trueInViewKeys = orderedSections.filter((key) => inView[key]);
		return trueInViewKeys[trueInViewKeys.length - 1] || null;
	};

	const { ref: artistSectionRef, inView: artistSectionInView } = useInView(inViewOptions);
	const { ref: dataSectionRef, inView: dataSectionInView } = useInView(inViewOptions);

	useEffect(() => {
		const latestInView = getLatestInView({ artistSectionInView, dataSectionInView });
		const linkMap: Record<keyof InView, AnchorLinks> = {
			artistSectionInView: AnchorLinks.ARTISTSECTION,
			dataSectionInView: AnchorLinks.DATASECTION,
		};
		const newAnchorLink = latestInView ? linkMap[latestInView] : null;
		setActiveAnchorLink(newAnchorLink);
	}, [artistSectionInView, dataSectionInView]);

	return (
		<Page
			metadata={{
				title: t("meta-title"),
				description: t("meta-description"),
				image: t("meta-image-url"),
			}}
			header={<Header activeAnchorLink={activeAnchorLink} />}
		>
			<Spacer size={64} />
			<Section>
				<IntroSection />
				<RequestCreatorAndList />
			</Section>
			<Section ref={artistSectionRef} id={AnchorLinks.ARTISTSECTION}>
				<ArtistSection />
			</Section>
			<NewsletterSection trackingLocation="artist-section" />
			<Section ref={dataSectionRef} id={AnchorLinks.DATASECTION}>
				<DataUsersSection />
			</Section>
			<NewsletterSection trackingLocation="data-users-section" />
		</Page>
	);
}
