import Link from "next/link";

type ApplianceCategoryCardProps = {
  applianceName: string;
  slug: string;
  issues?: string[];
};

const applianceIcons: Record<string, React.ReactNode> = {
  refrigerator: <span className="text-3xl">&#x1F9CA;</span>,
  freezer: <span className="text-3xl">&#x2744;&#xFE0F;</span>,
  washer: <span className="text-3xl">&#x1F9F4;</span>,
  dryer: <span className="text-3xl">&#x1F32C;&#xFE0F;</span>,
  dishwasher: <span className="text-3xl">&#x1F37D;&#xFE0F;</span>,
  oven: <span className="text-3xl">&#x1F373;</span>,
  stove: <span className="text-3xl">&#x1F525;</span>,
  range: <span className="text-3xl">&#x1F373;</span>,
  microwave: <span className="text-3xl">&#x1F4E1;</span>,
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
      className="group flex flex-col items-center rounded-xl border border-border bg-white p-6 text-center transition-all hover:border-brand-blue/30 hover:shadow-lg"
    >
      <div className="mb-3 flex h-16 w-16 items-center justify-center rounded-full bg-brand-green/10">
        {applianceIcons[iconKey] || <span className="text-3xl">&#x1F527;</span>}
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
