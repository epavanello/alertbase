<script lang="ts">
  import cn from 'classnames'
  import { createEventDispatcher } from 'svelte'

  import Icon from './Icon.svelte'

  export let message = ''
  export let show = true
  export let type: 'error' | 'info' | 'warn' = 'error'

  const dispatch = createEventDispatcher()
</script>

{#if show}
  <div
    class={cn('border  rounded relative text-xs flex flex-row justify-between items-center', {
      'bg-red-100 border-red-400 text-red-700': type == 'error',
      'bg-green-100 border-green-400 text-green-700': type == 'info',
      'bg-yellow-100 border-yellow-400 text-yellow-700': type == 'warn'
    })}
    role="alert"
  >
    <span class="px-4 py-3">{message}</span><Icon
      size="small"
      name="close"
      noMargin
      class="mr-2"
      on:click={() => {
        show = false
        dispatch('close')
      }}
    />
  </div>
{/if}
