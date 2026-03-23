import { siteConfig } from "@/data/site";

export default function ServiceAreaBlock() {
  return (
    <section className="bg-brand-green/5 py-16 px-6">
      <div className="mx-auto max-w-3xl text-center">
        <div className="mb-4 inline-flex rounded-full bg-brand-green/10 px-4 py-1.5 text-sm font-semibold text-brand-green">
          Service Coverage
        </div>
        <h2 className="text-3xl font-bold text-charcoal sm:text-4xl">
          Greater Hudson Valley Area & Beyond
        </h2>
        <p className="mt-4 text-lg text-muted leading-relaxed">
          {siteConfig.serviceAreaLine}
        </p>
        <a
          href={siteConfig.phoneHref}
          className="mt-6 inline-flex items-center gap-2 text-lg font-semibold text-brand-green hover:text-brand-green/80 transition-colors"
        >
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
          </svg>
          Call {siteConfig.phone} to confirm coverage
        </a>
      </div>
    </section>
  );
}
