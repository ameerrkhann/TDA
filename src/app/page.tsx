import Link from "next/link";
import Hero from "@/components/Hero";
import BrandsCarousel from "@/components/BrandsCarousel";
import WhyChooseUs from "@/components/WhyChooseUs";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import ApplianceRepairExplorer from "@/components/ApplianceRepairExplorer";
import ServiceAreaBlock from "@/components/ServiceAreaBlock";
import FAQAccordion from "@/components/FAQAccordion";
import CTABanner from "@/components/CTABanner";
import ScrollReveal from "@/components/ScrollReveal";
import { parentServices } from "@/data/services";
import { faqs } from "@/data/faqs";
import { siteConfig } from "@/data/site";

export default function Home() {
  return (
    <>
      <Hero />

      {/* ── Brand Logo Marquee ── */}
      <BrandsCarousel />

      {/* ── Common Problems Intro Section ── */}
      <section className="py-16 px-6 lg:py-20">
        <ScrollReveal>
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-brand-red mb-4">
            What We Fix
          </p>
          <h2 className="text-3xl font-extrabold text-charcoal sm:text-4xl lg:text-5xl leading-tight">
            We Repair the Most Common{" "}
            <span className="text-brand-blue">Appliance Problems</span>
          </h2>
          <p className="mt-5 text-lg text-muted leading-relaxed max-w-2xl mx-auto">
            From refrigerators that won&apos;t cool to dryers that won&apos;t heat, our certified technicians diagnose and fix issues fast — so your home runs smoothly again.
          </p>
        </div>
        </ScrollReveal>
      </section>

      {/* Services Overview */}
      <section className="py-16 px-6 lg:py-24">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            title="Our Services"
            subtitle="From diagnosis to repair to installation, we handle it all."
            accentColor="red"
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {parentServices.map((service, i) => (
              <ScrollReveal key={service.slug} delay={i * 0.1}>
              <ServiceCard
                title={service.title}
                description={service.shortDescription}
                href={service.href}
                icon={service.icon}
              />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <WhyChooseUs />

      {/* Appliance Categories + Testimonials */}
      <section className="bg-surface-alt py-16 px-6 lg:py-24">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            title="Appliances We Repair"
            subtitle="Click any appliance to see repair details, common issues, and brand support."
            accentColor="blue"
          />
          <ApplianceRepairExplorer />
        </div>
      </section>

      <ServiceAreaBlock />

      {/* About Preview */}
      <section className="py-16 px-6 lg:py-24">
        <div className="mx-auto max-w-4xl">
          <ScrollReveal>
          <div className="rounded-2xl border border-border bg-white p-8 sm:p-12 relative overflow-hidden">
            {/* Colored corner accent */}
            <div className="absolute top-0 right-0 w-32 h-32">
              <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-brand-blue/5 to-transparent" />
            </div>
            <div className="absolute bottom-0 left-0 w-32 h-32">
              <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-tr from-brand-green/5 to-transparent" />
            </div>

            <div className="relative text-center">
              <div className="mb-4 inline-flex h-1 w-12 rounded-full bg-brand-green" />
              <h2 className="text-3xl font-bold text-charcoal sm:text-4xl">
                About Top Digital Appliances
              </h2>
              <p className="mt-4 text-lg text-muted leading-relaxed max-w-2xl mx-auto">
                {siteConfig.about.short}
              </p>
              <Link
                href="/about"
                className="mt-6 inline-flex items-center gap-2 rounded-lg bg-brand-green/5 px-5 py-2.5 text-base font-semibold text-brand-green transition-colors hover:bg-brand-green/10"
              >
                Learn More About Us
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </div>
          </div>
          </ScrollReveal>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="bg-surface-alt py-16 px-6 lg:py-24">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            title="Frequently Asked Questions"
            subtitle="Quick answers to common questions about our services."
            accentColor="red"
          />
          <FAQAccordion items={faqs} limit={4} />
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

      <CTABanner />
    </>
  );
}
