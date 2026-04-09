import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const ROOT = process.cwd();
const INPUT_DIR = path.join(ROOT, "public", "assets", "gallery");
const OUTPUT_DIR = path.join(ROOT, "public", "assets", "gallery-clean");

const SIZES = [
  { name: "lg", width: 1800 },
  { name: "md", width: 1200 },
  { name: "sm", width: 720 },
];

function luminance(r, g, b) {
  // Relative luminance (sRGB) approximation; fast + good enough for thresholding
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

async function findContentBounds(image) {
  const meta = await image.metadata();
  if (!meta.width || !meta.height) throw new Error("Missing image dimensions");
  const width = meta.width;
  const height = meta.height;

  // Downsample for speed; we only need coarse bounds.
  const targetW = Math.min(260, width);
  const targetH = Math.min(520, height);

  const { data, info } = await image
    .clone()
    .resize(targetW, targetH, { fit: "fill" })
    .removeAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  const w = info.width;
  const h = info.height;
  const stride = info.channels; // 3

  const rowMeans = new Float32Array(h);
  const colMeans = new Float32Array(w);

  // Sample a subset of pixels for each row/col to keep this quick.
  const rowStep = Math.max(1, Math.floor(w / 90));
  const colStep = Math.max(1, Math.floor(h / 140));

  for (let y = 0; y < h; y++) {
    let sum = 0;
    let count = 0;
    const base = y * w * stride;
    for (let x = 0; x < w; x += rowStep) {
      const i = base + x * stride;
      sum += luminance(data[i], data[i + 1], data[i + 2]);
      count++;
    }
    rowMeans[y] = sum / count;
  }

  for (let x = 0; x < w; x++) {
    let sum = 0;
    let count = 0;
    for (let y = 0; y < h; y += colStep) {
      const i = (y * w + x) * stride;
      sum += luminance(data[i], data[i + 1], data[i + 2]);
      count++;
    }
    colMeans[x] = sum / count;
  }

  // Threshold tuned for screenshots with black bars.
  const ROW_T = 14;
  const COL_T = 14;

  const rowIsContent = Array.from(rowMeans, (v) => v > ROW_T);
  const colIsContent = Array.from(colMeans, (v) => v > COL_T);

  function largestRun(mask) {
    let bestStart = 0;
    let bestLen = 0;
    let start = -1;
    for (let i = 0; i <= mask.length; i++) {
      const on = i < mask.length ? mask[i] : false;
      if (on && start === -1) start = i;
      if (!on && start !== -1) {
        const len = i - start;
        if (len > bestLen) {
          bestStart = start;
          bestLen = len;
        }
        start = -1;
      }
    }
    return { start: bestStart, end: bestStart + bestLen - 1, len: bestLen };
  }

  const rowRun = largestRun(rowIsContent);
  const colRun = largestRun(colIsContent);

  // Map bounds back to original image coordinates.
  const top = Math.max(0, Math.floor((rowRun.start / h) * height));
  const bottom = Math.min(height - 1, Math.ceil(((rowRun.end + 1) / h) * height) - 1);
  const left = Math.max(0, Math.floor((colRun.start / w) * width));
  const right = Math.min(width - 1, Math.ceil(((colRun.end + 1) / w) * width) - 1);

  // Guardrails: ensure we don’t accidentally crop almost everything away.
  const cropW = Math.max(1, right - left + 1);
  const cropH = Math.max(1, bottom - top + 1);
  if (cropW < width * 0.35 || cropH < height * 0.35) {
    return { left: 0, top: 0, width, height };
  }

  return { left, top, width: cropW, height: cropH };
}

async function main() {
  await fs.mkdir(OUTPUT_DIR, { recursive: true });
  const entries = await fs.readdir(INPUT_DIR);
  const files = entries.filter((f) => /\.(png|jpe?g|webp)$/i.test(f)).sort();

  if (files.length === 0) {
    console.log("No images found in", INPUT_DIR);
    return;
  }

  for (const file of files) {
    const inPath = path.join(INPUT_DIR, file);
    const base = file.replace(/\.\w+$/, "");

    const img = sharp(inPath, { failOn: "none" });
    const bounds = await findContentBounds(img);

    const extracted = img.extract(bounds).rotate();

    // Create responsive derivatives (WebP primary + JPG fallback)
    for (const s of SIZES) {
      const pipeline = extracted.clone().resize({
        width: s.width,
        withoutEnlargement: true,
      });

      const outWebp = path.join(OUTPUT_DIR, `${base}.${s.name}.webp`);
      const outJpg = path.join(OUTPUT_DIR, `${base}.${s.name}.jpg`);

      await pipeline
        .clone()
        .webp({ quality: 90, effort: 5 })
        .toFile(outWebp);

      await pipeline
        .clone()
        .jpeg({ quality: 92, mozjpeg: true, chromaSubsampling: "4:4:4" })
        .toFile(outJpg);
    }

    console.log("✓", file, "→", `public/assets/gallery-clean/${base}.*`);
  }
}

main().catch((err) => {
  console.error(err);
  process.exitCode = 1;
});

