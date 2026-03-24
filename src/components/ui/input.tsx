import * as React from "react";
import { cn } from "@/lib/utils";

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      className={cn(
        "flex h-10 w-full rounded-lg border border-border bg-white px-3 py-2 text-base text-charcoal placeholder:text-muted shadow-sm transition-colors",
        "focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue",
        "disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    />
  );
}

export { Input };
