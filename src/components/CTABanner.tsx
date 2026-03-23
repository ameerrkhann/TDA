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
  variant = "blue",
}: CTABannerProps) {
  const isBlue = variant === "blue";

  return (
    <section
      className={`py-16 px-6 ${
        isBlue
          ? "bg-brand-blue text-white"
          : "bg-surface-alt text-charcoal"
      }`}
    >
      <div className="mx-auto max-w-3xl text-center">
        <h2
          className={`text-3xl font-bold sm:text-4xl ${
            isBlue ? "text-white" : "text-brand-blue"
          }`}
        >
          {headline}
        </h2>
        <p
          className={`mt-4 text-lg ${
            isBlue ? "text-blue-100" : "text-muted"
          }`}
        >
          {body}
        </p>
        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
          <a
            href={siteConfig.phoneHref}
            className={`inline-flex items-center justify-center gap-2 rounded-lg px-8 py-3.5 text-lg font-semibold transition-colors ${
              isBlue
                ? "bg-white text-brand-blue hover:bg-blue-50"
                : "bg-brand-blue text-white hover:bg-blue-700"
            }`}
          >
            <PhoneIcon />
            {siteConfig.phone}
          </a>
          <Link
            href="/contact"
            className={`inline-flex items-center justify-center rounded-lg border-2 px-8 py-3.5 text-lg font-semibold transition-colors ${
              isBlue
                ? "border-white text-white hover:bg-white/10"
                : "border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white"
            }`}
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
    <svg
      className="h-5 w-5"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
      />
    </svg>
  );
}
