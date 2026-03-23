import Image from "next/image";
import Link from "next/link";

// To swap the logo: replace /public/logo.png and update the src below.
export default function Logo({ className = "" }: { className?: string }) {
  return (
    <Link href="/" className={`flex items-center ${className}`}>
      <Image
        src="/logo.png"
        alt="Top Digital Appliances"
        width={320}
        height={96}
        priority
        className="h-12 w-auto sm:h-16 lg:h-20"
      />
    </Link>
  );
}
