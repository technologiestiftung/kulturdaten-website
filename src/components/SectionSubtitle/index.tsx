import Spacer from "../Spacer";
import Text, { TextType } from "../Text";

interface Props {
	label: string;
	textType?: TextType;
	textAs?: keyof JSX.IntrinsicElements;
}

export default function SectionSubtitle({ label, textType = "h2", textAs = textType }: Props) {
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
