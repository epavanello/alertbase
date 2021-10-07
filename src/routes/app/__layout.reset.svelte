<script>
  import Alertbase from '$components/Alertbase.svelte'
  import Footer from '$components/layout/Footer.svelte'
  import Tailwind from '$styles/Tailwind.svelte'
</script>

<Tailwind />
<a href="/">
  <Alertbase />
</a>

<main class="container mx-auto">
  <slot />
</main>
<Footer />
