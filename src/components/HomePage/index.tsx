import styled from "@emotion/styled";
import { useTranslations } from "next-intl";
import Head from "next/head";
import { Location } from "../../api/client/models/Location";

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

const Main = styled.main(() => ({}));

type Props = {
	locations: Location[];
};

export default function HomePage({ locations }: Props) {
	const t = useTranslations("Home");
	return (
		<>
			<HomePageHead />
			<Main>
				{t("title")}
				<br />
				<br />
				<h2>Locations:</h2>
				<ul>
					{locations.map((location) => (
						<li key={location.identifier}>{location.name?.de}</li>
					))}
				</ul>
			</Main>
		</>
	);
}
