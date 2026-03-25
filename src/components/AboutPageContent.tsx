"use client";

import { useId } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Wrench,
  CheckCircle,
  MapPin,
  Phone,
  Mail,
  Clock,
  Shield,
  ThumbsUp,
  Users,
  Star,
  Refrigerator,
  WashingMachine,
  CookingPot,
  Microwave,
  Disc3,
} from "lucide-react";
import { siteConfig } from "@/data/site";
import { cn } from "@/lib/utils";
import ContactForm from "@/components/ContactForm";
import CTABanner from "@/components/CTABanner";

/* ── Grid pattern background utility ── */

function GridPattern({
  width = 40,
  height = 40,
  x = -1,
  y = -1,
  strokeDasharray = "0",
  squares,
  className,
}: {
  width?: number;
  height?: number;
  x?: number;
  y?: number;
  strokeDasharray?: string;
  squares?: [number, number][];
  className?: string;
}) {
  const id = useId();
  return (
    <svg
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute inset-0 h-full w-full fill-gray-400/30 stroke-gray-400/30",
        className
      )}
    >
      <defs>
        <pattern
          id={id}
          width={width}
          height={height}
          patternUnits="userSpaceOnUse"
          x={x}
          y={y}
        >
          <path
            d={`M.5 ${height}V.5H${width}`}
            fill="none"
            strokeDasharray={strokeDasharray}
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" strokeWidth={0} fill={`url(#${id})`} />
      {squares && (
        <svg x={x} y={y} className="overflow-visible">
          {squares.map(([sx, sy]) => (
            <rect
              strokeWidth="0"
              key={`${sx}-${sy}`}
              width={width - 1}
              height={height - 1}
              x={sx * width + 1}
              y={sy * height + 1}
            />
          ))}
        </svg>
      )}
    </svg>
  );
}

/* ── Data ── */

const services = [
  {
    name: "Refrigerator Repair",
    icon: <Refrigerator className="w-8 h-8" />,
    description:
      "Expert repair for all refrigerator brands and models — built-in, French door, side-by-side, and top-freezer.",
  },
  {
    name: "Washer & Dryer",
    icon: <WashingMachine className="w-8 h-8" />,
    description:
      "Fast and reliable washing machine and dryer repairs for top-load, front-load, and stackable units.",
  },
  {
    name: "Dishwasher Service",
    icon: <Disc3 className="w-8 h-8" />,
    description:
      "Professional dishwasher maintenance and repair for built-in, portable, and drawer models.",
  },
  {
    name: "Oven & Stove",
    icon: <CookingPot className="w-8 h-8" />,
    description:
      "Complete oven, stove, and range repair — gas, electric, convection, and dual-fuel.",
  },
  {
    name: "Microwave Repair",
    icon: <Microwave className="w-8 h-8" />,
    description:
      "Quick microwave diagnostics and fixes for countertop, over-the-range, and built-in units.",
  },
  {
    name: "Appliance Installation",
    icon: <Wrench className="w-8 h-8" />,
    description:
      "Professional installation for new kitchen and laundry appliances — connected, leveled, and running.",
  },
];

const reasons = [
  {
    icon: <Clock className="w-6 h-6" />,
    title: "Same-Day Service",
    description:
      "We understand urgency. Fast response when your appliances can't wait.",
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Licensed & Insured",
    description:
      "Fully certified technicians with comprehensive insurance coverage.",
  },
  {
    icon: <ThumbsUp className="w-6 h-6" />,
    title: "Satisfaction Guaranteed",
    description:
      "We stand behind every repair and installation we perform. 98% satisfaction rate.",
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Experienced Team",
    description:
      "Trusted by homeowners, landlords, and property managers across the Hudson Valley.",
  },
];

const counties = [
  "Orange County",
  "Rockland County",
  "Westchester County",
  "Dutchess County",
  "Sullivan County",
];

/* ── Component ── */

export default function AboutPageContent() {
  return (
    <div className="min-h-screen bg-surface">
      {/* ── Hero Section ── */}
      <section className="relative bg-gradient-to-br from-brand-blue/10 via-surface to-surface py-20 px-6 overflow-hidden">
        {/* Logo */}
        <div className="absolute top-4 left-1/2 -translate-x-1/2 sm:left-6 sm:translate-x-0 sm:top-20 lg:top-20 lg:left-12 z-20">
          <Image
            src="/logo transparent.png"
            alt="Top Digital Appliances"
            width={240}
            height={80}
            className="w-[200px] sm:w-[220px] lg:w-[270px] h-auto"
          />
        </div>
        <div className="absolute inset-0 opacity-30">
          <GridPattern
            width={40}
            height={40}
            x={-1}
            y={-1}
            strokeDasharray="4 2"
            className="stroke-brand-blue/20"
          />
        </div>
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center space-y-6"
          >
            <div className="hidden sm:inline-block bg-brand-blue/10 text-brand-blue px-4 py-2 rounded-full text-sm font-medium mb-4">
              Trusted Appliance Repair Experts
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-charcoal">
              Your Appliances, Our Expertise
            </h1>
            <p className="text-lg md:text-xl text-muted max-w-3xl mx-auto">
              {siteConfig.hero.subheadline}
            </p>
            <div className="flex flex-wrap gap-4 justify-center pt-4">
              <a
                href={siteConfig.phoneHref}
                className="inline-flex items-center gap-2 rounded-lg bg-brand-red px-8 py-4 text-lg font-bold text-white transition-colors hover:bg-red-700"
              >
                <Phone className="w-5 h-5" />
                Call Now: {siteConfig.phone}
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-lg border-2 border-charcoal px-8 py-4 text-lg font-bold text-charcoal transition-colors hover:bg-charcoal hover:text-white"
              >
                Schedule Service
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── About Us Section ── */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <div className="space-y-6">
              <div className="inline-block bg-brand-blue/10 text-brand-blue px-3 py-1 rounded-full text-sm font-medium">
                About Us
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-charcoal">
                Serving the Greater Hudson Valley
              </h2>
              <p className="text-muted text-lg leading-relaxed">
                Top Digital Appliances is a professional appliance service company
                specializing in repair, installation, and parts support. We work
                with homeowners, landlords, and property managers who need
                dependable service for their household appliances.
              </p>
              <p className="text-muted leading-relaxed">
                Our technicians are trained to work on all major appliance
                categories — refrigerators, freezers, washers, dryers,
                dishwashers, ovens, stoves, ranges, and microwaves. We service
                both standard household brands and premium or commercial-grade
                equipment, so no matter what you own, we can help.
              </p>
              <div className="grid grid-cols-3 gap-4 pt-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-brand-red">60+</div>
                  <div className="text-sm text-muted">Brands Serviced</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-brand-blue">9</div>
                  <div className="text-sm text-muted">Appliance Types</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-brand-green">98%</div>
                  <div className="text-sm text-muted">Satisfaction Rate</div>
                </div>
              </div>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="/photo-1621905251189-08b45d6a269e.jpeg"
                alt="Professional appliance repair technician at work"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── What We Do Section ── */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="inline-block bg-brand-red/10 text-brand-red px-3 py-1 rounded-full text-sm font-medium mb-4">
              Our Services
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
              What We Do
            </h2>
            <p className="text-muted text-lg max-w-2xl mx-auto">
              Comprehensive repair and installation services for all major home appliances
            </p>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="h-full rounded-xl border border-border bg-white p-6 space-y-4 shadow-sm hover:shadow-lg transition-shadow duration-300">
                  <div className="w-16 h-16 bg-brand-blue/10 rounded-lg flex items-center justify-center text-brand-blue">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-charcoal">
                    {service.name}
                  </h3>
                  <p className="text-muted">{service.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Choose Us Section ── */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="inline-block bg-brand-green/10 text-brand-green px-3 py-1 rounded-full text-sm font-medium mb-4">
              Why Choose Us
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
              Why Customers Call Us
            </h2>
            <p className="text-muted text-lg max-w-2xl mx-auto">
              We make the process straightforward — you call, describe the issue,
              and we schedule a visit
            </p>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {reasons.map((reason, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="h-full text-center rounded-xl border border-border bg-surface p-6 space-y-4 shadow-sm hover:shadow-lg transition-shadow duration-300">
                  <div className="w-12 h-12 bg-brand-blue/10 rounded-full flex items-center justify-center text-brand-blue mx-auto">
                    {reason.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-charcoal">
                    {reason.title}
                  </h3>
                  <p className="text-sm text-muted">{reason.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Service Area Section ── */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="inline-block bg-brand-green/10 text-brand-green px-3 py-1 rounded-full text-sm font-medium mb-4">
              Service Coverage
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
              Service Area
            </h2>
            <p className="text-muted text-lg max-w-2xl mx-auto">
              {siteConfig.serviceAreaLine}
            </p>
          </motion.div>
          <div className="flex flex-wrap justify-center gap-4">
            {counties.map((county, index) => (
              <motion.div
                key={county}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="flex items-center gap-3 rounded-xl border border-border bg-white px-6 py-4 shadow-sm">
                  <MapPin className="w-5 h-5 text-brand-green flex-shrink-0" />
                  <span className="font-semibold text-charcoal">{county}</span>
                </div>
              </motion.div>
            ))}
          </div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-center mt-8"
          >
            <a
              href={siteConfig.phoneHref}
              className="inline-flex items-center gap-2 rounded-xl bg-brand-green px-6 py-3 text-base font-bold text-white transition-all hover:bg-green-700 hover:shadow-lg"
            >
              <Phone className="w-5 h-5" />
              Call {siteConfig.phone} to Confirm Coverage
            </a>
          </motion.div>
        </div>
      </section>

      {/* ── Contact Section ── */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="inline-block bg-brand-blue/10 text-brand-blue px-3 py-1 rounded-full text-sm font-medium mb-4">
              Contact Us
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
              Get In Touch
            </h2>
            <p className="text-muted text-lg max-w-2xl mx-auto">
              Ready to fix your appliance? Contact us today for fast, reliable
              service
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="rounded-xl border border-border bg-surface p-6 space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-brand-blue/10 rounded-lg flex items-center justify-center text-brand-blue flex-shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-charcoal mb-1">Phone</h3>
                    <a
                      href={siteConfig.phoneHref}
                      className="text-muted hover:text-brand-blue transition-colors"
                    >
                      {siteConfig.phone}
                    </a>
                    <p className="text-sm text-muted">Mon–Sat: 8am–8pm</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-brand-blue/10 rounded-lg flex items-center justify-center text-brand-blue flex-shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-charcoal mb-1">Email</h3>
                    <a
                      href={siteConfig.emailHref}
                      className="text-muted hover:text-brand-blue transition-colors"
                    >
                      {siteConfig.email}
                    </a>
                    <p className="text-sm text-muted">We respond quickly</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-brand-blue/10 rounded-lg flex items-center justify-center text-brand-blue flex-shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-charcoal mb-1">
                      Service Area
                    </h3>
                    <p className="text-muted">Greater Hudson Valley</p>
                    <p className="text-sm text-muted">
                      Orange, Rockland, Westchester & more
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="rounded-xl border border-border bg-surface p-6">
                <ContactForm />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <CTABanner />
    </div>
  );
}
