<script context="module" lang="ts">
  import type { LoadOutput } from '@sveltejs/kit'

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
  import Datetime from '$components/Datetime.svelte'
  import Icon from '$components/Icon.svelte'
  import supabase from '$logic/supabase'

  import type { PostgrestError } from '@supabase/postgrest-js'
  import dayjs from 'dayjs'
  import Input from '$components/Input.svelte'

  interface Row {
    text: string
    reminder_date: string
    id: number
    sent: boolean
  }

  let data: Row[] | null
  let error: PostgrestError | null

  $: reminders = data?.filter((reminder) => !reminder.sent) || []
  $: remindersSent = data?.filter((reminder) => reminder.sent) || []

  let newReminder = ''
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
    ;({ data, error } = await supabase.from<Row>('reminders').select().order('reminder_date', { ascending: false }))
  }

  async function deleteRow(id: number) {
    await supabase.from('reminders').delete().match({ id })
    loadData()
  }

  loadData()
</script>

<div class="lane-container">
  <!-- BOX 1 -->
  <div class="card">
    <h2 class="text-center">Add your reminder</h2>
    <Input id="reminder" type="text" bind:value={newReminder} label="Your reminder" />
    <Datetime label="Date" id="reminder-date" bind:date={reminderDate} />
    <button type="button" class="primary" on:click={addReminder}>Submit</button>

    {#if error}
      <p>{error.message}</p>
    {/if}
  </div>
  <!-- BOX 2 -->
  <div class="card">
    <h2 class="text-center">Future reminders</h2>
    <ul class="grid gap-2">
      {#each reminders || [] as { id, reminder_date, sent, text }}
        <li class="flex flex-row items-center gap-2">
          {text} - {dayjs(reminder_date).toDate().toLocaleString()}
          <Icon name="delete" on:click={() => deleteRow(id)} />
        </li>
      {/each}
    </ul>
  </div>
  <!-- BOX 3 -->
  <div class="card">
    <h2 class="text-center">Reminders sent</h2>
    <ul class="grid gap-2">
      {#each remindersSent || [] as { id, reminder_date, sent, text }}
        <li class="flex flex-row items-center gap-2">
          <span class="line-through">
            {text} - {dayjs(reminder_date).toDate().toLocaleString()}
          </span>
        </li>
      {/each}
    </ul>
  </div>
</div>
