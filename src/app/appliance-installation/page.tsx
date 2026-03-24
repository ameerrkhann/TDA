import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import BrandsCarousel from "@/components/BrandsCarousel";
import CTABanner from "@/components/CTABanner";
import FAQAccordion from "@/components/FAQAccordion";
import ServiceAreaBlock from "@/components/ServiceAreaBlock";
import CTAButtons from "@/components/CTAButtons";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Appliance Installation",
  description:
    "Professional appliance installation for all major kitchen and laundry appliances. Call Top Digital Appliances at 718-234-4111.",
};

const installationTypes = [
  {
    name: "Refrigerators & Freezers",
    detail: "Water line, leveling, door alignment",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 3h12a2 2 0 012 2v14a2 2 0 01-2 2H6a2 2 0 01-2-2V5a2 2 0 012-2z" />
        <path strokeLinecap="round" d="M4 10h16M15 6v2M15 13v4" />
      </svg>
    ),
  },
  {
    name: "Washers & Dryers",
    detail: "Water supply, drain, venting",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" strokeWidth={1.5} stroke="currentColor">
        <rect x="4" y="2" width="16" height="20" rx="2" />
        <circle cx="12" cy="14" r="5" />
        <path strokeLinecap="round" d="M4 7h16" />
      </svg>
    ),
  },
  {
    name: "Dishwashers",
    detail: "Plumbing, electrical, mounting",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" strokeWidth={1.5} stroke="currentColor">
        <rect x="4" y="2" width="16" height="20" rx="2" />
        <path strokeLinecap="round" d="M4 6h16M10 4h4" />
        <path d="M8 14h8M9 11h6M9 17h6" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: "Ovens & Ranges",
    detail: "Gas or electric, anti-tip bracket",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" strokeWidth={1.5} stroke="currentColor">
        <rect x="3" y="2" width="18" height="20" rx="2" />
        <path strokeLinecap="round" d="M3 8h18" />
        <rect x="6" y="11" width="12" height="8" rx="1" />
        <circle cx="8" cy="5" r="1.5" />
        <circle cx="16" cy="5" r="1.5" />
      </svg>
    ),
  },
  {
    name: "Cooktops & Stoves",
    detail: "Countertop cutout, gas hookup",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" strokeWidth={1.5} stroke="currentColor">
        <rect x="3" y="6" width="18" height="14" rx="2" />
        <circle cx="9" cy="12" r="3" />
        <circle cx="16" cy="12" r="2" />
        <circle cx="9" cy="17" r="2" />
      </svg>
    ),
  },
  {
    name: "Microwaves",
    detail: "Over-the-range or built-in mounting",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" strokeWidth={1.5} stroke="currentColor">
        <rect x="2" y="6" width="20" height="12" rx="2" />
        <rect x="4" y="8" width="12" height="8" rx="1" />
        <circle cx="19" cy="10" r="1" />
        <circle cx="19" cy="14" r="1" />
      </svg>
    ),
  },
];

const processSteps = [
  {
    step: "01",
    title: "Schedule Your Installation",
    description: "Call us or book online. Let us know the appliance type, brand, and whether it requires gas or electric hookup. We'll set up a convenient time.",
  },
  {
    step: "02",
    title: "Professional On-Site Install",
    description: "Our technician arrives with the right tools, handles all connections — water lines, gas, electrical, venting — and ensures everything is secure and level.",
  },
  {
    step: "03",
    title: "Testing & Walkthrough",
    description: "We run the appliance through a full test cycle, check for leaks or issues, and walk you through operation before we leave.",
  },
];

const installFAQs = [
  {
    question: "Do I need to buy the appliance from you?",
    answer:
      "No. We install appliances purchased from any retailer, online store, or contractor. Just let us know the brand and model when scheduling.",
  },
  {
    question: "Do you handle gas appliance installations?",
    answer:
      "Yes. Our technicians are experienced with both gas and electric connections. We ensure all gas fittings are properly sealed and tested for safety.",
  },
  {
    question: "Will you remove my old appliance?",
    answer:
      "We can disconnect and move your old appliance. Ask about haul-away options when scheduling your installation.",
  },
  {
    question: "How long does a typical installation take?",
    answer:
      "Most installations take 1-2 hours depending on the appliance type and complexity of the hookup. Built-in units or gas connections may take longer.",
  },
  {
    question: "Is there a warranty on the installation?",
    answer:
      "Yes. Our installations come with a workmanship warranty. If any connection issue arises from our install, we'll come back and fix it at no charge.",
  },
];

const whyUs = [
  {
    title: "Gas & Electric Certified",
    description: "Safe, code-compliant connections every time.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
  },
  {
    title: "All Brands Welcome",
    description: "From budget to premium — we install them all.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.745 3.745 0 011.043 3.296A3.745 3.745 0 0121 12z" />
      </svg>
    ),
  },
  {
    title: "Clean & Respectful",
    description: "We protect your floors and clean up after ourselves.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456z" />
      </svg>
    ),
  },
  {
    title: "Installation Warranty",
    description: "Workmanship guaranteed on every install.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
];

export default function ApplianceInstallationPage() {
  return (
    <>
      {/* ── Full-bleed image hero ── */}
      <section className="relative min-h-[520px] lg:min-h-[600px] flex items-end overflow-hidden">
        {/* Background image */}
        <Image
          src="/install.jpg"
          alt="Professional appliance installation"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        {/* Dark gradient overlay — heavier at bottom for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/60 to-charcoal/20" />

        <div className="relative z-10 w-full pb-16 pt-32 px-6 lg:pb-20">
          <div className="mx-auto max-w-6xl">
            <div className="max-w-2xl">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-brand-blue/40 bg-brand-blue/20 px-4 py-1.5 text-xs font-semibold text-white backdrop-blur-sm">
                <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17l-5.1-5.1a2.25 2.25 0 010-3.18l.71-.71a2.25 2.25 0 013.18 0l.71.71a2.25 2.25 0 010 3.18l-5.1 5.1M3.75 21h16.5" />
                </svg>
                Professional Installation Service
              </div>
              <h1 className="text-4xl font-extrabold text-white sm:text-5xl lg:text-6xl leading-[1.08] tracking-tight">
                New Appliance?{" "}
                <span className="text-brand-blue">We&apos;ll Install It.</span>
              </h1>
              <p className="mt-5 text-lg text-white/80 leading-relaxed max-w-xl">
                From unboxing to running — we handle gas, electric, and water connections so your new appliance is set up safely and correctly.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-4">
                <CTAButtons variant="blue" bookLabel="Schedule Installation" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Brands Carousel ── */}
      <BrandsCarousel />

      {/* ── What We Install — full-width card grid ── */}
      <section className="py-16 px-6 lg:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <div className="mb-4 inline-flex h-1 w-12 rounded-full bg-brand-blue" />
            <h2 className="text-3xl font-bold text-charcoal sm:text-4xl">
              What We Install
            </h2>
            <p className="mt-3 text-lg text-muted max-w-2xl mx-auto">
              We handle all major household appliance types — kitchen and laundry.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {installationTypes.map((type) => (
              <div
                key={type.name}
                className="group flex items-start gap-4 rounded-2xl border border-border bg-white p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 hover:border-brand-blue/20"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-blue/5 text-brand-blue transition-colors group-hover:bg-brand-blue group-hover:text-white">
                  {type.icon}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-charcoal">{type.name}</h3>
                  <p className="mt-1 text-sm text-muted">{type.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Trust Us — horizontal feature strip ── */}
      <section className="bg-charcoal py-14 px-6 relative overflow-hidden">
        {/* Decorative orbs */}
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-brand-blue/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-brand-green/8 rounded-full blur-[80px]" />

        <div className="relative mx-auto max-w-6xl">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {whyUs.map((item) => (
              <div key={item.title} className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10 text-brand-blue">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-base font-bold text-white">{item.title}</h3>
                  <p className="mt-1 text-sm text-white/60">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Installation Process — vertical timeline ── */}
      <section className="py-16 px-6 lg:py-24 bg-surface-alt">
        <div className="mx-auto max-w-3xl">
          <div className="text-center mb-14">
            <div className="mb-4 inline-flex h-1 w-12 rounded-full bg-brand-green" />
            <h2 className="text-3xl font-bold text-charcoal sm:text-4xl">
              How Installation Works
            </h2>
            <p className="mt-3 text-lg text-muted max-w-xl mx-auto">
              Three simple steps from scheduling to a fully operational appliance.
            </p>
          </div>

          <div className="relative">
            {/* Vertical timeline line */}
            <div className="absolute left-6 top-0 bottom-0 w-px bg-border sm:left-8" />

            <div className="space-y-10">
              {processSteps.map((item, i) => {
                const colors = [
                  { bg: "bg-brand-red", text: "text-brand-red", light: "bg-brand-red/5", border: "border-brand-red/20" },
                  { bg: "bg-brand-blue", text: "text-brand-blue", light: "bg-brand-blue/5", border: "border-brand-blue/20" },
                  { bg: "bg-brand-green", text: "text-brand-green", light: "bg-brand-green/5", border: "border-brand-green/20" },
                ][i];
                return (
                  <div key={item.step} className="relative flex gap-6 sm:gap-8">
                    {/* Step number circle on timeline */}
                    <div className={`relative z-10 flex h-12 w-12 sm:h-16 sm:w-16 shrink-0 items-center justify-center rounded-full ${colors.bg} text-white font-extrabold text-lg sm:text-xl shadow-lg`}>
                      {item.step}
                    </div>
                    {/* Content card */}
                    <div className={`flex-1 rounded-2xl border ${colors.border} ${colors.light} p-6 sm:p-8 transition-all duration-300 hover:shadow-md`}>
                      <h3 className="text-xl font-bold text-charcoal">{item.title}</h3>
                      <p className="mt-2 text-muted leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mt-12 text-center">
            <a
              href={siteConfig.phoneHref}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-blue px-8 py-3.5 text-base font-bold text-white shadow-lg shadow-blue-900/30 transition-all hover:bg-blue-600 hover:scale-[1.02]"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
              Schedule Your Installation
            </a>
          </div>
        </div>
      </section>

      {/* ── What's Included — editorial split ── */}
      <section className="py-16 px-6 lg:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            {/* Left: Image */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <div className="aspect-[4/3]">
                <Image
                  src="/install.jpg"
                  alt="Technician installing an appliance"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              {/* Accent corner */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-blue via-brand-green to-brand-red" />
            </div>

            {/* Right: Content */}
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-blue mb-3">
                What&apos;s Included
              </p>
              <h2 className="text-3xl font-extrabold text-charcoal sm:text-4xl leading-tight">
                More Than Just{" "}
                <span className="text-brand-blue">Plugging It In</span>
              </h2>
              <p className="mt-4 text-muted leading-relaxed">
                Every installation includes the full setup — not just delivery. Here&apos;s what you get with every job:
              </p>

              <div className="mt-8 space-y-4">
                {[
                  "Secure gas, electric, or water connections",
                  "Proper leveling and alignment",
                  "Anti-tip bracket installation (ranges)",
                  "Full test cycle before we leave",
                  "Basic operation walkthrough",
                  "Cleanup of packaging and materials",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand-green/10 text-brand-green">
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                    </div>
                    <span className="text-charcoal font-medium">{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href={siteConfig.phoneHref}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-blue px-6 py-3 text-sm font-bold text-white shadow-lg shadow-blue-900/20 transition-all hover:bg-blue-600 hover:scale-[1.02]"
                >
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                  Call {siteConfig.phone}
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-brand-blue/20 bg-brand-blue/5 px-6 py-3 text-sm font-bold text-brand-blue transition-all hover:bg-brand-blue/10"
                >
                  Book Online
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Service Area ── */}
      <ServiceAreaBlock />

      {/* ── Installation FAQ ── */}
      <section className="bg-surface-alt py-16 px-6 lg:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-10">
            <div className="mb-4 inline-flex h-1 w-12 rounded-full bg-brand-red" />
            <h2 className="text-3xl font-bold text-charcoal sm:text-4xl">
              Installation FAQs
            </h2>
            <p className="mt-3 text-lg text-muted max-w-2xl mx-auto">
              Common questions about our appliance installation services.
            </p>
          </div>
          <FAQAccordion items={installFAQs} />
          <div className="mt-8 text-center">
            <Link
              href="/faq"
              className="inline-flex items-center gap-2 rounded-lg bg-brand-red/5 px-5 py-2.5 text-base font-semibold text-brand-red transition-colors hover:bg-brand-red/10"
            >
              View All FAQs
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      <CTABanner
        headline="Need an Appliance Installed?"
        body="Call us today or book online to schedule professional appliance installation. We handle the heavy lifting."
      />
    </>
  );
}
