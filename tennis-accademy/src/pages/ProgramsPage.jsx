import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const weeks = [
  {
    week: "01",
    title: "Introduction & Warm-Up Exercises",
    color: "border-white/10",
    points: [
      "Introduction to tennis basics — court, rules, equipment, and scoring",
      "Importance of fitness and injury prevention",
      "Warm-up routines: stretching, jogging, agility drills, coordination exercises",
    ],
  },
  {
    week: "02",
    title: "Forehand Technique",
    color: "border-white/10",
    points: [
      "Grip and stance fundamentals",
      "Swing mechanics and follow-through",
      "Forehand drills for control, consistency, and placement",
    ],
  },
  {
    week: "03",
    title: "Backhand Technique",
    color: "border-white/10",
    points: [
      "One-handed / two-handed backhand basics",
      "Footwork and body positioning",
      "Backhand rally drills and accuracy training",
    ],
  },
  {
    week: "04",
    title: "Rally Practice",
    color: "border-white/10",
    points: [
      "Short and long rally drills",
      "Improving consistency and timing",
      "Movement and court coverage exercises",
    ],
  },
  {
    week: "05",
    title: "Match Play Basics",
    color: "border-white/10",
    points: [
      "Understanding scoring and match rules",
      "Singles and doubles positioning",
      "Practice matches and situational gameplay",
    ],
  },
  {
    week: "06",
    title: "Service Technique",
    color: "border-white/10",
    points: [
      "Grip, ball toss, and service stance",
      "Flat and basic spin serve introduction",
      "Service accuracy and power drills",
    ],
  },
  {
    week: "07",
    title: "Advanced Rally & Point Construction",
    color: "border-white/10",
    points: [
      "Cross-court and down-the-line rally drills",
      "Shot selection and building points",
      "Endurance and competitive rally sessions",
    ],
  },
  {
    week: "08",
    title: "Tournament Preparation & Play",
    color: "border-white/10",
    points: [
      "Match strategy and mental preparation",
      "Tournament rules and etiquette",
      "Internal tournament / evaluation matches",
    ],
  },
];



export default function ProgramsPage() {
  return (
    <div className="bg-white text-navy-900 antialiased">
      <Header />

      {/* ─── PAGE HERO ───────────────────────────────────────── */}
      <section className="bg-navy-900 text-white pt-32 pb-16 md:pt-48 md:pb-32 relative overflow-hidden">

        <div className="container mx-auto px-6 lg:px-20 relative z-10">
          <span className="inline-block text-white/40 text-[10px] md:text-xs font-bold tracking-[0.3em] uppercase mb-4 md:mb-6 border-l-2 border-white pl-4">
            Curriculum
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-7xl serif-text text-white leading-[1.05] mb-4 md:mb-6">
            8-Week Training <br />
            <span className="italic font-normal">Schedule</span>
          </h1>
          <p className="text-white/60 text-base md:text-lg max-w-xl leading-relaxed mb-8 md:mb-12">
            A comprehensive, week-by-week progression designed to take players from fundamentals to competitive match play — built and delivered by Coach Akash Isampur.
          </p>


        </div>
      </section>

      {/* ─── WEEK CARDS ──────────────────────────────────────── */}
      <section className="py-16 md:py-32 bg-white">
        <div className="container mx-auto px-6 lg:px-20">

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {weeks.map((w) => (
              <div
                key={w.week}
                className="group border border-navy-900/10 p-6 md:p-10 hover:border-navy-900/30 hover:shadow-xl transition-all duration-300 relative overflow-hidden"
              >
                {/* Week number watermark */}
                <span className="absolute top-4 right-4 md:right-6 text-6xl md:text-7xl serif-text font-bold text-navy-900/5 select-none leading-none">
                  {w.week}
                </span>

                {/* Header */}
                <div className="flex items-start gap-5 mb-6">
                  <div className="flex-shrink-0 w-10 h-10 bg-navy-900 flex items-center justify-center group-hover:bg-navy-800 transition-colors">
                    <span className="text-white text-[10px] font-bold tracking-wider">W{w.week}</span>
                  </div>
                  <div>
                    <span className="text-navy-900/30 text-[10px] font-bold uppercase tracking-[0.3em]">
                      Week {parseInt(w.week)}
                    </span>
                    <h2 className="text-lg md:text-xl font-bold text-navy-900 leading-tight mt-1">
                      {w.title}
                    </h2>
                  </div>
                </div>

                {/* Points */}
                <ul className="space-y-3">
                  {w.points.map((point, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-navy-900/60 leading-relaxed font-light">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-navy-900/30 flex-shrink-0" />
                      {point}
                    </li>
                  ))}
                </ul>

                {/* Bottom accent line on hover */}
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-navy-900 group-hover:w-full transition-all duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* ─── CTA ─────────────────────────────────────────────── */}
      <section className="py-16 md:py-24 bg-navy-900 border-t border-white/10">
        <div className="container mx-auto px-6 lg:px-20 flex flex-col md:flex-row items-start md:items-center justify-between gap-8 md:gap-10">
          <div>
            <h2 className="text-3xl sm:text-4xl serif-text text-white leading-tight mb-2 md:mb-3">
              Ready to Begin Your <br />
              <span className="italic font-normal">8-Week Journey?</span>
            </h2>
            <p className="text-white/50 text-sm md:text-base font-light">
              Enroll now and start training with Coach Akash Isampur.
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
              href="/about-coach"
              className="border border-white/30 text-white px-12 py-4 text-xs font-bold tracking-widest uppercase hover:bg-white/10 transition text-center"
            >
              Meet the Coach
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
