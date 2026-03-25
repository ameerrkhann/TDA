"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { repairServices } from "@/data/services";
import { siteConfig } from "@/data/site";

/* ── Testimonials ── */
const testimonials = [
  {
    quote:
      "They came out the same day I called. The technician was professional, explained everything clearly, and had my refrigerator working again within an hour.",
    name: "Maria R.",
    location: "Middletown, NY",
  },
  {
    quote:
      "Honest pricing and quality work. They diagnosed a problem another company missed on our washer. Highly recommend for any appliance repair.",
    name: "James T.",
    location: "Newburgh, NY",
  },
  {
    quote:
      "Our oven stopped heating right before Thanksgiving. They fit us in last minute and saved the holiday. Grateful for the fast, reliable service.",
    name: "Linda K.",
    location: "Monroe, NY",
  },
];

/* ── Animated SVG icons keyed by slug prefix ── */
const applianceIcons: Record<string, React.ReactNode> = {
  refrigerator: (
    <svg viewBox="0 0 64 64" fill="none" className="w-8 h-8">
      <rect x="14" y="4" width="36" height="56" rx="4" className="stroke-brand-blue" strokeWidth="2.5" />
      <line x1="14" y1="28" x2="50" y2="28" className="stroke-brand-blue" strokeWidth="2" />
      <line x1="40" y1="14" x2="40" y2="22" className="stroke-brand-green" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="40" y1="34" x2="40" y2="46" className="stroke-brand-green" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  ),
  freezer: (
    <svg viewBox="0 0 64 64" fill="none" className="w-8 h-8">
      <rect x="14" y="6" width="36" height="52" rx="4" className="stroke-brand-blue" strokeWidth="2.5" />
      <line x1="40" y1="18" x2="40" y2="44" className="stroke-brand-green" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="28" y1="22" x2="28" y2="42" className="stroke-brand-blue" strokeWidth="2" strokeLinecap="round" />
      <line x1="18" y1="32" x2="38" y2="32" className="stroke-brand-blue" strokeWidth="2" strokeLinecap="round" />
    </svg>
  ),
  washer: (
    <svg viewBox="0 0 64 64" fill="none" className="w-8 h-8">
      <rect x="10" y="4" width="44" height="56" rx="4" className="stroke-brand-blue" strokeWidth="2.5" />
      <line x1="10" y1="18" x2="54" y2="18" className="stroke-brand-blue" strokeWidth="2" />
      <circle cx="32" cy="40" r="14" className="stroke-brand-blue" strokeWidth="2.5" />
      <circle cx="32" cy="40" r="6" className="stroke-brand-blue/30" strokeWidth="1.5" />
    </svg>
  ),
  dryer: (
    <svg viewBox="0 0 64 64" fill="none" className="w-8 h-8">
      <rect x="10" y="4" width="44" height="56" rx="4" className="stroke-brand-blue" strokeWidth="2.5" />
      <line x1="10" y1="18" x2="54" y2="18" className="stroke-brand-blue" strokeWidth="2" />
      <circle cx="32" cy="40" r="14" className="stroke-brand-blue" strokeWidth="2.5" />
      <path d="M26 34 Q28 38 26 42" className="stroke-brand-red" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      <path d="M32 32 Q34 38 32 44" className="stroke-brand-red" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      <path d="M38 34 Q40 38 38 42" className="stroke-brand-red" strokeWidth="1.5" fill="none" strokeLinecap="round" />
    </svg>
  ),
  dishwasher: (
    <svg viewBox="0 0 64 64" fill="none" className="w-8 h-8">
      <rect x="10" y="4" width="44" height="56" rx="4" className="stroke-brand-blue" strokeWidth="2.5" />
      <line x1="10" y1="16" x2="54" y2="16" className="stroke-brand-blue" strokeWidth="2" />
      <line x1="18" y1="38" x2="46" y2="38" className="stroke-brand-blue" strokeWidth="2" strokeLinecap="round" />
      <circle cx="26" cy="48" r="1" className="fill-brand-blue/30" />
      <circle cx="32" cy="50" r="1.2" className="fill-brand-blue/40" />
      <circle cx="38" cy="47" r="1" className="fill-brand-blue/30" />
    </svg>
  ),
  oven: (
    <svg viewBox="0 0 64 64" fill="none" className="w-8 h-8">
      <rect x="8" y="8" width="48" height="48" rx="4" className="stroke-brand-blue" strokeWidth="2.5" />
      <line x1="8" y1="20" x2="56" y2="20" className="stroke-brand-blue" strokeWidth="2" />
      <rect x="14" y="26" width="36" height="24" rx="2" className="stroke-brand-blue" strokeWidth="2" />
      <circle cx="20" cy="14" r="2.5" className="stroke-brand-green" strokeWidth="1.5" />
      <circle cx="32" cy="14" r="2.5" className="stroke-brand-green" strokeWidth="1.5" />
      <circle cx="44" cy="14" r="2.5" className="stroke-brand-green" strokeWidth="1.5" />
    </svg>
  ),
  stove: (
    <svg viewBox="0 0 64 64" fill="none" className="w-8 h-8">
      <rect x="8" y="12" width="48" height="44" rx="4" className="stroke-brand-blue" strokeWidth="2.5" />
      <circle cx="24" cy="30" r="8" className="stroke-brand-blue" strokeWidth="2" />
      <circle cx="44" cy="30" r="6" className="stroke-brand-blue" strokeWidth="2" />
      <circle cx="24" cy="48" r="6" className="stroke-brand-blue" strokeWidth="2" />
      <circle cx="44" cy="48" r="5" className="stroke-brand-blue" strokeWidth="2" />
    </svg>
  ),
  range: (
    <svg viewBox="0 0 64 64" fill="none" className="w-8 h-8">
      <rect x="8" y="4" width="48" height="56" rx="4" className="stroke-brand-blue" strokeWidth="2.5" />
      <line x1="8" y1="22" x2="56" y2="22" className="stroke-brand-blue" strokeWidth="2" />
      <circle cx="22" cy="13" r="5" className="stroke-brand-blue" strokeWidth="1.5" />
      <circle cx="42" cy="13" r="5" className="stroke-brand-blue" strokeWidth="1.5" />
      <rect x="14" y="28" width="36" height="26" rx="2" className="stroke-brand-blue" strokeWidth="2" />
    </svg>
  ),
  microwave: (
    <svg viewBox="0 0 64 64" fill="none" className="w-8 h-8">
      <rect x="6" y="14" width="52" height="36" rx="4" className="stroke-brand-blue" strokeWidth="2.5" />
      <rect x="12" y="20" width="30" height="24" rx="2" className="stroke-brand-blue" strokeWidth="2" />
      <circle cx="50" cy="28" r="2.5" className="stroke-brand-green" strokeWidth="1.5" />
      <circle cx="50" cy="36" r="2.5" className="stroke-brand-green" strokeWidth="1.5" />
    </svg>
  ),
};

function getIconKey(slug: string) {
  return slug.replace("-repair", "");
}

export default function ApplianceRepairExplorer() {
  const [selectedSlug, setSelectedSlug] = useState<string | null>(null);
  const selected = repairServices.find((s) => s.slug === selectedSlug) ?? null;

  return (
    <div className="space-y-20">
      {/* ── Appliance Selector + Detail Panel ── */}
      <div>
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left: Appliance Grid */}
          <motion.div
            layout
            className={selected ? "lg:w-2/5" : "w-full"}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            <div
              className={`grid gap-3 ${
                selected
                  ? "grid-cols-2 sm:grid-cols-3"
                  : "grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"
              }`}
            >
              {repairServices.map((service) => {
                const iconKey = getIconKey(service.slug);
                const isActive = service.slug === selectedSlug;

                return (
                  <motion.button
                    key={service.slug}
                    layout
                    onClick={() =>
                      setSelectedSlug(isActive ? null : service.slug)
                    }
                    className={`group relative flex flex-col items-center rounded-xl border p-5 text-center transition-all cursor-pointer ${
                      isActive
                        ? "border-brand-blue bg-brand-blue/5 shadow-md shadow-brand-blue/10"
                        : "border-border bg-white hover:border-brand-blue/30 hover:shadow-lg"
                    }`}
                  >
                    <div
                      className={`mb-2.5 flex h-14 w-14 items-center justify-center rounded-full transition-colors ${
                        isActive
                          ? "bg-brand-blue/10"
                          : "bg-brand-blue/5 group-hover:bg-brand-blue/10"
                      }`}
                    >
                      {applianceIcons[iconKey]}
                    </div>
                    <h3
                      className={`text-sm font-bold transition-colors ${
                        isActive
                          ? "text-brand-blue"
                          : "text-charcoal group-hover:text-brand-blue"
                      }`}
                    >
                      {service.applianceName}
                    </h3>
                    {isActive && (
                      <motion.div
                        layoutId="activeIndicator"
                        className="absolute -bottom-px left-4 right-4 h-0.5 rounded-full bg-brand-blue"
                      />
                    )}
                  </motion.button>
                );
              })}
            </div>
          </motion.div>

          {/* Right: Detail Panel */}
          <AnimatePresence mode="wait">
            {selected && (
              <motion.div
                key={selected.slug}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 40 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="lg:w-3/5"
              >
                <div className="rounded-2xl border border-border bg-white p-6 sm:p-8 shadow-sm">
                  {/* Header */}
                  <div className="flex items-start gap-4 mb-6">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-blue/10">
                      {applianceIcons[getIconKey(selected.slug)]}
                    </div>
                    <div>
                      <h3 className="text-2xl font-extrabold text-charcoal">
                        {selected.title}
                      </h3>
                      <p className="text-sm text-muted mt-1">
                        {selected.brandSupportNote}
                      </p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-muted leading-relaxed mb-6">
                    {selected.intro}
                  </p>

                  {/* Common Issues */}
                  <div className="mb-6">
                    <h4 className="text-sm font-bold uppercase tracking-wider text-charcoal mb-3">
                      Common Issues
                    </h4>
                    <ul className="grid gap-2 sm:grid-cols-2">
                      {selected.commonIssues.map((issue) => (
                        <li
                          key={issue}
                          className="flex items-start gap-2 text-sm text-muted"
                        >
                          <svg
                            className="h-4 w-4 mt-0.5 shrink-0 text-brand-red"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2.5}
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
                            />
                          </svg>
                          {issue}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA */}
                  <a
                    href={`tel:${siteConfig.phone.replace(/[^0-9+]/g, "")}`}
                    className="inline-flex items-center gap-2 rounded-full bg-brand-red px-6 py-3 text-sm font-bold text-white shadow-md shadow-red-900/20 transition-all hover:bg-red-600 hover:scale-[1.02]"
                  >
                    <svg
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                      />
                    </svg>
                    {selected.ctaText}
                  </a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Hint when nothing selected */}
        {!selected && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-6 text-center text-sm text-muted"
          >
            Select an appliance above to see repair details
          </motion.p>
        )}
      </div>

      {/* ── Testimonials ── */}
      <div>
        <div className="text-center mb-10">
          <p className="text-sm font-bold uppercase tracking-widest text-brand-red mb-3">
            Testimonials
          </p>
          <h3 className="text-3xl font-extrabold text-charcoal sm:text-4xl">
            What Our Customers Say
          </h3>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="rounded-2xl border border-border bg-white p-6 shadow-sm"
            >
              {/* Stars */}
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: 5 }).map((_, j) => (
                  <svg
                    key={j}
                    className="h-4 w-4 text-amber-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <blockquote className="text-muted leading-relaxed mb-4">
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-blue/10 text-sm font-bold text-brand-blue">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-bold text-charcoal">{t.name}</p>
                  <p className="text-xs text-muted">{t.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
