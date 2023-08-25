import NextHead from "next/head";
import { Metadata } from "..";

interface Props {
	metadata: Metadata;
}

export default function Head({ metadata }: Props) {
	const { title, description } = metadata;
	return (
		<NextHead>
			<title>{title}</title>
			<meta charSet="UTF-8" />
			<meta name="description" content={description} />
			<meta name="viewport" content="width=device-width, initial-scale=1" />
			<link rel="icon" href="/favicon.ico" />
		</NextHead>
	);
}
