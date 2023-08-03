import styled from "@emotion/styled";
import { colors, spacings } from "../../../../common/styleVariables";
import { PartialEvent } from "../../../../common/types";
import useLocale from "../../../../hooks/useLocale";
import Block from "../Block";

const List = styled(Block)({
	listStyleType: "none",
	padding: spacings.get(3),
}).withComponent("ul");

const Item = styled.li({
	borderBottom: `3px solid ${colors.blueDark}`,
	"&:last-of-type": {
		borderBottom: "none",
	},
});

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
