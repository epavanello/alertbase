<script>
  import '$styles/tailwind-output.css'

  import Footer from '$components/layout/Footer.svelte'
  import Header from '$components/layout/Header.svelte'
  import { goto } from '$app/navigation'
  import { setContext } from 'svelte'

  let urlSearch = new URLSearchParams(window.location.hash.substr(1))

  if (urlSearch.has('type') && urlSearch.get('type') == 'recovery') {
    goto(`/resetPassword`)
  }
</script>

<Header />
<main class="container mx-auto px-2">
  <slot />
</main>
<Footer />
