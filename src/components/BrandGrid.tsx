import { brands } from "@/data/brands";

type BrandGridProps = {
  limit?: number;
};

export default function BrandGrid({ limit }: BrandGridProps) {
  const displayBrands = limit ? brands.slice(0, limit) : brands;

  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
      {displayBrands.map((brand) => (
        <div
          key={brand.slug}
          className="flex items-center justify-center rounded-lg border border-border bg-white px-4 py-3 text-center text-sm font-medium text-charcoal transition-colors hover:border-brand-blue/30 hover:text-brand-blue"
        >
          {brand.name}
        </div>
      ))}
    </div>
  );
}
