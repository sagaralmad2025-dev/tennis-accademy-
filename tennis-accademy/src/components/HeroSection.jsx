import heroImage from "../assets/hero.jpeg";

export default function HeroSection() {
  return (
    <section className="relative h-screen min-h-[800px] flex items-center overflow-hidden bg-navy-900">

      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Akash Isampur Tennis Coaching"
          className="w-full h-full object-cover brightness-125 contrast-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-900/60 via-navy-900/20 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-20 flex justify-end">
        <div className="max-w-3xl text-right">

          <span className="inline-block text-white/70 text-xs font-bold tracking-[0.3em] uppercase mb-6 border-r-2 border-white pr-4">
            NATIONAL LEVEL TENNIS COACH
          </span>

          <h1 className="text-6xl md:text-7xl serif-text text-white leading-[1] mb-8">
            Train with <br />
            <span className="italic font-normal">Elite Coaching</span>
          </h1>

          <p className="text-lg text-white/80 mb-10 max-w-lg ml-auto">
            National player with AITA experience, 6+ years coaching, and 1000+ students trained. Certified by SAI and GPTCA–ATP.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-end">

            <button className="bg-white text-navy-900 px-10 py-4 font-bold text-xs tracking-widest uppercase hover:bg-white/90 transition">
              Join Training
            </button>

            <button className="border border-white/30 text-white px-10 py-4 font-bold text-xs tracking-widest uppercase hover:bg-white/10 transition">
              About Coach
            </button>

          </div>

        </div>
      </div>

    </section>
  );
}