"use client";

import Link from "next/link";
import Logo from "./Logo";
import MobileMenu from "./MobileMenu";
import { mainNav } from "@/data/navigation";
import { siteConfig } from "@/data/site";
import { useHeroVisible } from "@/hooks/useHeroVisible";

export default function Header() {
  const heroVisible = useHeroVisible();

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-30 border-b border-border bg-white/95 backdrop-blur-sm transition-all duration-500 ease-in-out ${
        heroVisible
          ? "-translate-y-full opacity-0 pointer-events-none"
          : "translate-y-0 opacity-100"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
        <Logo />

        {/* Desktop nav */}
        <nav className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {mainNav.map((item) => (
              <li key={item.href} className="relative group">
                <Link
                  href={item.href}
                  className="rounded-lg px-3 py-2 text-sm font-medium text-charcoal transition-colors hover:bg-surface-alt hover:text-brand-blue"
                >
                  {item.label}
                </Link>
                {item.children && (
                  <div className="invisible absolute left-0 top-full z-50 pt-2 opacity-0 transition-all group-hover:visible group-hover:opacity-100">
                    <div className="min-w-48 rounded-xl border border-border bg-white p-2 shadow-lg">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block rounded-lg px-4 py-2.5 text-sm text-charcoal transition-colors hover:bg-surface-alt hover:text-brand-blue"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          {/* Phone CTA - desktop */}
          <a
            href={siteConfig.phoneHref}
            className="hidden items-center gap-2 rounded-lg bg-brand-blue px-5 py-2.5 text-sm font-bold text-white transition-colors hover:bg-blue-700 sm:inline-flex"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
            </svg>
            {siteConfig.phone}
          </a>

          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
