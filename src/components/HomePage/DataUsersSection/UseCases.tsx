import styled from "@emotion/styled";
import { useTranslations } from "next-intl";
import { mediaQueries, spacings } from "../../../common/styleVariables";
import UseCase from "./UseCase";

const List = styled.ul({
	display: "flex",
	flexDirection: "column",
	gap: spacings.get(5),
	listStyle: "none",
	padding: 0,
	[mediaQueries.s]: {
		flexDirection: "row",
	},
});

const Item = styled.li({
	flex: "1 1 30%",
});

export default function UseCases() {
	const t = useTranslations("Home.data-users-section");
	return (
		<List>
			<Item>
				<UseCase
					imageSrc="/images/use-cases/calendar@2x.jpg"
					imageAlt={t("use-case-calendar-image-alt")}
					title={t("use-case-calendar-title")}
					description={t("use-case-calendar-description")}
				/>
			</Item>
			<Item>
				<UseCase
					imageSrc="/images/use-cases/map@2x.jpg"
					imageAlt={t("use-case-map-image-alt")}
					title={t("use-case-map-title")}
					description={t("use-case-map-description")}
				/>
			</Item>
			<Item>
				<UseCase
					imageSrc="/images/use-cases/analytics@2x.jpg"
					imageAlt={t("use-case-analytics-image-alt")}
					title={t("use-case-analytics-title")}
					description={t("use-case-analytics-description")}
				/>
			</Item>
		</List>
	);
}
