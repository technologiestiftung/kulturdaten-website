import { NextIntlClientProvider } from "next-intl";
import type { AppProps } from "next/app";

type CustomPageProps = {
	messages: IntlMessages;
};

export default function App({ Component, pageProps }: AppProps<CustomPageProps>) {
	return (
		<NextIntlClientProvider messages={pageProps.messages}>
			<Component {...pageProps} />
		</NextIntlClientProvider>
	);
}
