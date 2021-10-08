<style global lang="postcss">
  @tailwind base;
  @tailwind components;
  @tailwind utilities;

  @layer components {
    input[type='text'],
    input[type='password'],
    input[type='datetime-local'] {
      @apply border-b border-gray-300 outline-none px-2 py-1 bg-transparent;
    }

    button,
    .button {
      &:not(.primary) {
        @apply inline-flex px-4 py-1 text-base font-normal text-black border border-gray-500 rounded-md shadow-sm hover:bg-gray-200 dark:text-white dark:hover:bg-gray-700;
      }
      &.primary {
        @apply inline-flex px-4 py-1 text-base font-medium text-white border border-transparent rounded-md shadow-sm bg-gradient-to-r from-purple-700 to-indigo-600 hover:from-purple-700 hover:to-indigo-700;
      }
    }
  }
</style>
