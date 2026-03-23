import Link from "next/link";
import Hero from "@/components/Hero";
import TrustRow from "@/components/TrustRow";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import ApplianceCategoryCard from "@/components/ApplianceCategoryCard";
import BrandGrid from "@/components/BrandGrid";
import ServiceAreaBlock from "@/components/ServiceAreaBlock";
import FAQAccordion from "@/components/FAQAccordion";
import CTABanner from "@/components/CTABanner";
import { parentServices, repairServices } from "@/data/services";
import { faqs } from "@/data/faqs";
import { siteConfig } from "@/data/site";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustRow />

      {/* Services Overview */}
      <section className="py-16 px-6 lg:py-24">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            title="Our Services"
            subtitle="From diagnosis to repair to installation, we handle it all."
            accentColor="red"
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {parentServices.map((service) => (
              <ServiceCard
                key={service.slug}
                title={service.title}
                description={service.shortDescription}
                href={service.href}
                icon={service.icon}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="relative overflow-hidden py-16 px-6 lg:py-24 bg-surface-alt">
        <div className="relative mx-auto max-w-6xl">
          <div className="mb-10 text-center">
            <div className="mb-4 inline-flex h-1 w-12 rounded-full bg-brand-red" />
            <h2 className="text-3xl font-bold text-charcoal sm:text-4xl">Why Choose Us</h2>
            <p className="mt-3 text-lg text-muted max-w-2xl mx-auto">Trusted by homeowners, landlords, and property managers across the Hudson Valley.</p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                number: "60+",
                label: "Brands Serviced",
                description: "From everyday names to premium and commercial-grade equipment.",
                iconBg: "bg-brand-red",
              },
              {
                number: "9",
                label: "Appliance Types",
                description: "Refrigerators, washers, dryers, ovens, and everything in between.",
                iconBg: "bg-brand-blue",
              },
              {
                number: "Same",
                label: "Day Service",
                description: "Fast response when your appliances can't wait.",
                iconBg: "bg-brand-green",
              },
              {
                number: "100%",
                label: "Satisfaction",
                description: "We stand behind every repair and installation we perform.",
                iconBg: "bg-brand-red",
              },
            ].map((stat) => (
              <div
                key={stat.label}
                className="rounded-xl border border-border bg-white p-6 text-center shadow-sm"
              >
                <div className={`mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-full ${stat.iconBg}`}>
                  <span className="text-xl font-extrabold text-white">{stat.number}</span>
                </div>
                <h3 className="text-lg font-bold text-charcoal">{stat.label}</h3>
                <p className="mt-2 text-sm text-muted">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Appliance Categories */}
      <section className="bg-surface-alt py-16 px-6 lg:py-24">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            title="Appliances We Repair"
            subtitle="We work on all major household appliance types."
            accentColor="blue"
          />
          <div className="flex flex-wrap justify-center gap-4">
            {repairServices.map((service) => (
              <ApplianceCategoryCard
                key={service.slug}
                applianceName={service.applianceName}
                slug={service.slug}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Brands Preview */}
      <section className="py-16 px-6 lg:py-24">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            title="Brands We Service"
            subtitle="We repair and install appliances from all major manufacturers."
            accentColor="green"
          />
          <BrandGrid limit={24} />
          <div className="mt-8 text-center">
            <Link
              href="/brands-we-service"
              className="inline-flex items-center gap-2 rounded-lg bg-brand-blue/5 px-5 py-2.5 text-base font-semibold text-brand-blue transition-colors hover:bg-brand-blue/10"
            >
              View All 60+ Brands
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      <ServiceAreaBlock />

      {/* About Preview */}
      <section className="py-16 px-6 lg:py-24">
        <div className="mx-auto max-w-4xl">
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
