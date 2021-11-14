<script context="module" lang="ts">
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

<script lang="ts">
  import Button from '$components/Button.svelte'

  import Input from '$components/Input.svelte'

  import supabase from '$logic/supabase'
import Text from '$components/Text.svelte';

  let remindersDestination = ''
  let originalDestination = ''

  async function loadConfig() {
    const { body, error } = await supabase.from('configuration').select()
    if (error) {
      alert(error.message)
    }
    if (body?.length == 1) {
      remindersDestination = body[0].email_notification
      originalDestination = remindersDestination
    }
  }
  async function updateConfig() {
    await supabase.from('configuration').upsert({ email_notification: remindersDestination }, { onConflict: 'user_id' })
  }
  loadConfig()
</script>

<div class="w-full sm:w-1/2 xl:w-1/3 mx-auto">
  <div class="card">
    <Text type="h2">Your profile</Text>
    <Input id="reminder-email" label="Send reminders to" mandatory bind:value={remindersDestination} />
    <Button on:click={updateConfig} disabled={originalDestination == remindersDestination}>Update</Button>
  </div>
</div>
