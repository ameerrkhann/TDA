import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import FAQAccordion from "@/components/FAQAccordion";
import CTABanner from "@/components/CTABanner";
import { faqs } from "@/data/faqs";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Frequently asked questions about Top Digital Appliances — service areas, scheduling, brands, parts, installation, and more.",
};

export default function FAQPage() {
  return (
    <>
      <section className="py-16 px-6 lg:py-24">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            title="Frequently Asked Questions"
            subtitle="Find answers to common questions about our appliance repair, installation, and parts services."
            as="h1"
          />
          <FAQAccordion items={faqs} />
        </div>
      </section>

      <CTABanner
        headline="Still Have Questions?"
        body="Give us a call and we'll be happy to help."
      />
    </>
  );
}
