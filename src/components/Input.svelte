<script lang="ts">
  export let mandatory = false
  export let placeholder = ''
  export let id: string
  export let label: string
  export let value: string | number
  export let type = 'text'

  const handleInput = (
    e: Event & {
      currentTarget: EventTarget & HTMLInputElement
    }
  ) => {
    value = type.match(/^(number|range)$/) ? +e.currentTarget.value : e.currentTarget.value
  }
</script>

<div class=" relative ">
  <label for={id}>
    {label}
    {#if mandatory}
      <span class="text-red-500 required-dot"> * </span>
    {/if}
  </label>
  <input
    {type}
    {id}
    class="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-black placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
    {placeholder}
    on:input={handleInput}
    {value}
  />
</div>
