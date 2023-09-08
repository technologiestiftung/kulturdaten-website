import styled from "@emotion/styled";

const Description = styled.div({
	"p + p": {
		marginTop: "0.6em",
	},
	ul: {
		padding: `0 0 0 1rem`,
		marginTop: "0.4em",
	},
});

interface Props {
	description: string;
}

export default function SectionDescription({ description }: Props) {
	return <Description dangerouslySetInnerHTML={{ __html: description }} />;
}
