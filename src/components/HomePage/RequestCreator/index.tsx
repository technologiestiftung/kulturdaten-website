import { useTranslations } from "next-intl";
import { useCallback, useState } from "react";
import { getRandomIndexWithout } from "../../../services/arrays";
import Button from "../../Button";
import Hr from "../../Hr";
import AnimatedText from "./AnimatedText";
import Block from "./Block";
import ButtonContainer from "./ButtonContainer";
import { REQUESTS, Request } from "./requests";

function useRequest() {
	const [request, setRequest] = useState<Request | null>(null);
	const randomizeRequest = useCallback(() => {
		const currentIndex = request ? REQUESTS.indexOf(request) : -1;
		const nextIndex = getRandomIndexWithout(REQUESTS, currentIndex);
		const nextRequest = REQUESTS[nextIndex];
		setRequest(nextRequest);
	}, [request]);
	return { request, randomizeRequest };
}

export default function RequestCreator() {
	const { request, randomizeRequest } = useRequest();
	const t = useTranslations("Home");
	// @ts-ignore No TypeScript support for dynamically-created i18n keys.
	const requestText = request ? t(`for-interested.${request.i18nKey}`) : "";
	return (
		<Block>
			<ButtonContainer>
				<Button onClick={randomizeRequest}>{t("for-interested.button-create-request")}</Button>
			</ButtonContainer>
			<Hr />
			<AnimatedText text={requestText} />
		</Block>
	);
}
