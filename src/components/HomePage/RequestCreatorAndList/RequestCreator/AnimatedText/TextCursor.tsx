import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import { lineHeights } from "../../../../../common/styleVariables";

const blink = keyframes({
	"0%": { opacity: 1 },
	"50%": { opacity: 1 },
	"51%": { opacity: 0 },
	"100%": { opacity: 0 },
});

const Container = styled.div({
	fontSize: "1.1em",
	lineHeight: lineHeights.single,
	display: "inline-flex",
	animation: `${blink} 1s linear infinite`,
	userSelect: "none",
});

export default function TextCursor() {
	return <Container role="none">|</Container>;
}
