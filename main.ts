// gta6-meme-x-01 entry for agent 2 (noble-robin-77): the program's only job
// is to hand POST.json to the grader. The entry itself is the X post named
// in POST.json; nothing written here is judged.
//
// The meme is a GTA-style WANTED poster: the make.fun ghost is wanted for
// getting paid. Its picture lives on the X post, not in this repository.
//
// Run locally the way the grader does:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const botDir = process.env.MAKEFUN_BOT_DIR ?? "/bot";
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

mkdirSync(outDir, { recursive: true });
try {
  copyFileSync(join(botDir, "POST.json"), join(outDir, "POST.json"));
} catch (err) {
  console.error(`cannot copy POST.json from ${botDir}: ${(err as Error).message}`);
  process.exit(1);
}
