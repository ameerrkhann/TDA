import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import ApplianceCategoryCard from "@/components/ApplianceCategoryCard";
import CTABanner from "@/components/CTABanner";
import { repairServices } from "@/data/services";

export const metadata: Metadata = {
  title: "Appliance Repair",
  description:
    "Professional appliance repair for refrigerators, freezers, washers, dryers, dishwashers, ovens, stoves, ranges, and microwaves. Call 718-234-4111.",
};

const commonProblems = [
  "Appliance not turning on or not responding",
  "Not cooling, heating, or maintaining temperature",
  "Leaking water on the floor",
  "Unusual noises — humming, buzzing, clicking, or grinding",
  "Not draining or not spinning properly",
  "Error codes or flashing lights on the display",
  "Broken controls, knobs, or door latches",
];

export default function ApplianceRepairPage() {
  return (
    <>
      <section className="py-16 px-6 lg:py-24">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            title="Appliance Repair"
            subtitle="We repair all major household appliances across every leading brand. Whether it's a kitchen appliance or laundry equipment, our technicians diagnose the issue and fix it right."
            as="h1"
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

      {/* Common Problems */}
      <section className="bg-surface-alt py-16 px-6 lg:py-24">
        <div className="mx-auto max-w-3xl">
          <SectionHeading
            title="Common Appliance Problems We Fix"
            subtitle="These are some of the most frequent issues we see. If you're experiencing any of them, give us a call."
          />
          <div className="space-y-3">
            {commonProblems.map((problem) => (
              <div
                key={problem}
                className="flex items-start gap-3 rounded-lg border border-border bg-white px-5 py-4"
              >
                <svg
                  className="mt-0.5 h-5 w-5 shrink-0 text-brand-red"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
                  />
                </svg>
                <span className="text-charcoal">{problem}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        headline="Need a Repair?"
        body="Call us now or book a service appointment online. We'll get your appliance running again."
      />
    </>
  );
}
