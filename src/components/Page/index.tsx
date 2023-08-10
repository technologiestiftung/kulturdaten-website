import styled from "@emotion/styled";
import { ReactNode } from "react";
import { widths } from "../../common/styleVariables";
import Footer from "./Footer";
import Head from "./Head";

const Main = styled.main(() => ({
	width: `min(100%, ${widths.maxContentWidth})`,
	margin: "0 auto",
}));

type Props = {
	children: ReactNode;
};

export default function Page({ children }: Props) {
	return (
		<>
			<Head />
			<Main>{children}</Main>
			<Footer />
		</>
	);
}
