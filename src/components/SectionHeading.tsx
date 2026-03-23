type SectionHeadingProps = {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  as?: "h1" | "h2" | "h3";
};

export default function SectionHeading({
  title,
  subtitle,
  align = "center",
  as: Tag = "h2",
}: SectionHeadingProps) {
  return (
    <div className={`mb-10 ${align === "center" ? "text-center" : "text-left"}`}>
      <Tag className="text-3xl font-bold text-brand-blue sm:text-4xl">
        {title}
      </Tag>
      {subtitle && (
        <p className="mt-3 text-lg text-muted max-w-2xl mx-auto">{subtitle}</p>
      )}
    </div>
  );
}
