import { siteConfig } from "@/data/site";

export default function ServiceAreaBlock() {
  return (
    <section className="relative overflow-hidden py-16 px-6">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-green/5 via-brand-blue/5 to-brand-green/5" />

      <div className="relative mx-auto max-w-4xl text-center">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-brand-green/10 px-4 py-1.5 text-sm font-semibold text-brand-green">
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
          </svg>
          Service Coverage
        </div>
        <h2 className="text-3xl font-bold text-charcoal sm:text-4xl">
          Greater Hudson Valley Area & Beyond
        </h2>
        <p className="mt-4 text-lg text-muted leading-relaxed max-w-2xl mx-auto">
          {siteConfig.serviceAreaLine}
        </p>

        {/* Coverage highlights */}
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {["Orange County", "Rockland County", "Westchester County", "Dutchess County", "Sullivan County"].map((area) => (
            <span
              key={area}
              className="rounded-full border border-brand-green/20 bg-white px-4 py-2 text-sm font-medium text-charcoal"
            >
              {area}
            </span>
          ))}
        </div>

        <a
          href={siteConfig.phoneHref}
          className="mt-8 inline-flex items-center gap-2 rounded-xl bg-brand-green px-6 py-3 text-base font-bold text-white transition-all hover:bg-green-700 hover:shadow-lg"
        >
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
          </svg>
          Call {siteConfig.phone} to Confirm Coverage
        </a>
      </div>
    </section>
  );
}
