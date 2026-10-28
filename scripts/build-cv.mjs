// Prints the /cv page to a PDF with headless Chrome. Run through `npm run cv`, which builds the site first.
// Default: public/files/Juan_Gonzalez_CV.pdf (no photo, published on the site).
// `--photo`: out/Juan_Gonzalez_CV_photo.pdf, kept out of git, for employers that expect a photo.
import { execFile } from 'node:child_process';
import { mkdtemp, rm, mkdir } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { promisify } from 'node:util';
import { preview } from 'astro';

const run = promisify(execFile);
const chrome = process.env.CHROME_PATH ?? '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const withPhoto = process.argv.includes('--photo');
const outDir = join(process.cwd(), withPhoto ? 'out' : 'public/files');
const output = join(outDir, withPhoto ? 'Juan_Gonzalez_CV_photo.pdf' : 'Juan_Gonzalez_CV.pdf');
const port = 4322;

await mkdir(outDir, { recursive: true });
const profileDir = await mkdtemp(join(tmpdir(), 'cv-chrome-'));
const server = await preview({ server: { port }, logLevel: 'warn' });

try {
  await run(chrome, [
    '--headless=new',
    '--disable-gpu',
    '--no-pdf-header-footer',
    `--user-data-dir=${profileDir}`,
    `--print-to-pdf=${output}`,
    `http://localhost:${port}/cv${withPhoto ? '?photo' : ''}`,
  ]);
  console.log(`CV written to ${output}`);
} finally {
  await server.stop();
  await rm(profileDir, { recursive: true, force: true });
}
