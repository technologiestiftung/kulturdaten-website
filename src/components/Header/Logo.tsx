import styled from "@emotion/styled";
import Link from "next/link";
import { borderRadiuses, colors, fontSizes, fontWeights, spacings } from "../../common/styleVariables";

const LogoLink = styled(Link)({
	display: "flex",
	alignItems: "center",
	gap: `0 ${spacings.get(3)}`,
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
	fontSize: fontSizes.small,
});

const LightTitle = styled.span({
	fontWeight: fontWeights.light,
});

export default function Logo() {
	return (
		<LogoLink href="/">
			<Circle />
			<Title aria-label="Kulturdaten Berlin">
				KULTURDATEN
				<LightTitle>BERLIN</LightTitle>
			</Title>
		</LogoLink>
	);
}
