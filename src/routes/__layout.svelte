<script>
  import Footer from '$components/layout/Footer.svelte'
  import Header from '$components/layout/Header.svelte'
  import Tailwind from '$styles/Tailwind.svelte'
</script>

<Tailwind />
<Header />
<main class="container mx-auto">
  <slot />
</main>
<Footer />
