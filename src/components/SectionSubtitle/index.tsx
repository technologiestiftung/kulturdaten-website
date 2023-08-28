import Spacer from "../Spacer";
import Text, { TextType } from "../Text";

interface Props {
	label: string;
	textType?: TextType;
}

export default function SectionSubtitle({ label, textType = "h2" }: Props) {
	return (
		<>
			<Spacer size={64} />
			<Text type={textType} as="h2" color="blueDark">
				{label}
			</Text>
			<Spacer size={24} />
		</>
	);
}
