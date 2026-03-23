import Link from "next/link";
import { siteConfig } from "@/data/site";

type CTABannerProps = {
  headline?: string;
  body?: string;
  variant?: "blue" | "white";
};

export default function CTABanner({
  headline = "Ready to Get Started?",
  body = "Call us today or book a service appointment online. We're here to help with all your appliance needs.",
}: CTABannerProps) {
  return (
    <section className="relative overflow-hidden py-20 px-6">
      {/* Multi-color gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-blue via-brand-blue to-blue-900" />

      {/* Colored accent orbs */}
      <div className="absolute top-0 right-0 w-72 h-72 rounded-full bg-brand-red/15 blur-[80px]" />
      <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-brand-green/15 blur-[80px]" />

      {/* Dot pattern */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
          {headline}
        </h2>
        <p className="mt-4 text-lg text-blue-100/80">
          {body}
        </p>
        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
          <a
            href={siteConfig.phoneHref}
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-brand-red px-8 py-4 text-lg font-bold text-white shadow-lg transition-all hover:bg-red-700 hover:shadow-xl hover:scale-[1.02]"
          >
            <PhoneIcon />
            {siteConfig.phone}
          </a>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-xl border-2 border-white/30 bg-white/10 backdrop-blur-sm px-8 py-4 text-lg font-bold text-white transition-all hover:bg-white/20 hover:border-white/50 hover:scale-[1.02]"
          >
            Book Service
          </Link>
        </div>
      </div>
    </section>
  );
}

function PhoneIcon() {
  return (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
    </svg>
  );
}
