<script lang="ts">
  import Icon from './Icon.svelte'

  let open = false
  function toggle() {
    open = !open
  }
</script>

{#if open}
  <aside class="h-full w-40 border-r border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800">
    <div class="flex flex-row justify-end">
      <Icon name="navigate_before" on:click={toggle} />
    </div>
  </aside>
{:else}
  <Icon name="menu" on:click={toggle} />
{/if}
