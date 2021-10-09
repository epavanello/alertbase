<script>
  import '$styles/tailwind-output.css'

  import Footer from '$components/layout/Footer.svelte'
  import Header from '$components/layout/Header.svelte'
</script>

<Header />
<main class="container mx-auto px-2">
  <slot />
</main>
<Footer />
