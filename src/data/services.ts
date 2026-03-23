export type ParentService = {
  title: string;
  slug: string;
  href: string;
  shortDescription: string;
  icon: string;
};

export type RepairService = {
  slug: string;
  applianceName: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  intro: string;
  commonIssues: string[];
  brandSupportNote: string;
  ctaText: string;
};

export const parentServices: ParentService[] = [
  {
    title: "Appliance Repair",
    slug: "appliance-repair",
    href: "/appliance-repair",
    shortDescription:
      "Fast, dependable repair for refrigerators, washers, dryers, ovens, and more. We diagnose and fix issues on all major brands.",
    icon: "wrench",
  },
  {
    title: "Appliance Installation",
    slug: "appliance-installation",
    href: "/appliance-installation",
    shortDescription:
      "Professional installation for new kitchen and laundry appliances. We ensure everything is connected, leveled, and running correctly.",
    icon: "plug",
  },
  {
    title: "Parts & Support",
    slug: "parts",
    href: "/parts",
    shortDescription:
      "We source and supply parts for repair work across all major appliance brands. Call us before ordering to confirm compatibility.",
    icon: "cog",
  },
];

export const repairServices: RepairService[] = [
  {
    slug: "refrigerator-repair",
    applianceName: "Refrigerator",
    title: "Refrigerator Repair",
    metaTitle: "Refrigerator Repair",
    metaDescription:
      "Professional refrigerator repair for all major brands. Not cooling, leaking, or making noise? Call Top Digital Appliances at 718-234-4111.",
    intro:
      "A malfunctioning refrigerator can put your food at risk and disrupt your daily routine. Our technicians diagnose and repair refrigerators from all major brands, including built-in, French door, side-by-side, and top-freezer models. Whether the issue is temperature control, a faulty compressor, or a leaking water line, we work quickly to get your unit back to full performance.",
    commonIssues: [
      "Not cooling or maintaining temperature",
      "Excessive frost or ice buildup",
      "Water leaking on the floor",
      "Unusual humming, clicking, or buzzing noises",
      "Ice maker not producing ice",
      "Door seal not closing properly",
    ],
    brandSupportNote:
      "We service all major refrigerator brands including Sub-Zero, Viking, Samsung, LG, Whirlpool, GE, and many more.",
    ctaText: "Schedule Refrigerator Repair",
  },
  {
    slug: "freezer-repair",
    applianceName: "Freezer",
    title: "Freezer Repair",
    metaTitle: "Freezer Repair",
    metaDescription:
      "Expert freezer repair for chest, upright, and built-in freezers. Call Top Digital Appliances at 718-234-4111.",
    intro:
      "A freezer that stops working properly can lead to spoiled food and expensive waste. We repair all types of freezers — chest, upright, drawer, and built-in units — across every major brand. From temperature issues to defrost system failures, our technicians identify the root cause and get your freezer running reliably again.",
    commonIssues: [
      "Not freezing or running too warm",
      "Frost buildup on walls or coils",
      "Freezer running constantly without shutting off",
      "Door not sealing properly",
      "Unusual noises during operation",
      "Water pooling under the unit",
    ],
    brandSupportNote:
      "We repair freezers from all major manufacturers including Frigidaire, Whirlpool, GE, Samsung, Sub-Zero, and more.",
    ctaText: "Schedule Freezer Repair",
  },
  {
    slug: "washer-repair",
    applianceName: "Washer",
    title: "Washer Repair",
    metaTitle: "Washer Repair",
    metaDescription:
      "Professional washing machine repair for top-load and front-load washers. Call Top Digital Appliances at 718-234-4111.",
    intro:
      "A broken washer means laundry piles up fast. We service all types of washing machines — top-load, front-load, and stackable units — from every major brand. Whether your washer won't drain, is vibrating excessively, or has stopped mid-cycle, our technicians will get it running smoothly again.",
    commonIssues: [
      "Not draining or spinning",
      "Leaking water during cycles",
      "Excessive vibration or shaking",
      "Not starting or stopping mid-cycle",
      "Foul odor coming from the drum",
      "Error codes on the display",
    ],
    brandSupportNote:
      "We repair washers from all leading brands including Maytag, LG, Samsung, Whirlpool, Bosch, Electrolux, and more.",
    ctaText: "Schedule Washer Repair",
  },
  {
    slug: "dryer-repair",
    applianceName: "Dryer",
    title: "Dryer Repair",
    metaTitle: "Dryer Repair",
    metaDescription:
      "Fast dryer repair for gas and electric dryers. Not heating or tumbling? Call Top Digital Appliances at 718-234-4111.",
    intro:
      "When your dryer stops heating or tumbling, laundry comes to a halt. We repair both gas and electric dryers across all major brands, addressing everything from heating element failures to drum and belt issues. Our technicians bring the experience needed to diagnose the problem accurately and fix it the first time.",
    commonIssues: [
      "Not heating or taking too long to dry",
      "Drum not spinning or tumbling",
      "Unusual squealing, thumping, or grinding noises",
      "Dryer shutting off before the cycle ends",
      "Clothes coming out wrinkled or still damp",
      "Burning smell during operation",
    ],
    brandSupportNote:
      "We service dryers from all major brands including Maytag, Whirlpool, Samsung, LG, GE, Speed Queen, and more.",
    ctaText: "Schedule Dryer Repair",
  },
  {
    slug: "dishwasher-repair",
    applianceName: "Dishwasher",
    title: "Dishwasher Repair",
    metaTitle: "Dishwasher Repair",
    metaDescription:
      "Dishwasher not cleaning or draining? Professional dishwasher repair from Top Digital Appliances. Call 718-234-4111.",
    intro:
      "A dishwasher that doesn't clean properly or won't drain creates more work in the kitchen. We repair all dishwasher types — built-in, portable, and drawer models — from every major brand. Whether the issue is poor cleaning performance, drainage problems, or a door that won't latch, we'll find the cause and fix it.",
    commonIssues: [
      "Not cleaning dishes properly",
      "Not draining after a cycle",
      "Leaking water onto the floor",
      "Door won't latch or seal",
      "Unusual noises during operation",
      "Detergent dispenser not opening",
    ],
    brandSupportNote:
      "We repair dishwashers from all leading brands including Bosch, KitchenAid, Miele, Whirlpool, Samsung, GE, and more.",
    ctaText: "Schedule Dishwasher Repair",
  },
  {
    slug: "oven-repair",
    applianceName: "Oven",
    title: "Oven Repair",
    metaTitle: "Oven Repair",
    metaDescription:
      "Professional oven repair for gas and electric ovens. Not heating evenly? Call Top Digital Appliances at 718-234-4111.",
    intro:
      "An oven that won't heat evenly or doesn't reach the right temperature can make cooking unreliable. We repair gas, electric, convection, and wall ovens from all major brands. From igniter and element replacements to thermostat calibration, our technicians restore your oven to full working order.",
    commonIssues: [
      "Not heating or not reaching set temperature",
      "Uneven cooking or hot spots",
      "Oven not turning on at all",
      "Self-clean cycle not working",
      "Door not closing or sealing properly",
      "Temperature display showing error codes",
    ],
    brandSupportNote:
      "We service ovens from all major brands including Wolf, Viking, Thermador, GE, KitchenAid, Samsung, and more.",
    ctaText: "Schedule Oven Repair",
  },
  {
    slug: "stove-repair",
    applianceName: "Stove",
    title: "Stove Repair",
    metaTitle: "Stove Repair",
    metaDescription:
      "Expert stove repair for gas and electric stovetops. Burner not lighting? Call Top Digital Appliances at 718-234-4111.",
    intro:
      "A stove that won't ignite or heat properly makes meal preparation difficult. We repair gas, electric, and induction stovetops from all major brands. Whether a burner won't light, a heating element has failed, or there is an issue with the gas supply, our technicians will diagnose and resolve the problem efficiently.",
    commonIssues: [
      "Gas burner not igniting or clicking repeatedly",
      "Electric element not heating",
      "Uneven flame or inconsistent heat",
      "Gas smell near the stovetop",
      "Control knobs not responding",
      "Cracked or damaged cooktop surface",
    ],
    brandSupportNote:
      "We repair stoves from all major manufacturers including Thermador, Wolf, Bosch, GE, Frigidaire, Samsung, and more.",
    ctaText: "Schedule Stove Repair",
  },
  {
    slug: "range-repair",
    applianceName: "Range",
    title: "Range Repair",
    metaTitle: "Range Repair",
    metaDescription:
      "Professional range repair for gas, electric, and dual-fuel ranges. Call Top Digital Appliances at 718-234-4111.",
    intro:
      "A range combines your stovetop and oven into one unit, and when either side has a problem it affects your entire kitchen workflow. We repair gas, electric, and dual-fuel ranges from all major brands. Whether the issue is with the burners, the oven cavity, or the control board, we handle it all.",
    commonIssues: [
      "Oven not heating while burners work (or vice versa)",
      "Inconsistent temperature in the oven cavity",
      "Gas igniters clicking but not lighting",
      "Control panel displaying error codes",
      "Door not closing properly",
      "Clock or timer malfunctioning",
    ],
    brandSupportNote:
      "We service ranges from all major brands including Viking, Wolf, La Cornue, GE, Samsung, KitchenAid, and more.",
    ctaText: "Schedule Range Repair",
  },
  {
    slug: "microwave-repair",
    applianceName: "Microwave",
    title: "Microwave Repair",
    metaTitle: "Microwave Repair",
    metaDescription:
      "Microwave not heating or turning on? Professional microwave repair from Top Digital Appliances. Call 718-234-4111.",
    intro:
      "A microwave that won't heat, sparks during use, or has a broken turntable is more than an inconvenience — it can be a safety concern. We repair countertop, over-the-range, and built-in microwaves from all major brands. Our technicians address everything from magnetron failures to control board issues.",
    commonIssues: [
      "Not heating food properly",
      "Turntable not spinning",
      "Sparking or arcing inside the unit",
      "Buttons or touchpad not responding",
      "Door not latching or closing securely",
      "Unit running but not producing heat",
    ],
    brandSupportNote:
      "We repair microwaves from all major brands including GE, Samsung, LG, Whirlpool, Sharp, KitchenAid, and more.",
    ctaText: "Schedule Microwave Repair",
  },
];
