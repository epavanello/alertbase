<script lang="ts">
  import Footer from '$components/Footer.svelte'
  import Header from '$components/Header.svelte'
  import Tailwind from '$styles/Tailwind.svelte'
</script>

<Tailwind />
<Header />
<main class="container mx-auto">
  <atricle class="prose">
    <h1 class="text-center dark:text-white pt-16">Welcome to Alertbase</h1>
  </atricle>
  <div class="prose prose-sm sm:prose lg:prose-lg xl:prose-2xl mx-auto pt-8">
    <p class="lead">Alertbase is a clean, powerful, and easy-to-use reminder-taking app.</p>
    <p class="lead">Never miss your reminders again.</p>
  </div>
</main>
<Footer />
