import type { Metadata } from "next";
import AboutPageContent from "@/components/AboutPageContent";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Top Digital Appliances — your trusted partner for appliance repair, installation, and parts support in the Greater Hudson Valley area.",
};

export default function AboutPage() {
  return <AboutPageContent />;
}
