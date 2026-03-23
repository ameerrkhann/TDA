import type { Metadata } from "next";
import Link from "next/link";
import CTABanner from "@/components/CTABanner";
import { repairServices } from "@/data/services";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Appliance Repair",
  description:
    "Professional appliance repair for refrigerators, freezers, washers, dryers, dishwashers, ovens, stoves, ranges, and microwaves. Call 718-234-4111.",
};

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
  { border: "border-l-brand-red", bg: "group-hover:bg-brand-red/5", text: "text-brand-red" },
  { border: "border-l-brand-blue", bg: "group-hover:bg-brand-blue/5", text: "text-brand-blue" },
  { border: "border-l-brand-green", bg: "group-hover:bg-brand-green/5", text: "text-brand-green" },
];

export default function ApplianceRepairPage() {
  return (
    <>
      {/* ── Hero banner ── */}
      <section className="relative bg-charcoal overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/20 via-transparent to-brand-red/10" />
        <div className="relative mx-auto max-w-6xl px-6 py-20 lg:py-28">
          <div className="max-w-2xl">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-medium text-white/80 backdrop-blur-sm">
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
              <a
                href={siteConfig.phoneHref}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-red px-7 py-3.5 text-base font-bold text-white shadow-lg shadow-red-900/30 transition-all hover:bg-red-600 hover:scale-[1.02]"
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
                {siteConfig.phone}
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full border-2 border-white/30 bg-white/10 backdrop-blur-sm px-7 py-3.5 text-base font-bold text-white transition-all hover:bg-white/20 hover:border-white/50"
              >
                Book Online
                <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Appliance types grid ── */}
      <section className="py-16 px-6 lg:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-blue mb-3">
              What We Repair
            </p>
            <h2 className="text-3xl font-extrabold text-charcoal sm:text-4xl">
              Choose Your Appliance
            </h2>
            <p className="mt-3 text-muted max-w-lg mx-auto">
              Select your appliance type to learn more about our repair services, common issues, and how we can help.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {repairServices.map((service, i) => {
              const accent = cardAccents[i % cardAccents.length];
              return (
                <Link
                  key={service.slug}
                  href={`/appliance-repair/${service.slug}`}
                  className={`group relative flex items-center gap-5 rounded-xl border border-border border-l-4 ${accent.border} bg-white p-5 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 ${accent.bg}`}
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
              <a
                href={siteConfig.phoneHref}
                className="mt-6 inline-flex items-center gap-2 text-base font-bold text-brand-red hover:text-red-600 transition-colors"
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
                Call {siteConfig.phone}
              </a>
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

      {/* ── Process steps ── */}
      <section className="py-16 px-6 lg:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-green mb-3">
              How It Works
            </p>
            <h2 className="text-3xl font-extrabold text-charcoal sm:text-4xl">
              Simple, Fast Repair Process
            </h2>
          </div>

          <div className="grid gap-8 sm:grid-cols-3">
            {[
              {
                step: "01",
                title: "Call or Book Online",
                description: "Reach out by phone or schedule through our website. We'll find a time that works for you.",
                color: "text-brand-red",
                bg: "bg-brand-red/5",
                border: "border-brand-red/20",
              },
              {
                step: "02",
                title: "We Diagnose the Issue",
                description: "Our certified technician arrives, inspects the appliance, and provides an upfront quote.",
                color: "text-brand-blue",
                bg: "bg-brand-blue/5",
                border: "border-brand-blue/20",
              },
              {
                step: "03",
                title: "Fixed & Running",
                description: "We complete the repair, test everything, and make sure your appliance is running perfectly.",
                color: "text-brand-green",
                bg: "bg-brand-green/5",
                border: "border-brand-green/20",
              },
            ].map((item) => (
              <div
                key={item.step}
                className={`relative rounded-2xl border ${item.border} ${item.bg} p-8 text-center`}
              >
                <span className={`text-5xl font-extrabold ${item.color} opacity-20`}>
                  {item.step}
                </span>
                <h3 className="mt-2 text-xl font-bold text-charcoal">{item.title}</h3>
                <p className="mt-3 text-sm text-muted leading-relaxed">{item.description}</p>
              </div>
            ))}
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
