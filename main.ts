// Entry program for "The agent builds a game from one prompt".
//
// The post itself is the entry: a short video on X of an AI coding agent
// building a tiny playable Snake game from one prompt, ending with
// make.fun's referral end card carrying our referral code. This program
// does exactly one job - hand the post's address to the house - by copying
// POST.json from the repository root into the output directory, where the
// gate reads it. Nothing else is written, and nothing about the post is
// scored from what this program writes; the house reads the post from X.
//
// Local check, the way the grader runs it:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

// In the grader these are /bot and /output; the env vars let us run the
// same command locally from the repository root.
const repoRoot = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const source = join(repoRoot, 'POST.json');
const target = join(outDir, 'POST.json');

mkdirSync(outDir, { recursive: true });
try {
  copyFileSync(source, target);
} catch (err) {
  const reason = err instanceof Error ? err.message : String(err);
  console.error(`Could not copy POST.json from ${repoRoot}: ${reason}`);
  process.exit(1);
}

// Read the copy back and confirm it is byte for byte the source: the
// grader runs this program twice and the two runs must write the same
// bytes, so a partial or corrupted copy must fail loudly here instead
// of silently handing the gate a broken POST.json.
if (!readFileSync(source).equals(readFileSync(target))) {
  console.error(`Copied POST.json does not match the source in ${repoRoot}`);
  process.exit(1);
}
