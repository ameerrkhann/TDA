export interface BrandEntry {
  name: string;
  slug: string;
  logo: string;
  alt: string;
}

export const brandNames = [
  "Amana",
  "American Range",
  "Asko",
  "Avanti",
  "Beko",
  "Bertazzoni",
  "Best",
  "Blomberg",
  "Blue Star",
  "Bosch",
  "Broan",
  "Cafe",
  "Capital",
  "Cove",
  "Dacor",
  "Danby",
  "DCS",
  "Electrolux",
  "Faber",
  "Fisher and Paykel",
  "Fivestar",
  "Forno",
  "Frigidaire",
  "Fulgor Milano",
  "Gaggenau",
  "Galanz",
  "GE",
  "Haier",
  "Hot Point",
  "Ilve",
  "Jenn-Air",
  "KitchenAid",
  "Koolmore",
  "Kucht",
  "La Cornue",
  "LG",
  "Liebherr",
  "Marvel",
  "Maytag",
  "Midea",
  "Miele",
  "Monogram",
  "NXR",
  "Perlick",
  "Premier",
  "Samsung",
  "Sapphire",
  "Sharp",
  "SKS",
  "Smeg",
  "Speed Queen",
  "Sub-Zero",
  "Summit",
  "Tappan",
  "Thermador",
  "Thor",
  "U-Line",
  "Verona",
  "Viking",
  "Weber",
  "Whirlpool",
  "Wolf",
  "XO",
  "Zephyr",
  "ZLine",
] as const;

export type Brand = (typeof brandNames)[number];

function toSlug(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

// Brands whose logos were downloaded as PNG (all others are SVG)
const pngBrands = new Set([
  "american-range",
  "asko",
  "avanti",
  "bertazzoni",
  "bosch",
  "broan",
  "cafe",
  "dacor",
  "danby",
  "dcs",
  "faber",
  "fivestar",
  "fulgor-milano",
  "galanz",
  "hot-point",
  "ilve",
  "kitchenaid",
  "marvel",
  "maytag",
  "midea",
  "monogram",
  "nxr",
  "premier",
  "sks",
  "speed-queen",
  "summit",
  "tappan",
  "thermador",
  "thor",
  "u-line",
  "verona",
  "viking",
  "xo",
  "zline",
]);

export const brands: BrandEntry[] = brandNames.map((name) => {
  const slug = toSlug(name);
  const ext = pngBrands.has(slug) ? "png" : "svg";
  return {
    name,
    slug,
    logo: `/brands/${slug}.${ext}`,
    alt: `${name} logo`,
  };
});
