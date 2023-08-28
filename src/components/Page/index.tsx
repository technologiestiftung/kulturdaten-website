import styled from "@emotion/styled";
import { ReactNode } from "react";
import { widths } from "../../common/styleVariables";
import Footer from "./Footer";
import Head from "./Head";

const Main = styled.main(() => ({
	width: `min(100%, ${widths.maxContentWidth})`,
	margin: "0 auto",
}));

export interface Metadata {
	title: string;
	description?: string;
}

interface Props {
	children: ReactNode;
	metadata: Metadata;
	header?: ReactNode;
}

export default function Page({ children, metadata, header }: Props) {
	return (
		<>
			<Head metadata={metadata} />
			{header}
			<Main>{children}</Main>
			<Footer />
		</>
	);
}
