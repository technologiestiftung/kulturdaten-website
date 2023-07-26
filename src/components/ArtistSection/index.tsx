import React from "react";

import { useTranslations } from "next-intl";
import SectionTitle from "../SectionTitle";

const ArtistSection = () => {
	const t = useTranslations("ArtistSection");
	return (
		<>
			<SectionTitle label={t("title")} />
		</>
	);
};

export default ArtistSection;
