import styled from "@emotion/styled";

const StyledDiv = styled.div({});

type Props = {
	size: number;
};

export default function Spacer({ size }: Props) {
	return <StyledDiv role="none" style={{ width: size, height: size }} />;
}
