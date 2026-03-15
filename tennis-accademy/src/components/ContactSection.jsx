import { useState } from "react";

const Field = ({ label, required, children }) => (
  <div className="relative border-b border-white/20 focus-within:border-white transition-colors py-2">
    <label className="block text-[10px] uppercase tracking-widest text-white/40 mb-2">
      {label} {required && <span className="text-white/60">*</span>}
    </label>
    {children}
  </div>
);

const Input = ({ name, placeholder, type = "text", required }) => (
  <input
    className="w-full bg-transparent border-none p-0 text-white placeholder-white/20 focus:outline-none focus:ring-0"
    placeholder={placeholder}
    type={type}
    name={name}
    required={required}
  />
);

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);

    const response = await fetch("https://formspree.io/f/xojknrjo", {
      method: "POST",
      body: data,
      headers: { Accept: "application/json" },
    });

    if (response.ok) {
      setSubmitted(true);
      form.reset();
    }
  };

  return (
    <section className="py-20 md:py-32 bg-navy-900" id="contact">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row bg-navy-800 overflow-hidden shadow-2xl lux-border">

          {/* Left Side */}
          <div className="lg:w-2/5 p-8 md:p-16 text-white bg-navy-900/50">
            <span className="text-white/40 text-xs font-bold tracking-widest uppercase mb-8 block">
              Enroll
            </span>
            <h2 className="text-4xl serif-text mb-8">
              Application for <br />
              <span className="italic font-normal">Admission</span>
            </h2>
            <p className="text-white/60 font-light mb-16 leading-relaxed">
              Fill in the details below to apply for admission at Kalaburagi Tennis Academy. Fields marked with * are required.
            </p>
            <div className="space-y-10">
              <div className="flex gap-4 md:gap-6 items-start">
                <span className="material-symbols-outlined text-white/30 shrink-0">location_on</span>
                <p className="text-sm font-light leading-relaxed">
                  Kalaburagi Tennis Academy, Kalaburagi, Karnataka
                </p>
              </div>
              <div className="flex gap-4 md:gap-6 items-center">
                <span className="material-symbols-outlined text-white/30 shrink-0">alternate_email</span>
                <p className="text-sm font-light leading-relaxed break-all">
                  info@kalaburagitennisacademy.in
                </p>
              </div>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="lg:w-3/5 p-8 md:p-16 bg-navy-800 overflow-y-auto">

            {submitted ? (
              /* ── SUCCESS STATE ── */
              <div className="flex flex-col items-center justify-center h-full min-h-[400px] text-center gap-6">
                <span className="material-symbols-outlined text-white/60 text-6xl">check_circle</span>
                <h3 className="text-3xl serif-text text-white">
                  Application <span className="italic font-normal">Received</span>
                </h3>
                <p className="text-white/60 font-light leading-relaxed max-w-sm">
                  Application submitted successfully. Our team will contact you shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 border border-white/30 text-white px-10 py-3 text-xs font-bold tracking-widest uppercase hover:bg-white/10 transition"
                >
                  Submit Another
                </button>
              </div>
            ) : (
              /* ── FORM ── */
              <form onSubmit={handleSubmit} className="space-y-8">

                {/* Hidden subject for Formspree */}
                <input type="hidden" name="_subject" value="New Tennis Academy Admission Application" />

                {/* ── TRAINEE INFO ── */}
                <p className="text-white/40 text-[10px] font-bold tracking-[0.3em] uppercase border-b border-white/10 pb-3">
                  Trainee Information
                </p>

                <div className="grid md:grid-cols-2 gap-8">
                  <Field label="Name of the Trainee" required>
                    <Input name="trainee_name" placeholder="Trainee Name" required />
                  </Field>
                  <Field label="Date of Birth" required>
                    <Input name="dob" placeholder="dd-mm-yyyy" type="date" required />
                  </Field>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <Field label="Age" required>
                    <Input name="age" placeholder="Player Age" type="number" required />
                  </Field>
                  <Field label="Phone Number" required>
                    <Input name="trainee_phone" placeholder="Enter Number" type="tel" required />
                  </Field>
                </div>

                {/* ── FATHER INFO ── */}
                <p className="text-white/40 text-[10px] font-bold tracking-[0.3em] uppercase border-b border-white/10 pb-3">
                  Father's Information
                </p>

                <div className="grid md:grid-cols-2 gap-8">
                  <Field label="Name of the Father" required>
                    <Input name="father_name" placeholder="Father Name" />
                  </Field>
                  <Field label="Occupation">
                    <Input name="father_occupation" placeholder="Enter Occupation" />
                  </Field>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <Field label="Phone Number">
                    <Input name="father_phone" placeholder="Enter Number" type="tel" />
                  </Field>
                  <Field label="Off. Address">
                    <Input name="father_office_address" placeholder="Enter Address" />
                  </Field>
                </div>

                {/* ── MOTHER INFO ── */}
                <p className="text-white/40 text-[10px] font-bold tracking-[0.3em] uppercase border-b border-white/10 pb-3">
                  Mother's Information
                </p>

                <div className="grid md:grid-cols-2 gap-8">
                  <Field label="Name of the Mother" required>
                    <Input name="mother_name" placeholder="Mother Name" />
                  </Field>
                  <Field label="Occupation">
                    <Input name="mother_occupation" placeholder="Enter Occupation" />
                  </Field>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <Field label="Phone Number">
                    <Input name="mother_phone" placeholder="Enter Number" type="tel" />
                  </Field>
                  <Field label="Off. Address">
                    <Input name="mother_office_address" placeholder="Enter Address" />
                  </Field>
                </div>

                {/* ── RESIDENCE ── */}
                <p className="text-white/40 text-[10px] font-bold tracking-[0.3em] uppercase border-b border-white/10 pb-3">
                  Residence
                </p>

                <Field label="Residence Address" required>
                  <textarea
                    className="w-full bg-transparent border-none p-0 text-white placeholder-white/20 focus:outline-none focus:ring-0 resize-none"
                    placeholder="Enter Address"
                    rows="2"
                    name="residence_address"
                    required
                  />
                </Field>

                <button
                  type="submit"
                  className="w-full bg-white text-navy-900 py-6 font-bold text-xs tracking-[0.3em] uppercase hover:bg-white/90 transition-all"
                >
                  Submit Application
                </button>
              </form>
            )}

          </div>
        </div>
      </div>
    </section>
  );
}
