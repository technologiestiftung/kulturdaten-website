import type { GetStaticProps } from "next";
import PrivacyPolicyPage from "../components/PrivacyPolicyPage";
import { loadMessages } from "../services/i18n";

export const getStaticProps: GetStaticProps = async (context) => ({
	props: {
		messages: await loadMessages(context.locale!),
	},
});

export default function PrivacyPolicy() {
	return <PrivacyPolicyPage />;
}
