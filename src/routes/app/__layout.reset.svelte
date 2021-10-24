<script lang="ts">
  import '$styles/tailwind-output.css'

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
    <div class="flex flex-col w-full pl-0 md:p-4 md:space-y-4">
      <!-- ORIZZONTAL HEADER -->
      <header class="sticky top-0 w-full shadow-lg bg-white dark:bg-gray-700 items-center h-16 rounded-2xl z-40">
        <div class="relative z-20 flex flex-col justify-center h-full px-3 mx-auto flex-center">
          <div class="relative items-center pl-1 flex w-full lg:max-w-68 sm:pr-2 sm:ml-0">
            <div class="relative p-1 flex flex-row items-center justify-between w-full ml-5 mr-4 sm:mr-0 sm:right-auto">
              <!-- HEADER CONTENT -->
              <div>
                <div class="block lg:hidden">
                  <Alertbase />
                </div>
              </div>
              <div class="flex items-center">
                <a href="/app/profile" class="block relative">
                  <Icon name="account_circle" />
                </a>
                <Icon class="block lg:hidden" name="menu" on:click={toggleMobileMenu} />
              </div>
            </div>
          </div>
        </div>
      </header>
      <div class="block lg:hidden">
        <Menu />
      </div>
      <!-- CONTENT -->
      <div class="py-2 px-2 lg:p-0">
        <slot />
      </div>
    </div>
  </div>
</main>
