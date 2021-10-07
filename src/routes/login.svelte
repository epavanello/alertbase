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

<form>
  <input type="text" bind:value={email} placeholder="Email" />
  <input type="password" bind:value={password} placeholder="Password" />
  <button type="button" on:click={login}>Login</button>
</form>
