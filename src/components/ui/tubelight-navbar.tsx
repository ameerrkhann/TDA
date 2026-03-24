"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { type LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface NavItem {
  name: string;
  url: string;
  icon: LucideIcon;
}

interface NavBarProps {
  items: NavItem[];
  className?: string;
}

export function NavBar({ items, className }: NavBarProps) {
  const pathname = usePathname();
  const [activeTab, setActiveTab] = useState(items[0].name);

  useEffect(() => {
    const match = items.find(
      (item) =>
        pathname === item.url ||
        (item.url !== "/" && pathname.startsWith(item.url))
    );
    if (match) {
      setActiveTab(match.name);
    } else {
      setActiveTab(items[0].name);
    }
  }, [pathname, items]);

  return (
    <div
      className={cn(
        "fixed bottom-6 sm:bottom-auto sm:top-0 left-1/2 -translate-x-1/2 z-50 sm:pt-8",
        className
      )}
    >
      <div className="flex items-center gap-0.5 sm:gap-1 bg-charcoal/80 border border-white/10 backdrop-blur-xl py-1 px-1 rounded-full shadow-2xl shadow-black/20">
        {items.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.name;

          return (
            <Link
              key={item.name}
              href={item.url}
              onClick={() => setActiveTab(item.name)}
              className={cn(
                "relative cursor-pointer text-sm font-semibold px-2.5 sm:px-4 lg:px-5 py-2 rounded-full transition-colors",
                "text-white/70 hover:text-white",
                isActive && "text-white"
              )}
            >
              <span className="hidden md:inline">{item.name}</span>
              <span className="md:hidden">
                <Icon size={18} strokeWidth={2.5} />
              </span>
              {isActive && (
                <motion.div
                  layoutId="lamp"
                  className="absolute inset-0 w-full bg-white/10 rounded-full -z-10"
                  initial={false}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30,
                  }}
                >
                  <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-brand-red rounded-t-full">
                    <div className="absolute w-12 h-6 bg-brand-red/30 rounded-full blur-md -top-2 -left-2" />
                    <div className="absolute w-8 h-6 bg-brand-red/25 rounded-full blur-md -top-1" />
                    <div className="absolute w-4 h-4 bg-brand-red/20 rounded-full blur-sm top-0 left-2" />
                  </div>
                </motion.div>
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
