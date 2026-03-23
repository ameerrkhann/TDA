import Image from "next/image";
import Link from "next/link";

// To swap the logo: replace /public/logo.svg (or logo.png) and update the src below.
export default function Logo({ className = "" }: { className?: string }) {
  return (
    <Link href="/" className={`flex items-center gap-2 ${className}`}>
      <Image
        src="/logo.svg"
        alt="Top Digital Appliances"
        width={220}
        height={56}
        priority
        className="h-10 w-auto sm:h-12"
      />
    </Link>
  );
}
