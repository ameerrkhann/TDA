import type { Metadata } from "next";
import BrandsPageContent from "@/components/BrandsPageContent";

export const metadata: Metadata = {
  title: "Brands We Service",
  description:
    "Top Digital Appliances services all major appliance brands including Samsung, LG, Whirlpool, GE, Sub-Zero, Viking, and 60+ more.",
};

export default function BrandsPage() {
  return <BrandsPageContent />;
}
