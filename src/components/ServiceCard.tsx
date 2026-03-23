import Link from "next/link";

type ServiceCardProps = {
  title: string;
  description: string;
  href: string;
  icon: string;
};

const cardStyles: Record<string, { border: string; iconBg: string; iconColor: string; accent: string }> = {
  wrench: {
    border: "hover:border-brand-red/40",
    iconBg: "bg-brand-red/10 group-hover:bg-brand-red/15",
    iconColor: "text-brand-red",
    accent: "text-brand-red",
  },
  plug: {
    border: "hover:border-brand-green/40",
    iconBg: "bg-brand-green/10 group-hover:bg-brand-green/15",
    iconColor: "text-brand-green",
    accent: "text-brand-green",
  },
  cog: {
    border: "hover:border-brand-blue/40",
    iconBg: "bg-brand-blue/10 group-hover:bg-brand-blue/15",
    iconColor: "text-brand-blue",
    accent: "text-brand-blue",
  },
};

const icons: Record<string, React.ReactNode> = {
  wrench: (
    <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.049.58.025 1.193-.14 1.743" />
    </svg>
  ),
  plug: (
    <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M5.636 5.636a9 9 0 1012.728 0M12 3v9" />
    </svg>
  ),
  cog: (
    <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  ),
};

export default function ServiceCard({
  title,
  description,
  href,
  icon,
}: ServiceCardProps) {
  const style = cardStyles[icon] || cardStyles.wrench;

  return (
    <Link
      href={href}
      className={`group relative block overflow-hidden rounded-xl border border-border bg-white p-8 transition-all hover:shadow-lg ${style.border}`}
    >
      {/* Colored top accent bar */}
      <div className={`absolute top-0 left-0 right-0 h-1 ${
        icon === "wrench" ? "bg-brand-red" : icon === "plug" ? "bg-brand-green" : "bg-brand-blue"
      }`} />

      <div className={`mb-4 inline-flex rounded-xl p-3.5 transition-colors ${style.iconBg} ${style.iconColor}`}>
        {icons[icon] || icons.wrench}
      </div>
      <h3 className="text-xl font-bold text-charcoal group-hover:text-brand-blue transition-colors">
        {title}
      </h3>
      <p className="mt-2 text-muted leading-relaxed">{description}</p>
      <span className={`mt-4 inline-flex items-center gap-1 text-sm font-semibold ${style.accent}`}>
        Learn More
        <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
        </svg>
      </span>
    </Link>
  );
}
