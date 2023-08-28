import styled from "@emotion/styled";
import { borderWidths, colors } from "../../../common/styleVariables";
import SectionDescription from "../../SectionDescription";
import Spacer from "../../Spacer";
import Text from "../../Text";

const Image = styled.img({
	border: `${borderWidths.default} solid ${colors.blueDark}`,
});

interface Props {
	imageSrc: string;
	imageAlt: string;
	title: string;
	description: string;
}

export default function UseCase({ imageSrc, imageAlt, title, description }: Props) {
	return (
		<>
			<Image src={imageSrc} alt={imageAlt} />
			<Spacer size={16} />
			<Text type="h4" as="h3" color="blueDark">
				{title}
			</Text>
			<Spacer size={8} />
			<SectionDescription description={description} />
		</>
	);
}
