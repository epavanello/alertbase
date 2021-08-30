<script lang="ts">
  import Tailwind from '$lib/Tailwind.svelte'

  export let name: string
</script>

<Tailwind />
<main class="container mx-auto">
  <h1>Hello {name}!</h1>
</main>
