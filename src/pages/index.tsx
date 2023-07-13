import { GetStaticProps } from "next";
import HomePage from "../components/HomePage";

export const getStaticProps: GetStaticProps = async (context) => ({
	props: {
		messages: (await import(`../../i18n/${context.locale}.json`)).default,
	},
});

export default function Home() {
	return <HomePage />;
}
