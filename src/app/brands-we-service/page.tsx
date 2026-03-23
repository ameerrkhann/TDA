import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import BrandGrid from "@/components/BrandGrid";
import CTABanner from "@/components/CTABanner";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Brands We Service",
  description:
    "Top Digital Appliances services all major appliance brands including Samsung, LG, Whirlpool, GE, Sub-Zero, Viking, and 60+ more.",
};

export default function BrandsPage() {
  return (
    <>
      <section className="py-16 px-6 lg:py-24">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            title="Brands We Service"
            subtitle="We repair and install appliances from all major manufacturers. If your brand isn't listed, give us a call — we likely service it too."
            as="h1"
          />
          <BrandGrid />
          <p className="mt-10 text-center text-muted">
            Don&apos;t see your brand listed?{" "}
            <a
              href={siteConfig.phoneHref}
              className="font-semibold text-brand-blue hover:underline"
            >
              Call us at {siteConfig.phone}
            </a>{" "}
            to ask.
          </p>
        </div>
      </section>

      <CTABanner variant="white" />
    </>
  );
}
