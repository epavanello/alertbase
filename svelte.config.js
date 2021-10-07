import preprocess from 'svelte-preprocess'
import path from 'path'

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: preprocess({
    postcss: true
  }),

  kit: {
    // hydrate the <div id="svelte"> element in src/app.html
    target: '#svelte',
    vite: {
      resolve: {
        alias: {
          $components: path.resolve(path.dirname(''), './src/components'),
          $logic: path.resolve(path.dirname(''), './src/logic'),
          $containers: path.resolve(path.dirname(''), './src/containers'),
          $styles: path.resolve(path.dirname(''), './src/styles')
        }
      }
    },
    ssr: false
  }
}

export default config
