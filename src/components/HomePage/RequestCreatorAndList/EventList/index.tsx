import styled from "@emotion/styled";
import { PartialEvent } from "../../../../common/types";
import useLocale from "../../../../hooks/useLocale";

const List = styled.ul({});

const Item = styled.li({});

type Props = {
	events: PartialEvent[];
};

export default function EventList({ events }: Props) {
	const locale = useLocale();
	return (
		<List>
			{events.map((event) => (
				<Item key={event.identifier}>{event.attractions?.[0].referenceLabel?.[locale]}</Item>
			))}
		</List>
	);
}
