import { useEffect } from "react";

/**
 * Triggers the onResize callback whenever the element changes its dimensions.
 */
export default function useOnResize<E extends HTMLElement>(element: E | null, onResize: () => void) {
	return useEffect(() => {
		if (!element) {
			return;
		}
		if (typeof ResizeObserver === "function") {
			let resizeObserver: ResizeObserver | null = new ResizeObserver(() => onResize());
			resizeObserver.observe(element);
			return () => {
				if (!resizeObserver) {
					return;
				}
				resizeObserver.disconnect();
				resizeObserver = null;
			};
		}
		// Legacy mode without ResizeObserver:
		window.addEventListener("resize", onResize);
		return () => {
			window.removeEventListener("resize", onResize);
		};
	}, [element, onResize]);
}
