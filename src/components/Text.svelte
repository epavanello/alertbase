<script lang="ts">
  import cn from 'classnames'
  export let type: 'Descriptive' | 'h1' | 'h2' | 'h3'

  let classes = ''
  export { classes as class }
</script>

{#if type == 'Descriptive'}
  <p class="text-sm"><slot /></p>
{:else if type == 'h1'}
  <h1 class={cn(classes, 'text-center dark:text-white text-2xl sm:text-4xl lg:text-7xl font-extrabold')}><slot /></h1>
{:else if type == 'h2'}
  <h2
    class={cn(classes, 'text-center dark:text-white text-2xl sm:text-3xl lg:text-4xl font-extrabold !leading-[5rem]')}
  >
    <slot />
  </h2>
{:else if type == 'h3'}
  <h3 class={cn(classes, 'text-center dark:text-white text-sm sm:text-lg lg:text-xl font-extrabold')}><slot /></h3>
{/if}
