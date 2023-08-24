import { useTranslations } from "next-intl";
import { useCallback, useState } from "react";
import { trackEvent } from "../../../../services/analytics";
import { getRandomIndexWithout } from "../../../../services/arrays";
import ButtonWithIcon from "../../../ButtonWithIcon";
import Spacer from "../../../Spacer";
import Block from "../Block";
import { REQUESTS, Request } from "../requests";
import AnimatedText from "./AnimatedText";
import Text from "../../../Text";

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
		trackEvent("Homepage", "Create random request");
	}, [onStartRequestCreation, randomizeRequest]);
	const handleAnimationFinished = useCallback(() => {
		if (request) {
			onRequestCreated(request);
		}
	}, [onRequestCreated, request]);
	return (
		<>
			<ButtonWithIcon icon="play" onClick={handleCreateRequest}>
				{t("button-create-request")}
			</ButtonWithIcon>
			<Spacer size={30} />
			<Block>
				<Text type="p">
					<AnimatedText text={requestText} onAnimationFinished={handleAnimationFinished} />
				</Text>
			</Block>
		</>
	);
}
