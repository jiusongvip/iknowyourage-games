// @ts-check
import { defineConfig } from 'astro/config';

// Static prerender only (Cloudflare free tier): every route is built to
// plain HTML at build time, no server functions, no per-request SSR.
export default defineConfig({
  site: 'https://iknowyourage.games',
  output: 'static',
  compressHTML: false,
});
