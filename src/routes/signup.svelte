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
  import Button from '$components/Button.svelte'

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

<svelte:head>
  <title>Alertbase | Signup</title>
</svelte:head>

<form class="mt-16 card w-full sm:w-1/2 xl:w-1/3 mx-auto" on:submit|preventDefault={signup}>
  <h2 class="title">Create an account</h2>

  <Input id="email" mandatory type="text" bind:value={email} label="Email" />
  <Input id="password" mandatory type="password" bind:value={password} label="Password" />
  <Button type="submit" primary on:click={signup} disabled={email.length == 0 || password.length == 0}>Signup</Button>

  <Alert show={!!error} message={error?.message} on:close={() => (error = null)} />
</form>
