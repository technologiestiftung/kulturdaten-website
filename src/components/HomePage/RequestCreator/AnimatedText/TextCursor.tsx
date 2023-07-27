import styled from "@emotion/styled";
import { colors } from "../../../../common/styleVariables";
import { keyframes } from "@emotion/react";

const blink = keyframes({
	"0%": { opacity: 1 },
	"50%": { opacity: 1 },
	"51%": { opacity: 0 },
	"100%": { opacity: 0 },
});

const Container = styled.div({
	fontSize: "1.1em",
	lineHeight: 1.0,
	display: "inline-flex",
	color: colors.black,
	animation: `${blink} 1s infinite`,
	userSelect: "none",
});

export default function TextCursor() {
	return <Container role="none">|</Container>;
}
