import { defineConfig } from 'astro/config'
import react from '@astrojs/react'

export default defineConfig({
  site: 'https://eds-systems.be',
  integrations: [react()],
})
