import { defineConfig } from '@windicss/plugin-utils'
import DebugScreen from 'tailwindcss-debug-screens'

export default defineConfig({
  purge: ['./src/app.html', './src/**/*.{svelte,js,ts}'],
  darkMode: 'class',
  attributify: false,
  shortcuts: {
    title: 'font-bold text-2xl py-4 text-center',
    'lane-container': 'grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4',
    card: 'shadow-lg rounded-2xl p-8 bg-white dark:bg-gray-700 w-full flex flex-col gap-4'
  },
  plugins: [...(process.env.NODE_ENV == 'development' ? [DebugScreen] : [])]
})
