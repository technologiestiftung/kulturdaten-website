import styled from "@emotion/styled";
import { useTranslations } from "next-intl";
import { colors, spacings, widths } from "../../../common/styleVariables";
import Link, { LinkInternal } from "../../Link";
import Spacer from "../../Spacer";

const StyledFooter = styled.footer({
	width: `min(100%, ${widths.maxContentWidth})`,
	padding: `${spacings.get(10)} ${spacings.horizontalPagePadding}`,
	margin: "0 auto",
	color: colors.blueDark,
});

const Row = styled.div({
	display: "flex",
	flexWrap: "wrap",
	gap: spacings.get(5),
	justifyContent: "space-between",
});

const Address = styled.address({
	flex: "0 1 40%",
	fontStyle: "normal",
});

const Title = styled.strong();

const Content = styled.div({
	whiteSpace: "pre-line",
});

const PageLinks = styled.div({
	flex: "0 1 40%",
	display: "flex",
	flexDirection: "column",
});

const LogoTitle = styled.div({
	marginBottom: spacings.get(2),
});

export default function Footer() {
	const t = useTranslations("Home.footer");
	return (
		<StyledFooter>
			<Row>
				<Address>
					<Title>{t("address-title")}</Title>
					<Content>{t("address-content")}</Content>
					<br />
					<Title>{t("email-title")}</Title>
					<Content>
						<Link href={`mailto:${t("email-content")}`}>{t("email-content")}</Link>
					</Content>
				</Address>
				<PageLinks>
					<LinkInternal href="/privacy-policy">{t("link-privacy-policy")}</LinkInternal>
					<Spacer size={4} />
					<LinkInternal href="/imprint">{t("link-imprint")}</LinkInternal>
				</PageLinks>
			</Row>
			<Spacer size={50} />
			<Row>
				<div>
					<LogoTitle>{t("project-by")}</LogoTitle>
					<a href="https://www.technologiestiftung-berlin.de/" target="_blank" rel="noreferrer">
						<img src="/images/tsb-logo.svg" width={220} alt={t("tsb-logo-alt")} />
					</a>
				</div>
				<div>
					<LogoTitle>{t("supported-by")}</LogoTitle>
					<a href="https://www.berlin.de/sen/kultgz/" target="_blank" rel="noreferrer">
						<img src="/images/sen-kugz-logo.svg" width={400} alt={t("sen-kugz-logo-alt")} />
					</a>
				</div>
			</Row>
		</StyledFooter>
	);
}
