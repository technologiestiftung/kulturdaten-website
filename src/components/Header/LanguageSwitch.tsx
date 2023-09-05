import styled from "@emotion/styled";
import { useTranslations } from "next-intl";
import NextLink from "next/link";
import { useRouter } from "next/router";
import useLocale from "../../hooks/useLocale";
import AnchorLink from "./AnchorLink";

const Container = styled.div({});

const Link = AnchorLink.withComponent(NextLink);

export default function LanguageSwitch() {
	const t = useTranslations("Home.header");
	const locale = useLocale();
	const router = useRouter();
	return (
		<Container>
			<Link
				isActive={locale === "de"}
				aria-current={locale === "de"}
				aria-label={t("switch-language-de")}
				href={router.pathname}
				locale="de"
				scroll={false}
			>
				DE
			</Link>{" "}
			/{" "}
			<Link
				isActive={locale === "en"}
				aria-current={locale === "en"}
				aria-label={t("switch-language-en")}
				href={router.pathname}
				locale="en"
				scroll={false}
			>
				EN
			</Link>
		</Container>
	);
}
