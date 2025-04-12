import fs from 'fs';
import { mods } from '../app/mods.tsx';

const baseUrl = 'https://brawlmods.natesworks.com';

const sitemapEntries = mods.map(mod => {
  return `  <url>\n    <loc>${baseUrl}/mod?id=${mod.id}</loc>\n  </url>`;
});

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${[
  `  <url>\n    <loc>${baseUrl}/</loc>\n  </url>`,
  `  <url>\n    <loc>${baseUrl}/submit</loc>\n  </url>`,
  ...sitemapEntries,
].join('\n')}\n</urlset>`;

fs.writeFileSync('../public/sitemap.xml', sitemap);
