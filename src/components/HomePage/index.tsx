import styled from "@emotion/styled";
import { useTranslations } from "next-intl";
import { Location } from "../../api/client/models/Location";
import DummyLocationsList from "./DummyLocationsList";
import Head from "./Head";

const Main = styled.main(() => ({}));

type Props = {
	locations: Location[];
};

export default function HomePage({ locations }: Props) {
	const t = useTranslations("Home");
	return (
		<>
			<Head />
			<Main>
				<h1>{t("title")}</h1>
				<DummyLocationsList locations={locations} />
			</Main>
		</>
	);
}
