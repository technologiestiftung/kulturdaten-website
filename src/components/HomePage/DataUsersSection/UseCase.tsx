import styled from "@emotion/styled";
import { borderWidths, colors } from "../../../common/styleVariables";
import Hr from "../../Hr";
import Spacer from "../../Spacer";
import Text from "../../Text";

const Image = styled.img({
	border: `${borderWidths.default}px solid ${colors.blueDark}`,
});

type Props = {
	imageSrc: string;
	imageAlt: string;
	title: string;
	description: string;
};

export default function UseCase({ imageSrc, imageAlt, title, description }: Props) {
	return (
		<>
			<Image src={imageSrc} alt={imageAlt} />
			<Spacer size={24} />
			<Hr height={4} />
			<Spacer size={24} />
			<Text type="h3" color="blueDark">
				{title}
			</Text>
			<Spacer size={12} />
			<Text type="p">{description}</Text>
		</>
	);
}
