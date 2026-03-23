import Link from "next/link";

type ApplianceCategoryCardProps = {
  applianceName: string;
  slug: string;
  issues?: string[];
};

/* ── Animated SVG icons for each appliance ── */
const applianceIcons: Record<string, React.ReactNode> = {
  refrigerator: (
    <svg viewBox="0 0 64 64" fill="none" className="w-10 h-10">
      <rect x="14" y="4" width="36" height="56" rx="4" className="stroke-brand-blue" strokeWidth="2.5" />
      <line x1="14" y1="28" x2="50" y2="28" className="stroke-brand-blue" strokeWidth="2" />
      <line x1="40" y1="14" x2="40" y2="22" className="stroke-brand-green" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="40" y1="34" x2="40" y2="46" className="stroke-brand-green" strokeWidth="2.5" strokeLinecap="round" />
      {/* Cold air indicator */}
      <g className="animate-pulse">
        <circle cx="28" cy="42" r="1.5" className="fill-brand-blue/40" />
        <circle cx="24" cy="38" r="1" className="fill-brand-blue/30" />
        <circle cx="32" cy="38" r="1" className="fill-brand-blue/30" />
      </g>
    </svg>
  ),
  freezer: (
    <svg viewBox="0 0 64 64" fill="none" className="w-10 h-10">
      <rect x="14" y="6" width="36" height="52" rx="4" className="stroke-brand-blue" strokeWidth="2.5" />
      <line x1="40" y1="18" x2="40" y2="44" className="stroke-brand-green" strokeWidth="2.5" strokeLinecap="round" />
      {/* Snowflake */}
      <g className="animate-spin" style={{ transformOrigin: "28px 32px", animationDuration: "8s" }}>
        <line x1="28" y1="22" x2="28" y2="42" className="stroke-brand-blue" strokeWidth="2" strokeLinecap="round" />
        <line x1="18" y1="32" x2="38" y2="32" className="stroke-brand-blue" strokeWidth="2" strokeLinecap="round" />
        <line x1="21" y1="25" x2="35" y2="39" className="stroke-brand-blue" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="35" y1="25" x2="21" y2="39" className="stroke-brand-blue" strokeWidth="1.5" strokeLinecap="round" />
      </g>
    </svg>
  ),
  washer: (
    <svg viewBox="0 0 64 64" fill="none" className="w-10 h-10">
      <rect x="10" y="4" width="44" height="56" rx="4" className="stroke-brand-blue" strokeWidth="2.5" />
      <line x1="10" y1="18" x2="54" y2="18" className="stroke-brand-blue" strokeWidth="2" />
      <circle cx="20" cy="11" r="2.5" className="stroke-brand-green" strokeWidth="1.5" />
      <circle cx="28" cy="11" r="2.5" className="stroke-brand-green" strokeWidth="1.5" />
      <circle cx="32" cy="40" r="14" className="stroke-brand-blue" strokeWidth="2.5" />
      {/* Spinning drum */}
      <g className="animate-spin" style={{ transformOrigin: "32px 40px", animationDuration: "3s" }}>
        <circle cx="32" cy="40" r="8" className="stroke-brand-blue/30" strokeWidth="1.5" strokeDasharray="4 4" />
        <path d="M26 36 Q32 44 38 36" className="stroke-brand-green" strokeWidth="1.5" fill="none" />
        <path d="M26 44 Q32 36 38 44" className="stroke-brand-green" strokeWidth="1.5" fill="none" />
      </g>
    </svg>
  ),
  dryer: (
    <svg viewBox="0 0 64 64" fill="none" className="w-10 h-10">
      <rect x="10" y="4" width="44" height="56" rx="4" className="stroke-brand-blue" strokeWidth="2.5" />
      <line x1="10" y1="18" x2="54" y2="18" className="stroke-brand-blue" strokeWidth="2" />
      <circle cx="46" cy="11" r="2.5" className="stroke-brand-green" strokeWidth="1.5" />
      <circle cx="32" cy="40" r="14" className="stroke-brand-blue" strokeWidth="2.5" />
      {/* Heat waves */}
      <g className="animate-pulse">
        <path d="M26 34 Q28 38 26 42" className="stroke-brand-red" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        <path d="M32 32 Q34 38 32 44" className="stroke-brand-red" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        <path d="M38 34 Q40 38 38 42" className="stroke-brand-red" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      </g>
    </svg>
  ),
  dishwasher: (
    <svg viewBox="0 0 64 64" fill="none" className="w-10 h-10">
      <rect x="10" y="4" width="44" height="56" rx="4" className="stroke-brand-blue" strokeWidth="2.5" />
      <line x1="10" y1="16" x2="54" y2="16" className="stroke-brand-blue" strokeWidth="2" />
      <line x1="28" y1="8" x2="36" y2="12" className="stroke-brand-green" strokeWidth="2.5" strokeLinecap="round" />
      {/* Spray arm */}
      <g className="animate-spin" style={{ transformOrigin: "32px 38px", animationDuration: "4s" }}>
        <line x1="18" y1="38" x2="46" y2="38" className="stroke-brand-blue" strokeWidth="2" strokeLinecap="round" />
        <circle cx="22" cy="38" r="1.5" className="fill-brand-blue/40" />
        <circle cx="42" cy="38" r="1.5" className="fill-brand-blue/40" />
      </g>
      {/* Water drops */}
      <g className="animate-bounce" style={{ animationDuration: "2s" }}>
        <circle cx="26" cy="48" r="1" className="fill-brand-blue/30" />
        <circle cx="32" cy="50" r="1.2" className="fill-brand-blue/40" />
        <circle cx="38" cy="47" r="1" className="fill-brand-blue/30" />
      </g>
    </svg>
  ),
  oven: (
    <svg viewBox="0 0 64 64" fill="none" className="w-10 h-10">
      <rect x="8" y="8" width="48" height="48" rx="4" className="stroke-brand-blue" strokeWidth="2.5" />
      <line x1="8" y1="20" x2="56" y2="20" className="stroke-brand-blue" strokeWidth="2" />
      <rect x="14" y="26" width="36" height="24" rx="2" className="stroke-brand-blue" strokeWidth="2" />
      <circle cx="20" cy="14" r="2.5" className="stroke-brand-green" strokeWidth="1.5" />
      <circle cx="32" cy="14" r="2.5" className="stroke-brand-green" strokeWidth="1.5" />
      <circle cx="44" cy="14" r="2.5" className="stroke-brand-green" strokeWidth="1.5" />
      {/* Heat glow */}
      <g className="animate-pulse">
        <rect x="18" y="44" width="28" height="3" rx="1.5" className="fill-brand-red/30" />
        <rect x="20" y="40" width="24" height="2" rx="1" className="fill-brand-red/20" />
      </g>
    </svg>
  ),
  stove: (
    <svg viewBox="0 0 64 64" fill="none" className="w-10 h-10">
      <rect x="8" y="12" width="48" height="44" rx="4" className="stroke-brand-blue" strokeWidth="2.5" />
      {/* Burners */}
      <circle cx="24" cy="30" r="8" className="stroke-brand-blue" strokeWidth="2" />
      <circle cx="44" cy="30" r="6" className="stroke-brand-blue" strokeWidth="2" />
      <circle cx="24" cy="48" r="6" className="stroke-brand-blue" strokeWidth="2" />
      <circle cx="44" cy="48" r="5" className="stroke-brand-blue" strokeWidth="2" />
      {/* Flame on main burner */}
      <g className="animate-pulse">
        <ellipse cx="24" cy="30" rx="3" ry="2" className="fill-brand-red/30" />
        <ellipse cx="24" cy="29" rx="1.5" ry="3" className="fill-brand-red/40" />
      </g>
    </svg>
  ),
  range: (
    <svg viewBox="0 0 64 64" fill="none" className="w-10 h-10">
      <rect x="8" y="4" width="48" height="56" rx="4" className="stroke-brand-blue" strokeWidth="2.5" />
      <line x1="8" y1="22" x2="56" y2="22" className="stroke-brand-blue" strokeWidth="2" />
      {/* Burners on top */}
      <circle cx="22" cy="13" r="5" className="stroke-brand-blue" strokeWidth="1.5" />
      <circle cx="42" cy="13" r="5" className="stroke-brand-blue" strokeWidth="1.5" />
      {/* Oven window */}
      <rect x="14" y="28" width="36" height="26" rx="2" className="stroke-brand-blue" strokeWidth="2" />
      <line x1="28" y1="56" x2="36" y2="56" className="stroke-brand-green" strokeWidth="2.5" strokeLinecap="round" />
      {/* Burner flame */}
      <g className="animate-pulse">
        <ellipse cx="22" cy="13" rx="2" ry="1.5" className="fill-brand-red/30" />
        <ellipse cx="42" cy="13" rx="2" ry="1.5" className="fill-brand-red/30" />
      </g>
      {/* Oven glow */}
      <g className="animate-pulse" style={{ animationDelay: "0.5s" }}>
        <rect x="18" y="46" width="28" height="3" rx="1.5" className="fill-brand-red/20" />
      </g>
    </svg>
  ),
  microwave: (
    <svg viewBox="0 0 64 64" fill="none" className="w-10 h-10">
      <rect x="6" y="14" width="52" height="36" rx="4" className="stroke-brand-blue" strokeWidth="2.5" />
      <rect x="12" y="20" width="30" height="24" rx="2" className="stroke-brand-blue" strokeWidth="2" />
      <circle cx="50" cy="28" r="2.5" className="stroke-brand-green" strokeWidth="1.5" />
      <circle cx="50" cy="36" r="2.5" className="stroke-brand-green" strokeWidth="1.5" />
      {/* Microwave waves */}
      <g className="animate-pulse">
        <path d="M22 28 Q26 32 22 36" className="stroke-brand-red/50" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        <path d="M27 26 Q33 32 27 38" className="stroke-brand-red/40" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        <path d="M32 24 Q40 32 32 40" className="stroke-brand-red/30" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      </g>
    </svg>
  ),
};

function getIconKey(slug: string) {
  return slug.replace("-repair", "");
}

export default function ApplianceCategoryCard({
  applianceName,
  slug,
}: ApplianceCategoryCardProps) {
  const iconKey = getIconKey(slug);

  return (
    <Link
      href={`/appliance-repair/${slug}`}
      className="group flex w-[calc(50%-8px)] sm:w-[calc(33.333%-11px)] lg:w-[calc(25%-12px)] xl:w-[calc(20%-13px)] flex-col items-center rounded-xl border border-border bg-white p-6 text-center transition-all hover:border-brand-blue/30 hover:shadow-lg"
    >
      <div className="mb-3 flex h-16 w-16 items-center justify-center rounded-full bg-brand-blue/5 group-hover:bg-brand-blue/10 transition-colors">
        {applianceIcons[iconKey] || (
          <svg viewBox="0 0 64 64" fill="none" className="w-10 h-10">
            <path d="M14 50L40 24" className="stroke-brand-blue" strokeWidth="3" strokeLinecap="round" />
            <path d="M40 24C38 18 40 10 48 8C48 16 52 18 56 16C54 24 46 26 40 24Z" className="stroke-brand-blue" strokeWidth="2" fill="none" />
          </svg>
        )}
      </div>
      <h3 className="text-lg font-bold text-charcoal group-hover:text-brand-blue transition-colors">
        {applianceName} Repair
      </h3>
      <span className="mt-2 text-sm font-semibold text-brand-blue opacity-0 transition-opacity group-hover:opacity-100">
        Learn More &rarr;
      </span>
    </Link>
  );
}
