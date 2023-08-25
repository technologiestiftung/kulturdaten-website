import styled from "@emotion/styled";

const StyledP = styled.p({});

interface Props {
	text: string;
	as?: keyof JSX.IntrinsicElements;
}

export default function HTMLText({ text, as }: Props) {
	return <StyledP dangerouslySetInnerHTML={{ __html: text }} as={as} />;
}
