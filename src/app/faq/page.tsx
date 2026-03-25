import type { Metadata } from "next";
import Link from "next/link";
import FAQAccordion from "@/components/FAQAccordion";
import CTABanner from "@/components/CTABanner";
import ScrollReveal from "@/components/ScrollReveal";
import { faqs } from "@/data/faqs";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Frequently asked questions about Top Digital Appliances — service areas, scheduling, brands, parts, installation, and more.",
};

export default function FAQPage() {
  return (
    <>
      <section className="bg-surface-alt py-16 px-6 lg:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 lg:grid-cols-5 lg:gap-16">
            {/* Left: Heading + support CTA */}
            <ScrollReveal direction="left" className="lg:col-span-2 text-center lg:text-left">
              <h1 className="text-4xl font-extrabold text-charcoal sm:text-5xl leading-tight">
                Common{" "}
                <span className="text-brand-red">Questions</span>
              </h1>
              <p className="mt-4 text-lg text-muted leading-relaxed">
                Find the answer to frequently asked questions here.
              </p>

              <div className="mt-8 flex items-center justify-center lg:justify-start gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-white text-brand-blue">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-muted">Need further support?</p>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 rounded-full bg-brand-red px-6 py-2.5 mt-2 text-sm font-bold text-white shadow-md shadow-red-900/20 transition-all hover:bg-red-600 hover:scale-[1.02]"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </ScrollReveal>

            {/* Right: FAQ Accordion cards */}
            <ScrollReveal direction="right" className="lg:col-span-3">
              <FAQAccordion items={faqs} variant="cards" />
            </ScrollReveal>
          </div>
        </div>
      </section>

      <CTABanner
        headline="Still Have Questions?"
        body="Give us a call and we'll be happy to help."
      />
    </>
  );
}
