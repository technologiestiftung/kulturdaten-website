import { useTranslations } from "next-intl";
import { useCallback, useEffect, useState } from "react";
import { getRandomIndexWithout } from "../../../services/arrays";
import Button from "../../Button";
import Hr from "../../Hr";
import Block from "./Block";
import ButtonContainer from "./ButtonContainer";
import Text from "./Text";
import TextCursor from "./TextCursor";
import { REQUESTS, Request } from "./requests";

export default function RequestCreator() {
	const [request, setRequest] = useState<Request>(REQUESTS[0]);
	const [text, setText] = useState("");
	const t = useTranslations("Home");
	// @ts-ignore No TypeScript support for dynamically-created i18n keys.
	const requestText = t(`for-interested.${request.i18nKey}`);
	const randomizeRequest = useCallback(async () => {
		const currentIndex = REQUESTS.indexOf(request);
		const nextIndex = getRandomIndexWithout(REQUESTS, currentIndex);
		const nextRequest = REQUESTS[nextIndex];
		setRequest(nextRequest);
	}, [request]);
	useEffect(() => {
		const timeoutIds: number[] = [];
		setText("");
		for (let index = 0; index < requestText.length; index++) {
			const character = requestText[index];
			const CHARACTER_DELAY_MS = 30;
			const delay = index * CHARACTER_DELAY_MS;
			const timeoutId = window.setTimeout(() => {
				setText((prevText) => prevText + character);
			}, delay);
			timeoutIds.push(timeoutId);
		}
		return () => {
			timeoutIds.forEach((timeoutId) => window.clearTimeout(timeoutId));
		};
	}, [requestText]);
	return (
		<Block>
			<ButtonContainer>
				<Button onClick={randomizeRequest}>{t("for-interested.button-create-request")}</Button>
			</ButtonContainer>
			<Hr />
			<Text>
				{text}
				<TextCursor />
			</Text>
		</Block>
	);
}
