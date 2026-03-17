import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-navy-900/10 pt-16 md:pt-24 pb-10 md:pb-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-10 md:gap-16 mb-16 md:mb-24">

          {/* Brand Section */}
          <div className="col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 text-navy-900 mb-6">
              <h2 className="text-base serif-text font-bold tracking-tight uppercase">
                KALABURAGI TENNIS ACADEMY
              </h2>
            </div>
            <p className="text-navy-900/40 text-xs leading-relaxed font-light mb-8 max-w-xs">
              A sanctuary for the sport. Dedicated to those who view tennis not just as a game, but as a pursuit of the sublime.
            </p>

          </div>

          {/* Curriculum Links */}
         

          {/* Academy Links */}
          <div>
            <h4 className="text-navy-900 text-[10px] font-bold uppercase tracking-[0.3em] mb-6">Academy</h4>
            <ul className="space-y-4 text-navy-900/40 text-xs tracking-wider uppercase font-bold">
              <li><Link className="hover:text-navy-900 transition-colors" to="/about-coach">About Coach</Link></li>
              <li><a className="hover:text-navy-900 transition-colors" href="/#testimonials">Testimonials</a></li>
              <li><a className="hover:text-navy-900 transition-colors" href="/#contact">Contact</a></li>
            </ul>
          </div>

          {/* Footer Navigation */}
          <div>
            <h4 className="text-navy-900 text-[10px] font-bold uppercase tracking-[0.3em] mb-6">Explore</h4>
            <ul className="space-y-4 text-navy-900/40 text-xs tracking-wider uppercase font-bold">
              <li><Link className="hover:text-navy-900 transition-colors" to="/programs">Programs</Link></li>
              <li><a className="hover:text-navy-900 transition-colors" href="/#academy">The Academy</a></li>
             
            </ul>
          </div>

        </div>

        {/* Footer Bottom */}
        <div className="pt-8 md:pt-12 border-t border-navy-900/10 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-bold tracking-widest text-navy-900/30 uppercase text-center">
          <p>© 2026 KALABURAGI TENNIS ACADEMY. ALL RIGHTS RESERVED.</p>
          
        </div>

        {/* View Counter */}
        <div className="flex justify-center mt-8 opacity-50 hover:opacity-100 transition-opacity">
          {/* hitwebcounter Code START */}
          <a href="https://www.hitwebcounter.com/" target="_blank" rel="noreferrer">
            <img src="https://hitwebcounter.com/counter/counter.php?page=21483079&style=0007&nbdigits=6&type=page&initCount=0" title="Free Tools" alt="Free Tools" border="0" />
          </a>
        </div>
      </div>
    </footer>
  );
}
