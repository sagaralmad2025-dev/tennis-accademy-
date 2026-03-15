import { useState, useEffect } from "react";
import face0 from "../assets/sagar .jpeg";
import face1 from "../assets/appu.JPG";
import face2 from "../assets/cheaten.JPG";
import face3 from "../assets/kartik.JPG";
import face4 from "../assets/nirgun.JPG";
import face5 from "../assets/raghu.JPG";
import face6 from "../assets/var.JPG";
import face7 from "../assets/vijay.JPG";

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      quote: "Training at Kalaburagi Tennis Academy has been a life-changing experience. The discipline and coaching quality here is truly world-class.",
      name: "Sagar",
      role: "Academy Student",
      image: face0,
    },
    {
      quote: "The level of coaching here is unmatched. I've improved my backhand consistency more in 3 months here than in 3 years elsewhere.",
      name: "Appu",
      role: "Academy Student",
      image: face1,
    },
    {
      quote: "The environment is incredibly professional. My tennis has improved tremendously under this structured coaching.",
      name: "Cheaten",
      role: "Academy Student",
      image: face2,
    },
    {
      quote: "The facilities are world-class. Playing on these courts feels like being at a major tournament.",
      name: "Kartik",
      role: "Academy Student",
      image: face3,
    },
    {
      quote: "Amazing experience! The personalized attention and expert guidance have transformed my game completely.",
      name: "Nirgun",
      role: "Academy Student",
      image: face4,
    },
    {
      quote: "The holistic approach to training is unique. They focus not just on technique but on character development and mental resilience.",
      name: "Raghu",
      role: "Academy Student",
      image: face5,
    },
    {
      quote: "My confidence has grown both on and off the court. The coaches genuinely care about each player's development.",
      name: "Varsha",
      role: "Academy Student",
      image: face6,
    },
    {
      quote: "Exceptional coaching and a truly professional setup. Kalaburagi Tennis Academy has elevated my game to a new level.",
      name: "Vijay",
      role: "Academy Student",
      image: face7,
    },
  ];

  // On mobile show 1, on desktop show 3
  const [itemsPerPage, setItemsPerPage] = useState(1);

  useEffect(() => {
    const update = () => setItemsPerPage(window.innerWidth >= 1024 ? 3 : 1);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const totalPages = Math.ceil(testimonials.length / itemsPerPage);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalPages);
    }, 5000);
    return () => clearInterval(interval);
  }, [totalPages]);

  const displayed = testimonials.slice(
    currentIndex * itemsPerPage,
    currentIndex * itemsPerPage + itemsPerPage
  );

  return (
    <section className="py-20 md:py-32 bg-white" id="testimonials">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 md:mb-24">
          <span className="text-navy-900/40 text-xs font-bold tracking-widest uppercase mb-4 block">
            Reflections
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl serif-text text-navy-900">
            Voices of the Elite
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {displayed.map((t, idx) => (
            <div key={idx} className="flex flex-col transition-all duration-500">

              <p className="text-base md:text-lg serif-text italic text-navy-900 mb-8 leading-relaxed">
                "{t.quote}"
              </p>
              <div className="flex items-center gap-4 mt-auto pt-6 border-t border-navy-900/5">
                <div className="w-12 h-12 rounded-full overflow-hidden grayscale flex-shrink-0">
                  <img className="w-full h-full object-cover" alt={t.name} src={t.image} />
                </div>
                <div>
                  <p className="text-xs font-bold tracking-widest uppercase">{t.name}</p>
                  <p className="text-[10px] text-slate-400 uppercase tracking-tighter">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Indicators */}
        <div className="flex justify-center gap-3 mt-12">
          {Array.from({ length: totalPages }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              aria-label={`Testimonial page ${idx + 1}`}
              className={`w-3 h-3 rounded-full transition-all ${
                idx === currentIndex ? "bg-navy-900 scale-125" : "bg-navy-900/30 hover:bg-navy-900/50"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
