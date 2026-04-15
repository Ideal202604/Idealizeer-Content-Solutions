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
        <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {CLIENT_LOGOS.map((logo) => (
            <div
              key={logo.src}
              className="group h-24 md:h-28 rounded-xl border border-slate-200/90 dark:border-white/15 bg-white/95 flex items-center justify-center px-4 md:px-5 shadow-sm transition-all duration-300 hover:border-electric-500/40 hover:shadow-md hover:-translate-y-0.5"
            >
              <img
                src={logo.src}
                alt={logo.alt}
                loading="lazy"
                decoding="async"
                className="max-h-16 md:max-h-20 w-auto object-contain opacity-100 transition-transform duration-300 group-hover:scale-[1.03]"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}