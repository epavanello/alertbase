<script context="module" lang="ts">
  export function load(): LoadOutput {
    const user = supabase.auth.user()
    if (user) {
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
  import supabase from '$logic/supabase'
  import { goto } from '$app/navigation'
  import Alert from '$components/Alert.svelte'
  import { store } from '$logic/store'
  import { setLoginMessage } from '$logic/slices/uiSlice'
  import { onMount } from 'svelte'
  import type { LoadOutput } from '@sveltejs/kit'
  import Input from '$components/Input.svelte'

  let email = ''
  let password = ''
  let error: Error | null = null

  onMount(() => () => {
    store.dispatch(setLoginMessage(''))
  })

  async function login() {
    console.log('Login')
    error = null
    ;({ error } = await supabase.auth.signIn({ email, password }))
    if (!error) goto('/app')
  }
</script>

<form class="mt-16 card w-96 flex flex-col gap-4" on:submit|preventDefault={login}>
  <h2 class="text-center">Sign in to your account</h2>
  <Input id="email" mandatory type="text" bind:value={email} label="Email" />
  <Input id="password" mandatory type="password" bind:value={password} label="Password" />
  <div class="flex flex-row justify-end">
    <a href="/resetPassword" class="underline text-xs" tabindex="-1">Forgot your password?</a>
  </div>
  <button type="submit" class="primary text-center" on:click={login}>Login</button>
  <Alert show={!!error} message={error?.message} on:close={() => (error = null)} />
  <Alert
    show={!!$store.ui.loginMessage}
    message={$store.ui.loginMessage}
    on:close={() => {
      store.dispatch(setLoginMessage(''))
    }}
    type="info"
  />
</form>
