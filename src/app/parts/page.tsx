import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import BrandsCarousel from "@/components/BrandsCarousel";
import FAQAccordion from "@/components/FAQAccordion";
import CTABanner from "@/components/CTABanner";
import ServiceAreaBlock from "@/components/ServiceAreaBlock";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Parts & Support",
  description:
    "Top Digital Appliances provides parts support for all major appliance brands. Call 718-234-4111 before ordering to confirm compatibility.",
};

const commonParts = [
  {
    name: "Compressors",
    description: "Refrigerator and freezer compressor replacement",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5V18M15 7.5V18M3 16.811V8.69c0-.864.933-1.406 1.683-.977l7.108 4.061a1.125 1.125 0 010 1.954l-7.108 4.061A1.125 1.125 0 013 16.811z" />
      </svg>
    ),
  },
  {
    name: "Heating Elements",
    description: "Oven, dryer, and dishwasher heating parts",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" />
      </svg>
    ),
  },
  {
    name: "Control Boards",
    description: "Electronic controls and main boards",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25zm.75-12h9v9h-9v-9z" />
      </svg>
    ),
  },
  {
    name: "Motors & Pumps",
    description: "Washer, dryer, and dishwasher motors",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    name: "Door Seals & Gaskets",
    description: "Refrigerator, oven, and dishwasher seals",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
      </svg>
    ),
  },
  {
    name: "Thermostats & Sensors",
    description: "Temperature sensors and safety thermostats",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
      </svg>
    ),
  },
  {
    name: "Igniters & Valves",
    description: "Gas range and oven ignition parts",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
  },
  {
    name: "Belts & Rollers",
    description: "Dryer belts, drum rollers, and idler pulleys",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182" />
      </svg>
    ),
  },
];

const applianceCategories = [
  {
    name: "Refrigerator Parts",
    examples: "Compressors, thermostats, door gaskets, ice maker assemblies, evaporator fans",
    href: "/appliance-repair/refrigerator-repair",
  },
  {
    name: "Washer Parts",
    examples: "Drain pumps, lid switches, water inlet valves, drive belts, shock absorbers",
    href: "/appliance-repair/washer-repair",
  },
  {
    name: "Dryer Parts",
    examples: "Heating elements, drum rollers, thermal fuses, belts, igniters",
    href: "/appliance-repair/dryer-repair",
  },
  {
    name: "Dishwasher Parts",
    examples: "Spray arms, door latches, wash motors, drain pumps, float switches",
    href: "/appliance-repair/dishwasher-repair",
  },
  {
    name: "Oven & Range Parts",
    examples: "Bake elements, igniters, thermostats, control boards, door hinges",
    href: "/appliance-repair/oven-repair",
  },
  {
    name: "Microwave Parts",
    examples: "Magnetrons, door switches, turntable motors, diodes, capacitors",
    href: "/appliance-repair/microwave-repair",
  },
];

const partsFAQs = [
  {
    question: "Can I buy just the part without repair service?",
    answer:
      "Our parts sourcing is typically paired with our repair service to ensure correct installation and testing. If you need help identifying a part, give us a call and we'll point you in the right direction.",
  },
  {
    question: "How do I find my appliance model number?",
    answer:
      "The model number is usually on a label inside the door frame, behind the unit, or on the back panel. For washers, check inside the lid or door. Call us with the brand and we'll help you locate it.",
  },
  {
    question: "Do you use OEM or aftermarket parts?",
    answer:
      "We prioritize OEM (Original Equipment Manufacturer) parts for reliability and warranty compliance. In some cases, we use high-quality aftermarket alternatives — always with your approval.",
  },
  {
    question: "How long does it take to get a part?",
    answer:
      "Common parts are often available within 1-3 business days. Specialty or hard-to-find components may take longer. We'll give you a timeline upfront so there are no surprises.",
  },
  {
    question: "What if the wrong part is ordered?",
    answer:
      "That's exactly why we recommend calling us first. We verify compatibility with your specific model before ordering. If something doesn't fit, we handle the replacement at no extra charge.",
  },
];

const whyCallFirst = [
  {
    title: "Verify Compatibility",
    description: "We match parts to your exact brand, model, and serial number to avoid costly mistakes.",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Avoid Wrong Orders",
    description: "Many parts look similar but are model-specific. We prevent unnecessary returns.",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
      </svg>
    ),
  },
  {
    title: "Trusted Suppliers",
    description: "We source from authorized distributors for genuine, warrantied components.",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
  {
    title: "Expert Diagnosis",
    description: "Sometimes the issue isn't what it seems. We diagnose first, then order the right fix.",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
      </svg>
    ),
  },
];

export default function PartsPage() {
  return (
    <>
      {/* ── Hero — photo background with left text ── */}
      <section className="relative min-h-[520px] lg:min-h-[580px] flex items-center overflow-hidden">
        <Image
          src="/install.jpg"
          alt="Appliance technician working on parts"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal via-charcoal/80 to-charcoal/30" />

        <div className="relative z-10 w-full px-6 py-24 lg:py-32">
          <div className="mx-auto max-w-6xl">
            <div className="max-w-xl">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-brand-green/40 bg-brand-green/20 px-4 py-1.5 text-xs font-semibold text-white backdrop-blur-sm">
                <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                OEM &amp; Authorized Parts
              </div>
              <h1 className="text-4xl font-extrabold text-white sm:text-5xl lg:text-6xl leading-[1.08] tracking-tight">
                The Right <span className="text-brand-green">Parts</span> for Every Repair
              </h1>
              <p className="mt-5 text-lg text-white/75 leading-relaxed">
                We source genuine replacement components from trusted suppliers for all major appliance brands. Call us before ordering — we&apos;ll make sure you get the exact part you need.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-4">
                <a
                  href={siteConfig.phoneHref}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-green px-7 py-3.5 text-base font-bold text-white shadow-lg shadow-green-900/40 transition-all hover:bg-green-600 hover:scale-[1.02]"
                >
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                  Call {siteConfig.phone}
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full border-2 border-white/30 bg-white/10 backdrop-blur-sm px-7 py-3.5 text-base font-bold text-white transition-all hover:bg-white/20 hover:border-white/50"
                >
                  Request a Part
                  <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Common Parts We Source — icon card grid (like reference "Common Problems") ── */}
      <section className="py-16 px-6 lg:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <div className="mb-4 inline-flex h-1 w-12 rounded-full bg-brand-red" />
            <h2 className="text-3xl font-bold text-charcoal sm:text-4xl">
              Most Common <span className="text-brand-red">Parts</span> We Source
            </h2>
            <p className="mt-3 text-lg text-muted max-w-2xl mx-auto">
              From compressors to control boards — we find the right component for your appliance.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {commonParts.map((part) => (
              <div
                key={part.name}
                className="group rounded-2xl border border-border bg-white p-6 text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 hover:border-brand-red/20"
              >
                <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-red/5 text-brand-red transition-colors group-hover:bg-brand-red group-hover:text-white">
                  {part.icon}
                </div>
                <h3 className="text-base font-bold text-charcoal">{part.name}</h3>
                <p className="mt-1 text-sm text-muted">{part.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Parts by Appliance — service cards with colored accents (like reference "Major Appliances") ── */}
      <section className="bg-surface-alt py-16 px-6 lg:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <div className="mb-4 inline-flex h-1 w-12 rounded-full bg-brand-blue" />
            <h2 className="text-3xl font-bold text-charcoal sm:text-4xl">
              Parts for All <span className="text-brand-blue">Major Appliances</span>
            </h2>
            <p className="mt-3 text-lg text-muted max-w-2xl mx-auto">
              We source replacement parts for every appliance type we service.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {applianceCategories.map((cat, i) => {
              const colors = [
                { border: "border-l-brand-red", accent: "text-brand-red", bg: "bg-brand-red/5" },
                { border: "border-l-brand-blue", accent: "text-brand-blue", bg: "bg-brand-blue/5" },
                { border: "border-l-brand-green", accent: "text-brand-green", bg: "bg-brand-green/5" },
              ][i % 3];
              return (
                <Link
                  key={cat.name}
                  href={cat.href}
                  className={`group relative rounded-xl border border-border border-l-4 ${colors.border} bg-white p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5`}
                >
                  <h3 className="text-lg font-bold text-charcoal group-hover:text-brand-blue transition-colors">
                    {cat.name}
                  </h3>
                  <p className="mt-2 text-sm text-muted leading-relaxed">
                    {cat.examples}
                  </p>
                  <div className={`mt-4 inline-flex items-center gap-1.5 text-sm font-semibold ${colors.accent}`}>
                    View repair details
                    <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Call Before You Order — CTA banner with image (like reference "Find Near Me") ── */}
      <section className="relative py-16 px-6 lg:py-20 overflow-hidden bg-charcoal">
        {/* Decorative elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-brand-green/15 via-transparent to-brand-blue/10" />
        <div className="absolute top-0 right-0 w-80 h-80 bg-brand-green/8 rounded-full blur-[100px] translate-x-1/4 -translate-y-1/4" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-blue/8 rounded-full blur-[80px] -translate-x-1/4 translate-y-1/4" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />

        <div className="relative mx-auto max-w-6xl">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
            <div>
              <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-400/15 px-4 py-1.5 text-xs font-semibold text-amber-300 backdrop-blur-sm">
                <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                </svg>
                Important
              </div>
              <h2 className="text-3xl font-extrabold text-white sm:text-4xl leading-tight">
                Call Us <span className="text-brand-green">Before</span> You Order a Part
              </h2>
              <p className="mt-4 text-white/70 leading-relaxed">
                Ordering the wrong part is the #1 mistake homeowners make. Many components look identical but are model-specific. A quick call saves you time, money, and the hassle of returns.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-4">
                <a
                  href={siteConfig.phoneHref}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-green px-7 py-3.5 text-base font-bold text-white shadow-lg shadow-green-900/30 transition-all hover:bg-green-600 hover:scale-[1.02]"
                >
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                  Call {siteConfig.phone}
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full border-2 border-white/30 bg-white/10 backdrop-blur-sm px-7 py-3.5 text-base font-bold text-white transition-all hover:bg-white/20 hover:border-white/50"
                >
                  Book a Diagnosis
                </Link>
              </div>
            </div>

            {/* Right: "Why call first" points */}
            <div className="space-y-4">
              {whyCallFirst.map((item) => (
                <div
                  key={item.title}
                  className="flex items-start gap-4 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm p-5 transition-all hover:bg-white/10"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-green/20 text-brand-green">
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
        </div>
      </section>

      {/* ── How It Works — split layout with image (like reference "Why Choose") ── */}
      <section className="py-16 px-6 lg:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            {/* Left: Content */}
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-blue mb-3">
                How It Works
              </p>
              <h2 className="text-3xl font-extrabold text-charcoal sm:text-4xl leading-tight">
                From Diagnosis to <span className="text-brand-blue">Done</span>
              </h2>
              <p className="mt-4 text-muted leading-relaxed">
                We don&apos;t just sell parts — we diagnose, source, install, and test. Here&apos;s how the process works from start to finish.
              </p>

              <div className="mt-8 space-y-6">
                {[
                  {
                    step: "01",
                    title: "Call with Your Appliance Details",
                    desc: "Share the brand, model number, and the issue. This helps us identify the right part fast.",
                    color: "bg-brand-red",
                  },
                  {
                    step: "02",
                    title: "We Confirm & Source the Part",
                    desc: "We verify compatibility and order from our trusted supplier network. No guesswork.",
                    color: "bg-brand-blue",
                  },
                  {
                    step: "03",
                    title: "Professional Install & Testing",
                    desc: "Once the part arrives, we install it and run a full test to make sure everything works perfectly.",
                    color: "bg-brand-green",
                  },
                ].map((item) => (
                  <div key={item.step} className="flex gap-5">
                    <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${item.color} text-white text-sm font-extrabold shadow-md`}>
                      {item.step}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-charcoal">{item.title}</h3>
                      <p className="mt-1 text-sm text-muted leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Image */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <div className="aspect-[4/3]">
                <Image
                  src="/dryer-drum-macro-stainless-texture-warm-reflections.jpg"
                  alt="Inside of an appliance drum showing internal parts"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-red via-brand-blue to-brand-green" />
            </div>
          </div>
        </div>
      </section>

      {/* ── Brands Carousel ── */}
      <BrandsCarousel />

      {/* ── Service Area ── */}
      <ServiceAreaBlock />

      {/* ── Parts FAQ (like reference FAQ section) ── */}
      <section className="bg-surface-alt py-16 px-6 lg:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 lg:grid-cols-5 lg:gap-16">
            {/* Left: Heading + CTA */}
            <div className="lg:col-span-2">
              <div className="mb-4 inline-flex h-1 w-12 rounded-full bg-brand-red" />
              <h2 className="text-3xl font-bold text-charcoal sm:text-4xl">
                Questions <span className="text-brand-red">Answered</span>
              </h2>
              <p className="mt-3 text-muted leading-relaxed">
                Got a question about parts, compatibility, or our process? We&apos;ve got answers.
              </p>
              <div className="mt-6 hidden lg:block">
                <a
                  href={siteConfig.phoneHref}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-red px-6 py-3 text-sm font-bold text-white shadow-lg shadow-red-900/20 transition-all hover:bg-red-600 hover:scale-[1.02]"
                >
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                  Still have questions? Call us
                </a>
                <Link
                  href="/faq"
                  className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-brand-red transition-colors hover:text-red-600"
                >
                  View all FAQs
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Right: Accordion */}
            <div className="lg:col-span-3">
              <FAQAccordion items={partsFAQs} />
            </div>
          </div>

          {/* Mobile CTA below FAQ */}
          <div className="mt-8 text-center lg:hidden">
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
        headline="Need a Part?"
        body="Call us first — we'll confirm compatibility and help you get the right component for your appliance."
      />
    </>
  );
}
