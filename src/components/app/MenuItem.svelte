<script lang="ts">
  import type { IconNames } from '$components/Icon.svelte'
  import Icon from '$components/Icon.svelte'

  import classNames from 'classnames'

  export let label: string
  export let selected = false
  export let icon: IconNames
  export let path: string
</script>

<a
  class={classNames(
    'w-full font-thin uppercase flex items-center p-2 my-1 transition-colors duration-200 justify-start',
    {
      'text-blue-500 border-blue-500 bg-gradient-to-r from-white to-blue-100 border-r-4 dark:from-gray-700 dark:to-gray-800':
        selected
    },
    { 'text-gray-500 dark:text-gray-200 hover:text-blue-500': !selected }
  )}
  href={path}
>
  <span class="text-left">
    <Icon name={icon} noMargin noHover />
  </span>
  <span class="mx-4 text-sm font-normal">{label}</span>
</a>
