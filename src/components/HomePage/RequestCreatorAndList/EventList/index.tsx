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
import NoResults from "./NoResults";

const LoadingContainer = styled.div({
	display: "flex",
	justifyContent: "center",
});

const List = styled.ul({
	listStyleType: "none",
	padding: 0,
	transition: `opacity ${timings.medium} ease-in-out`,
});

const Item = styled.li({
	padding: `${spacings.get(3)} 0`,
	borderBottom: `2px solid ${colors.blueDark}`,
	"&:first-of-type": {
		paddingTop: 0,
	},
	"&:last-of-type": {
		borderBottom: "none",
		paddingBottom: 0,
	},
});

interface Props {
	isLoading: boolean;
	eventsWithAttractions: EventWithAttraction[];
}

export default function EventList({ isLoading, eventsWithAttractions }: Props) {
	const blockPadding = spacings.getNumber(5);
	const locale = useLocale();
	const listRef = useRef<HTMLUListElement>(null);
	const [listHeight, setListHeight] = useState<number | undefined>(undefined);
	const updateListHeight = () => {
		const element = listRef.current;
		if (!element) {
			return;
		}
		const { height } = element.getBoundingClientRect();
		setListHeight(height);
	};
	const getBlockHeight = () => {
		if (isLoading || eventsWithAttractions.length === 0) {
			return undefined;
		}
		return (listHeight || 0) + blockPadding * 2;
	};
	useEffect(() => {
		if (isLoading) {
			return;
		}
		updateListHeight();
	}, [isLoading]);
	const handleResize = useDebouncedCallback(() => updateListHeight(), 200);
	useOnResize(listRef.current, handleResize);
	const handleExpandedDescription = useCallback(() => updateListHeight(), []);
	return (
		<Block
			padding={blockPadding}
			style={{
				height: getBlockHeight(),
				overflow: "hidden",
				transition: `height ${timings.medium} ease-in-out`,
			}}
		>
			{isLoading && (
				<LoadingContainer>
					<LoadingIndicator />
				</LoadingContainer>
			)}
			{!isLoading && (
				<>
					{eventsWithAttractions.length ? (
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
					) : (
						<NoResults />
					)}
				</>
			)}
		</Block>
	);
}
