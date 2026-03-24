"use client";

import Link from "next/link";
import { siteConfig } from "@/data/site";
import { useEffect, useRef, useState } from "react";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    setMounted(true);
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  }, []);

  return (
    <section
      id="hero-section"
      className="relative px-2 pt-2 pb-0 sm:px-3 sm:pt-3 lg:px-4 lg:pt-4"
    >
      {/* ── Premium rounded hero card ── */}
      <div className="relative mx-auto max-w-[1600px] overflow-hidden rounded-2xl sm:rounded-3xl min-h-[650px] sm:min-h-[700px] lg:min-h-[90vh] lg:max-h-[1000px]">

        {/* ── Video background ── */}
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/hero.mp4" type="video/mp4" />
        </video>

        {/* ── Gradient overlays for text readability ── */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/55 to-black/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/30" />

        {/* ── Hero content ── */}
        <div className="relative z-10 flex items-end sm:items-center min-h-[530px] sm:min-h-[560px] lg:min-h-[75vh]">
          <div className="w-full px-6 pb-10 sm:px-10 sm:pb-14 lg:px-16 lg:pb-16 lg:max-w-[60%]">

            {/* Badge — extra top margin to separate from hero nav */}
            <div
              className={`inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs sm:text-sm font-medium text-white/90 backdrop-blur-sm mb-7 sm:mb-8 lg:mt-6 transition-all duration-700 ${
                mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-green opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-green" />
              </span>
              Serving the Greater Hudson Valley
            </div>

            {/* Headline */}
            <h1
              className={`text-3xl sm:text-4xl lg:text-6xl xl:text-7xl font-extrabold leading-[1.08] tracking-tight text-white transition-all duration-700 delay-150 ${
                mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >
              Fast, Reliable{" "}
              <span className="text-brand-red">Appliance Repair</span>{" "}
              Services Nearby
            </h1>

            {/* Subheadline */}
            <p
              className={`mt-5 sm:mt-6 max-w-lg text-sm sm:text-base lg:text-lg leading-relaxed text-white/75 transition-all duration-700 delay-300 ${
                mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >
              Our experts diagnose and repair top appliance brands, including Samsung, LG, Whirlpool, Bosch, GE, and many more.
            </p>

            {/* CTA buttons */}
            <div
              className={`mt-7 sm:mt-8 flex flex-col gap-3 sm:flex-row sm:gap-4 transition-all duration-700 delay-500 ${
                mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >
              <HoverBorderGradient
                as="a"
                href={siteConfig.phoneHref}
                containerClassName="rounded-full"
                className="flex items-center gap-2.5 rounded-full bg-brand-red px-7 py-3.5 sm:px-8 sm:py-4 text-base sm:text-lg font-bold text-white"
              >
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
                {siteConfig.phone}
              </HoverBorderGradient>
              <HoverBorderGradient
                as={Link}
                href="/contact"
                containerClassName="rounded-full"
                className="flex items-center gap-2 rounded-full bg-charcoal px-7 py-3.5 sm:px-8 sm:py-4 text-base sm:text-lg font-bold text-white"
              >
                Book Service
                <svg
                  className="ml-1 h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </HoverBorderGradient>
            </div>

            {/* Trust badges — inline */}
            <div
              className={`mt-8 flex flex-wrap gap-x-5 gap-y-2 text-xs sm:text-sm text-white/60 transition-all duration-700 delay-700 ${
                mounted ? "opacity-100" : "opacity-0"
              }`}
            >
              {["Licensed & Insured", "Same-Day Service", "All Major Brands"].map((item) => (
                <span key={item} className="flex items-center gap-1.5">
                  <svg className="h-3.5 w-3.5 text-brand-green" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                  </svg>
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
