import Spacer from "../Spacer";
import Text, { TextType } from "../Text";

interface Props {
	label: string;
	textType?: TextType;
	textAs?: keyof JSX.IntrinsicElements;
}

export default function SectionSubtitle({ label, textType = "h1", textAs = "h2" }: Props) {
	return (
		<>
			<Spacer size={64} />
			<Text type={textType} as={textAs} color="blueDark">
				{label}
			</Text>
			<Spacer size={24} />
		</>
	);
}
