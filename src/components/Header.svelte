<script lang="ts">
  let menu: { label: string; address: string }[] = [
    { label: 'Home', address: '/' },
    { label: 'Pricing', address: '/pricing' },
    { label: 'Features', address: '/features' },
    { label: 'Contact Us', address: '/contact' },
    { label: 'Login', address: '/login' }
  ]
</script>

<div class="relative z-20 pb-8 sm:pb-8 lg:w-full">
  <div class="relative pt-4 md:pt-6 px-4 sm:px-6 lg:px-8">
    <nav class="relative flex items-center justify-between sm:h-10 lg:justify-between">
      <!--Logo-->
      <div class="prose prose-sm">
        <h1 class="dark:text-white">Alertbase</h1>
      </div>
      <!--Buttons-->
      <div class="hidden md:block md:ml-10 md:pr-4 md:space-x-8">
        {#each menu as item}
          <a href={item.address} class="font-semibold hover:text-gray-900  text-gray-600 dark:hover:text-gray-100 dark:text-gray-400 hidden lg:inline"
            >{item.label}</a
          >
        {/each}
        <a
          href="signup"
          class="inline-flex px-4 py-1 text-base font-medium text-white border border-transparent rounded-md shadow-sm bg-gradient-to-r from-purple-700 to-indigo-600 hover:from-purple-700 hover:to-indigo-700"
          >Create Account</a
        >
      </div>
    </nav>
  </div>
</div>
