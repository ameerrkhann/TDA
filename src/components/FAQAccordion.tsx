"use client";

import { useState } from "react";
import type { FAQ } from "@/data/faqs";

type FAQAccordionProps = {
  items: FAQ[];
  limit?: number;
};

export default function FAQAccordion({ items, limit }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const displayItems = limit ? items.slice(0, limit) : items;

  return (
    <div className="mx-auto max-w-3xl divide-y divide-border rounded-xl border border-border bg-white">
      {displayItems.map((item, index) => (
        <div key={index}>
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition-colors hover:bg-surface-alt"
            aria-expanded={openIndex === index}
          >
            <span className="text-base font-semibold text-charcoal sm:text-lg">
              {item.question}
            </span>
            <svg
              className={`h-5 w-5 shrink-0 text-muted transition-transform duration-200 ${
                openIndex === index ? "rotate-180" : ""
              }`}
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          </button>
          <div
            className={`overflow-hidden transition-all duration-200 ${
              openIndex === index ? "max-h-96" : "max-h-0"
            }`}
          >
            <p className="px-6 pb-5 text-muted leading-relaxed">
              {item.answer}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
