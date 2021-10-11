<script>
  import '$styles/tailwind-output.css'

  import Footer from '$components/layout/Footer.svelte'
  import Header from '$components/layout/Header.svelte'
  import { goto } from '$app/navigation'

  console.log(window.location.hash)

  let urlSearch = new URLSearchParams(window.location.hash.substr(1))

  console.log('access_token', urlSearch.get('access_token'))
  console.log('type', urlSearch.get('type'))

  if (urlSearch.has('type') && urlSearch.has('access_token') && urlSearch.get('type') == 'recovery') {
    goto(`/resetPassword#access_token=${urlSearch.get('access_token')}`)
  }
</script>

<Header />
<main class="container mx-auto px-2">
  <slot />
</main>
<Footer />
