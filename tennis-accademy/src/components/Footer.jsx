export default function Footer() {
  return (
    <footer className="bg-white border-t border-navy-900/10 pt-24 pb-12">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-4 gap-16 mb-24">
          {/* Brand Section */}
          <div className="col-span-1 lg:col-span-1">
            <div className="flex items-center gap-2 text-navy-900 mb-8">
              <span className="material-symbols-outlined text-navy-900 text-2xl font-light">
                sports_tennis
              </span>
              <h2 className="text-lg serif-text font-bold tracking-tight uppercase">
                ELITE ACADEMY
              </h2>
            </div>
            <p className="text-navy-900/40 text-xs leading-relaxed font-light mb-10 max-w-xs">
              A sanctuary for the sport. Dedicated to those who view tennis not just as a game, but as a pursuit of the sublime.
            </p>
            <div className="flex gap-6">
              <a className="text-navy-900/30 hover:text-navy-900 transition-colors" href="#">
                <span className="material-symbols-outlined">share</span>
              </a>
              <a className="text-navy-900/30 hover:text-navy-900 transition-colors" href="#">
                <span className="material-symbols-outlined">public</span>
              </a>
            </div>
          </div>

          {/* Curriculum Links */}
          <div>
            <h4 className="text-navy-900 text-[10px] font-bold uppercase tracking-[0.3em] mb-8">
              Curriculum
            </h4>
            <ul className="space-y-4 text-navy-900/40 text-xs tracking-wider uppercase font-bold">
              <li>
                <a className="hover:text-navy-900 transition-colors" href="#">
                  Masters Program
                </a>
              </li>
              <li>
                <a className="hover:text-navy-900 transition-colors" href="#">
                  Vanguard Juniors
                </a>
              </li>
              <li>
                <a className="hover:text-navy-900 transition-colors" href="#">
                  Clinic Series
                </a>
              </li>
            </ul>
          </div>

          {/* Academy Links */}
          <div>
            <h4 className="text-navy-900 text-[10px] font-bold uppercase tracking-[0.3em] mb-8">
              Academy
            </h4>
            <ul className="space-y-4 text-navy-900/40 text-xs tracking-wider uppercase font-bold">
              <li>
                <a className="hover:text-navy-900 transition-colors" href="#">
                  Our Creed
                </a>
              </li>
              <li>
                <a className="hover:text-navy-900 transition-colors" href="#">
                  The Grounds
                </a>
              </li>
              <li>
                <a className="hover:text-navy-900 transition-colors" href="#">
                  Press & Media
                </a>
              </li>
            </ul>
          </div>

          {/* Partners Section */}
          <div>
            <h4 className="text-navy-900 text-[10px] font-bold uppercase tracking-[0.3em] mb-8">
              Official Partners
            </h4>
            <div className="grid grid-cols-2 gap-4">
              <div className="h-12 border border-navy-900/10 bg-navy-900/5 flex items-center justify-center p-3 opacity-30 grayscale hover:opacity-100 transition-all cursor-pointer">
                <img
                  className="h-full object-contain"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAXxbh839wpaHsh5kkL2YIqJ9gfw9hpBij6F_QYh7eHDSUvQ_yxrS6B0iHtaJCMsAaw0zGWqNT4Iq6YKhrKX8PfLzADe-bBAfj9e5aD_FWt3nXzVu7rzqGcGNZByHpnIfBpImNCWTW6Rv0xC3QOYFjJUixLhpz3-TFuGqzoG-jCOB-xTaV-mXB04_vkLn5dNKvsonOjnTbCK0dgMldYy_3jZ81HKAR24YqCKS980NMFZTvhUE2GGltF_P8yufPassgNgrz5kJadXCE"
                  alt="Partner 1"
                />
              </div>
              <div className="h-12 border border-navy-900/10 bg-navy-900/5 flex items-center justify-center p-3 opacity-30 grayscale hover:opacity-100 transition-all cursor-pointer">
                <img
                  className="h-full object-contain"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuC0oHz5PvAmkjzAmAH6A0YaqMnkCJFI0Bukbd2XVe5JlkjqocaSrZDpo8uwr-peeI4TBM2K_jzFaL-ANlh8JOF5SqvPW3Ua_aOcPvFQtg744bVZ1HZHVlbdfwbN73liUy5SWfK2Z_6J5Va6fNyVwshfyDrHQ0Q4REA8Qr04UDM7-BhTSdhcIjcuapjLvoFuPFHaZpiWA534geB0ade63YSPmvCbkvYEPlae9RggaP5R2snL94SuiYp3KL1CyIyWLEgEzwZReauKsCY"
                  alt="Partner 2"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="pt-12 border-t border-navy-900/10 flex flex-col md:flex-row justify-between items-center text-[10px] font-bold tracking-widest text-navy-900/30 uppercase">
          <p>© 2024 ELITE TENNIS ACADEMY. PRIVACY IS PARAMOUNT.</p>
          <div className="flex gap-10 mt-8 md:mt-0">
            <a className="hover:text-navy-900 transition-colors" href="#">
              Legal
            </a>
            <a className="hover:text-navy-900 transition-colors" href="#">
              Privacy
            </a>
            <a className="hover:text-navy-900 transition-colors" href="#">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
