import styled from "@emotion/styled";
import { useEffect, useRef, useState } from "react";
import { colors, spacings, timings } from "../../../../common/styleVariables";
import { PartialEvent } from "../../../../common/types";
import useLocale from "../../../../hooks/useLocale";
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
	events: PartialEvent[];
};

export default function EventList({ isLoading, events }: Props) {
	const locale = useLocale();
	const listRef = useRef<HTMLUListElement>(null);
	const loadingHeight = "80px";
	const [listHeight, setListHeight] = useState<number | undefined>(undefined);
	useEffect(() => {
		if (isLoading) {
			return;
		}
		const element = listRef.current!;
		const rect = element.getBoundingClientRect();
		setListHeight(rect.height);
	}, [isLoading]);
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
				{events.map((event) => (
					<Item key={event.identifier}>
						<ItemContent event={event} locale={locale} />
					</Item>
				))}
			</List>
		</Block>
	);
}
