import { useTranslations } from "next-intl";
import { useCallback, useState } from "react";
import { getRandomIndexWithout } from "../../../../services/arrays";
import Button from "../../../Button";
import Hr from "../../../Hr";
import { REQUESTS, Request } from "../requests";
import AnimatedText from "./AnimatedText";
import Block from "./Block";
import ButtonContainer from "./ButtonContainer";

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

type Props = {
	onStartRequestCreation(): void;
	onRequestCreated(request: Request): void;
};

export default function RequestCreator({ onStartRequestCreation, onRequestCreated }: Props) {
	const { request, randomizeRequest } = useRequest();
	const t = useTranslations("Home.for-interested");
	const requestText = request ? t(request.i18nKey) : "";
	const handleCreateRequest = useCallback(() => {
		onStartRequestCreation();
		randomizeRequest();
	}, [onStartRequestCreation, randomizeRequest]);
	const handleAnimationFinished = useCallback(() => {
		if (request) {
			onRequestCreated(request);
		}
	}, [onRequestCreated, request]);
	return (
		<Block>
			<ButtonContainer>
				<Button onClick={handleCreateRequest}>{t("button-create-request")}</Button>
			</ButtonContainer>
			<Hr />
			<AnimatedText text={requestText} onAnimationFinished={handleAnimationFinished} />
		</Block>
	);
}