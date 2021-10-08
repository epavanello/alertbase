<script lang="ts">
  import Alertbase from '$components/Alertbase.svelte'
  import supabase from '$logic/supabase'
  import type { User } from '@supabase/supabase-js'

  let user: User | null | undefined = supabase.auth.user()

  supabase.auth.onAuthStateChange((_, s) => {
    user = s?.user
    console.log(user)
  })

  const menu: { label: string; address: string; show: 'always' | 'anonimous' | 'logged' }[] = [
    { label: 'Home', address: '/', show: 'always' },
    { label: 'Pricing', address: '/pricing', show: 'always' },
    { label: 'Features', address: '/features', show: 'always' },
    { label: 'Contact Us', address: '/contact', show: 'always' },
    { label: 'Logout', address: '/logout', show: 'logged' },
    { label: 'Login', address: '/login', show: 'anonimous' }
  ]
</script>

<div class="relative z-20 pb-8 sm:pb-8 lg:w-full">
  <div class="relative pt-4 md:pt-6 px-4 sm:px-6 lg:px-8">
    <nav class="relative flex items-center justify-between sm:h-10 lg:justify-between">
      <!--Logo-->
      <Alertbase />
      <!--Buttons-->
      <div class="md:ml-10 md:pr-4 md:space-x-8">
        {#each menu as item}
          {#if item.show == 'always' || (item.show == 'logged' && user) || (item.show == 'anonimous' && !user)}
            <a
              href={item.address}
              class="font-semibold hover:text-gray-900  text-gray-600 dark:hover:text-gray-100 dark:text-gray-400 inline"
              >{item.label}</a
            >
          {/if}
        {/each}
        {#if user}
          <a href="app" class="button primary">Launch App</a>
        {:else}
          <a href="signup" class="button primary">Create Account</a>
        {/if}
      </div>
    </nav>
  </div>
</div>
