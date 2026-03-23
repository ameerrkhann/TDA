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

      {/* Appliance Categories */}
      <section className="bg-surface-alt py-16 px-6 lg:py-24">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            title="Appliances We Repair"
            subtitle="We work on all major household appliance types."
          />
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
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
          />
          <BrandGrid limit={24} />
          <div className="mt-8 text-center">
            <Link
              href="/brands-we-service"
              className="inline-flex items-center gap-2 text-base font-semibold text-brand-blue hover:underline"
            >
              View All Brands
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
        <div className="mx-auto max-w-3xl text-center">
          <SectionHeading title="About Top Digital Appliances" />
          <p className="text-lg text-muted leading-relaxed">
            {siteConfig.about.short}
          </p>
          <Link
            href="/about"
            className="mt-6 inline-flex items-center gap-2 text-base font-semibold text-brand-blue hover:underline"
          >
            Learn More About Us
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="bg-surface-alt py-16 px-6 lg:py-24">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            title="Frequently Asked Questions"
            subtitle="Quick answers to common questions about our services."
          />
          <FAQAccordion items={faqs} limit={4} />
          <div className="mt-8 text-center">
            <Link
              href="/faq"
              className="inline-flex items-center gap-2 text-base font-semibold text-brand-blue hover:underline"
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
