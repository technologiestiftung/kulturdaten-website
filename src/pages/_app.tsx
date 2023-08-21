import { init } from "@socialgouv/matomo-next";
import { NextIntlClientProvider } from "next-intl";
import type { AppProps } from "next/app";
import { useEffect, useRef } from "react";
import "react-tooltip/dist/react-tooltip.css";
import GlobalStyles from "../components/GlobalStyles";

const MATOMO_URL = process.env.NEXT_PUBLIC_MATOMO_URL as string;
const MATOMO_SITE_ID = process.env.NEXT_PUBLIC_MATOMO_SITE_ID as string;

type CustomPageProps = {
	messages: IntlMessages;
};

export default function App({ Component, pageProps }: AppProps<CustomPageProps>) {
	const matomoInitialized = useRef(false);
	useEffect(() => {
		if (MATOMO_URL && MATOMO_SITE_ID && matomoInitialized.current === false) {
			init({ url: MATOMO_URL, siteId: MATOMO_SITE_ID });
		}
		return () => {
			matomoInitialized.current = true;
		};
	}, []);
	return (
		<NextIntlClientProvider messages={pageProps.messages}>
			<GlobalStyles />
			<Component {...pageProps} />
		</NextIntlClientProvider>
	);
}
