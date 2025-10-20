"use client";

import { useEffect, useState } from "react";

export default function BackToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const getScrollTop = () =>
      window.pageYOffset ||
      (document.scrollingElement && document.scrollingElement.scrollTop) ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;

    const onScroll = () => {
      setIsVisible(getScrollTop() > 300);
    };

    // initial check
    onScroll();

    const mainEl = document.querySelector("main, [data-scroll-container], .app-scroll");
    const scrollEl = document.scrollingElement || document.documentElement || document.body;

    // attach listeners broadly to catch different scroll container patterns
    window.addEventListener("scroll", onScroll, { passive: true });
    try { scrollEl.addEventListener("scroll", onScroll, { passive: true }); } catch {}
    if (mainEl && mainEl !== scrollEl) mainEl.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      try { scrollEl.removeEventListener("scroll", onScroll); } catch {}
      if (mainEl && mainEl !== scrollEl) mainEl.removeEventListener("scroll", onScroll);
    };
  }, []);

  const handleClick = () => {
    const target =
      document.scrollingElement ||
      document.querySelector("main, [data-scroll-container], .app-scroll") ||
      document.documentElement ||
      document.body;
    try {
      target.scrollTo({ top: 0, behavior: "smooth" });
    } catch {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <button
      data-testid="back-to-top"
      aria-label="Back to top"
      title="Back to top"
      onClick={handleClick}
      className={
        "fixed bottom-6 right-6 z-50 rounded-full bg-blue-600 text-white shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 p-3 md:p-4 transition-all duration-200 transform " +
        (isVisible
          ? "opacity-100 scale-100 pointer-events-auto translate-y-0"
          : "opacity-0 scale-75 pointer-events-none -translate-y-2")
      }
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="h-5 w-5 md:h-6 md:w-6"
        aria-hidden="true"
      >
        <path d="M12 20c-.414 0-.75-.336-.75-.75V6.56l-3.72 3.72a.75.75 0 1 1-1.06-1.06l5-5a.75.75 0 0 1 1.06 0l5 5a.75.75 0 1 1-1.06 1.06l-3.72-3.72v12.69c0 .414-.336.75-.75.75Z" />
      </svg>
    </button>
  );
}