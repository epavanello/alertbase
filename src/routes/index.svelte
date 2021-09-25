<script lang="ts">
  import Footer from '$components/Footer.svelte'
  import Header from '$components/Header.svelte'
  import Tailwind from '$styles/Tailwind.svelte'
</script>

<Tailwind />
<Header />
<main class="container mx-auto h-full">
  <atricle class="prose">
    <h1 class="text-center dark:text-white py-4">Welcome to Alertbase</h1>
  </atricle>
</main>
<Footer />
