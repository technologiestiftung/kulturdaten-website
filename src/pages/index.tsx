import type { GetServerSideProps } from "next";
import HomePage from "../components/HomePage";
import { loadMessages } from "../services/i18n";

export const getServerSideProps: GetServerSideProps = async (context) => {
	return {
		props: {
			messages: await loadMessages(context.locale!),
		},
	};
};

export default function Home() {
	return <HomePage />;
}
