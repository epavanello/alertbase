<script lang="ts">
  import supabase, { user } from '$logic/supabase'
  import Alert from '$components/Alert.svelte'
  import Input from '$components/Input.svelte'
  let email = ''
  let password = ''
  let error: Error | null = null
  let resetSent = false
  let passwordChanged = false

  async function reset() {
    ;({ error } = await supabase.auth.api.resetPasswordForEmail(email))
    resetSent = !error
  }
  async function update() {
    ;({ error } = await supabase.auth.update({ password }))
    if (!error) {
      passwordChanged = true
      password = ''
    }
  }
</script>

<form class="mt-16 card w-96 flex flex-col gap-4">
  <h2 class="text-center">Reset your password</h2>
  {#if $user}
    <Input id="password" type="password" bind:value={password} label="Enter your new password" />
    <button type="button" class="primary text-center" on:click={update}>Update</button>
  {:else}
    <Input id="email" type="text" bind:value={email} label="Enter your email" />
    <button type="button" class="primary text-center" on:click={reset}>Reset</button>
  {/if}
  <Alert show={!!error} message={error?.message} on:close={() => (error = null)} />
  <Alert show={resetSent} message="Reset request sent" on:close={() => (resetSent = false)} type="info" />
  <Alert show={passwordChanged} message="Password changed" on:close={() => (passwordChanged = false)} type="info" />
</form>
