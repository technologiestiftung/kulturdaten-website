import styled from "@emotion/styled";
import { ReactNode } from "react";
import { widths } from "../../common/styleVariables";
import Footer from "./Footer";
import Head from "./Head";

const Main = styled.main(() => ({
	width: `min(100%, ${widths.maxContentWidth})`,
	margin: "0 auto",
}));

export type Metadata = {
	title: string;
	description?: string;
};

type Props = {
	children: ReactNode;
	metadata: Metadata;
};

export default function Page({ children, metadata }: Props) {
	return (
		<>
			<Head metadata={metadata} />
			<Main>{children}</Main>
			<Footer />
		</>
	);
}