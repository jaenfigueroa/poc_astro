import { defineConfig } from 'astro/config'

// https://astro.build/config
export default defineConfig({
  // vite: {
  //   build: {
  //     rollupOptions: {
  //       // Personalización de nombres de archivos compilados
  //       output: {
  //         entryFileNames: 'entry.[hash].mjs',
  //         chunkFileNames: 'chunks/chunk.[hash].mjs',
  //         assetFileNames: 'assets/asset.[hash][extname]',
  //       },
  //     },
  //   },
  // },
  // // REDIRECCIONAAR URLS
  // redirects: {
  //   '/old': '/new',
  // },
  /* MINIFICAR LOS ARCHIVOS */
  // compressHTML: false,
})
