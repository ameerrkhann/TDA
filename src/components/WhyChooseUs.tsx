"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const stats = [
  {
    number: "60+",
    label: "Brands Serviced",
    description: "From everyday names to premium and commercial-grade equipment.",
    color: "text-brand-red",
    borderColor: "border-brand-red/20",
    bgColor: "bg-brand-red/5",
  },
  {
    number: "9",
    label: "Appliance Types",
    description: "Refrigerators, washers, dryers, ovens, and everything in between.",
    color: "text-brand-blue",
    borderColor: "border-brand-blue/20",
    bgColor: "bg-brand-blue/5",
  },
  {
    number: "Same-Day",
    label: "Service",
    description: "Fast response when your appliances can't wait.",
    color: "text-brand-green",
    borderColor: "border-brand-green/20",
    bgColor: "bg-brand-green/5",
  },
  {
    number: "100%",
    label: "Satisfaction",
    description: "We stand behind every repair and installation we perform.",
    color: "text-brand-red",
    borderColor: "border-brand-red/20",
    bgColor: "bg-brand-red/5",
  },
];

export default function WhyChooseUs() {
  const sectionRef = useRef<HTMLElement>(null);
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return;

    const handleScroll = () => {
      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Calculate how far through the section we've scrolled (0 to 1)
      const sectionTop = rect.top;
      const sectionHeight = rect.height;
      const visibleStart = windowHeight;
      const totalTravel = windowHeight + sectionHeight;
      const progress = (visibleStart - sectionTop) / totalTravel;

      // Map progress to rotation (0 to 720 degrees = 2 full rotations)
      const clampedProgress = Math.max(0, Math.min(1, progress));
      setRotation(clampedProgress * 720);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial calculation

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden py-20 px-6 lg:py-28 bg-white"
    >
      <div className="relative mx-auto max-w-6xl">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* ── Left: Text content ── */}
          <div className="text-center lg:text-left">
            <div className="mb-3 inline-flex h-1 w-12 rounded-full bg-brand-red" />
            <h2 className="text-3xl font-extrabold text-charcoal sm:text-4xl lg:text-5xl leading-tight">
              Why Choose{" "}
              <span className="text-brand-blue">Us</span>
            </h2>
            <p className="mt-4 text-lg text-muted max-w-md mx-auto lg:mx-0 leading-relaxed">
              Trusted by homeowners, landlords, and property managers across the Greater Hudson Valley.
            </p>

            {/* Stats grid */}
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className={`rounded-xl border ${stat.borderColor} ${stat.bgColor} p-5 transition-all duration-300 hover:shadow-md hover:scale-[1.02]`}
                >
                  <span className={`text-2xl sm:text-3xl font-extrabold ${stat.color}`}>
                    {stat.number}
                  </span>
                  <h3 className="mt-1 text-base font-bold text-charcoal">
                    {stat.label}
                  </h3>
                  <p className="mt-1.5 text-sm text-muted leading-relaxed">
                    {stat.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right: Spinning washer drum ── */}
          <div className="relative flex items-center justify-center lg:justify-end">
            {/* Outer washer frame */}
            <div className="relative w-[320px] h-[320px] sm:w-[400px] sm:h-[400px] lg:w-[480px] lg:h-[480px]">
              {/* Decorative ring — the washer door frame */}
              <div className="absolute inset-0 rounded-full border-[12px] sm:border-[16px] border-gray-200 shadow-[inset_0_2px_20px_rgba(0,0,0,0.08),0_8px_40px_rgba(0,0,0,0.1)]" />

              {/* Inner chrome ring */}
              <div className="absolute inset-3 sm:inset-4 rounded-full border-[6px] sm:border-[8px] border-gray-300/60" />

              {/* Spinning drum with clothes image */}
              <div
                className="absolute inset-5 sm:inset-6 rounded-full overflow-hidden"
                style={{
                  transform: `rotate(${rotation}deg)`,
                  transition: "transform 0.1s linear",
                }}
              >
                <Image
                  src="/photo-1626806787461-102c1bfaaea1.jpeg"
                  alt="Washing machine drum close-up"
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 280px, (max-width: 1024px) 360px, 440px"
                />
              </div>

              {/* Glass reflection overlay */}
              <div className="absolute inset-5 sm:inset-6 rounded-full bg-gradient-to-br from-white/25 via-transparent to-transparent pointer-events-none" />

              {/* Door handle accent */}
              <div className="absolute top-1/2 -right-2 sm:-right-3 -translate-y-1/2 w-5 h-12 sm:w-6 sm:h-14 rounded-full bg-gray-300 shadow-md" />

              {/* Subtle brand color glow */}
              <div className="absolute -inset-6 rounded-full bg-brand-blue/5 blur-2xl -z-10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
