<script lang="ts">
  import 'virtual:windi.css'

  import Alertbase from '$components/Alertbase.svelte'
  import Icon from '$components/Icon.svelte'
  import Menu from '$components/app/Menu.svelte'

  let mobileMenuOpen = false
  const toggleMobileMenu = () => {
    mobileMenuOpen = !mobileMenuOpen
  }
</script>

<main class="h-screen relative">
  <div class="h-screen flex flex-col gap-2 lg:gap-0 lg:flex-row items-start justify-between">
    <!-- SIDE MENU -->
    <div class="hidden lg:block self-stretch relative w-80 mt-4 ml-4">
      <Menu sideView />
    </div>
    <div class="flex flex-col w-full p-2 space-y-2 md:p-4 md:space-y-4">
      <!-- ORIZZONTAL HEADER -->
      <header
        class="sticky top-0 w-full px-3 shadow-lg bg-white dark:bg-gray-700 h-16 rounded-2xl z-40 flex flex-row items-center justify-between"
      >
        <!-- HEADER CONTENT -->
        <div>
          <div class="block lg:hidden">
            <Alertbase />
          </div>
        </div>
        <div class="flex items-center">
          <a href="/app/profile" class="block relative">
            <Icon name="account_circle" noMargin />
          </a>
          <Icon class="block lg:hidden" name={mobileMenuOpen ? 'close' : 'menu'} on:click={toggleMobileMenu} noMargin />
        </div>
      </header>
      {#if mobileMenuOpen}
        <div class="block lg:hidden">
          <Menu />
        </div>
      {/if}
      <!-- CONTENT -->
      <slot />
    </div>
  </div>
</main>
