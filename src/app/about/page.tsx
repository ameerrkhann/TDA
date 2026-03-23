import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import CTABanner from "@/components/CTABanner";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Top Digital Appliances — your trusted partner for appliance repair, installation, and parts support in the Greater Hudson Valley area.",
};

export default function AboutPage() {
  return (
    <>
      <section className="py-16 px-6 lg:py-24">
        <div className="mx-auto max-w-3xl">
          <SectionHeading
            title="About Top Digital Appliances"
            align="left"
            as="h1"
          />

          <div className="space-y-6 text-lg text-muted leading-relaxed">
            <p>
              Top Digital Appliances is a professional appliance service company
              specializing in repair, installation, and parts support. We work
              with homeowners, landlords, and property managers who need
              dependable service for their household appliances.
            </p>

            <p>
              Our technicians are trained to work on all major appliance
              categories — refrigerators, freezers, washers, dryers,
              dishwashers, ovens, stoves, ranges, and microwaves. We service
              both standard household brands and premium or commercial-grade
              equipment, so no matter what you own, we can help.
            </p>

            <h2 className="text-2xl font-bold text-charcoal pt-4">
              What We Do
            </h2>
            <ul className="space-y-3">
              <li className="flex gap-3">
                <span className="mt-1 text-brand-blue">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </span>
                <span>
                  <strong className="text-charcoal">Appliance Repair</strong> —
                  We diagnose and fix issues across all major appliance types and
                  brands.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 text-brand-blue">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </span>
                <span>
                  <strong className="text-charcoal">
                    Appliance Installation
                  </strong>{" "}
                  — We install new appliances and ensure they are properly
                  connected, leveled, and running.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 text-brand-blue">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </span>
                <span>
                  <strong className="text-charcoal">Parts Support</strong> — We
                  source and supply parts related to our repair work across all
                  major brands.
                </span>
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-charcoal pt-4">
              Why Customers Call Us
            </h2>
            <p>
              Customers choose Top Digital Appliances because we make the process
              straightforward. You call, describe the issue, and we schedule a
              visit. Our focus is on clear communication, honest assessments, and
              getting your appliance back to working order.
            </p>

            <h2 className="text-2xl font-bold text-charcoal pt-4">
              Service Area
            </h2>
            <p>{siteConfig.serviceAreaLine}</p>

            <h2 className="text-2xl font-bold text-charcoal pt-4">
              Get in Touch
            </h2>
            <p>
              Ready to schedule a repair or have a question about our services?
              Call us at{" "}
              <a
                href={siteConfig.phoneHref}
                className="font-semibold text-brand-blue hover:underline"
              >
                {siteConfig.phone}
              </a>{" "}
              or email{" "}
              <a
                href={siteConfig.emailHref}
                className="font-semibold text-brand-blue hover:underline"
              >
                {siteConfig.email}
              </a>
              .
            </p>
          </div>
        </div>
      </section>

      <CTABanner variant="white" />
    </>
  );
}
