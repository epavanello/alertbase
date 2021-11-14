<script lang="ts">
  import Alertbase from '$components/Alertbase.svelte'
  import { user } from '$logic/supabase'
  import { page } from '$app/stores'
  import classNames from 'classnames'
  import Button from '$components/Button.svelte'

  const menu: { label: string; address: string; show: 'always' | 'anonimous' | 'logged' }[] = [
    { label: 'Home', address: '/', show: 'always' },
    { label: 'Pricing', address: '/pricing', show: 'always' },
    { label: 'Features', address: '/features', show: 'always' },
    { label: 'Contact Us', address: '/contact', show: 'always' },
    { label: 'Logout', address: '/logout', show: 'logged' },
    { label: 'Login', address: '/login', show: 'anonimous' }
  ]
</script>

<div class="relative py-4 md:py-6 px-4 sm:px-6 lg:px-8">
  <nav class="relative flex flex-col md:flex-row gap-8 items-center justify-between lg:justify-between">
    <!--Logo-->
    <Alertbase />
    <!--Buttons-->
    <div class="flex flex-row justify-center gap-x-8 items-center flex-wrap md:flex-nowrap gap-y-2">
      {#each menu as item}
        {#if item.show == 'always' || (item.show == 'logged' && $user) || (item.show == 'anonimous' && !$user)}
          <a
            href={item.address}
            class={classNames(
              'font-semibold inline',
              { 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100': $page.path != item.address },
              { 'text-gray-800 dark:text-gray-200': $page.path == item.address },

            )}>{item.label}</a
          >
        {/if}
      {/each}
      {#if $user}
        <Button primary href="app">Launch App</Button>
      {:else}
        <Button primary href="signup">Create Account</Button>
      {/if}
    </div>
  </nav>
</div>
