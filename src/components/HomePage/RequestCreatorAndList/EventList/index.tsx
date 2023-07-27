import styled from "@emotion/styled";
import { Event } from "../../../../api/client/models/Event";

const List = styled.ul({});

const Item = styled.li({});

type Props = {
	events: Event[];
};

export default function EventList({ events }: Props) {
	return (
		<List>
			{events.map((event) => (
				<Item key={event.identifier}>{event.title?.de}</Item>
			))}
		</List>
	);
}
