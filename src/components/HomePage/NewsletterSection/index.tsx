import styled from "@emotion/styled";
import { useTranslations } from "next-intl";
import { borderWidths, colors } from "../../../common/styleVariables";
import ButtonWithIcon from "../../ButtonWithIcon";
import Spacer from "../../Spacer";
import Text from "../../Text";
import Section from "../Section";

const PageContainer = styled.div({
	display: "flex",
});

const ImageContainer = styled.div({
	flex: "0 1 200px",
});

const TextContainer = styled.div({
	flex: "1 1 auto",
});

export default function NewsletterSection() {
	const t = useTranslations("Home.newsletter-section");
	return (
		<Section
			backgroundColor="white"
			style={{
				borderTop: `${borderWidths.default}px solid ${colors.blueDark}`,
				borderBottom: `${borderWidths.default}px solid ${colors.blueDark}`,
			}}
		>
			<PageContainer>
				<ImageContainer>
					<img src="/images/newsletter-icon.svg" alt="" />
				</ImageContainer>
				<Spacer size={24} />
				<TextContainer>
					<Text type="h3" as="h2" color="blueDark">
						{t("title")}
					</Text>
					<Spacer size={16} />
					<ButtonWithIcon as="a" icon="mail" href="mailto:kontakt@kulturdaten.berlin">
						{t("button")}
					</ButtonWithIcon>
				</TextContainer>
			</PageContainer>
		</Section>
	);
}
