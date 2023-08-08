import { NextIntlClientProvider } from "next-intl";
import type { AppProps } from "next/app";
import "react-tooltip/dist/react-tooltip.css";
import GlobalStyles from "../components/GlobalStyles";

type CustomPageProps = {
	messages: IntlMessages;
};

export default function App({ Component, pageProps }: AppProps<CustomPageProps>) {
	return (
		<NextIntlClientProvider messages={pageProps.messages}>
			<GlobalStyles />
			<Component {...pageProps} />
		</NextIntlClientProvider>
	);
}
