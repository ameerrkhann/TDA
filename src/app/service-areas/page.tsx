import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import CTABanner from "@/components/CTABanner";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Service Areas",
  description:
    "Top Digital Appliances serves the Greater Hudson Valley area and beyond. Call 718-234-4111 to confirm service availability in your area.",
};

export default function ServiceAreasPage() {
  return (
    <>
      <section className="py-16 px-6 lg:py-24">
        <div className="mx-auto max-w-3xl">
          <SectionHeading
            title="Service Areas"
            subtitle="We proudly serve the Greater Hudson Valley area and surrounding communities."
            as="h1"
          />

          <div className="rounded-xl border border-brand-green/20 bg-brand-green/5 p-8 text-center">
            <p className="text-xl font-semibold text-charcoal">
              {siteConfig.serviceAreaLine}
            </p>
          </div>

          <div className="mt-12 space-y-6 text-lg text-muted leading-relaxed">
            <p>
              Our service coverage spans the Greater Hudson Valley region and
              continues to grow. Because coverage can vary depending on your
              exact location, we encourage you to call and confirm before
              scheduling.
            </p>

            <p>
              Whether you are in a residential home, rental property, or manage
              multiple units, we are ready to assist with your appliance repair,
              installation, or parts needs.
            </p>

            <h2 className="text-2xl font-bold text-charcoal pt-4">
              How to Confirm Coverage
            </h2>
            <p>
              The fastest way to find out if we service your area is to call us
              directly. Our team can confirm coverage, answer questions, and
              schedule your appointment right away.
            </p>

            <div className="flex flex-col items-center gap-4 pt-4 sm:flex-row sm:justify-center">
              <a
                href={siteConfig.phoneHref}
                className="inline-flex items-center gap-2 rounded-lg bg-brand-blue px-8 py-3.5 text-lg font-bold text-white transition-colors hover:bg-blue-700"
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
                Call {siteConfig.phone}
              </a>
              <a
                href={siteConfig.emailHref}
                className="inline-flex items-center gap-2 text-lg font-semibold text-brand-blue hover:underline"
              >
                {siteConfig.email}
              </a>
            </div>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
