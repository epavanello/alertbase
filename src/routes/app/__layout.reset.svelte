<script lang="ts">
  import '$styles/tailwind-output.css'

  import Alertbase from '$components/Alertbase.svelte'
  import MenuItem from '$components/app/MenuItem.svelte'
  import Icon from '$components/Icon.svelte'
  import type { IconNames } from '$components/Icon.svelte'
  import { page } from '$app/stores'
  import ThemeToggle from '$components/ThemeToggle.svelte'

  const appMenu: { label: string; path: string; icon: IconNames }[] = [
    { label: 'Dashboard', path: '/app', icon: 'space_dashboard' },
    { label: 'Reminders', path: '/app/reminders', icon: 'date_range' },
    { label: 'Profile', path: '/app/profile', icon: 'account_circle' }
  ]

  $: console.log($page.path)
</script>

<main class="h-screen overflow-hidden relative">
  <div class="flex items-start justify-between">
    <!-- SIDE MENU -->
    <div class="h-screen hidden lg:block my-4 ml-4 shadow-lg relative w-80">
      <div class="bg-white h-full rounded-2xl dark:bg-gray-700">
        <div class="flex items-center justify-center pt-6">
          <a href="/">
            <Alertbase />
          </a>
        </div>
        <nav class="mt-6">
          <div>
            {#each appMenu as { label, icon, path }}
              <MenuItem selected={$page.path == path} {label} {icon} {path} />
            {/each}
          </div>
        </nav>
      </div>
    </div>
    <div class="flex flex-col w-full pl-0 md:p-4 md:space-y-4">
      <header class="w-full shadow-lg bg-white dark:bg-gray-700 items-center h-16 rounded-2xl z-40">
        <div class="relative z-20 flex flex-col justify-center h-full px-3 mx-auto flex-center">
          <div class="relative items-center pl-1 flex w-full lg:max-w-68 sm:pr-2 sm:ml-0">
            <!-- ORIZZONTAL HEADER -->
            <div class="relative p-1 flex flex-row items-center justify-end w-full ml-5 mr-4 sm:mr-0 sm:right-auto">
              <ThemeToggle />
              <a href="/app/profile" class="block relative">
                <Icon name="account_circle" />
              </a>
            </div>
          </div>
        </div>
      </header>
      <!-- CONTENT -->
      <div class="overflow-auto h-screen pb-24 pt-2 pr-2 pl-2 md:pt-0 md:pr-0 md:pl-0">
        <slot />
      </div>
    </div>
  </div>
</main>
