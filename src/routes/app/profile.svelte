<script lang="ts">
  import Input from '$components/Input.svelte'

  import supabase from '$logic/supabase'

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

<div class="w-1/3 mx-auto">
  <div class="card">
    <h2 class="text-center">Your profile</h2>
    <Input id="reminder-email" label="Send reminders to" mandatory bind:value={remindersDestination} />
    <button on:click={updateConfig} disabled={originalDestination != remindersDestination}>Update</button>
  </div>
</div>
