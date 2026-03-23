type SectionHeadingProps = {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  as?: "h1" | "h2" | "h3";
  accentColor?: "blue" | "red" | "green";
};

export default function SectionHeading({
  title,
  subtitle,
  align = "center",
  as: Tag = "h2",
  accentColor = "blue",
}: SectionHeadingProps) {
  const accentClasses = {
    blue: "bg-brand-blue",
    red: "bg-brand-red",
    green: "bg-brand-green",
  };

  return (
    <div className={`mb-10 ${align === "center" ? "text-center" : "text-left"}`}>
      <div className={`mb-4 inline-flex h-1 w-12 rounded-full ${accentClasses[accentColor]} ${align === "center" ? "mx-auto" : ""}`} />
      <Tag className="text-3xl font-bold text-charcoal sm:text-4xl">
        {title}
      </Tag>
      {subtitle && (
        <p className="mt-3 text-lg text-muted max-w-2xl mx-auto">{subtitle}</p>
      )}
    </div>
  );
}
