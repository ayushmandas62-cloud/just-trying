import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://ayushmandas62-cloud.github.io',
  base: '/',
  integrations: [tailwind()],
});
