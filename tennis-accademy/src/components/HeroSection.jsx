export default function HeroSection() {
  return (
    <section className="relative h-screen min-h-[800px] flex items-center overflow-hidden bg-navy-900">
      <div className="absolute inset-0 z-0 opacity-40">
        <img
          className="w-full h-full object-cover grayscale"
          alt="Cinematic tennis court"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDVjrkhNJZflgG55vCbcqkT7STaW66pJPtpzLSui-2ofV2wIBMhQONFGl4RSbnII0RTyLIBx0QeR4M2IPreN2FgRdewjA0siU6EtTHlxqFu-NHDp9Y96bubpOWE-rH7oqZVOsNfeGj-lAoE9yglNAv97S3PXF0s7esYXvKsihoCKT6I3QiJa0i75QmyrlZeHJ43D-T_ImVaapOV7zhIVc6StapaSWtjGkcPoEkXruC3-VpDpAyqZ-JIR5lDzlj_c1gal9Ma54s--XY"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-navy-900/40 to-transparent"></div>
      </div>

      <div className="container mx-auto px-6 relative z-20">
        <div className="max-w-4xl">
          <span className="inline-block text-white/60 text-xs font-bold tracking-[0.3em] uppercase mb-8 border-l-2 border-white pl-4">
            ESTABLISHED 2010
          </span>
          <h1 className="text-6xl md:text-8xl serif-text text-white leading-[1] mb-10">
            The Pursuit of <br />
            <span className="italic font-normal">Perfection</span>
          </h1>
          <p className="text-xl text-white/70 mb-12 leading-relaxed max-w-xl font-light">
            A world-class training destination for athletes who demand the extraordinary. Discover a methodology designed for the elite.
          </p>
          <div className="flex flex-col sm:flex-row gap-8">
            <button className="bg-white text-navy-900 px-12 py-5 font-bold text-xs tracking-widest hover:bg-white/90 transition-all uppercase">
              Explore Programs
            </button>
            <button className="border border-white/30 text-white px-12 py-5 font-bold text-xs tracking-widest hover:bg-white/10 transition-all uppercase">
              Our Philosophy
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
