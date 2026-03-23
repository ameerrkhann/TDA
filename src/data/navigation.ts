export type NavItem = {
  label: string;
  href: string;
  children?: NavItem[];
};

export const mainNav: NavItem[] = [
  {
    label: "Services",
    href: "/appliance-repair",
    children: [
      { label: "Appliance Repair", href: "/appliance-repair" },
      { label: "Appliance Installation", href: "/appliance-installation" },
      { label: "Parts & Support", href: "/parts" },
    ],
  },
  { label: "Brands We Service", href: "/brands-we-service" },
  { label: "Service Areas", href: "/service-areas" },
  { label: "About", href: "/about" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

export const footerNav = {
  services: [
    { label: "Appliance Repair", href: "/appliance-repair" },
    { label: "Appliance Installation", href: "/appliance-installation" },
    { label: "Parts & Support", href: "/parts" },
  ],
  company: [
    { label: "About Us", href: "/about" },
    { label: "Brands We Service", href: "/brands-we-service" },
    { label: "Service Areas", href: "/service-areas" },
    { label: "FAQ", href: "/faq" },
    { label: "Contact", href: "/contact" },
  ],
};
