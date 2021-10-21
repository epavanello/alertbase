<script context="module">
  import supabase from '$logic/supabase'

  export async function load() {
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
  import { goto } from '$app/navigation'
  import Alert from '$components/Alert.svelte'
  import { store } from '$logic/store'
  import { setLoginMessage } from '$logic/slices/uiSlice'
  import { onMount } from 'svelte'

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
  <input type="text" bind:value={email} placeholder="Email" />
  <input type="password" bind:value={password} placeholder="Password" />
  <div class="flex flex-row justify-end">
    <!-- <label><input type="checkbox" /> Remember me</label> -->
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
