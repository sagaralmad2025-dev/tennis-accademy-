import { Link } from "react-router-dom";
import heroImage from "../assets/herooooo.jpeg";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-navy-900">

      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Akash Isampur Tennis Coaching"
          className="w-full h-full object-cover brightness-125 contrast-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-900/70 via-navy-900/30 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-20 py-32 flex justify-center md:justify-end">
        <div className="max-w-2xl text-center md:text-right w-full">

          <span className="inline-block text-white/70 text-xs font-bold tracking-[0.2em] uppercase mb-6 border-r-2 border-white pr-4">
            NATIONAL LEVEL TENNIS COACH
          </span>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl serif-text text-white leading-[1.1] mb-6">
            Train with <br />
            <span className="italic font-normal">Elite Coaching</span>
          </h1>

          <p className="text-base sm:text-lg text-white/80 mb-10 max-w-lg mx-auto md:ml-auto md:mr-0">
            National player with AITA experience, 6+ years coaching, and 1000+ students trained. Certified by SAI and GPTCA–ATP.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-end">
            <a href="/#contact" className="bg-white text-navy-900 px-8 py-4 font-bold text-xs tracking-widest uppercase hover:bg-white/90 transition text-center inline-block">
              Join Training
            </a>
            <Link
              to="/about-coach"
              className="border border-white/30 text-white px-8 py-4 font-bold text-xs tracking-widest uppercase hover:bg-white/10 transition text-center"
            >
              About Coach
            </Link>
          </div>

        </div>
      </div>

    </section>
  );
}