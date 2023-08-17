import styled from "@emotion/styled";
import { useCallback, useEffect, useRef, useState } from "react";
import { useDebouncedCallback } from "use-debounce";
import { colors, spacings, timings } from "../../../../common/styleVariables";
import useLocale from "../../../../hooks/useLocale";
import useOnResize from "../../../../hooks/useOnResize";
import { EventWithAttraction } from "../../../../services/apiRequests";
import LoadingIndicator from "../../../LoadingIndicator";
import Block from "../Block";
import ItemContent from "./ItemContent";

const LoadingContainer = styled.div({
	display: "flex",
	justifyContent: "center",
	padding: spacings.get(5),
});

const List = styled.ul({
	listStyleType: "none",
	padding: spacings.get(5),
	transition: `opacity ${timings.medium} ease-in-out`,
});

const Item = styled.li({
	padding: `${spacings.get(3)}px 0`,
	borderBottom: `2px solid ${colors.blueDark}`,
	"&:first-of-type": {
		paddingTop: 0,
	},
	"&:last-of-type": {
		borderBottom: "none",
		paddingBottom: 0,
	},
});

type Props = {
	isLoading: boolean;
	eventsWithAttractions: EventWithAttraction[];
};

export default function EventList({ isLoading, eventsWithAttractions }: Props) {
	const locale = useLocale();
	const listRef = useRef<HTMLUListElement>(null);
	const loadingHeight = "80px";
	const [listHeight, setListHeight] = useState<number | undefined>(undefined);
	const updateListHeight = () => {
		const element = listRef.current!;
		const { height } = element.getBoundingClientRect();
		setListHeight(height);
	};
	useEffect(() => {
		if (isLoading) {
			return;
		}
		updateListHeight();
	}, [isLoading]);
	const handleResize = useDebouncedCallback(() => updateListHeight(), 200);
	useOnResize(listRef, handleResize);
	const handleExpandedDescription = useCallback(() => updateListHeight(), []);
	return (
		<Block
			padding={0}
			style={{
				height: isLoading || listHeight === undefined ? loadingHeight : listHeight,
				overflow: "hidden",
				transition: `height ${timings.medium} ease-in-out`,
			}}
		>
			{isLoading && (
				<LoadingContainer>
					<LoadingIndicator />
				</LoadingContainer>
			)}
			<List ref={listRef} style={{ opacity: isLoading ? 0 : 1 }}>
				{eventsWithAttractions.map((eventWithAttraction) => (
					<Item key={eventWithAttraction.event.identifier}>
						<ItemContent
							eventWithAttraction={eventWithAttraction}
							locale={locale}
							onExpandedDescription={handleExpandedDescription}
						/>
					</Item>
				))}
			</List>
		</Block>
	);
}
