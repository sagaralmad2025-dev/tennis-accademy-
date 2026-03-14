import { useState, useEffect } from "react";

export default function ProgramsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const programs = [
    {
      title: "Masters & Pro-Circuit",
      description:
        "High-performance environment focusing on tactical nuance and athletic optimization for competitive circuit players.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnSpzqGRNhmXj250a5WbrR2vjOC7lfi1YCBg&s",
    },
    {
      title: "The Junior Vanguard",
      description:
        "Nurturing the next generation through a holistic curriculum of character, discipline, and technical excellence.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8VvTIqDtK1XyuOHcz3RpVEL4C_j33XFmejQ&s",
    },
    {
      title: "Elite Performance Training",
      description:
        "Advanced coaching designed to refine technique, endurance, and competitive mindset for serious athletes.",
      image:
        "https://content.active.com/Assets/Active.com+Content+Site+Digital+Assets/Kids/let+them+play+1.jpg",
    },
  ];

  // Auto-scroll every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % Math.ceil(programs.length / 2));
    }, 5000);

    return () => clearInterval(interval);
  }, [programs.length]);

  const itemsPerPage = 2;
  const displayedItems = programs.slice(
    currentIndex * itemsPerPage,
    currentIndex * itemsPerPage + itemsPerPage
  );

  return (
    <section className="py-32 bg-white" id="programs">
      <div className="container mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <span className="text-navy-900/40 text-xs font-bold tracking-widest uppercase mb-4 block">
              Our Disciplines
            </span>

            <h2 className="text-5xl serif-text text-navy-900 leading-tight">
              Bespoke Training <br />
              Architectures
            </h2>
          </div>

          <p className="text-slate-500 max-w-sm">
            Each program is meticulously tailored to technical development and
            competitive psychology.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative group">
          {/* Programs Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {displayedItems.map((program, idx) => (
              <div
                key={idx}
                className="group/card cursor-pointer transition-all duration-500"
              >
                {/* Image */}
                <div className="relative overflow-hidden aspect-video mb-6 bg-gray-200 rounded-lg">
                  <img
                    src={program.image}
                    alt={program.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-105 grayscale hover:grayscale-0"
                  />

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
          {Array.from({ length: Math.ceil(programs.length / 2) }).map(
            (_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-3 h-3 rounded-full transition-all ${
                  idx === currentIndex
                    ? "bg-navy-900 scale-125"
                    : "bg-navy-900/30 hover:bg-navy-900/50"
                }`}
                aria-label={`Go to program set ${idx + 1}`}
              />
            )
          )}
        </div>

      </div>
    </section>
  );
}