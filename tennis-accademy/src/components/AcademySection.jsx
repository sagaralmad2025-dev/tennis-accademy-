import courtImage from "../assets/court.jpeg";

export default function AcademySection() {
  return (
    <section className="py-20 md:py-32 bg-navy-900 text-white overflow-hidden" id="academy">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

          {/* Image Section */}
          <div className="lg:w-1/2 relative w-full">
            <div className="relative z-10">
              <img
                className="shadow-2xl grayscale object-cover w-full aspect-square border border-white/10"
                alt="Kalaburagi Tennis Academy Court"
                src={courtImage}
              />
            </div>
          </div>

          {/* Content Section */}
          <div className="lg:w-1/2 w-full">
            <span className="text-white/40 text-xs font-bold tracking-widest uppercase mb-6 block">
              The Academy Creed
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl serif-text mb-8 leading-tight">
              Forging Greatness <br />
              <span className="italic font-normal">Through Discipline</span>
            </h2>

            <div className="space-y-6">
              <p className="text-base text-white/70 font-light leading-relaxed">
                At <strong>Kalaburagi Tennis Academy</strong>, we operate at the frontier of modern tennis training. Our philosophy goes beyond simply teaching strokes — we focus on building discipline, mental resilience, strategic intelligence, and athletic excellence.
              </p>
              <p className="text-base text-white/70 font-light leading-relaxed">
                Our structured coaching program combines technical skill development, physical conditioning, and match intelligence, helping players grow both on and off the court.
              </p>

              {/* Feature Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-4">
                <div className="space-y-3">
                  <span className="material-symbols-outlined text-white/30 text-3xl font-light">verified</span>
                  <h4 className="font-bold tracking-wider text-sm uppercase">Professional Facilities</h4>
                  <p className="text-sm text-white/50 leading-relaxed">
                    High-quality tennis courts providing players with a professional training environment.
                  </p>
                </div>
                <div className="space-y-3">
                  <span className="material-symbols-outlined text-white/30 text-3xl font-light">analytics</span>
                  <h4 className="font-bold tracking-wider text-sm uppercase">Structured Training</h4>
                  <p className="text-sm text-white/50 leading-relaxed">
                    Modern coaching with structured drills, technical feedback, and performance programs.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}