import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { BackgroundPaths } from "@/components/ui/background-paths";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: {
    default: "Top Digital Appliances — Repair, Installation & Parts",
    template: "%s | Top Digital Appliances",
  },
  description:
    "Professional appliance repair, installation, and parts support for all major brands. Serving the Greater Hudson Valley area and beyond. Call 718-234-5111.",
  openGraph: {
    type: "website",
    siteName: "Top Digital Appliances",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={outfit.variable} suppressHydrationWarning>
      <body className="font-sans min-h-screen flex flex-col" suppressHydrationWarning>
        <BackgroundPaths />
        <Header />
        <main className="flex-1 relative z-[1]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
