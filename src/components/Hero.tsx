"use client";

import Link from "next/link";
import { siteConfig } from "@/data/site";
import { useEffect, useRef, useState } from "react";

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    setMounted(true);
    // Ensure video plays on mount
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  }, []);

  return (
    <section className="relative overflow-hidden min-h-[85vh] sm:min-h-[75vh] lg:min-h-[80vh] flex items-center">
      {/* ── Video background ── */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover"
        poster="/logo.png"
      >
        <source src="/hero.mp4" type="video/mp4" />
      </video>

      {/* ── Dark overlay for text readability ── */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />

      {/* ── Subtle brand color tint ── */}
      <div className="absolute inset-0 bg-brand-blue/20 mix-blend-overlay" />

      {/* ── Content ── */}
      <div className="relative z-10 mx-auto w-full max-w-5xl px-6 py-20 sm:py-28 lg:py-36">
        <div className="text-center">
          {/* Badge */}
          <div
            className={`inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm font-medium text-white/90 backdrop-blur-sm mb-8 transition-all duration-700 ${
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
            className={`text-4xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-7xl drop-shadow-lg transition-all duration-700 delay-150 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <span className="block">Expert Appliance</span>
            <span className="block mt-1 sm:mt-2">
              Repair, Installation
            </span>
            <span className="block mt-1 sm:mt-2">
              &amp; Parts
            </span>
          </h1>

          {/* Subheadline */}
          <p
            className={`mx-auto mt-6 sm:mt-8 max-w-2xl text-base sm:text-lg lg:text-xl leading-relaxed text-white/80 drop-shadow transition-all duration-700 delay-300 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            {siteConfig.hero.subheadline}
          </p>

          {/* CTAs */}
          <div
            className={`mt-8 sm:mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center transition-all duration-700 delay-500 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <a
              href={siteConfig.phoneHref}
              className="group relative inline-flex items-center justify-center gap-2.5 rounded-xl bg-brand-red px-8 py-4 text-lg font-bold text-white shadow-lg transition-all duration-300 hover:bg-red-700 hover:shadow-xl hover:scale-[1.02]"
            >
              <svg
                className="h-5 w-5 transition-transform group-hover:rotate-12"
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
            </a>
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center rounded-xl border-2 border-white/40 bg-white/10 backdrop-blur-sm px-8 py-4 text-lg font-bold text-white transition-all duration-300 hover:bg-white/20 hover:border-white/60 hover:scale-[1.02]"
            >
              {siteConfig.hero.secondaryCta}
              <svg
                className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>

          {/* Trust indicators — mobile */}
          <div
            className={`mt-10 flex flex-wrap justify-center gap-x-6 gap-y-3 text-sm text-white/70 sm:hidden transition-all duration-700 delay-700 ${
              mounted ? "opacity-100" : "opacity-0"
            }`}
          >
            <span className="flex items-center gap-1.5">
              <svg className="h-4 w-4 text-brand-green" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
              </svg>
              Licensed & Insured
            </span>
            <span className="flex items-center gap-1.5">
              <svg className="h-4 w-4 text-brand-green" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
              </svg>
              Same-Day Service
            </span>
            <span className="flex items-center gap-1.5">
              <svg className="h-4 w-4 text-brand-green" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
              </svg>
              All Major Brands
            </span>
          </div>
        </div>
      </div>

    </section>
  );
}
