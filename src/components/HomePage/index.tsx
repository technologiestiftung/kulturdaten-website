import styled from "@emotion/styled";
import { breakpoints, widths } from "../../common/styleVariables";
import ArtistSection from "../ArtistSection";
import Spacer from "../Spacer";
import Head from "./Head";
import IntroSection from "./IntroSection";
import RequestCreatorAndList from "./RequestCreatorAndList";
import Section from "./Section";

const PageContainer = styled.div(() => ({
	width: `min(100%, ${widths.maxContentWidth})`,
	margin: "0 auto",
}));

const Main = styled.main(() => ({
	maxWidth: `${breakpoints.m}px`,
	margin: "0 auto",
}));

export default function HomePage() {
	return (
		<>
			<Head />
			<PageContainer>
				<Main>
					<Section>
						<IntroSection />
						<RequestCreatorAndList />
						<Spacer size={100} />
						<ArtistSection />
					</Section>
				</Main>
			</PageContainer>
		</>
	);
}
