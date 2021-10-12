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
  let email = ''
  let password = ''
  let error: Error | null = null
  import { goto } from '$app/navigation'
  import Alert from '$components/Alert.svelte'
  import { store } from '$logic/store'
  import { setLoginMessage } from '$logic/slices/uiSlice'

  async function signup() {
    ;({ error } = await supabase.auth.signUp({ email, password }))
    if (!error) {
      store.dispatch(setLoginMessage('Registration done, check your email.'))
      goto('/login')
    }
  }
</script>

<form class="mt-16 card w-96 flex flex-col gap-4" on:submit|preventDefault={signup}>
  <h2 class="text-center">Create an account</h2>
  <input type="text" bind:value={email} placeholder="Email" />
  <input type="password" bind:value={password} placeholder="Password" />
  <button type="submit" class="primary text-center" on:click={signup}>Signup</button>
  <Alert show={!!error} message={error?.message} on:close={() => (error = null)} />
</form>
