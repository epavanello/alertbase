<script context="module">
  import supabase from '$logic/supabase'

  export async function load() {
    const user = supabase.auth.user()
    if (!user) {
      return {
        status: 302,
        redirect: '/'
      }
    }
    return {
      status: 200
    }
  }
</script>

<script lang="ts">
  import Footer from '$components/layout/Footer.svelte'
  import Sidebar from '$components/Sidebar.svelte'
  import Tailwind from '$styles/Tailwind.svelte'
</script>

<Tailwind />
<main class="h-full">
  <Sidebar />
</main>
<Footer />
