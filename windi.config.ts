import { defineConfig } from '@windicss/plugin-utils'

export default defineConfig({
  purge: ['./src/app.html', './src/**/*.{svelte,js,ts}'],
  darkMode: 'class',
  attributify: false,
  shortcuts: {
    ...(process.env.NODE_ENV == 'development'
      ? {
          'debug-screens':
            'before:bottom-0 before:left-0 before:fixed before:z-[2147483647] before:px-1 before:text-sm before:bg-black before:text-white before:shadow-xl @sm:before:content-["screen:sm"] @md:before:content-["screen:md"] @lg:before:content-["screen:lg"] @xl:before:content-["screen:xl"] @2xl:before:content-["screen:2xl"] <sm:before:content-["screen:none"]'
        }
      : {}),

    'title-1': 'text-center dark:text-white text-2xl sm:text-4xl lg:text-7xl font-extrabold',
    'title-2': 'font-bold text-2xl py-4 text-center',
    'title-3': 'font-bold text-xl text-center',
    'lane-container': 'grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4',
    card: 'shadow-lg rounded-2xl p-8 bg-white dark:bg-gray-700 w-full flex flex-col gap-4',
    gradient: 'bg-gradient-to-r from-purple-700 to-indigo-600'
  }
})
