import fs from "fs";
import path from "path";
import { pipeline } from "stream/promises";
import { Readable } from "stream";

const API_KEY = "CNG_lCzAWw7w-w5wlGKQxKy41oxsYMkPaNBqqkNbBXlyYhiyUXVgm9EVlG-1zBFDDrTa_Yo-Sinrl0_YPjJQaw";
const OUTPUT_DIR = "/Users/ameer/TDA/public/brands";

const brandDomains = {
  "Amana": "amana.com",
  "American Range": "americanrange.com",
  "Asko": "asko.com",
  "Avanti": "avantiproducts.com",
  "Beko": "beko.com",
  "Bertazzoni": "bertazzoni.com",
  "Best": "bestrangehoods.com",
  "Blomberg": "blombergappliances.com",
  "Blue Star": "bluestarcooking.com",
  "Bosch": "bosch-home.com",
  "Broan": "broan-nutone.com",
  "Cafe": "cafeappliances.com",
  "Capital": "capital-cooking.com",
  "Cove": "subzero-wolf.com",
  "Dacor": "dacor.com",
  "Danby": "danby.com",
  "DCS": "dcsappliances.com",
  "Electrolux": "electrolux.com",
  "Faber": "faberonline.com",
  "Fisher and Paykel": "fisherpaykel.com",
  "Fivestar": "fivestarrange.com",
  "Forno": "fornoappliances.com",
  "Frigidaire": "frigidaire.com",
  "Fulgor Milano": "fulgor-milano.com",
  "Gaggenau": "gaggenau.com",
  "Galanz": "galanz.com",
  "GE": "geappliances.com",
  "Haier": "haier.com",
  "Hot Point": "hotpoint.com",
  "Ilve": "ilve.com",
  "Jenn-Air": "jennair.com",
  "KitchenAid": "kitchenaid.com",
  "Koolmore": "koolmore.com",
  "Kucht": "kuchtpro.com",
  "La Cornue": "lacornue.com",
  "LG": "lg.com",
  "Liebherr": "liebherr.com",
  "Marvel": "marvelrefrigeration.com",
  "Maytag": "maytag.com",
  "Midea": "midea.com",
  "Miele": "miele.com",
  "Monogram": "monogram.com",
  "NXR": "nxr.com",
  "Perlick": "perlick.com",
  "Premier": "premierrange.com",
  "Samsung": "samsung.com",
  "Sapphire": null,
  "Sharp": "sharpusa.com",
  "SKS": "signaturekitchensuite.com",
  "Smeg": "smeg.com",
  "Speed Queen": "speedqueen.com",
  "Sub-Zero": "subzero-wolf.com",
  "Summit": "summitappliance.com",
  "Tappan": "tappan.com",
  "Thermador": "thermador.com",
  "Thor": "thorkitchen.com",
  "U-Line": "u-line.com",
  "Verona": "veronaappliances.com",
  "Viking": "vikingrange.com",
  "Weber": "weber.com",
  "Whirlpool": "whirlpool.com",
  "Wolf": "subzero-wolf.com",
  "XO": "xoappliance.com",
  "Zephyr": "zephyronline.com",
  "ZLine": "zlinekitchen.com",
};

function toSlug(name) {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function pickBestLogo(logos) {
  const typePriority = { logo: 0, symbol: 1, icon: 2 };
  let best = null;
  let bestScore = Infinity;

  for (const logo of logos) {
    const typeScore = typePriority[logo.type] ?? 3;

    // Formats can be at logo.formats or inside logo.theme[].formats
    let allFormats = [];
    if (logo.formats && logo.formats.length > 0) {
      allFormats.push(...logo.formats);
    }
    // theme is sometimes an array of objects with formats
    if (Array.isArray(logo.theme)) {
      for (const t of logo.theme) {
        if (t.formats) allFormats.push(...t.formats);
      }
    }

    for (const fmt of allFormats) {
      const formatScore = fmt.format === "svg" ? 0 : fmt.format === "png" ? 1 : 2;
      const score = typeScore * 10 + formatScore;
      if (score < bestScore && fmt.src) {
        bestScore = score;
        best = { src: fmt.src, format: fmt.format, type: logo.type };
      }
    }
  }
  return best;
}

async function processBrand(name, domain) {
  const slug = toSlug(name);

  if (!domain) {
    return { name, slug, status: "skipped", reason: "no domain" };
  }

  try {
    const apiUrl = `https://api.brandfetch.io/v2/brands/${domain}`;
    const res = await fetch(apiUrl, {
      headers: { Authorization: `Bearer ${API_KEY}` },
      signal: AbortSignal.timeout(15000),
    });

    if (!res.ok) {
      const body = await res.text();
      return { name, slug, status: "failed", reason: `HTTP ${res.status}: ${body.slice(0, 150)}` };
    }

    const data = await res.json();
    const logos = data.logos;
    if (!logos || logos.length === 0) {
      return { name, slug, status: "failed", reason: "no logos in response" };
    }

    const best = pickBestLogo(logos);
    if (!best) {
      return { name, slug, status: "failed", reason: "no suitable format found" };
    }

    const ext = best.format === "svg" ? "svg" : "png";
    const destPath = path.join(OUTPUT_DIR, `${slug}.${ext}`);

    // Download the image
    const imgRes = await fetch(best.src, { signal: AbortSignal.timeout(30000) });
    if (!imgRes.ok) {
      return { name, slug, status: "failed", reason: `Download HTTP ${imgRes.status}` };
    }

    await pipeline(Readable.fromWeb(imgRes.body), fs.createWriteStream(destPath));

    const stats = fs.statSync(destPath);
    return { name, slug, status: "ok", ext, type: best.type, size: stats.size };
  } catch (err) {
    return { name, slug, status: "failed", reason: err.message };
  }
}

async function main() {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });

  const entries = Object.entries(brandDomains);
  const results = [];

  // Process in batches of 5
  for (let i = 0; i < entries.length; i += 5) {
    const batch = entries.slice(i, i + 5);
    const batchResults = await Promise.all(
      batch.map(([name, domain]) => processBrand(name, domain))
    );
    results.push(...batchResults);

    const done = Math.min(i + 5, entries.length);
    console.log(`Progress: ${done}/${entries.length}`);

    if (i + 5 < entries.length) {
      await new Promise((r) => setTimeout(r, 500));
    }
  }

  // Summary
  console.log("\n=== RESULTS ===\n");
  const ok = results.filter((r) => r.status === "ok");
  const failed = results.filter((r) => r.status === "failed");
  const skipped = results.filter((r) => r.status === "skipped");

  console.log(`Success: ${ok.length}`);
  console.log(`Failed:  ${failed.length}`);
  console.log(`Skipped: ${skipped.length}`);

  console.log("\n--- Successes ---");
  for (const r of ok) {
    console.log(`  ${r.name} -> ${r.slug}.${r.ext} (${r.type}, ${r.size} bytes)`);
  }

  if (failed.length > 0) {
    console.log("\n--- Failures ---");
    for (const r of failed) {
      console.log(`  ${r.name}: ${r.reason}`);
    }
  }

  if (skipped.length > 0) {
    console.log("\n--- Skipped ---");
    for (const r of skipped) {
      console.log(`  ${r.name}: ${r.reason}`);
    }
  }

  // Write manifest
  const manifest = {};
  for (const r of results) {
    manifest[r.slug] = { status: r.status, ext: r.ext || null, name: r.name };
  }
  fs.writeFileSync(
    path.join(OUTPUT_DIR, "_manifest.json"),
    JSON.stringify(manifest, null, 2)
  );
  console.log("\nManifest written to public/brands/_manifest.json");
}

main().catch(console.error);
