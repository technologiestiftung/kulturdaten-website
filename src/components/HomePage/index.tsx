import styled from "@emotion/styled";
import { useTranslations } from "next-intl";
import Head from "next/head";

function HomePageHead() {
	return (
		<Head>
			{/* TODO: Update/add metadata before release. */}
			<title>Kulturdaten.berlin website</title>
			<meta name="description" content="Some description" />
			<meta name="viewport" content="width=device-width, initial-scale=1" />
			<link rel="icon" href="/favicon.ico" />
		</Head>
	);
}

const Main = styled.main(() => ({
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
	minHeight: "200px",
}));

export default function HomePage() {
	const t = useTranslations("Home");
	return (
		<>
			<HomePageHead />
			<Main>{t("title")}</Main>
		</>
	);
}
