const CLIENT_LOGOS = [
  {
    src: '/clients-logos/Logo/alard-synergy.png',
    alt: 'Alard Synergy client logo',
  },
  {
    src: '/clients-logos/Logo/raising-generational-leaders.png',
    alt: 'Raising Generational Leaders client logo',
  },
  {
    src: '/clients-logos/Logo/sumdu-emblem.png',
    alt: 'SumDU client logo',
  },
  {
    src: '/clients-logos/Logo/chandrakanta-college.png',
    alt: 'Chandrakanta College client logo',
  },
  {
    src: '/clients-logos/Logo/shinawatra-university.png',
    alt: 'Shinawatra University client logo',
  },
  {
    src: '/clients-logos/Logo/tilak-maharashtra-vidyapeeth.png',
    alt: 'Tilak Maharashtra Vidyapeeth client logo',
  },
  {
    src: '/clients-logos/Logo/bharati-vidyapeeth.png',
    alt: 'Bharati Vidyapeeth client logo',
  },
  {
    src: '/clients-logos/Logo/university-blue-emblem.png',
    alt: 'University blue emblem client logo',
  },
  {
    src: '/clients-logos/Logo/kdu-emblem.png',
    alt: 'KDU client logo',
  },
];

export function ClientsSection() {
  return (
    <section className="mt-0 pt-0 pb-16 border-y border-yellow-700/30 bg-[#D4A017] dark:border-white/5 dark:bg-navy-950/60">
      <div className="layout-container">
        <p className="text-center text-sm font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-widest">
          Trusted by 100+ innovative companies worldwide
        </p>
        <div className="client-marquee-shell group relative mt-10 overflow-hidden">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-8 bg-gradient-to-r from-[#B8960C] via-[#D4A017] to-transparent sm:w-12 dark:from-navy-950/90 dark:via-navy-950/50" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-8 bg-gradient-to-l from-[#B8960C] via-[#D4A017] to-transparent sm:w-12 dark:from-navy-950/90 dark:via-navy-950/50" />

          <div className="client-marquee-track animate-marquee group-hover:[animation-play-state:paused]">
            {[...CLIENT_LOGOS, ...CLIENT_LOGOS].map((logo, index) => (
              <button
                key={`${logo.src}-${index}`}
                type="button"
                className="client-logo-item"
                aria-label={logo.alt}
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  loading="lazy"
                  decoding="async"
                  className="client-logo-image relative z-10"
                />
                <div className="pointer-events-none absolute left-0 top-0 z-20 h-full w-16 bg-gradient-to-r from-white via-white/70 to-transparent dark:hidden" />
                <div className="pointer-events-none absolute right-0 top-0 z-20 h-full w-16 bg-gradient-to-l from-white via-white/70 to-transparent dark:hidden" />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}