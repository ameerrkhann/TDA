"use client";
import Link from "next/link";
import { siteConfig } from "@/data/site";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";

type CTAButtonsProps = {
  variant?: "red" | "blue";
  bookLabel?: string;
  size?: "default" | "sm";
};

export default function CTAButtons({
  variant = "red",
  bookLabel = "Book Online",
  size = "default",
}: CTAButtonsProps) {
  const bgColor = variant === "blue" ? "bg-brand-blue" : "bg-brand-red";
  const px = size === "sm" ? "px-6 py-3" : "px-7 py-3.5";
  const text = size === "sm" ? "text-sm" : "text-base";

  return (
    <>
      <HoverBorderGradient
        as="a"
        href={siteConfig.phoneHref}
        containerClassName="rounded-full"
        className={`flex items-center gap-2 rounded-full ${bgColor} ${px} ${text} font-bold text-white`}
      >
        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
        </svg>
        {siteConfig.phone}
      </HoverBorderGradient>
      <HoverBorderGradient
        as={Link}
        href="/contact"
        containerClassName="rounded-full"
        className={`flex items-center gap-2 rounded-full bg-charcoal ${px} ${text} font-bold text-white`}
      >
        {bookLabel}
        <svg className="ml-1 h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
        </svg>
      </HoverBorderGradient>
    </>
  );
}
