import { useState } from "react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    interest: "Pro-Circuit Training",
    phone: "",
    summary: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission here
  };

  return (
    <section className="py-32 bg-navy-900" id="contact">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row bg-navy-800 overflow-hidden shadow-2xl lux-border">
          {/* Left Side */}
          <div className="lg:w-2/5 p-16 text-white bg-navy-900/50">
            <span className="text-white/40 text-xs font-bold tracking-widest uppercase mb-8 block">
              Connect
            </span>
            <h2 className="text-4xl serif-text mb-8">
              Application for <br />
              <span className="italic font-normal">Admission</span>
            </h2>
            <p className="text-white/60 font-light mb-16 leading-relaxed">
              Our admissions are highly selective. Please provide details regarding the athlete's current ranking and goals.
            </p>
            <div className="space-y-10">
              <div className="flex gap-6">
                <span className="material-symbols-outlined text-white/30">
                  location_on
                </span>
                <p className="text-sm font-light leading-relaxed">
                  123 Academy Blvd, Elite Sports Complex, FL 33101
                </p>
              </div>
              <div className="flex gap-6">
                <span className="material-symbols-outlined text-white/30">
                  alternate_email
                </span>
                <p className="text-sm font-light leading-relaxed">
                  concierge@elitetennis.academy
                </p>
              </div>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="lg:w-3/5 p-16 bg-navy-800">
            <form onSubmit={handleSubmit} className="space-y-10">
              <div className="grid md:grid-cols-2 gap-10">
                <div className="relative border-b border-white/20 focus-within:border-white transition-colors py-2">
                  <label className="block text-[10px] uppercase tracking-widest text-white/40 mb-2">
                    Full Name
                  </label>
                  <input
                    className="w-full bg-transparent border-none p-0 text-white placeholder-white/20 focus:ring-0"
                    placeholder="Aurelius Vance"
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                  />
                </div>
                <div className="relative border-b border-white/20 focus-within:border-white transition-colors py-2">
                  <label className="block text-[10px] uppercase tracking-widest text-white/40 mb-2">
                    Email
                  </label>
                  <input
                    className="w-full bg-transparent border-none p-0 text-white placeholder-white/20 focus:ring-0"
                    placeholder="aurelius@vance.com"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-10">
                <div className="relative border-b border-white/20 focus-within:border-white transition-colors py-2">
                  <label className="block text-[10px] uppercase tracking-widest text-white/40 mb-2">
                    Primary Interest
                  </label>
                  <select
                    className="w-full bg-transparent border-none p-0 text-white focus:ring-0 appearance-none cursor-pointer"
                    name="interest"
                    value={formData.interest}
                    onChange={handleChange}
                  >
                    <option className="bg-navy-800">Pro-Circuit Training</option>
                    <option className="bg-navy-800">Junior Academy</option>
                    <option className="bg-navy-800">Masters Clinic</option>
                  </select>
                </div>
                <div className="relative border-b border-white/20 focus-within:border-white transition-colors py-2">
                  <label className="block text-[10px] uppercase tracking-widest text-white/40 mb-2">
                    Phone Number
                  </label>
                  <input
                    className="w-full bg-transparent border-none p-0 text-white placeholder-white/20 focus:ring-0"
                    placeholder="+1 (555) 000-0000"
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="relative border-b border-white/20 focus-within:border-white transition-colors py-2">
                <label className="block text-[10px] uppercase tracking-widest text-white/40 mb-2">
                  Executive Summary of Career
                </label>
                <textarea
                  className="w-full bg-transparent border-none p-0 text-white placeholder-white/20 focus:ring-0 resize-none"
                  placeholder="Current UTR/Ranking and primary training goals..."
                  rows="3"
                  name="summary"
                  value={formData.summary}
                  onChange={handleChange}
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-white text-navy-900 py-6 font-bold text-xs tracking-[0.3em] uppercase hover:bg-white/90 transition-all"
              >
                Submit Inquiry
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
