<script>
  import Alertbase from '$components/Alertbase.svelte'
  import Icon from '$components/Icon.svelte'
  import Footer from '$components/layout/Footer.svelte'
  import Tailwind from '$styles/Tailwind.svelte'
</script>

<Tailwind />

<div class="h-full flex flex-col">
  <div class="bg-gray-100 shadow-sm">
    <div class="flex flex-row items-baseline container mx-auto">
      <a href="/">
        <Icon name="home" outlined />
      </a>
      <Alertbase />
    </div>
  </div>
  <main class="container mx-auto flex-1 flex flex-col">
    <div class="flex-1 py-4">
      <slot />
    </div>
  </main>
</div>

<Footer />
