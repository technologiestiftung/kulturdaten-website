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

export default function HomePage() {
	return (
		<>
			<HomePageHead />
			<main>Kulturdaten.berlin website coming soon!</main>
		</>
	);
}
