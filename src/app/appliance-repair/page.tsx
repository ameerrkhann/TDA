import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import CTABanner from "@/components/CTABanner";
import BrandsCarousel from "@/components/BrandsCarousel";
import TrustRow from "@/components/TrustRow";
import ServiceAreaBlock from "@/components/ServiceAreaBlock";
import SectionHeading from "@/components/SectionHeading";
import FAQAccordion from "@/components/FAQAccordion";
import CTAButtons from "@/components/CTAButtons";
import { repairServices } from "@/data/services";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Appliance Repair",
  description:
    "Professional appliance repair for refrigerators, freezers, washers, dryers, dishwashers, ovens, stoves, ranges, and microwaves. Call 718-234-4111.",
};

const repairFAQs = [
  {
    question: "How quickly can you get a technician to my home?",
    answer:
      "We offer same-day and next-day service appointments in most cases. Call us at 718-234-4111 and we'll find the earliest available time that works for you.",
  },
  {
    question: "Do you provide a warranty on repairs?",
    answer:
      "Yes. All of our repairs come with a warranty on both parts and labor. We stand behind our work and want you to feel confident in every repair we perform.",
  },
  {
    question: "How much does an appliance repair cost?",
    answer:
      "Repair costs vary depending on the appliance type, the issue, and the parts needed. Our technician will diagnose the problem and provide an upfront quote before any work begins — no surprises.",
  },
  {
    question: "Do you repair all appliance brands?",
    answer:
      "Yes. We service over 60 major appliance brands including Samsung, LG, Whirlpool, GE, Bosch, Sub-Zero, Viking, Thermador, Wolf, KitchenAid, Miele, and many more.",
  },
  {
    question: "What should I do if my appliance stops working?",
    answer:
      "First, check that the appliance is plugged in and the circuit breaker hasn't tripped. If the issue persists, call us at 718-234-4111 — we'll help you troubleshoot over the phone and schedule a repair if needed.",
  },
];

const commonProblems = [
  {
    problem: "Appliance not turning on or not responding",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M5.636 5.636a9 9 0 1012.728 0M12 3v9" />
      </svg>
    ),
  },
  {
    problem: "Not cooling, heating, or maintaining temperature",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" />
      </svg>
    ),
  },
  {
    problem: "Leaking water on the floor",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582" />
      </svg>
    ),
  },
  {
    problem: "Unusual noises — humming, buzzing, or grinding",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z" />
      </svg>
    ),
  },
  {
    problem: "Not draining or not spinning properly",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182" />
      </svg>
    ),
  },
  {
    problem: "Error codes or flashing lights on the display",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
      </svg>
    ),
  },
  {
    problem: "Broken controls, knobs, or door latches",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17l-5.1-5.1a2.25 2.25 0 010-3.18l.71-.71a2.25 2.25 0 013.18 0l.71.71a2.25 2.25 0 010 3.18l-5.1 5.1M3.75 21h16.5" />
      </svg>
    ),
  },
];

/* Color accents for the appliance cards */
const cardAccents = [
  { border: "border-l-brand-red", bg: "group-hover:bg-brand-red/5", text: "text-brand-red", ring: "group-hover:ring-brand-red/20" },
  { border: "border-l-brand-blue", bg: "group-hover:bg-brand-blue/5", text: "text-brand-blue", ring: "group-hover:ring-brand-blue/20" },
  { border: "border-l-brand-green", bg: "group-hover:bg-brand-green/5", text: "text-brand-green", ring: "group-hover:ring-brand-green/20" },
];

const trustStats = [
  { number: "60+", label: "Brands Serviced", color: "text-brand-red", bg: "bg-brand-red/5", border: "border-brand-red/20" },
  { number: "9", label: "Appliance Types", color: "text-brand-blue", bg: "bg-brand-blue/5", border: "border-brand-blue/20" },
  { number: "Same-Day", label: "Appointments", color: "text-brand-green", bg: "bg-brand-green/5", border: "border-brand-green/20" },
  { number: "100%", label: "Satisfaction", color: "text-brand-red", bg: "bg-brand-red/5", border: "border-brand-red/20" },
];

const testimonials = [
  {
    quote: "They came out the same day I called. The technician was professional, explained everything clearly, and had my refrigerator working again within an hour.",
    name: "Maria R.",
    location: "Middletown, NY",
  },
  {
    quote: "Honest pricing and quality work. They diagnosed a problem another company missed on our washer. Highly recommend for any appliance repair.",
    name: "James T.",
    location: "Newburgh, NY",
  },
  {
    quote: "Our oven stopped heating right before Thanksgiving. They fit us in last minute and saved the holiday. Grateful for the fast, reliable service.",
    name: "Linda K.",
    location: "Monroe, NY",
  },
];

const guarantees = [
  {
    title: "Parts & Labor Warranty",
    description: "Every repair is backed by our warranty on both parts and labor, so you can trust it's done right.",
    color: "text-brand-green",
    bg: "bg-brand-green/5",
    border: "border-brand-green/20",
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
  {
    title: "Upfront Pricing",
    description: "No hidden fees or surprise charges. We provide a clear quote before any work begins.",
    color: "text-brand-blue",
    bg: "bg-brand-blue/5",
    border: "border-brand-blue/20",
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
      </svg>
    ),
  },
  {
    title: "Satisfaction Guaranteed",
    description: "We're not done until you're happy. If something isn't right, we'll make it right.",
    color: "text-brand-red",
    bg: "bg-brand-red/5",
    border: "border-brand-red/20",
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
      </svg>
    ),
  },
];

export default function ApplianceRepairPage() {
  return (
    <>
      {/* ── Hero banner ── */}
      <section className="relative bg-charcoal overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/20 via-transparent to-brand-red/10" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-red/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-brand-blue/8 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4" />

        {/* Dot pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />

        <div className="relative mx-auto max-w-6xl px-6 py-24 lg:py-32">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            {/* Left: Text content */}
            <div>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-medium text-white/80 backdrop-blur-sm">
                <svg className="h-3.5 w-3.5 text-brand-green" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                </svg>
                Licensed &amp; Insured &middot; Same-Day Available
              </div>
              <h1 className="text-4xl font-extrabold text-white sm:text-5xl lg:text-6xl leading-[1.1] tracking-tight">
                Expert{" "}
                <span className="text-brand-red">Appliance</span>{" "}
                Repair
              </h1>
              <p className="mt-5 text-lg text-white/70 leading-relaxed max-w-lg">
                We repair all major household appliances across every leading brand. Whether it&apos;s a kitchen appliance or laundry equipment, our technicians diagnose the issue and fix it right.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-4">
                <CTAButtons bookLabel="Book Online" />
              </div>
            </div>

            {/* Right: Repair image visual */}
            <div className="hidden lg:flex items-center justify-center">
              <div className="relative w-[380px] h-[380px]">
                {/* Outer frame ring */}
                <div className="absolute inset-0 rounded-full border-[12px] border-white/10 shadow-[inset_0_2px_20px_rgba(0,0,0,0.15),0_8px_40px_rgba(0,0,0,0.2)]" />
                {/* Inner chrome ring */}
                <div className="absolute inset-3 rounded-full border-[6px] border-white/5" />
                {/* Image */}
                <div className="absolute inset-5 rounded-full overflow-hidden">
                  <Image
                    src="/washer-drum.jpg"
                    alt="Inside of a washing machine drum"
                    fill
                    className="object-cover"
                    sizes="340px"
                  />
                </div>
                {/* Glass reflection overlay */}
                <div className="absolute inset-5 rounded-full bg-gradient-to-br from-white/20 via-transparent to-transparent pointer-events-none" />
                {/* Brand color glow */}
                <div className="absolute -inset-6 rounded-full bg-brand-blue/8 blur-2xl -z-10" />

                {/* Expert Repair badge */}
                <div className="absolute -bottom-2 -right-2 flex items-center gap-2 rounded-full border border-white/20 bg-charcoal/90 backdrop-blur-sm px-4 py-2.5 shadow-lg">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-red">
                    <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17l-5.1-5.1a2.25 2.25 0 010-3.18l.71-.71a2.25 2.25 0 013.18 0l.71.71a2.25 2.25 0 010 3.18l-5.1 5.1M3.75 21h16.5" />
                    </svg>
                  </div>
                  <span className="text-sm font-bold text-white">Expert Repair</span>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile trust stats - horizontal scroll */}
          <div className="mt-10 flex gap-3 overflow-x-auto pb-2 lg:hidden -mx-6 px-6 scrollbar-hide">
            {trustStats.map((stat) => (
              <div
                key={stat.label}
                className={`flex shrink-0 items-center gap-3 rounded-xl border ${stat.border} bg-white/5 backdrop-blur-sm px-5 py-3`}
              >
                <span className={`text-2xl font-extrabold ${stat.color}`}>{stat.number}</span>
                <span className="text-sm font-medium text-white/80">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Trust Row ── */}
      <TrustRow />

      {/* ── Brands Carousel ── */}
      <BrandsCarousel />

      {/* ── Appliance types grid ── */}
      <section className="py-16 px-6 lg:py-24">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            title="Choose Your Appliance"
            subtitle="Select your appliance type to learn more about our repair services, common issues, and how we can help."
            accentColor="blue"
          />

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {repairServices.map((service, i) => {
              const accent = cardAccents[i % cardAccents.length];
              return (
                <Link
                  key={service.slug}
                  href={`/appliance-repair/${service.slug}`}
                  className={`group relative flex items-center gap-5 rounded-xl border border-border border-l-4 ${accent.border} bg-white p-5 ring-1 ring-transparent transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 ${accent.bg} ${accent.ring}`}
                >
                  <div className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-surface-alt ${accent.text} transition-colors`}>
                    <ApplianceIcon slug={service.slug} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-bold text-charcoal group-hover:text-brand-blue transition-colors">
                      {service.title}
                    </h3>
                    <p className="mt-0.5 text-sm text-muted line-clamp-2">
                      {service.commonIssues[0]}, {service.commonIssues[1]?.toLowerCase()}, and more.
                    </p>
                  </div>
                  <svg
                    className="h-5 w-5 shrink-0 text-muted/40 transition-all group-hover:text-brand-blue group-hover:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                  </svg>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Common Problems ── */}
      <section className="bg-surface-alt py-16 px-6 lg:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            {/* Left: heading + description */}
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-red mb-3">
                Symptoms We Solve
              </p>
              <h2 className="text-3xl font-extrabold text-charcoal sm:text-4xl leading-tight">
                Common Appliance{" "}
                <span className="text-brand-blue">Problems</span> We Fix
              </h2>
              <p className="mt-4 text-muted leading-relaxed">
                These are some of the most frequent issues we see across all appliance types. If you&apos;re experiencing any of them, give us a call — we&apos;ll diagnose it fast.
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <a
                  href={siteConfig.phoneHref}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-red px-6 py-3 text-sm font-bold text-white shadow-lg shadow-red-900/20 transition-all hover:bg-red-600 hover:scale-[1.02]"
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

            {/* Right: problem list */}
            <div className="space-y-3">
              {commonProblems.map((item) => (
                <div
                  key={item.problem}
                  className="flex items-center gap-4 rounded-xl border border-border bg-white px-5 py-4 transition-all hover:shadow-sm hover:border-brand-blue/20"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-red/10 text-brand-red">
                    {item.icon}
                  </div>
                  <span className="text-sm font-medium text-charcoal sm:text-base">{item.problem}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="py-16 px-6 lg:py-24">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            title="What Our Customers Say"
            subtitle="Real feedback from homeowners we've helped across the Hudson Valley."
            accentColor="red"
          />

          <div className="grid gap-6 sm:grid-cols-3">
            {testimonials.map((item) => (
              <div
                key={item.name}
                className="relative rounded-2xl border border-border bg-white p-7 transition-all duration-300 hover:shadow-md"
              >
                {/* Decorative quotation mark */}
                <span className="absolute top-4 right-5 text-6xl font-serif leading-none text-brand-blue/8 select-none">
                  &ldquo;
                </span>
                {/* Stars */}
                <div className="mb-4 flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="h-5 w-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-sm text-muted leading-relaxed">{item.quote}</p>
                <div className="mt-5 flex items-center gap-3 border-t border-border pt-4">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-blue/10 text-brand-blue text-sm font-bold">
                    {item.name[0]}
                  </div>
                  <div>
                    <p className="text-sm font-bold text-charcoal">{item.name}</p>
                    <p className="text-xs text-muted">{item.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Process steps ── */}
      <section className="bg-surface-alt py-16 px-6 lg:py-24">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            title="Simple, Fast Repair Process"
            subtitle="From your first call to a fully working appliance — here's how it works."
            accentColor="green"
          />

          <div className="relative grid gap-6 sm:grid-cols-3">
            {/* Connecting arrows (desktop only) */}
            <div className="hidden sm:flex absolute top-1/2 left-[33.33%] -translate-x-1/2 -translate-y-1/2 z-10 items-center justify-center w-8">
              <svg className="w-6 h-6 text-muted/40" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </div>
            <div className="hidden sm:flex absolute top-1/2 left-[66.66%] -translate-x-1/2 -translate-y-1/2 z-10 items-center justify-center w-8">
              <svg className="w-6 h-6 text-muted/40" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </div>

            {[
              {
                step: "01",
                title: "Call or Book Online",
                description: "Reach out by phone or schedule through our website. We'll find a time that works for you.",
                color: "text-brand-red",
                bg: "bg-brand-red/5",
                border: "border-brand-red/20",
                icon: (
                  <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                ),
              },
              {
                step: "02",
                title: "We Diagnose the Issue",
                description: "Our certified technician arrives, inspects the appliance, and provides an upfront quote.",
                color: "text-brand-blue",
                bg: "bg-brand-blue/5",
                border: "border-brand-blue/20",
                icon: (
                  <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                  </svg>
                ),
              },
              {
                step: "03",
                title: "Fixed & Running",
                description: "We complete the repair, test everything, and make sure your appliance is running perfectly.",
                color: "text-brand-green",
                bg: "bg-brand-green/5",
                border: "border-brand-green/20",
                icon: (
                  <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.745 3.745 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                  </svg>
                ),
              },
            ].map((item) => (
              <div
                key={item.step}
                className={`relative rounded-2xl border ${item.border} ${item.bg} p-8 text-center transition-all duration-300 hover:shadow-md hover:-translate-y-1`}
              >
                {/* Step number watermark */}
                <span className={`absolute top-4 right-5 text-5xl font-extrabold ${item.color} opacity-10`}>
                  {item.step}
                </span>
                {/* Icon */}
                <div className={`mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl ${item.bg} ${item.color}`}>
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-charcoal">{item.title}</h3>
                <p className="mt-3 text-sm text-muted leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Our Guarantee ── */}
      <section className="py-16 px-6 lg:py-24">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            title="Our Guarantee"
            subtitle="We stand behind every repair with promises you can count on."
            accentColor="green"
          />

          <div className="grid gap-6 sm:grid-cols-3">
            {guarantees.map((item) => (
              <div
                key={item.title}
                className={`rounded-2xl border border-border bg-white p-8 text-center transition-all duration-300 hover:shadow-md hover:-translate-y-1`}
              >
                <div className={`mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl ${item.bg} ${item.color}`}>
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold text-charcoal">{item.title}</h3>
                <p className="mt-3 text-sm text-muted leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Service Area ── */}
      <ServiceAreaBlock />

      {/* ── Repair FAQ ── */}
      <section className="bg-surface-alt py-16 px-6 lg:py-24">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            title="Repair FAQs"
            subtitle="Answers to common questions about our appliance repair services."
            accentColor="red"
          />
          <FAQAccordion items={repairFAQs} />
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
        headline="Need a Repair?"
        body="Call us now or book a service appointment online. We'll get your appliance running again."
      />
    </>
  );
}

/* ── Inline appliance icon component ── */
function ApplianceIcon({ slug }: { slug: string }) {
  const key = slug.replace("-repair", "");
  const iconMap: Record<string, React.ReactNode> = {
    refrigerator: (
      <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 3h12a2 2 0 012 2v14a2 2 0 01-2 2H6a2 2 0 01-2-2V5a2 2 0 012-2z" />
        <path strokeLinecap="round" d="M4 10h16M15 6v2M15 13v4" />
      </svg>
    ),
    freezer: (
      <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7" strokeWidth={1.5} stroke="currentColor">
        <rect x="4" y="3" width="16" height="18" rx="2" />
        <path strokeLinecap="round" d="M15 8v8M12 7v10M9 9v6" />
      </svg>
    ),
    washer: (
      <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7" strokeWidth={1.5} stroke="currentColor">
        <rect x="4" y="2" width="16" height="20" rx="2" />
        <circle cx="12" cy="14" r="5" />
        <path strokeLinecap="round" d="M4 7h16" />
        <circle cx="8" cy="4.5" r="0.75" fill="currentColor" />
      </svg>
    ),
    dryer: (
      <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7" strokeWidth={1.5} stroke="currentColor">
        <rect x="4" y="2" width="16" height="20" rx="2" />
        <circle cx="12" cy="14" r="5" />
        <path strokeLinecap="round" d="M4 7h16" />
        <path d="M10 12.5c.5-1 1.5-1 2 0s1.5 1 2 0" strokeLinecap="round" />
      </svg>
    ),
    dishwasher: (
      <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7" strokeWidth={1.5} stroke="currentColor">
        <rect x="4" y="2" width="16" height="20" rx="2" />
        <path strokeLinecap="round" d="M4 6h16M10 4h4" />
        <path d="M8 14h8M9 11h6M9 17h6" strokeLinecap="round" />
      </svg>
    ),
    oven: (
      <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7" strokeWidth={1.5} stroke="currentColor">
        <rect x="3" y="4" width="18" height="16" rx="2" />
        <rect x="6" y="10" width="12" height="8" rx="1" />
        <path strokeLinecap="round" d="M7 7h0M12 7h0M17 7h0" strokeWidth="2" />
      </svg>
    ),
    stove: (
      <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7" strokeWidth={1.5} stroke="currentColor">
        <rect x="3" y="6" width="18" height="14" rx="2" />
        <circle cx="9" cy="12" r="3" />
        <circle cx="16" cy="12" r="2" />
        <circle cx="9" cy="17" r="2" />
      </svg>
    ),
    range: (
      <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7" strokeWidth={1.5} stroke="currentColor">
        <rect x="3" y="2" width="18" height="20" rx="2" />
        <path strokeLinecap="round" d="M3 8h18" />
        <rect x="6" y="11" width="12" height="8" rx="1" />
        <circle cx="8" cy="5" r="1.5" />
        <circle cx="16" cy="5" r="1.5" />
      </svg>
    ),
    microwave: (
      <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7" strokeWidth={1.5} stroke="currentColor">
        <rect x="2" y="6" width="20" height="12" rx="2" />
        <rect x="4" y="8" width="12" height="8" rx="1" />
        <circle cx="19" cy="10" r="1" />
        <circle cx="19" cy="14" r="1" />
      </svg>
    ),
  };

  return iconMap[key] || (
    <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17l-5.1-5.1M21.75 12a9.75 9.75 0 11-19.5 0 9.75 9.75 0 0119.5 0z" />
    </svg>
  );
}
