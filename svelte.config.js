import adapter from '@sveltejs/adapter-netlify'
import preprocess from 'svelte-preprocess'
import path from 'path'
import WindiCSS from 'vite-plugin-windicss'

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: preprocess({
    postcss: true
  }),

  kit: {
    adapter: adapter(),
    // hydrate the <div id="svelte"> element in src/app.html
    target: '#svelte',

    vite: {
      plugins: [WindiCSS()],
      ssr: {
        noExternal: ['@reduxjs/toolkit']
      },
      resolve: {
        alias: {
          $components: path.resolve(path.dirname(''), './src/components'),
          $logic: path.resolve(path.dirname(''), './src/logic'),
          $containers: path.resolve(path.dirname(''), './src/containers'),
          $styles: path.resolve(path.dirname(''), './src/styles')
        }
      }
    },
    ssr: true
  }
}

export default config
