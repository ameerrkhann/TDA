import Image from "next/image";
import Link from "next/link";

// To swap the logo: replace /public/logo-transparent.png and update the src below.
export default function Logo({ className = "" }: { className?: string }) {
  return (
    <Link href="/" className={`flex items-center ${className}`}>
      <div className="relative h-12 w-44 sm:h-14 sm:w-52 overflow-hidden">
        <Image
          src="/logo-transparent.png"
          alt="Top Digital Appliances"
          fill
          priority
          className="object-contain scale-[1.8]"
        />
      </div>
    </Link>
  );
}
