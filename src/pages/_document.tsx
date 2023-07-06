import { Head, Html, Main, NextScript } from "next/document";
import GlobalStyles from "../components/GlobalStyles";

export default function Document() {
	return (
		<Html lang="en">
			<Head />
			<GlobalStyles />
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
