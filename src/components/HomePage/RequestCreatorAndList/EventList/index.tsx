import styled from "@emotion/styled";
import { Event } from "../../../../api/client/models/Event";
import useLocale from "../../../../hooks/useLocale";

const List = styled.ul({});

const Item = styled.li({});

type Props = {
	events: Event[];
};

export default function EventList({ events }: Props) {
	const locale = useLocale();
	return (
		<List>
			{events.map((event) => (
				<Item key={event.identifier}>{event.title?.[locale]}</Item>
			))}
		</List>
	);
}
