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
  let email = ''
  let password = ''
  let error: Error | null = null
  let done = false

  async function login() {
    error = null
    ;({ error } = await supabase.auth.api.resetPasswordForEmail(email))
    done = !error
  }
</script>

<form class="mt-16 card w-96 flex flex-col gap-4">
  <h2 class="text-center">Reset your password</h2>
  <input type="text" bind:value={email} placeholder="Email" />
  <button type="button" class="primary text-center" on:click={login}>Reset</button>
  <Alert show={!!error} message={error?.message} on:close={() => (error = null)} />
  <Alert show={done} message="" on:close={() => (error = null)} type="info" />
</form>
