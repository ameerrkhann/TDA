import type { Metadata } from "next";
import { notFound } from "next/navigation";
import SectionHeading from "@/components/SectionHeading";
import CTABanner from "@/components/CTABanner";
import { repairServices } from "@/data/services";
import { siteConfig } from "@/data/site";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return repairServices.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = repairServices.find((s) => s.slug === slug);
  if (!service) return {};

  return {
    title: service.metaTitle,
    description: service.metaDescription,
  };
}

export default async function RepairPage({ params }: Props) {
  const { slug } = await params;
  const service = repairServices.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  return (
    <>
      <section className="py-16 px-6 lg:py-24">
        <div className="mx-auto max-w-3xl">
          <SectionHeading
            title={service.title}
            align="left"
            as="h1"
          />

          <p className="text-lg text-muted leading-relaxed">
            {service.intro}
          </p>

          {/* Common Issues */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-charcoal">
              Common {service.applianceName} Issues We Fix
            </h2>
            <div className="mt-4 space-y-3">
              {service.commonIssues.map((issue) => (
                <div
                  key={issue}
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
                      d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.049.58.025 1.193-.14 1.743"
                    />
                  </svg>
                  <span className="text-charcoal">{issue}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Brand Support */}
          <div className="mt-12 rounded-xl border border-brand-green/20 bg-brand-green/5 p-6">
            <h2 className="text-lg font-bold text-charcoal">
              Brand Support
            </h2>
            <p className="mt-2 text-muted leading-relaxed">
              {service.brandSupportNote}
            </p>
          </div>

          {/* Quick contact */}
          <div className="mt-12 flex flex-col gap-4 sm:flex-row">
            <a
              href={siteConfig.phoneHref}
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-brand-blue px-8 py-3.5 text-lg font-bold text-white transition-colors hover:bg-blue-700"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
              {siteConfig.phone}
            </a>
          </div>
        </div>
      </section>

      <CTABanner
        headline={service.ctaText}
        body={`Call us today for professional ${service.applianceName.toLowerCase()} repair service.`}
      />
    </>
  );
}
