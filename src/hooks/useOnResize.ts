import React, { useEffect } from "react";

/**
 * Triggers the onResize callback whenever the element in the ref changes its dimensions.
 */
export default function useOnResize<E extends HTMLElement>(
	ref: React.RefObject<E | null> | React.ForwardedRef<E | null>,
	onResize: () => void
) {
	return useEffect(() => {
		if (!ref || !("current" in ref) || !ref.current) {
			return;
		}
		if (typeof ResizeObserver === "function") {
			let resizeObserver: ResizeObserver | null = new ResizeObserver(() => onResize());
			resizeObserver.observe(ref.current);
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
	}, [ref, onResize]);
}
