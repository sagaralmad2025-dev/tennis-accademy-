import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import ProgramsSection from "../components/ProgramsSection";
import AcademySection from "../components/AcademySection";
import TestimonialsSection from "../components/TestimonialsSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";

export default function LandingPage() {
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