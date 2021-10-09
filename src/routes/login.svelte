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
  let email = ''
  let password = ''

  async function login() {
    const { error } = await supabase.auth.signIn({ email, password })
    if (error) alert(error.message)
    else goto('/app')
  }
</script>

<form class="mt-16 card w-96 flex flex-col gap-4">
  <h2 class="text-center">Sign in to your account</h2>
  <input type="text" bind:value={email} placeholder="Email" />
  <input type="password" bind:value={password} placeholder="Password" />
  <div class="flex flex-row justify-between">
    <label><input type="checkbox" /> Remember me</label><a href="">Forgot your password?</a>
  </div>
  <button type="button" class="primary text-center" on:click={login}>Login</button>
</form>
