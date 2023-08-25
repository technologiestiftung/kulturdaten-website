import { NextIntlClientProvider } from "next-intl";
import type { AppProps } from "next/app";
import React from "react";
import ReactDOM from "react-dom";
import "react-tooltip/dist/react-tooltip.css";
import GlobalStyles from "../components/GlobalStyles";
import { useAnalytics } from "../hooks/useAnalytics";

/**
 * Accessibility tool - outputs to devtools console on dev only and client-side only.
 * @see https://github.com/dequelabs/axe-core-npm
 */
if (typeof window !== "undefined" && process.env.NODE_ENV !== "production") {
	const loadAxe = async () => {
		const axe = (await import("@axe-core/react")).default;
		axe(React, ReactDOM, 1_000);
	};
	loadAxe();
}

interface Props {
	messages: IntlMessages;
}

export default function App({ Component, pageProps }: AppProps<Props>) {
	useAnalytics();
	return (
		<NextIntlClientProvider messages={pageProps.messages}>
			<GlobalStyles />
			<Component {...pageProps} />
		</NextIntlClientProvider>
	);
}
