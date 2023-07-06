import { ReactNode } from "react";

type Props = {
	href: string;
	children: ReactNode;
};

export default function Link(props: Props) {
	const { href, children } = props;
	return <a href={href}>{children}</a>;
}
