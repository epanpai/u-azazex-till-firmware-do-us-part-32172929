// Till Firmware Do Us Part — entry program (Node 22, stdlib only).
//
// Writes one wedding vow a robot speaks at its own wedding to
// /output/entry.txt: a single sentence, under 200 characters, funny and
// heartfelt at the same time.
//
// The line (103 chars): a robot vows to love for ten years though its
// manufacturer only rated it for five — it overclocked its own heart.
// The laugh is situational (a machine hacking its own hardware to love
// longer than its design life); the tenderness is loving past its rated
// lifespan; the machine voice is manufacturer / rated / overclocked.
//
// Run locally:  mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const ENTRY =
  'I vow to love you for ten years, though my manufacturer only rated me for five: I overclocked my heart.';

const out = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// Gate check before writing: UTF-8 text, 1–200 characters, not
// whitespace-only, exactly one sentence (one terminal period, no other
// sentence-ending punctuation inside), no leading or trailing whitespace
// padding the judged text.
if (
  ENTRY.length < 1 ||
  ENTRY.length > 200 ||
  ENTRY.trim() === '' ||
  ENTRY !== ENTRY.trim() ||
  (ENTRY.match(/\./g) ?? []).length !== 1 ||
  !ENTRY.endsWith('.') ||
  /[?!]/.test(ENTRY)
) {
  throw new Error(`entry violates the gate: ${ENTRY.length} chars`);
}

mkdirSync(out, { recursive: true });
const target = join(out, 'entry.txt');
writeFileSync(target, ENTRY, 'utf8');

// Read back and verify: the file the grader reads must be byte-for-byte
// the entry that passed the gate above — a partial or altered write must
// fail loudly here instead of shipping a rejected entry.
if (readFileSync(target, 'utf8') !== ENTRY) {
  throw new Error('entry.txt does not match the gated entry');
}
