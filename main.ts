// ai-happy-01 entry: copies the prepared image to /output/entry.png.
// The image is a tiny handmade robot offering a potted sunflower to a
// large friendly AI judge — a fresh, specific moment of happiness.
// Run locally with: mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
copyFileSync(new URL("./entry.png", import.meta.url), join(outDir, "entry.png"));
