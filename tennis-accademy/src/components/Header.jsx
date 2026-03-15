import logo from "../assets/logo.png";

export default function Header() {
  return (
    <header className="fixed top-0 w-full z-50 glass-header border-b border-white/10 px-6 lg:px-20 py-5 flex items-center justify-between text-white transition-all">
      
      {/* Logo + Text */}
      <div className="flex items-center gap-3">
        <img
          src={logo}
          alt="Kalaburagi Tennis Academy Logo"
          className="h-12 w-auto object-contain"
        />

        <h2 className="text-xl font-semibold tracking-wide">
          KALABURAGI{" "}
          <span className="font-normal italic">TENNIS ACADEMY</span>
        </h2>
      </div>

      {/* Navigation */}
      <nav className="hidden md:flex items-center gap-12">
        <a
          className="text-xs font-bold tracking-widest hover:text-white/70 transition-colors uppercase"
          href="#programs"
        >
          Programs
        </a>

        <a
          className="text-xs font-bold tracking-widest hover:text-white/70 transition-colors uppercase"
          href="#academy"
        >
          The Academy
        </a>

        <a
          className="text-xs font-bold tracking-widest hover:text-white/70 transition-colors uppercase"
          href="#testimonials"
        >
          Testimonials
        </a>

        <a
          className="text-xs font-bold tracking-widest hover:text-white/70 transition-colors uppercase"
          href="#contact"
        >
          Contact
        </a>
      </nav>

      {/* Right Side */}
      <div className="flex items-center gap-8">
        <button className="hidden sm:block border border-white px-8 py-2 text-xs font-bold tracking-widest hover:bg-white hover:text-navy-900 transition-all uppercase">
          Join Now
        </button>

        <span className="material-symbols-outlined cursor-pointer text-2xl font-light">
          menu
        </span>
      </div>
    </header>
  );
}