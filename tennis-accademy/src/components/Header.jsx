import { Link } from "react-router-dom";
import { useState } from "react";
import logo from "../assets/logo.png";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 glass-header border-b border-white/10 px-6 lg:px-20 py-4 flex items-center justify-between text-white transition-all">

      {/* Logo + Text */}
      <Link to="/" className="flex items-center gap-3" onClick={() => setMenuOpen(false)}>
        <img
          src={logo}
          alt="Kalaburagi Tennis Academy Logo"
          className="h-10 w-auto object-contain"
        />
        <h2 className="text-base sm:text-xl font-semibold tracking-wide leading-tight">
          KALABURAGI{" "}
          <span className="font-normal italic">TENNIS ACADEMY</span>
        </h2>
      </Link>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center gap-10">
        <Link className="text-xs font-bold tracking-widest hover:text-white/70 transition-colors uppercase" to="/programs">Programs</Link>
        <a className="text-xs font-bold tracking-widest hover:text-white/70 transition-colors uppercase" href="/#academy">The Academy</a>
        <Link className="text-xs font-bold tracking-widest hover:text-white/70 transition-colors uppercase" to="/about-coach">About Coach</Link>
        <a className="text-xs font-bold tracking-widest hover:text-white/70 transition-colors uppercase" href="/#testimonials">Testimonials</a>
        <a className="text-xs font-bold tracking-widest hover:text-white/70 transition-colors uppercase" href="/#contact">Contact</a>
      </nav>

      {/* Right Side */}
      <div className="flex items-center gap-4">
        <a href="/#contact" className="hidden sm:block border border-white px-6 py-2 text-xs font-bold tracking-widest hover:bg-white hover:text-navy-900 transition-all uppercase">
          Join Now
        </a>
        <button
          className="md:hidden text-white flex items-center justify-center p-2"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full glass-header border-t border-white/10 flex flex-col py-6 px-8 gap-6 md:hidden">
          <Link onClick={() => setMenuOpen(false)} className="text-xs font-bold tracking-widest uppercase hover:text-white/70 transition-colors" to="/programs">Programs</Link>
          <a onClick={() => setMenuOpen(false)} className="text-xs font-bold tracking-widest uppercase hover:text-white/70 transition-colors" href="/#academy">The Academy</a>
          <Link onClick={() => setMenuOpen(false)} className="text-xs font-bold tracking-widest uppercase hover:text-white/70 transition-colors" to="/about-coach">About Coach</Link>
          <a onClick={() => setMenuOpen(false)} className="text-xs font-bold tracking-widest uppercase hover:text-white/70 transition-colors" href="/#testimonials">Testimonials</a>
          <a onClick={() => setMenuOpen(false)} className="text-xs font-bold tracking-widest uppercase hover:text-white/70 transition-colors" href="/#contact">Contact</a>
          <a onClick={() => setMenuOpen(false)} className="border border-white px-6 py-3 text-xs font-bold tracking-widest uppercase text-center hover:bg-white hover:text-navy-900 transition-all" href="/#contact">Join Now</a>
        </div>
      )}
    </header>
  );
}