<script context="module" lang="ts">
  import Text from '$components/Text.svelte'

  import supabase from '$logic/supabase'

  import type { LoadOutput } from '@sveltejs/kit'

  export const ssr = false

  export function load(): LoadOutput {
    const user = supabase.auth.user()
    if (!user) {
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

<div class="lane-container">
  <!-- BOX 1 -->
  <div class="card">
    <Text type="h2">Upcoming events</Text>
  </div>
  <!-- BOX 2 -->
  <div class="card" />
  <!-- BOX 3 -->
  <div class="card" />
</div>
