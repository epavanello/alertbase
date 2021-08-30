<script context="module">
  export const ssr = false
</script>

<script lang="ts">
  import Footer from '$components/Footer.svelte'
  import Tailwind from '$lib/Tailwind.svelte'
</script>

<Tailwind />
<main class="container mx-auto">
  <atricle class="prose">
    <h1 class="text-center dark:text-white py-4">Welcome to Alertbase</h1>
  </atricle>
</main>
<Footer />
