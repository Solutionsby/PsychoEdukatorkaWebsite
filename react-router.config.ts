import { rename, rmdir } from 'node:fs/promises'
import type { Config } from '@react-router/dev/config'

export default {
  appDirectory: 'src', // zostajemy przy src/ zamiast domyślnego app/
  ssr: false, // bez serwera: statyczny hosting
  // wszystkie strony z routes.ts + '/404', który trafia w trasę '*' (NotFound)
  prerender: ({ getStaticPaths }) => [...getStaticPaths(), '/404'],
  // prerender zapisuje build/client/404/index.html; hosting szuka build/client/404.html
  async buildEnd() {
    await rename('build/client/404/index.html', 'build/client/404.html')
    await rmdir('build/client/404')
  },
} satisfies Config
