<script lang="ts">
  import classNames from 'classnames'
  import MenuItem from '$components/app/MenuItem.svelte'
  import type { IconNames } from '$components/Icon.svelte'
  import Alertbase from '$components/Alertbase.svelte'
  import ThemeToggle from '$components/ThemeToggle.svelte'
  import { page } from '$app/stores'

  const appMenu: { label: string; path: string; icon: IconNames }[] = [
    { label: 'Dashboard', path: '/app', icon: 'space_dashboard' },
    { label: 'Reminders', path: '/app/reminders', icon: 'date_range' },
    { label: 'Profile', path: '/app/profile', icon: 'account_circle' }
  ]

  export let sideView = false
</script>

<div
  class={classNames('shadow-lg flex flex-col py-3 bg-white h-full rounded-2xl dark:bg-gray-700 relative', {
    'rounded-b-none gap-6': sideView,
    'gap-2': sideView
  })}
>
  <div class="hidden lg:flex items-center justify-center pt-6">
    <Alertbase />
  </div>
  <nav class="flex-1">
    <div>
      {#each appMenu as { label, icon, path }}
        <MenuItem selected={$page.path == path} {label} {icon} {path} />
      {/each}
    </div>
  </nav>
  <div
    class={classNames({
      'absolute bottom-3 right-8': sideView,
      'pt-3 flex flex-row-reverse px-3': !sideView
    })}
  >
    <ThemeToggle />
  </div>
</div>
