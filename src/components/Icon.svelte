<script lang="ts">
  export let name: string
  export let outlined: boolean = false
  export let filled: boolean = false
</script>

<span
  class="material-icons p-2 m-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded cursor-pointer"
  class:material-icons-filled={filled}
  class:material-icons-outlined={outlined}
  on:click>{name}</span
>
