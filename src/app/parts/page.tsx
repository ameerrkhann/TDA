import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import CTABanner from "@/components/CTABanner";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Parts & Support",
  description:
    "Top Digital Appliances provides parts support for all major appliance brands. Call 718-234-4111 before ordering to confirm compatibility.",
};

export default function PartsPage() {
  return (
    <>
      <section className="py-16 px-6 lg:py-24">
        <div className="mx-auto max-w-3xl">
          <SectionHeading
            title="Parts & Support"
            subtitle="We source and supply appliance parts related to our repair work."
            align="left"
            as="h1"
          />

          <div className="space-y-6 text-lg text-muted leading-relaxed">
            <p>
              When your appliance needs a specific part, we can help. As part of
              our repair service, we source replacement components from trusted
              suppliers across all major brands. Whether it&apos;s a compressor, a
              heating element, a control board, or a door seal, we find the right
              part for your unit.
            </p>

            <div className="rounded-xl border border-amber-200 bg-amber-50 p-6">
              <h2 className="flex items-center gap-2 text-lg font-bold text-charcoal">
                <svg className="h-5 w-5 text-amber-500" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                </svg>
                Call Before You Order
              </h2>
              <p className="mt-2 text-muted">
                Before ordering a part on your own, give us a call. We can
                confirm compatibility with your specific appliance model and
                help you avoid unnecessary returns or incorrect purchases.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-charcoal pt-4">
              How It Works
            </h2>
            <ol className="space-y-4">
              {[
                {
                  step: "1",
                  title: "Call Us with Your Appliance Details",
                  desc: "Share the brand, model number, and the issue you're experiencing. This helps us identify the right part.",
                },
                {
                  step: "2",
                  title: "We Confirm & Source the Part",
                  desc: "We verify compatibility and source the component from our trusted supplier network.",
                },
                {
                  step: "3",
                  title: "Repair & Installation",
                  desc: "Once the part arrives, we install it as part of the repair and make sure everything works properly.",
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

            <p>
              We carry and source parts for all the brands we service — from
              everyday household names to premium and commercial-grade equipment.
            </p>
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
        headline="Need a Part?"
        body="Call us first — we'll confirm compatibility and help you get the right component."
      />
    </>
  );
}
