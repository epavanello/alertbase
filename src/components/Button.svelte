<script lang="ts">
  import classNames from 'classnames'

  export let type: 'button' | 'submit' = 'button'
  export let primary = false
  export let disabled = false

  export let href = ''

  $: classes = classNames('px-4 py-2 text-base transition-colors border rounded-full shadow-md', {
    'font-medium text-white border-transparent': primary,
    'gradient hover:(from-purple-700 to-indigo-700)': primary && !disabled,
    'font-normal text-gray-800 border-gray-800  dark:text-white ': !primary,
    'hover:(bg-gray-800 text-white) dark:hover:bg-white dark:hover:text-gray-800': !primary && !disabled,
    'bg-gray-200 dark:bg-gray-800 cursor-not-allowed': disabled
  })
</script>

{#if href.length > 0}
  <a {href} class={classes} on:click><slot /> </a>
{:else}
  <button {type} class={classes} on:click><slot /> </button>
{/if}
