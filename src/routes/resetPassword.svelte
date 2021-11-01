<script lang="ts">
  import supabase, { user } from '$logic/supabase'
  import Alert from '$components/Alert.svelte'
  import Input from '$components/Input.svelte'
  import Button from '$components/Button.svelte'
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

<form class="mt-16 card w-full sm:w-1/2 xl:w-1/3 mx-auto">
  <h2 class="title">Reset your password</h2>
  {#if $user}
    <Input id="password" type="password" bind:value={password} label="Enter your new password" />
    <Button primary on:click={update} disabled={password.length == 0}>Update</Button>
  {:else}
    <Input id="email" type="text" bind:value={email} label="Enter your email" />
    <Button primary on:click={reset} disabled={email.length == 0}>Reset</Button>
  {/if}
  <Alert show={!!error} message={error?.message} on:close={() => (error = null)} />
  <Alert show={resetSent} message="Reset request sent" on:close={() => (resetSent = false)} type="info" />
  <Alert show={passwordChanged} message="Password changed" on:close={() => (passwordChanged = false)} type="info" />
</form>
