import type { GetServerSideProps } from "next";
import apiClient from "../api/client";
import { Location } from "../api/client/models/Location";
import HomePage from "../components/HomePage";
import { loadMessages } from "../services/i18n";

type Props = {
	locations: Location[];
};

export const getServerSideProps: GetServerSideProps<Props> = async (context) => {
	const { locations = [] } = await apiClient.locations.getLocations();
	return {
		props: {
			messages: await loadMessages(context.locale!),
			locations,
		},
	};
};

export default function Home({ locations }: Props) {
	return <HomePage locations={locations} />;
}
