import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import ProgramsSection from "../components/ProgramsSection";
import AcademySection from "../components/AcademySection";
import TestimonialsSection from "../components/TestimonialsSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";

export default function LandingPage() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      setTimeout(() => {
        const element = document.getElementById(hash.replace("#", ""));
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  }, [hash]);

  return (
    <div className="bg-white dark:bg-navy-900 text-navy-900 dark:text-white antialiased">
      <Header />
      <HeroSection />
      <ProgramsSection />
      <AcademySection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}