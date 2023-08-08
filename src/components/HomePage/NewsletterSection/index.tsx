import styled from "@emotion/styled";
import { useTranslations } from "next-intl";
import { borderWidths, colors, spacings } from "../../../common/styleVariables";
import ButtonWithIcon from "../../ButtonWithIcon";
import Spacer from "../../Spacer";
import Text from "../../Text";

const PageContainer = styled.div({
	display: "flex",
	alignItems: "center",
	background: colors.white,
	borderTop: `${borderWidths.default}px solid ${colors.blueDark}`,
	borderBottom: `${borderWidths.default}px solid ${colors.blueDark}`,
	padding: spacings.get(5),
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
		<PageContainer>
			<ImageContainer>
				<img src="/images/newsletter-icon.svg" alt="" />
			</ImageContainer>
			<Spacer size={24} />
			<TextContainer>
				<Text type="h3" as="h3" color="blueDark">
					{t("title")}
				</Text>
				<Spacer size={16} />
				<ButtonWithIcon as="a" icon="mail" href="mailto:kontakt@kulturdaten.berlin">
					{t("button")}
				</ButtonWithIcon>
			</TextContainer>
		</PageContainer>
	);
}
