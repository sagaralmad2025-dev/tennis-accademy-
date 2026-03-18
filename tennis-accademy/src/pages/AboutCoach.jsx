import Header from "../components/Header";
import Footer from "../components/Footer";
import coachImage from "../assets/meet coach.jpeg";

// Gallery training videos
import training1 from "../assets/training1.mp4";
import training2 from "../assets/training2.mp4";
import training3 from "../assets/training3.mp4";
import training4 from "../assets/training4.mp4";
import training5 from "../assets/training5.mp4";
import training6 from "../assets/training6.mp4";
import training7 from "../assets/training7.mp4";
import training8 from "../assets/training8.mp4";
import training9 from "../assets/training9.mp4";
import training10 from "../assets/training10.mp4";
import training11 from "../assets/training11.mp4";
import training12 from "../assets/training12.mp4";
import training13 from "../assets/training13.mp4";
import training14 from "../assets/training14.mp4";
import training15 from "../assets/training15.mp4";
import training16 from "../assets/training16.mp4";

const galleryVideos = [
  training1, training2, training3, training4,
  training5, training6, training7, training8,
  training9, training10, training11, training12,
  training13, training14, training15, training16
];

const credentials = [
  {
    title: "AITA Certified",
    desc: "All India Tennis Association national-level player certification, representing excellence in competitive tennis.",
  },
  {
    title: "SAI Certified",
    desc: "Sports Authority of India certified coach, trained under the national sports excellence framework.",
  },
  {
    title: "GPTCA–ATP Certified",
    desc: "Global Professional Tennis Coach Association affiliated with ATP — the world's benchmark for tennis coaching.",
  },
];

export default function AboutCoach() {
  return (
    <div className="bg-white text-navy-900 antialiased">
      <Header />


      {/* ─── BIO ─────────────────────────────────────────── */}
      <section className="py-32 pt-44 bg-white">
        <div className="container mx-auto px-6 lg:px-20">
          <div className="flex flex-col lg:flex-row items-center gap-24">

            {/* Image */}
            <div className="lg:w-5/12 relative flex-shrink-0">
              <div className="relative z-10 group">
                <img
                  src={coachImage}
                  alt="Coach Akash Isampur"
                  className="w-full aspect-[4/5] object-cover object-top grayscale group-hover:grayscale-0 filter transition-all duration-700 shadow-2xl border border-navy-900/10"
                />
              </div>
              {/* Floating accent */}
              <div className="absolute -top-8 -left-8 w-48 h-48 border border-navy-900/10 z-0" />
              <div className="absolute -bottom-4 md:-bottom-8 -right-4 md:-right-8 bg-navy-900 text-white p-6 md:p-10 shadow-2xl border border-navy-900/10 z-20 hidden sm:block">
                <span className="text-5xl md:text-6xl serif-text font-bold block mb-2 text-white leading-none">6+</span>
                <span className="text-[8px] md:text-[10px] font-bold uppercase tracking-[0.3em] text-white/60 leading-relaxed block w-24 md:w-32">
                  Years Coaching Experience
                </span>
              </div>
            </div>

            {/* Text */}
            <div className="lg:w-7/12">
              <span className="text-navy-900/40 text-xs font-bold tracking-widest uppercase mb-6 block">
                The Story
              </span>
              <h2 className="text-5xl serif-text mb-10 leading-tight text-navy-900">
                A Coach Built <br />
                <span className="italic font-normal">From the Ground Up</span>
              </h2>

              <div className="space-y-6 text-navy-900/70 font-light leading-relaxed text-lg">
                <p>
                  Coach <strong className="text-navy-900 font-semibold">Akash Isampur</strong> is
                  a national-level tennis player who competed at the highest
                  levels under the All India Tennis Association (AITA). His
                  firsthand experience on the competitive circuit gave him an
                  unparalleled understanding of what it takes to succeed at
                  kalaburagi tennis level.
                </p>
                <p>
                  With over <strong className="text-navy-900 font-semibold">6 years of coaching experience</strong> and
                  more than <strong className="text-navy-900 font-semibold">1,000 students trained</strong>, Coach Akash
                  has built a reputation for transforming raw talent into
                  disciplined, competitive players. His coaching philosophy
                  blends technical precision with mental strength.
                </p>
                <p>
                  Certified by the <strong className="text-navy-900 font-semibold">Sports Authority of India (SAI)</strong> and
                  the <strong className="text-navy-900 font-semibold">GPTCA–ATP</strong>, Coach Akash brings world-class
                  credentials to every session at Kalaburagi Tennis Academy —
                  making professional coaching accessible to all.
                </p>
              </div>

              <div className="flex gap-6 mt-10">
                <a
                  href="/#contact"
                  className="bg-navy-900 text-white px-10 py-4 text-xs font-bold tracking-widest uppercase hover:bg-navy-800 transition inline-block"
                >
                  Train With Coach
                </a>
                <a
                  href="/programs"
                  className="border border-navy-900/30 text-navy-900 px-10 py-4 text-xs font-bold tracking-widest uppercase hover:bg-navy-900/5 transition inline-block"
                >
                  View Programs
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CREDENTIALS ─────────────────────────────────── */}
      <section className="py-32 bg-navy-900 text-white">
        <div className="container mx-auto px-6 lg:px-20">
          <div className="text-center mb-20">
            <span className="text-white/40 text-xs font-bold tracking-widest uppercase mb-4 block">
              Qualifications
            </span>
            <h2 className="text-5xl serif-text leading-tight">
              <span className="italic font-normal">Certifications</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {credentials.map((c) => (
              <div
                key={c.title}
                className="border border-white/10 p-10 hover:border-white/30 transition-all duration-300 group"
              >

                <h3 className="text-lg font-bold uppercase tracking-wider mb-4">
                  {c.title}
                </h3>
                <p className="text-sm text-white/50 leading-relaxed font-light">
                  {c.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* ─── GALLERY ─────────────────────────────────────── */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6 lg:px-20">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <span className="text-navy-900/40 text-xs font-bold tracking-widest uppercase mb-4 block">
                On Court
              </span>
              <h2 className="text-5xl serif-text text-navy-900 leading-tight">
                Training <br />
                <span className="italic font-normal">Gallery</span>
              </h2>
            </div>
            <p className="text-navy-900/50 max-w-sm font-light">
              Glimpses from sessions, tournaments, and the everyday pursuit of
              excellence at Kalaburagi Tennis Academy.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {galleryVideos.map((vid, idx) => (
              <div
                key={idx}
                className="overflow-hidden group relative bg-navy-800 rounded-sm"
              >
                <video
                  src={vid}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-64 md:h-72 object-cover grayscale group-hover:grayscale-0 opacity-80 group-hover:opacity-100 transition-all duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 border border-white/5 group-hover:border-white/25 transition-colors rounded-sm" />
                <div className="absolute bottom-3 left-3 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-white text-[10px] font-bold uppercase tracking-widest">Training {idx + 1}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA STRIP ───────────────────────────────────── */}
      <section className="py-24 bg-navy-900 border-t border-white/10">
        <div className="container mx-auto px-6 lg:px-20 flex flex-col md:flex-row items-start md:items-center justify-between gap-8 md:gap-10">
          <div>
            <h2 className="text-4xl serif-text text-white leading-tight mb-2 md:mb-3">
              Ready to Train with <br />
              <span className="italic font-normal">Coach Akash?</span>
            </h2>
            <p className="text-white/50 text-sm md:text-base font-light">
              Take the next step in your tennis journey today.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto mt-4 md:mt-0">
            <a
              href="/#contact"
              className="bg-white text-navy-900 px-12 py-4 text-xs font-bold tracking-widest uppercase hover:bg-white/90 transition text-center"
            >
              Get in Touch
            </a>
            <a
              href="/"
              className="border border-white/30 text-white px-12 py-4 text-xs font-bold tracking-widest uppercase hover:bg-white/10 transition text-center"
            >
              Back to Home
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
