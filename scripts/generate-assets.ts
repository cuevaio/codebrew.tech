/**
 * Brand asset generator for Code Brew
 *
 * Generates:
 *   - public/og.png        (1200×630 Open Graph)
 *   - public/og-twitter.png (1200×600 Twitter card)
 *   - public/favicon.ico    (16, 32, 48px multi-size)
 *
 * Run:  bun scripts/generate-assets.ts
 */

import sharp from "sharp";
import pngToIco from "png-to-ico";
import { writeFileSync } from "node:fs";
import { join } from "node:path";

const ROOT = join(import.meta.dirname, "..");
const PUBLIC = join(ROOT, "public");
const APP = join(ROOT, "app");

// ── Brand tokens ──────────────────────────────────────────────
const BG = "#0A0A0A";
const FG = "#E5E5E5";
const SIGNAL = "#D42B2B";
const MUTED = "#6B6B6B";
const BORDER = "#2A2A2A";
const GRID_OPACITY = 0.04;

// ── SVG builders ──────────────────────────────────────────────

function gridPattern(w: number, h: number, cell = 60): string {
  const lines: string[] = [];
  for (let x = 0; x <= w; x += cell) {
    lines.push(
      `<line x1="${x}" y1="0" x2="${x}" y2="${h}" stroke="white" stroke-opacity="${GRID_OPACITY}" />`
    );
  }
  for (let y = 0; y <= h; y += cell) {
    lines.push(
      `<line x1="0" y1="${y}" x2="${w}" y2="${y}" stroke="white" stroke-opacity="${GRID_OPACITY}" />`
    );
  }
  return lines.join("\n");
}

function bracket(
  x: number,
  y: number,
  size: number,
  corner: "tl" | "tr" | "bl" | "br"
): string {
  const s = size;
  const paths: Record<string, string> = {
    tl: `M${x},${y + s} L${x},${y} L${x + s},${y}`,
    tr: `M${x - s},${y} L${x},${y} L${x},${y + s}`,
    bl: `M${x},${y - s} L${x},${y} L${x + s},${y}`,
    br: `M${x - s},${y} L${x},${y} L${x},${y - s}`,
  };
  return `<path d="${paths[corner]}" stroke="${BORDER}" stroke-width="1.5" fill="none" />`;
}

function diamond(cx: number, cy: number, size = 4): string {
  return `<rect x="${cx - size / 2}" y="${cy - size / 2}" width="${size}" height="${size}" fill="${SIGNAL}" transform="rotate(45 ${cx} ${cy})" />`;
}

function ogSvg(width: number, height: number): string {
  const pad = 80;
  const bracketSize = 24;

  // Headline positioning
  const headlineY = height * 0.38;
  const fontSize = Math.round(width * 0.105);
  const dashWidth = Math.round(fontSize * 0.35);
  const lineGap = Math.round(fontSize * 1.05);

  // "CODE" line: C O <dash> D E
  // "BREW" line: B R <dash> E W
  // We render them as text with a red dash in between

  return `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
  <defs>
    <style>
      @font-face {
        font-family: 'Geist Mono';
        src: local('Geist Mono'), local('GeistMono-SemiBold');
      }
      .display { font-family: 'Geist Mono', 'SF Mono', 'Fira Code', monospace; font-weight: 600; font-size: ${fontSize}px; fill: ${FG}; text-transform: uppercase; letter-spacing: -0.03em; }
      .label { font-family: 'Geist Mono', 'SF Mono', 'Fira Code', monospace; font-weight: 400; font-size: 13px; fill: ${SIGNAL}; text-transform: uppercase; letter-spacing: 0.1em; }
      .tagline { font-family: 'Geist Mono', 'SF Mono', 'Fira Code', monospace; font-weight: 400; font-size: 14px; fill: ${MUTED}; letter-spacing: 0.02em; }
      .brand { font-family: 'Geist Mono', 'SF Mono', 'Fira Code', monospace; font-weight: 400; font-size: 11px; fill: ${MUTED}; text-transform: uppercase; letter-spacing: 0.4em; }
    </style>
  </defs>

  <!-- Background -->
  <rect width="${width}" height="${height}" fill="${BG}" />

  <!-- Grid overlay -->
  ${gridPattern(width, height)}

  <!-- Corner brackets -->
  ${bracket(pad, pad, bracketSize, "tl")}
  ${bracket(width - pad, pad, bracketSize, "tr")}
  ${bracket(pad, height - pad, bracketSize, "bl")}
  ${bracket(width - pad, height - pad, bracketSize, "br")}

  <!-- Ghost text -->
  <text x="${width - 100}" y="${height * 0.25}" class="display" fill="${BG}" stroke="${BORDER}" stroke-width="0.5" opacity="0.3" font-size="${fontSize * 0.6}px" text-anchor="end">BREW</text>

  <!-- Monthly Meetups label -->
  <text x="${pad + 20}" y="${headlineY - lineGap - 20}" class="label">Monthly Meetups</text>
  <line x1="${pad}" y1="${headlineY - lineGap - 30}" x2="${width - pad}" y2="${headlineY - lineGap - 30}" stroke="${BORDER}" stroke-width="0.5" />

  <!-- CODE headline -->
  <text x="${pad + 20}" y="${headlineY}" class="display">
    <tspan>CO</tspan>
  </text>
  <rect x="${pad + 20 + fontSize * 1.15}" y="${headlineY - fontSize * 0.32}" width="${dashWidth}" height="3" fill="${SIGNAL}" rx="1" />
  <text x="${pad + 20 + fontSize * 1.15 + dashWidth + fontSize * 0.15}" y="${headlineY}" class="display">
    <tspan>DE</tspan>
  </text>

  <!-- BREW headline -->
  <text x="${pad + 20}" y="${headlineY + lineGap}" class="display">
    <tspan>BR</tspan>
  </text>
  <rect x="${pad + 20 + fontSize * 1.15}" y="${headlineY + lineGap - fontSize * 0.32}" width="${dashWidth}" height="3" fill="${SIGNAL}" rx="1" />
  <text x="${pad + 20 + fontSize * 1.15 + dashWidth + fontSize * 0.15}" y="${headlineY + lineGap}" class="display">
    <tspan>EW</tspan>
  </text>

  <!-- Decorative line with diamonds -->
  ${diamond(pad + 20, headlineY + lineGap + 40)}
  <line x1="${pad + 30}" y1="${headlineY + lineGap + 40}" x2="${pad + 220}" y2="${headlineY + lineGap + 40}" stroke="${SIGNAL}" stroke-width="1.5" />
  ${diamond(pad + 225, headlineY + lineGap + 40)}

  <!-- Tagline -->
  <text x="${pad + 20}" y="${headlineY + lineGap + 80}" class="tagline">Building Latin America's most engaged</text>
  <text x="${pad + 20}" y="${headlineY + lineGap + 100}" class="tagline">tech community, one coffee at a time.</text>

  <!-- Bottom brand -->
  <text x="${pad + 20}" y="${height - pad - 10}" class="brand">Code Brew</text>
  <text x="${width - pad - 20}" y="${height - pad - 10}" class="brand" text-anchor="end">codebrew.tech</text>

  <!-- Status dot -->
  <circle cx="${pad + 8}" cy="${height - pad - 14}" r="3" fill="${SIGNAL}" />

  <!-- Film grain noise -->
  <filter id="grain">
    <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
    <feColorMatrix type="saturate" values="0" />
  </filter>
  <rect width="${width}" height="${height}" filter="url(#grain)" opacity="0.03" />
</svg>`;
}

function faviconSvg(size: number): string {
  // Minimal "CB" monogram in a dark square with signal-red accent
  const pad = Math.round(size * 0.12);
  const fontSize = Math.round(size * 0.38);
  const dashW = Math.round(size * 0.18);
  const dashH = Math.max(1, Math.round(size * 0.06));

  return `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 ${size} ${size}">
  <defs>
    <style>
      .ico-text { font-family: 'Geist Mono', 'SF Mono', 'Fira Code', monospace; font-weight: 700; font-size: ${fontSize}px; fill: ${FG}; letter-spacing: -0.05em; }
    </style>
  </defs>
  <rect width="${size}" height="${size}" rx="${Math.round(size * 0.15)}" fill="${BG}" />
  <rect x="${pad}" y="${Math.round(size * 0.48)}" width="${dashW}" height="${dashH}" fill="${SIGNAL}" rx="${Math.max(0.5, dashH * 0.3)}" />
  <text x="${size * 0.5}" y="${size * 0.42}" text-anchor="middle" class="ico-text">CB</text>
  <text x="${size * 0.5}" y="${size * 0.78}" text-anchor="middle" class="ico-text" font-size="${Math.round(fontSize * 0.55)}px" fill="${MUTED}">
    &#x25C6;
  </text>
</svg>`;
}

// ── Generation ────────────────────────────────────────────────

async function generateOg(
  width: number,
  height: number,
  filename: string
): Promise<void> {
  const svg = Buffer.from(ogSvg(width, height));
  await sharp(svg).png({ quality: 90, compressionLevel: 9 }).toFile(join(PUBLIC, filename));
  console.log(`  ✓ ${filename} (${width}×${height})`);
}

async function generateFavicon(): Promise<void> {
  const sizes = [16, 32, 48];
  const pngs: Buffer[] = [];

  for (const size of sizes) {
    const svg = Buffer.from(faviconSvg(size));
    const png = await sharp(svg).png().toBuffer();
    pngs.push(png);
  }

  const ico = await pngToIco(pngs);
  writeFileSync(join(APP, "favicon.ico"), ico);
  console.log("  ✓ app/favicon.ico (16, 32, 48px)");
}

// ── Main ──────────────────────────────────────────────────────

async function main() {
  console.log("\n  Code Brew — Asset Generation\n");

  await generateOg(1200, 630, "og.png");
  await generateOg(1200, 600, "og-twitter.png");
  await generateFavicon();

  console.log("\n  Done.\n");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
