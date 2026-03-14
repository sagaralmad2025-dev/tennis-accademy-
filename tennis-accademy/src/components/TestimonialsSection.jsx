import { useState, useEffect } from "react";

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      quote:
        "The level of coaching here is unmatched. I've improved my backhand consistency more in 3 months here than in 3 years elsewhere.",
      name: "Marco Valeri",
      role: "ATP Challenger Circuit",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDlNZV9Xhw-Q4WwaEwL3YKuhxrXjHqNxapxXDf9X0n4yMopEhlRnW7hkxAcA7O3U2boAnr2hXmXBmvtJR1hNvAEnLlQrjzIFH-96nhu5zmfVSji6WHqTKmqfjIAntH1GJt6cgVtY-bXR7fAeuS7hUw_ovHMVLPN68WsxiP70SqS4_XSFwoW33RkZkZtWY3M93VItBcgqpV0q_8LMBK2hfGGKRkA0mq13JR56Iard97c4lm1bwY-My44ulwlz6yVLfvrg4JUTgfinG0",
    },
    {
      quote:
        "The environment is incredibly professional. My son has not only improved his tennis but also his discipline and work ethic.",
      name: "Sarah Jenkins",
      role: "Elite Parent",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDpvVQfOyONZPCBf0eDPJ5u21wSnuwTpQc8Y29nET9jirfM71FZYT0gdAijz5ebz61mdeJzKarbd4x7ctA62gJJtUiwTB92xnj2qqbfSMF0hkWydpmJLlC8deM7_8rbRMT0GRiFCqfZdM2MpRh2SRAJFLJF1K-dw_cH76TPVOZvpAK19Ca-9B40UaBvmPlb1v5ey4XbM8BK9-1A6ATjytFyEiwreMXuyp0zlO9NT0BQZh9zArNelFLylaaXkiZ5GkUcuASfcJZBqeo",
    },
    {
      quote:
        "The facilities are world-class. Playing on these courts feels like being at a major tournament. Absolutely highly recommended.",
      name: "David Chen",
      role: "Competitive Amateur",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBHOTe1p8TqLlTPAJwoLuodTrSC-IBmkwCyJJF2xDH0UuCYKjoa_E2J3LgOeKENLA2AY27SWP0ALj9CA0E_LQ6BeQmZKCXuWHZgunglrpaD9AHjdqNfxck6_eIQQ_Nj3QfoV7kigso4PAg8NUbVvt0evDACXR-gn5WrN15t-RDwA_0ff5J_3ueTRcg6n9_rzIEBLh5Xd7xn_P5ecTkgveMPJlkJ_FgBEXsTqKf98fqb4ThGyLvLpLIH6LwV1KN_rSsQ85d6vjAuaSk",
    },
    {
      quote:
        "Amazing experience! The personalized attention and expert guidance have transformed my game completely. I feel like a champion already.",
      name: "Jessica Rodriguez",
      role: "Junior Tournament Champion",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDlNZV9Xhw-Q4WwaEwL3YKuhxrXjHqNxapxXDf9X0n4yMopEhlRnW7hkxAcA7O3U2boAnr2hXmXBmvtJR1hNvAEnLlQrjzIFH-96nhu5zmfVSji6WHqTKmqfjIAntH1GJt6cgVtY-bXR7fAeuS7hUw_ovHMVLPN68WsxiP70SqS4_XSFwoW33RkZkZtWY3M93VItBcgqpV0q_8LMBK2hfGGKRkA0mq13JR56Iard97c4lm1bwY-My44ulwlz6yVLfvrg4JUTgfinG0",
    },
    {
      quote:
        "The holistic approach to training is unique. They focus not just on technique but on character development and mental resilience.",
      name: "James Mitchell",
      role: "Rising Pro Player",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDpvVQfOyONZPCBf0eDPJ5u21wSnuwTpQc8Y29nET9jirfM71FZYT0gdAijz5ebz61mdeJzKarbd4x7ctA62gJJtUiwTB92xnj2qqbfSMF0hkWydpmJLlC8deM7_8rbRMT0GRiFCqfZdM2MpRh2SRAJFLJF1K-dw_cH76TPVOZvpAK19Ca-9B40UaBvmPlb1v5ey4XbM8BK9-1A6ATjytFyEiwreMXuyp0zlO9NT0BQZh9zArNelFLylaaXkiZ5GkUcuASfcJZBqeo",
    },
    {
      quote:
        "My daughter has gained confidence both on and off the court. The coaches genuinely care about each player's development and well-being.",
      name: "Patricia Liu",
      role: "Proud Parent",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBHOTe1p8TqLlTPAJwoLuodTrSC-IBmkwCyJJF2xDH0UuCYKjoa_E2J3LgOeKENLA2AY27SWP0ALj9CA0E_LQ6BeQmZKCXuWHZgunglrpaD9AHjdqNfxck6_eIQQ_Nj3QfoV7kigso4PAg8NUbVvt0evDACXR-gn5WrN15t-RDwA_0ff5J_3ueTRcg6n9_rzIEBLh5Xd7xn_P5ecTkgveMPJlkJ_FgBEXsTqKf98fqb4ThGyLvLpLIH6LwV1KN_rSsQ85d6vjAuaSk",
    },
    {
      quote:
        "Exceptional training facility and coaching staff. The structured curriculum has elevated my game to professional standards.",
      name: "Alexander Petrov",
      role: "ITF Pro Circuit",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDlNZV9Xhw-Q4WwaEwL3YKuhxrXjHqNxapxXDf9X0n4yMopEhlRnW7hkxAcA7O3U2boAnr2hXmXBmvtJR1hNvAEnLlQrjzIFH-96nhu5zmfVSji6WHqTKmqfjIAntH1GJt6cgVtY-bXR7fAeuS7hUw_ovHMVLPN68WsxiP70SqS4_XSFwoW33RkZkZtWY3M93VItBcgqpV0q_8LMBK2hfGGKRkA0mq13JR56Iard97c4lm1bwY-My44ulwlz6yVLfvrg4JUTgfinG0",
    },
    {
      quote:
        "The academy's commitment to excellence is evident in every detail. My journey here has been transformative both as an athlete and as a person.",
      name: "Victoria Thompson",
      role: "National Champion",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDpvVQfOyONZPCBf0eDPJ5u21wSnuwTpQc8Y29nET9jirfM71FZYT0gdAijz5ebz61mdeJzKarbd4x7ctA62gJJtUiwTB92xnj2qqbfSMF0hkWydpmJLlC8deM7_8rbRMT0GRiFCqfZdM2MpRh2SRAJFLJF1K-dw_cH76TPVOZvpAK19Ca-9B40UaBvmPlb1v5ey4XbM8BK9-1A6ATjytFyEiwreMXuyp0zlO9NT0BQZh9zArNelFLylaaXkiZ5GkUcuASfcJZBqeo",
    },
  ];

  // Auto-scroll every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % Math.ceil(testimonials.length / 3));
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const itemsPerPage = 3;
  const displayedTestimonials = testimonials.slice(
    currentIndex * itemsPerPage,
    currentIndex * itemsPerPage + itemsPerPage
  );

  return (
    <section className="py-32 bg-white" id="testimonials">
      <div className="container mx-auto px-6">
        <div className="text-center mb-24">
          <span className="text-navy-900/40 text-xs font-bold tracking-widest uppercase mb-4 block">
            Reflections
          </span>
          <h2 className="text-5xl serif-text text-navy-900">Voices of the Elite</h2>
        </div>

        {/* Carousel Container */}
        <div className="relative group">
          {/* Testimonials Grid */}
          <div className="grid lg:grid-cols-3 gap-12">
            {displayedTestimonials.map((testimonial, idx) => (
              <div key={idx} className="flex flex-col transition-all duration-500">
                <span className="material-symbols-outlined text-navy-900/10 text-6xl font-light mb-8">
                  format_quote
                </span>
                <p className="text-lg serif-text italic text-navy-900 mb-10 leading-relaxed">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center gap-4 mt-auto pt-8 border-t border-navy-900/5">
                  <div className="w-12 h-12 rounded-full overflow-hidden grayscale flex-shrink-0">
                    <img
                      className="w-full h-full object-cover"
                      alt={testimonial.name}
                      src={testimonial.image}
                    />
                  </div>
                  <div>
                    <p className="text-xs font-bold tracking-widest uppercase">
                      {testimonial.name}
                    </p>
                    <p className="text-[10px] text-slate-400 uppercase tracking-tighter">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* Indicators */}
        <div className="flex justify-center gap-3 mt-16">
          {Array.from({ length: Math.ceil(testimonials.length / 3) }).map(
            (_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-3 h-3 rounded-full transition-all ${
                  idx === currentIndex
                    ? "bg-navy-900 scale-125"
                    : "bg-navy-900/30 hover:bg-navy-900/50"
                }`}
                aria-label={`Go to testimonial set ${idx + 1}`}
              />
            )
          )}
        </div>
      </div>
    </section>
  );
}
