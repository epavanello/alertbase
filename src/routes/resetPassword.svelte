<script lang="ts">
  import supabase, { user } from '$logic/supabase'
  import { goto } from '$app/navigation'
  import Alert from '$components/Alert.svelte'
  let email = ''
  let password = ''
  let error: Error | null = null
  let done = false

  let setPassword = false
  let accessToken = ''

  function init() {
    let urlSearch = new URLSearchParams(window.location.hash.substr(1))
    if (urlSearch.has('access_token')) {
      setPassword = true
      accessToken = urlSearch.get('access_token')!
    }
  }
  init()

  async function reset() {
    ;({ error } = await supabase.auth.api.resetPasswordForEmail(email))
    done = !error
  }
  async function update() {
    ;({ error } = await supabase.auth.api.updateUser(accessToken, { password }))
    goto('/login')
  }
</script>

<form class="mt-16 card w-96 flex flex-col gap-4">
  <h2 class="text-center">Reset your password</h2>
  {#if setPassword}
    <input type="password" bind:value={password} placeholder="Enter your new password" />
    <button type="button" class="primary text-center" on:click={update}>Update</button>
  {:else}
    <input type="text" bind:value={email} placeholder="Enter your email" />
    <button type="button" class="primary text-center" on:click={reset}>Reset</button>
  {/if}
  <Alert show={!!error} message={error?.message} on:close={() => (error = null)} />
  <Alert show={done} message="Reset request sent" on:close={() => (error = null)} type="info" />
</form>
