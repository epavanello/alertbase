<style global lang="postcss">
  @tailwind base;
  @tailwind components;
  @tailwind utilities;

  @layer components {
    input[type='text'],
    input[type='password'] {
      @apply border-b border-gray-300 outline-none px-2 py-1 bg-transparent;
    }

    button,
    .button {
      @apply inline-flex px-4 py-1 text-base font-medium text-white border border-transparent rounded-md shadow-sm bg-gradient-to-r from-purple-700 to-indigo-600 hover:from-purple-700 hover:to-indigo-700;
    }
  }
</style>
