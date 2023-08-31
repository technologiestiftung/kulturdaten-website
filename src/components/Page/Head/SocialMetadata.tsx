import { useTranslations } from "next-intl";
import Head from "next/head";
import { Metadata } from "..";

interface Props {
	metadata: Metadata;
}

export default function SocialMetadata({ metadata }: Props) {
	const t = useTranslations("Common");
	const socialMetaData = {
		"og:title": metadata.title,
		"og:description": metadata.description,
		"og:image": metadata.image,
		"og:image:alt": metadata.imageAlt,
		"og:url": metadata.url,
		"og:type": "website",
		"og:site_name": t("site-name"),
		"twitter:title": metadata.title,
		"twitter:description": metadata.description,
		"twitter:image": metadata.image,
		"twitter:image:alt": metadata.imageAlt,
		"twitter:card": "summary_large_image",
		// "twitter:site": "@TSBBerlin",
	};
	const socialMetaDataEntries = Object.entries(socialMetaData).filter(([, value]) => !!value);
	return (
		<Head>
			{socialMetaDataEntries.map(([key, value]) => (
				<meta key={key} property={key} content={value} />
			))}
		</Head>
	);
}
