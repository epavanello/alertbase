<script context="module" lang="ts">
  import supabase from '$logic/supabase'
  import type { LoadOutput } from '@sveltejs/kit'

  export async function load(): Promise<LoadOutput> {
    await supabase.auth.signOut()
    return {
      status: 302,
      redirect: '/'
    }
  }
</script>
