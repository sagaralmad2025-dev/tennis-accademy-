import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (pathname === "/" && hash === "#contact") {
      // Let LandingPage handle scrolling to the contact section
      return;
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
}