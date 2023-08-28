import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import Icon from "../Icon";

const rotate = keyframes({
	"0%": { transform: "rotate(0deg)" },
	"100%": { transform: "rotate(360deg)" },
});

const Container = styled.div({
	display: "inline-flex",
	animation: `${rotate} 1.5s linear infinite`,
});

interface Props {
	size?: number;
}

export default function LoadingIndicator({ size }: Props) {
	return (
		<Container>
			<Icon name="loader" size={size} />
		</Container>
	);
}
