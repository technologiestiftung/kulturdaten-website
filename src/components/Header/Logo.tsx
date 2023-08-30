import styled from "@emotion/styled";
import Link from "next/link";
import { borderRadiuses, colors, fontWeights, spacings } from "../../common/styleVariables";

const LogoLink = styled(Link)({
	display: "flex",
	alignItems: "center",
	gap: spacings.get(2),
	color: colors.blueDark,
	textDecoration: "none",
});

const Circle = styled.div({
	width: "2rem",
	height: "2rem",
	backgroundColor: colors.blueDark,
	borderRadius: borderRadiuses.round,
});

const Title = styled.span({
	fontWeight: fontWeights.medium,
});

const LightTitle = styled.span({
	fontWeight: fontWeights.light,
});

export default function Logo() {
	return (
		<LogoLink href="/">
			<Circle />
			<Title aria-label="kulturdaten.berlin">
				KULTURDATEN.<LightTitle>BERLIN</LightTitle>
			</Title>
		</LogoLink>
	);
}
