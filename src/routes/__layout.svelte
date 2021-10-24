<script>
  import '$styles/tailwind-output.css'

  import Header from '$components/layout/Header.svelte'
  import { goto } from '$app/navigation'
  import ThemeToggle from '$components/ThemeToggle.svelte'

  let urlSearch = new URLSearchParams(window.location.hash.substr(1))

  if (urlSearch.has('type') && urlSearch.get('type') == 'recovery') {
    goto(`/resetPassword`)
  }
</script>

<main class="h-screen relative">
  <Header />
  <div class="container mx-auto px-2">
    <slot />
  </div>

  <div class="fixed bottom-2 md:bottom-3 right-4 sm:right-6 lg:right-8">
    <ThemeToggle />
  </div>
</main>
