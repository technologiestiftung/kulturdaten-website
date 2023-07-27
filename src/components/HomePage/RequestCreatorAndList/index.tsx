import RequestCreator from "./RequestCreator";

export default function RequestCreatorAndList() {
	return (
		<>
			<RequestCreator
				onShowRequest={(request) => {
					console.log("onShowRequest: ", request);
				}}
			/>
		</>
	);
}
