import courtImage from "../assets/court.jpeg";

export default function AcademySection() {
  return (
    <section
      className="py-32 bg-navy-900 text-white overflow-hidden"
      id="academy"
    >
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-24">
          
          {/* Image Section */}
          <div className="lg:w-1/2 relative">
            <div className="relative z-10">
              <img
                className="shadow-2xl grayscale object-cover w-full aspect-square border border-white/10"
                alt="Kalaburagi Tennis Academy Court"
                src={courtImage}
              />
            </div>

            {/* Experience Box */}
            <div className="absolute -bottom-12 -right-12 bg-white text-navy-900 p-12 hidden xl:block shadow-2xl">
              <span className="text-6xl serif-text font-bold block mb-2">
                6+
              </span>
              <span className="text-[10px] font-bold uppercase tracking-[0.3em]">
                Years Coaching Experience
              </span>
            </div>
          </div>

          {/* Content Section */}
          <div className="lg:w-1/2">
            <span className="text-white/40 text-xs font-bold tracking-widest uppercase mb-6 block">
              The Academy Creed
            </span>

            <h2 className="text-5xl serif-text mb-10 leading-tight">
              Forging Greatness <br />
              <span className="italic font-normal">Through Discipline</span>
            </h2>

            <div className="space-y-12">
              <p className="text-lg text-white/70 font-light leading-relaxed">
                At <strong>Kalaburagi Tennis Academy</strong>, we operate at the
                frontier of modern tennis training. Our philosophy goes beyond
                simply teaching strokes — we focus on building discipline,
                mental resilience, strategic intelligence, and athletic
                excellence required to succeed at competitive levels.
              </p>

              <p className="text-lg text-white/70 font-light leading-relaxed">
                Our structured coaching program combines technical skill
                development, physical conditioning, and match intelligence,
                helping players grow both on and off the court.
              </p>

              <p className="text-lg text-white/70 font-light leading-relaxed">
                At Kalaburagi Tennis Academy, we are committed to developing
                confident, disciplined, and competitive athletes who are
                prepared to perform at their best in every match.
              </p>

              {/* Feature Cards */}
              <div className="grid sm:grid-cols-2 gap-10">
                <div className="space-y-4">
                  <span className="material-symbols-outlined text-white/30 text-3xl font-light">
                    verified
                  </span>

                  <h4 className="font-bold tracking-wider text-sm uppercase">
                    Professional Facilities
                  </h4>

                  <p className="text-sm text-white/50 leading-relaxed">
                    High-quality tennis courts designed to provide players with
                    a professional training environment and competitive match
                    experience.
                  </p>
                </div>

                <div className="space-y-4">
                  <span className="material-symbols-outlined text-white/30 text-3xl font-light">
                    analytics
                  </span>

                  <h4 className="font-bold tracking-wider text-sm uppercase">
                    Structured Training
                  </h4>

                  <p className="text-sm text-white/50 leading-relaxed">
                    Modern coaching methods with structured drills, technical
                    feedback, and performance improvement programs.
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