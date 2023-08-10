import type { GetStaticProps } from "next";
import ImprintPage from "../components/ImprintPage";
import { loadMessages } from "../services/i18n";

export const getStaticProps: GetStaticProps = async (context) => ({
	props: {
		messages: await loadMessages(context.locale!),
	},
});
export default function Imprint() {
	return <ImprintPage />;
}
