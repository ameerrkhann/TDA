"use client";

import { brands, type BrandEntry } from "@/data/brands";
import Image from "next/image";
import { useState, useCallback } from "react";

function BrandLogo({ brand }: { brand: BrandEntry }) {
  const [imgError, setImgError] = useState(false);

  const handleError = useCallback(() => {
    setImgError(true);
  }, []);

  if (imgError) {
    return (
      <span className="whitespace-nowrap text-sm font-semibold tracking-wide text-muted/70 sm:text-base">
        {brand.name}
      </span>
    );
  }

  return (
    <Image
      src={brand.logo}
      alt={brand.alt}
      width={120}
      height={40}
      className="h-7 w-auto max-w-[110px] object-contain grayscale opacity-50 transition-all duration-300 hover:opacity-100 hover:grayscale-0 sm:h-9 sm:max-w-[130px]"
      onError={handleError}
    />
  );
}

export default function BrandsCarousel() {
  return (
    <section className="bg-white border-y border-border/50 py-10 lg:py-12">
      {/* Single-row marquee */}
      <div className="marquee-container">
        <div className="marquee-track">
          <TrackRow brands={brands} />
          <TrackRow brands={brands} aria-hidden />
        </div>
      </div>
    </section>
  );
}

function TrackRow({
  brands: items,
  "aria-hidden": ariaHidden,
}: {
  brands: BrandEntry[];
  "aria-hidden"?: boolean;
}) {
  return (
    <div
      className="flex shrink-0 items-center gap-12 px-6 sm:gap-16 lg:gap-20"
      aria-hidden={ariaHidden}
    >
      {items.map((brand) => (
        <div
          key={brand.slug}
          className="flex shrink-0 items-center justify-center"
        >
          <BrandLogo brand={brand} />
        </div>
      ))}
    </div>
  );
}
