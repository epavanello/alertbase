<script context="module">
  export async function load() {
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
  import Datetime from '$components/Datetime.svelte'

  import supabase from '$logic/supabase'
  import type { PostgrestError } from '@supabase/postgrest-js'
  import dayjs from 'dayjs'
  let data: any[] | null
  let error: PostgrestError | null

  let newReminder: string = ''
  let reminderDate: Date | undefined
  async function addReminder() {
    if (newReminder.trim().length > 0) {
      await supabase.from('reminders').insert({
        text: newReminder,
        reminder_date: reminderDate
      })
      newReminder = ''
      loadData()
    }
  }

  async function loadData() {
    ;({ data, error } = await supabase.from('reminders').select().order('reminder_date', { ascending: false }))
    console.log(data)
  }

  async function deleteRow(id: number) {
    await supabase.from('reminders').delete().match({ id })
    loadData()
  }

  loadData()

  let remindersDestination: string = ''

  async function loadConfig() {
    const { body, error } = await supabase.from('configuration').select()
    if (error) {
      alert(error.message)
    }
    if (body?.length == 1) {
      remindersDestination = body[0].email_notification
    }
  }
  async function updateConfig() {
    await supabase.from('configuration').upsert({ email_notification: remindersDestination }, { onConflict: 'user_id' })
  }
  loadConfig()
</script>

<input type="text" bind:value={newReminder} placeholder="Remind me" />
<Datetime bind:date={reminderDate} />
<button type="button" class="primary" on:click={addReminder}>Submit</button>

<div class="mt-4">
  <label>Send reminders to: <input type="text" bind:value={remindersDestination} /></label>
  <button on:click={updateConfig}>Update</button>
</div>

<div class="grid gap-2 mt-4">
  {#each data || [] as row}
    <div>
      {row.text} - {dayjs(row.reminder_date).toDate().toLocaleString()}
      <input type="checkbox" readonly disabled checked={row.sent} />
      <button on:click={() => deleteRow(row.id)}>Delete</button>
    </div>
  {/each}
</div>

{#if error}
  <p>{error.message}</p>
{/if}
