import { useEffect, useState } from "react";
import TextCursor from "./TextCursor";

type Props = {
	text: string;
	onAnimationFinished(): void;
};

export default function AnimatedText({ text: incomingText, onAnimationFinished }: Props) {
	const [text, setText] = useState("");
	useEffect(() => {
		const timeoutIds: number[] = [];
		setText("");
		for (let index = 0; index < incomingText.length; index++) {
			const character = incomingText[index];
			const CHARACTER_DELAY_MS = 30;
			const delay = index * CHARACTER_DELAY_MS;
			const timeoutId = window.setTimeout(() => {
				setText((prevText) => prevText + character);
				const isLast = index === incomingText.length - 1;
				if (isLast) {
					onAnimationFinished();
				}
			}, delay);
			timeoutIds.push(timeoutId);
		}
		return () => {
			timeoutIds.forEach((timeoutId) => window.clearTimeout(timeoutId));
		};
	}, [incomingText, onAnimationFinished]);
	return (
		<>
			{text}
			<TextCursor />
		</>
	);
}
