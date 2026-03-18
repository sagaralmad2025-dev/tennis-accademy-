import firstimage from "../assets/1.jpeg";
import secondimage from "../assets/11.jpeg";
import thirdimage from "../assets/3.JPG";
import varshavideo from "../assets/varsha.mp4";
import { useState, useEffect } from "react";

export default function ProgramsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const programs = [
    {
      title: "Masters & Pro-Circuit",
      description:
        "High-performance environment focusing on tactical nuance and athletic optimization for competitive circuit players.",
      type: "image",
      src: secondimage,
    },
    {
      title: "The Junior Vanguard",
      description:
        "Nurturing the next generation through a holistic curriculum of character, discipline, and technical excellence.",
      type: "image",
      src: firstimage,
    },
    {
      title: "Kalaburagi Tennis Performance Training",
      description:
        "Advanced coaching designed to refine technique, endurance, and competitive mindset for serious athletes.",
      type: "image",
      src: thirdimage,
    },
    {
      title: "Training Session",
      description:
        "On-court drills focusing on footwork, precision, and match play strategies.",
      type: "video",
      src: varshavideo,
    },
  ];

  const itemsPerPage = 2;
  const totalPages = Math.ceil(programs.length / itemsPerPage);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalPages);
    }, 5000);

    return () => clearInterval(interval);
  }, [totalPages]);

  const displayedItems = programs.slice(
    currentIndex * itemsPerPage,
    currentIndex * itemsPerPage + itemsPerPage
  );

  return (
    <section className="py-20 md:py-32 bg-white" id="programs">
      <div className="container mx-auto px-6">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-20 gap-6">
          <div className="max-w-2xl">
            <span className="text-navy-900/40 text-xs font-bold tracking-widest uppercase mb-4 block">
              Our Programs
            </span>

            <h2 className="text-3xl sm:text-4xl md:text-5xl serif-text text-navy-900 leading-tight">
              Tennis Training <br />
              Programs
            </h2>
          </div>

          <p className="text-slate-500 max-w-sm">
            Professional tennis coaching programs designed to develop
            technique, discipline, and competitive mindset.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative">
          <div className="grid md:grid-cols-2 gap-8">
            {displayedItems.map((program, idx) => (
              <div
                key={idx}
                className="group/card cursor-pointer transition-all duration-500"
              >

                {/* Media */}
                <div className="relative overflow-hidden aspect-video mb-6 bg-gray-200 rounded-lg">

                  {program.type === "image" ? (
                    <img
                      src={program.src}
                      alt={program.title}
                      className="w-full h-full object-cover filter grayscale group-hover/card:grayscale-0 transition-all duration-700 group-hover/card:scale-105"
                    />
                  ) : (
                    <video
                      className="w-full h-full object-cover filter grayscale group-hover/card:grayscale-0 transition-all duration-700 group-hover/card:scale-105"
                      autoPlay
                      muted
                      loop
                      playsInline
                    >
                      <source src={program.src} type="video/mp4" />
                    </video>
                  )}

                  <div className="absolute inset-0 border border-navy-900/10 group-hover/card:border-navy-900/30 transition rounded-lg"></div>

                </div>

                {/* Title */}
                <h3 className="text-2xl serif-text font-bold mb-4 text-navy-900">
                  {program.title}
                </h3>

                {/* Description */}
                <p className="text-slate-500 leading-relaxed font-light">
                  {program.description}
                </p>

              </div>
            ))}
          </div>
        </div>

        {/* Indicators */}
        <div className="flex justify-center gap-3 mt-12">
          {Array.from({ length: totalPages }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`w-3 h-3 rounded-full transition-all ${
                idx === currentIndex
                  ? "bg-navy-900 scale-125"
                  : "bg-navy-900/30 hover:bg-navy-900/50"
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}