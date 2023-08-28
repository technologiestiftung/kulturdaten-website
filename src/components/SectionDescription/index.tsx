import styled from "@emotion/styled";

const Description = styled.div({
	"p + p": {
		marginTop: "0.6em",
	},
});

interface Props {
	description: string;
}

export default function SectionDescription({ description }: Props) {
	return <Description dangerouslySetInnerHTML={{ __html: description }} />;
}
