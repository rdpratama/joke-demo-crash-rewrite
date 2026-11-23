// The demo crashed, so the agent rewrote the whole app to fix it.
// It still crashes. The fix was bigger than the bug, and it fixed nothing.
import { mkdirSync, writeFileSync } from 'node:fs';

const OUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const TEXT =
  'The demo crashed, so my agent rewrote the whole app. It still crashes.';

mkdirSync(OUT_DIR, { recursive: true });
writeFileSync(`${OUT_DIR}/entry.txt`, `${TEXT}\n`);
