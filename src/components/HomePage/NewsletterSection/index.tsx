import styled from "@emotion/styled";
import { useTranslations } from "next-intl";
import { borderWidths, colors, spacings } from "../../../common/styleVariables";
import { trackEvent } from "../../../services/analytics";
import ButtonWithIcon from "../../ButtonWithIcon";
import Spacer from "../../Spacer";
import Text from "../../Text";

const Container = styled.div({
	display: "flex",
	padding: `${spacings.get(8)} ${spacings.horizontalPagePadding}`,
	backgroundColor: colors.white,
	borderTop: `${borderWidths.default} solid ${colors.blueDark}`,
	borderBottom: `${borderWidths.default} solid ${colors.blueDark}`,
});

const ImageContainer = styled.div({
	flex: "0 1 200px",
});

const TextContainer = styled.div({
	flex: "1 1 auto",
});

type Props = {
	trackingPosition: string;
};

export default function NewsletterSection({ trackingPosition }: Props) {
	const t = useTranslations("Home.newsletter-section");
	const trackButtonClick = () => {
		trackEvent("Homepage", "Click 'Contact us' button", trackingPosition);
	};
	return (
		<Container>
			<ImageContainer>
				<img src="/images/newsletter-icon.svg" alt="" />
			</ImageContainer>
			<Spacer size={24} />
			<TextContainer>
				<Text type="h3" as="h2" color="blueDark">
					{t("title")}
				</Text>
				<Spacer size={16} />
				<ButtonWithIcon as="a" icon="mail" href="mailto:kontakt@kulturdaten.berlin" onClick={trackButtonClick}>
					{t("button")}
				</ButtonWithIcon>
			</TextContainer>
		</Container>
	);
}
