export default function AcademySection() {
  return (
    <section className="py-32 bg-navy-900 text-white overflow-hidden" id="academy">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-24">
          <div className="lg:w-1/2 relative">
            <div className="relative z-10">
              <img
                className="shadow-2xl grayscale object-cover w-full aspect-square border border-white/10"
                alt="Academy Atmosphere"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuABku88HxbsyvA7eH0MMRbkdCK3TtoelWNMC-jB6aX7zIh_4V50quaZMnDL9Pti7vfcBPLbaIBgvQ3175Kt8efp0xRdfer2pWrFwWmsJ9RQ1EiVuP5hJH5tU8lEciUiEfSJ-eLUCwP-qcb8S552gfGOEmWbyuC-SlMButsveC4iwbtg9kUac0v3gHxKcVUoq70c6i19_HCN1qDUvyepqpg0MDU4S9lDPD93v3zAngzU0uMht9Lmc3mjLkXKO3HVP3xWxwz-Kvv9X6A"
              />
            </div>
            <div className="absolute -bottom-12 -right-12 bg-white text-navy-900 p-12 hidden xl:block shadow-2xl">
              <span className="text-6xl serif-text font-bold block mb-2">15</span>
              <span className="text-[10px] font-bold uppercase tracking-[0.3em]">
                Signature Courts
              </span>
            </div>
          </div>

          <div className="lg:w-1/2">
            <span className="text-white/40 text-xs font-bold tracking-widest uppercase mb-6 block">
              The Academy Creed
            </span>
            <h2 className="text-5xl serif-text mb-10 leading-tight">
              Forging Greatness <br />
              <span className="italic font-normal">Through Discipline</span>
            </h2>
            <div className="space-y-12">
              <p className="text-lg text-white/70 font-light leading-relaxed">
                At Elite, we operate on the frontier of performance science. Our philosophy transcends the game, focusing on the cognitive resilience and strategic intelligence required to win at the highest levels.
              </p>
              <div className="grid sm:grid-cols-2 gap-10">
                <div className="space-y-4">
                  <span className="material-symbols-outlined text-white/30 text-3xl font-light">
                    verified
                  </span>
                  <h4 className="font-bold tracking-wider text-sm uppercase">
                    ATP-Standard Facilities
                  </h4>
                  <p className="text-sm text-white/50 leading-relaxed">
                    Grand Slam surface technology and tournament-grade illumination.
                  </p>
                </div>
                <div className="space-y-4">
                  <span className="material-symbols-outlined text-white/30 text-3xl font-light">
                    analytics
                  </span>
                  <h4 className="font-bold tracking-wider text-sm uppercase">
                    Biometric Analysis
                  </h4>
                  <p className="text-sm text-white/50 leading-relaxed">
                    Advanced data-driven feedback loops for technical refinement.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
