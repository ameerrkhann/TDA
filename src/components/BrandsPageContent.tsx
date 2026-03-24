"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Search, Star, Award, CheckCircle2, TrendingUp } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { brands, type BrandEntry } from "@/data/brands";
import { siteConfig } from "@/data/site";

const categories = ["all", "Kitchen", "Laundry", "Refrigeration", "Ventilation"];

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.05 } },
};
const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function BrandsPageContent() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredBrands = brands.filter((brand) => {
    const matchesSearch = brand.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === "all" || brand.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredBrands = filteredBrands.filter((b) => b.featured);
  const regularBrands = filteredBrands.filter((b) => !b.featured);

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <div className="relative overflow-hidden border-b border-border bg-gradient-to-br from-charcoal via-charcoal to-charcoal/90">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
            backgroundSize: "32px 32px",
          }}
        />
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-brand-red/10 blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-brand-blue/10 blur-[120px]" />

        <div className="relative mx-auto max-w-4xl px-6 py-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge className="mb-5 bg-brand-red/15 text-brand-red border-brand-red/20 px-3 py-1">
              <Award className="w-3.5 h-3.5 mr-1.5" />
              Certified Appliance Repair
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-5 leading-tight">
              Appliance Brands{" "}
              <span className="text-brand-red">We Service</span>
            </h1>
            <p className="text-lg text-white/60 mb-10 max-w-2xl mx-auto">
              Expert repair, installation &amp; maintenance for all major
              appliance brands. Fast, reliable, and affordable.
            </p>

            {/* Search */}
            <div className="relative max-w-xl mx-auto">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted w-5 h-5 pointer-events-none" />
              <Input
                type="text"
                placeholder="Search brands..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 h-14 text-lg bg-white/10 border-white/20 text-white placeholder:text-white/40 focus:bg-white/15 focus:border-brand-red focus:ring-brand-red/30"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Stats */}
      <div className="mx-auto max-w-4xl px-6 -mt-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4"
        >
          {[
            { icon: Award, label: "Brands Serviced", value: "60+", color: "text-brand-red" },
            { icon: CheckCircle2, label: "Repairs Completed", value: "2K+", color: "text-brand-green" },
            { icon: TrendingUp, label: "Satisfaction Rate", value: "98%", color: "text-brand-blue" },
          ].map((stat, i) => (
            <Card
              key={i}
              className="bg-white/95 backdrop-blur-sm border-2 hover:border-brand-blue/30 transition-all"
            >
              <CardContent className="p-5 text-center">
                <stat.icon className={`w-7 h-7 mx-auto mb-2 ${stat.color}`} />
                <div className="text-2xl font-extrabold text-charcoal">
                  {stat.value}
                </div>
                <div className="text-sm text-muted">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </motion.div>
      </div>

      {/* Main Content */}
      <div className="mx-auto max-w-6xl px-6 py-16">
        <Tabs
          defaultValue="all"
          className="w-full"
          onValueChange={setSelectedCategory}
        >
          <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-5 mb-12 h-11">
            {categories.map((cat) => (
              <TabsTrigger key={cat} value={cat} className="capitalize">
                {cat === "all" ? "All" : cat}
              </TabsTrigger>
            ))}
          </TabsList>

          <TabsContent value={selectedCategory} className="space-y-14">
            {/* Featured */}
            {featuredBrands.length > 0 && (
              <div>
                <div className="flex items-center gap-2.5 mb-6">
                  <Star className="w-5 h-5 text-brand-red fill-brand-red" />
                  <h2 className="text-2xl font-bold text-charcoal">
                    Featured Brands
                  </h2>
                </div>
                <motion.div
                  variants={container}
                  initial="hidden"
                  animate="show"
                  key={selectedCategory + "-featured"}
                  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
                >
                  {featuredBrands.map((brand) => (
                    <BrandCardFeatured key={brand.slug} brand={brand} />
                  ))}
                </motion.div>
              </div>
            )}

            {/* Regular */}
            {regularBrands.length > 0 && (
              <div>
                <h2 className="text-2xl font-bold text-charcoal mb-6">
                  All Brands
                </h2>
                <motion.div
                  variants={container}
                  initial="hidden"
                  animate="show"
                  key={selectedCategory + "-regular"}
                  className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5"
                >
                  {regularBrands.map((brand) => (
                    <BrandCard key={brand.slug} brand={brand} />
                  ))}
                </motion.div>
              </div>
            )}

            {filteredBrands.length === 0 && (
              <div className="text-center py-20">
                <div className="text-5xl mb-4">🔍</div>
                <h3 className="text-2xl font-bold text-charcoal mb-2">
                  No brands found
                </h3>
                <p className="text-muted">
                  Try adjusting your search or filters
                </p>
              </div>
            )}
          </TabsContent>
        </Tabs>
      </div>

      {/* CTA */}
      <div className="mx-auto max-w-4xl px-6 pb-16">
        <Card className="bg-gradient-to-r from-brand-blue/10 via-brand-blue/5 to-brand-blue/10 border-2 border-brand-blue/20">
          <CardContent className="p-10 sm:p-12 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-charcoal mb-3">
              Don&apos;t See Your Appliance Brand?
            </h2>
            <p className="text-lg text-muted mb-8 max-w-2xl mx-auto">
              We service most major appliance brands. Contact us to inquire
              about your specific model.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <HoverBorderGradient
                as="a"
                href={siteConfig.phoneHref}
                containerClassName="rounded-full"
                className="flex items-center gap-2 rounded-full bg-brand-red px-7 py-3.5 text-base font-bold text-white"
              >
                <svg
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                  />
                </svg>
                {siteConfig.phone}
              </HoverBorderGradient>
              <HoverBorderGradient
                as={Link}
                href="/contact"
                containerClassName="rounded-full"
                className="flex items-center gap-2 rounded-full bg-charcoal px-7 py-3.5 text-base font-bold text-white"
              >
                Contact Us
              </HoverBorderGradient>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

function BrandCardFeatured({ brand }: { brand: BrandEntry }) {
  return (
    <motion.div variants={item}>
      <Card className="group relative overflow-hidden border-2 hover:border-brand-red/30 transition-all duration-300 hover:shadow-xl">
        <CardContent className="p-6 relative">
          <div className="flex items-start justify-between mb-4">
            <div className="w-16 h-16 rounded-2xl bg-surface-alt border border-border flex items-center justify-center p-2 group-hover:scale-110 transition-transform duration-300">
              <Image
                src={brand.logo}
                alt={brand.alt}
                width={48}
                height={48}
                className="object-contain max-h-10"
              />
            </div>
            <Badge className="bg-brand-red/10 text-brand-red border-brand-red/20">
              <Star className="w-3 h-3 mr-0.5 fill-brand-red" />
              Featured
            </Badge>
          </div>
          <h3 className="text-xl font-bold text-charcoal mb-1 group-hover:text-brand-red transition-colors">
            {brand.name}
          </h3>
          <p className="text-sm text-muted mb-4">{brand.category}</p>
          <div className="flex items-center justify-between pt-3 border-t border-border">
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
              <span className="font-semibold text-sm text-charcoal">4.8</span>
            </div>
            <span className="text-xs text-muted">Certified Repair</span>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

function BrandCard({ brand }: { brand: BrandEntry }) {
  return (
    <motion.div variants={item}>
      <Card className="group relative overflow-hidden hover:border-brand-blue/30 transition-all duration-300 hover:shadow-lg">
        <CardContent className="p-5 relative">
          <div className="w-12 h-12 rounded-xl bg-surface-alt border border-border flex items-center justify-center p-1.5 mb-3 group-hover:scale-110 transition-transform duration-300">
            <Image
              src={brand.logo}
              alt={brand.alt}
              width={40}
              height={40}
              className="object-contain max-h-8"
            />
          </div>
          <h3 className="text-base font-bold text-charcoal mb-0.5 group-hover:text-brand-blue transition-colors">
            {brand.name}
          </h3>
          <p className="text-xs text-muted">{brand.category}</p>
        </CardContent>
      </Card>
    </motion.div>
  );
}
