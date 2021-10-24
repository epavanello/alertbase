<script>
  import '$styles/tailwind-output.css'

  import Footer from '$components/layout/Footer.svelte'
  import Header from '$components/layout/Header.svelte'
  import { goto } from '$app/navigation'

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
  <Footer />
</main>
