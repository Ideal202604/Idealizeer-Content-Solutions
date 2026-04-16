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
    <section className="py-16 border-y border-white/5 bg-navy-950/60">
      <div className="layout-container">
        <p className="text-center text-sm font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-widest">
          Trusted by 100+ innovative companies worldwide
        </p>
        <div className="group relative mt-10 overflow-hidden">
          <div className="pointer-events-none absolute inset-y-0 left-0 w-8 sm:w-12 bg-gradient-to-r from-navy-950/90 to-transparent z-10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-8 sm:w-12 bg-gradient-to-l from-navy-950/90 to-transparent z-10" />

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
                  className="client-logo-image"
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}