import { rename, rmdir, writeFile } from 'node:fs/promises'
import type { Config } from '@react-router/dev/config'
import { pages } from './src/content/pages.ts'
import { pageUrl } from './src/content/seo.ts'

// Mapa strony z listy stron (pages.ts), adresy jak w canonical.
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(({ path }) => `  <url><loc>${pageUrl(path)}</loc></url>`).join('\n')}
</urlset>
`

export default {
  appDirectory: 'src', // zostajemy przy src/ zamiast domyślnego app/
  ssr: false, // bez serwera: statyczny hosting
  // wszystkie strony z routes.ts + '/404', który trafia w trasę '*' (NotFound)
  prerender: ({ getStaticPaths }) => [...getStaticPaths(), '/404'],
  async buildEnd() {
    // prerender zapisuje build/client/404/index.html; hosting szuka build/client/404.html
    await rename('build/client/404/index.html', 'build/client/404.html')
    await rmdir('build/client/404')
    await writeFile('build/client/sitemap.xml', sitemap)
  },
} satisfies Config
