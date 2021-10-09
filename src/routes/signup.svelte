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
  import { goto } from '$app/navigation'

  async function signup() {
    const { error } = await supabase.auth.signUp({ email, password })
    if (error) alert(error.message)
    else goto('/login')
  }
</script>

<form class="mt-16 card w-96 flex flex-col gap-4">
  <h2 class="text-center">Create an account</h2>
  <input type="text" bind:value={email} placeholder="Email" />
  <input type="password" bind:value={password} placeholder="Password" />
  <button type="button" class="primary text-center" on:click={signup}>Signup</button>
</form>
