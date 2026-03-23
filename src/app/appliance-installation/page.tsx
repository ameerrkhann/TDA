import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import CTABanner from "@/components/CTABanner";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Appliance Installation",
  description:
    "Professional appliance installation for all major kitchen and laundry appliances. Call Top Digital Appliances at 718-234-4111.",
};

const installationTypes = [
  "Refrigerators & Freezers",
  "Washers & Dryers",
  "Dishwashers",
  "Ovens & Ranges",
  "Cooktops & Stoves",
  "Microwaves (built-in & over-the-range)",
];

export default function ApplianceInstallationPage() {
  return (
    <>
      <section className="py-16 px-6 lg:py-24">
        <div className="mx-auto max-w-3xl">
          <SectionHeading
            title="Appliance Installation"
            subtitle="We install new kitchen and laundry appliances with care and precision."
            align="left"
            as="h1"
          />

          <div className="space-y-6 text-lg text-muted leading-relaxed">
            <p>
              Installing a new appliance involves more than just plugging it in.
              Proper installation means ensuring secure connections, correct
              leveling, and thorough testing before we leave. Our technicians
              handle all of this so you can start using your new appliance with
              confidence.
            </p>

            <p>
              Whether you purchased your appliance from a retail store, online,
              or through a contractor, we can install it for you. We work with
              gas and electric connections and all standard household hookups.
            </p>

            <h2 className="text-2xl font-bold text-charcoal pt-4">
              What We Install
            </h2>
            <div className="grid gap-3 sm:grid-cols-2">
              {installationTypes.map((type) => (
                <div
                  key={type}
                  className="flex items-center gap-3 rounded-lg border border-border bg-white px-5 py-4"
                >
                  <svg
                    className="h-5 w-5 shrink-0 text-brand-green"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>
                  <span className="text-charcoal font-medium">{type}</span>
                </div>
              ))}
            </div>

            <h2 className="text-2xl font-bold text-charcoal pt-4">
              Our Process
            </h2>
            <ol className="space-y-4">
              {[
                {
                  step: "1",
                  title: "Call or Book Online",
                  desc: "Reach out to schedule your installation. Let us know the appliance type and brand.",
                },
                {
                  step: "2",
                  title: "On-Site Installation",
                  desc: "Our technician arrives, installs the appliance, and ensures all connections are secure.",
                },
                {
                  step: "3",
                  title: "Testing & Walkthrough",
                  desc: "We test the appliance, verify it runs correctly, and walk you through the basics.",
                },
              ].map((item) => (
                <li key={item.step} className="flex gap-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-blue text-sm font-bold text-white">
                    {item.step}
                  </span>
                  <div>
                    <h3 className="font-bold text-charcoal">{item.title}</h3>
                    <p className="text-muted">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <div className="mt-12 flex flex-col gap-4 sm:flex-row">
            <a
              href={siteConfig.phoneHref}
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-brand-blue px-8 py-3.5 text-lg font-bold text-white transition-colors hover:bg-blue-700"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
              Call {siteConfig.phone}
            </a>
          </div>
        </div>
      </section>

      <CTABanner
        headline="Need an Appliance Installed?"
        body="Call us today to schedule professional appliance installation."
      />
    </>
  );
}
