import Spacer from "../Spacer";
import { borderRadiuses, borderWidths, colors, fontWeights, lineHeights, spacings } from "../../common/styleVariables";
import FoldSvg from "../SectionTitle/FoldSvg";
import styled from "@emotion/styled";

interface Props {
	label: string;
}

const BannerBackdrop = styled.div(() => {
	return {
		flex: "1 1 50%",
		position: "relative",
	};
});

const Fold = styled.div({
	width: "38px",
	position: "absolute",
	bottom: 0,
	right: 0,
	background: colors.white,
});

const Icon = () => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="32"
			height="32"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<circle cx="12" cy="12" r="10" />
			<path d="M12 16v-4" />
			<path d="M12 8h.01" />
		</svg>
	);
};

const Title = styled.div(() => {
	return {
		display: "flex",
		position: "relative",
		justifyContent: "center",
		alignItems: "center",
		minHeight: "100px",
		border: `${borderWidths.medium} solid ${colors.blueDark}`,
		borderRadius: borderRadiuses.small,
		color: colors.blueDark,
		fontWeight: fontWeights.medium,
		lineHeight: lineHeights.heroHeadline,
		gap: spacings.get(3),
	};
});

export default function CompletionSection({ label }: Props) {
	return (
		<>
			<Spacer size={88} />
			<BannerBackdrop>
				<Title as="p">
					<Icon />
					{label}
				</Title>
				<Fold>
					<FoldSvg />
				</Fold>
			</BannerBackdrop>
		</>
	);
}
