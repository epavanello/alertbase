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
  import type { LoadOutput } from '@sveltejs/kit'
  import Input from '$components/Input.svelte'

  let email = ''
  let password = ''
  let error: Error | null = null

  async function signup() {
    ;({ error } = await supabase.auth.signUp({ email, password }))
    if (!error) {
      store.dispatch(setLoginMessage('Registration done, check your email.'))
      goto('/login')
    }
  }
</script>

<form class="mt-16 card w-1/3 mx-auto" on:submit|preventDefault={signup}>
  <h2 class="text-center">Create an account</h2>

  <Input id="email" mandatory type="text" bind:value={email} label="Email" />
  <Input id="password" mandatory type="password" bind:value={password} label="Password" />
  <button type="submit" class="primary text-center" on:click={signup}>Signup</button>

  <Alert show={!!error} message={error?.message} on:close={() => (error = null)} />
</form>
