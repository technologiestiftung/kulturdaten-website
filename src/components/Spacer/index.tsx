import styled from "@emotion/styled";

const StyledDiv = styled.div({});

interface Props {
	size: number | string;
}

export default function Spacer({ size }: Props) {
	const flexBasis = typeof size === "number" ? `${size}px` : size;
	return (
		<StyledDiv
			role="none"
			style={{
				width: size,
				height: size,
				flex: `0 0 ${flexBasis}`,
			}}
		/>
	);
}
