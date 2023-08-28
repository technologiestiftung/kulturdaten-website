import Spacer from "../Spacer";
import Text from "../Text";

interface Props {
	label: string;
}

export default function SectionSubtitle({ label }: Props) {
	return (
		<>
			<Spacer size={64} />
			<Text type="h1" as="h2" color="blueDark">
				{label}
			</Text>
			<Spacer size={24} />
		</>
	);
}
