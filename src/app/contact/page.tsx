import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import ContactForm from "@/components/ContactForm";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact / Book Service",
  description:
    "Contact Top Digital Appliances to schedule appliance repair, installation, or parts support. Call 718-234-5111 or fill out our online form.",
};

export default function ContactPage() {
  return (
    <section className="py-16 px-6 lg:py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          title="Contact Us"
          subtitle="Schedule a service appointment or ask us a question. We're here to help."
          as="h1"
        />

        <div className="grid gap-12 lg:grid-cols-3">
          {/* Contact info sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              <div className="rounded-xl border border-border bg-white p-6">
                <h2 className="text-lg font-bold text-charcoal">
                  Get in Touch
                </h2>

                <div className="mt-5 space-y-4">
                  <a
                    href={siteConfig.phoneHref}
                    className="flex items-center gap-3 text-charcoal transition-colors hover:text-brand-blue"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-blue/10 text-brand-blue">
                      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-muted">Mobile</p>
                      <p className="font-semibold">{siteConfig.phone}</p>
                    </div>
                  </a>

                  <a
                    href={siteConfig.phoneLandlineHref}
                    className="flex items-center gap-3 text-charcoal transition-colors hover:text-brand-blue"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-green/10 text-brand-green">
                      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-muted">Landline</p>
                      <p className="font-semibold">{siteConfig.phoneLandline}</p>
                    </div>
                  </a>

                  <a
                    href={siteConfig.emailHref}
                    className="flex items-center gap-3 text-charcoal transition-colors hover:text-brand-blue"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-blue/10 text-brand-blue">
                      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-muted">Email</p>
                      <p className="font-semibold">{siteConfig.email}</p>
                    </div>
                  </a>
                </div>
              </div>

              <div className="rounded-xl border border-brand-green/20 bg-brand-green/5 p-6">
                <h3 className="text-sm font-semibold text-brand-green">
                  Service Area
                </h3>
                <p className="mt-2 text-sm text-muted leading-relaxed">
                  {siteConfig.serviceAreaLine}
                </p>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-2">
            <div className="rounded-xl border border-border bg-white p-6 sm:p-8">
              <h2 className="mb-6 text-xl font-bold text-charcoal">
                Book a Service Appointment
              </h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
