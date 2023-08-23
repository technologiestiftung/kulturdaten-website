import { NextIntlClientProvider } from "next-intl";
import type { AppProps } from "next/app";
import "react-tooltip/dist/react-tooltip.css";
import GlobalStyles from "../components/GlobalStyles";
import { useAnalytics } from "../hooks/useAnalytics";

type CustomPageProps = {
	messages: IntlMessages;
};

export default function App({ Component, pageProps }: AppProps<CustomPageProps>) {
	useAnalytics();
	return (
		<NextIntlClientProvider messages={pageProps.messages}>
			<GlobalStyles />
			<Component {...pageProps} />
		</NextIntlClientProvider>
	);
}
