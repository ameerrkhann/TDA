"use client";

import {
  Home,
  Wrench,
  Plug,
  Cog,
  Award,
  Info,
  HelpCircle,
  Mail,
} from "lucide-react";
import { NavBar } from "@/components/ui/tubelight-navbar";

const navItems = [
  { name: "Home", url: "/", icon: Home },
  { name: "Repair", url: "/appliance-repair", icon: Wrench },
  { name: "Installation", url: "/appliance-installation", icon: Plug },
  { name: "Parts", url: "/parts", icon: Cog },
  { name: "Brands", url: "/brands-we-service", icon: Award },
  { name: "About", url: "/about", icon: Info },
  { name: "FAQ", url: "/faq", icon: HelpCircle },
  { name: "Contact", url: "/contact", icon: Mail },
];

export default function Header() {
  return <NavBar items={navItems} />;
}
