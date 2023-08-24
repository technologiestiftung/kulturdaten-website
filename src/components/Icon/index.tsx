import styled from "@emotion/styled";
import { LucideProps } from "lucide-react";
import dynamicIconImports from "lucide-react/dynamicIconImports";
import dynamic from "next/dynamic";

const Loader = styled.span({
	display: "inline-block",
});

export interface IconProps extends LucideProps {
	name: keyof typeof dynamicIconImports;
}

export default function Icon({ name, size = 24, ...props }: IconProps) {
	const LucideIcon = dynamic(dynamicIconImports[name], {
		loading: () => <Loader style={{ width: size, height: size }} />,
	});
	return <LucideIcon size={size} {...props} />;
}
