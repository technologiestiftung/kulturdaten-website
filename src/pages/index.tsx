import type { GetStaticProps } from "next";
import HomePage from "../components/HomePage";
import { loadMessages } from "../services/i18n";

export const getStaticProps: GetStaticProps = async (context) => ({
	props: {
		messages: await loadMessages(context.locale!),
	},
});

export default function Home() {
	return <HomePage />;
}
