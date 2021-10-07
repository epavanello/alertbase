<script>
  import Alertbase from '$components/Alertbase.svelte'
  import Footer from '$components/layout/Footer.svelte'
  import Tailwind from '$styles/Tailwind.svelte'
</script>

<Tailwind />

<main class="container mx-auto flex flex-col h-full">
  <div class="px-2 py-4">
    <a href="/">
      <Alertbase />
    </a>
  </div>
  <div class="flex-1">
    <slot />
  </div>
</main>
<Footer />
