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
  import Datetime from '$components/Datetime.svelte'
  import Icon from '$components/Icon.svelte'
  import supabase from '$logic/supabase'

  import type { PostgrestError } from '@supabase/postgrest-js'
  import dayjs from 'dayjs'
  import Input from '$components/Input.svelte'
  import Button from '$components/Button.svelte'

  interface Row {
    text: string
    reminder_date: string
    id: number
    sent: boolean
  }

  let data: Row[] | null
  let error: PostgrestError | null

  let newReminder = ''
  let reminderDate: Date | null = null

  $: reminders = data?.filter((reminder) => !reminder.sent) || []
  $: remindersSent = data?.filter((reminder) => reminder.sent) || []
  $: canSend = newReminder.trim().length > 0 && reminderDate != null

  async function addReminder() {
    if (canSend) {
      await supabase.from('reminders').insert({
        text: newReminder,
        reminder_date: reminderDate
      })
      newReminder = ''
      reminderDate = null
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
  <form class="card" on:submit|preventDefault={addReminder}>
    <h2 class="text-center">Add your reminder</h2>
    <Input id="reminder" label="Your reminder" mandatory type="text" bind:value={newReminder} />
    <Datetime id="reminder-date" label="Date" mandatory bind:date={reminderDate} />
    <Button type="submit" disabled={!canSend} primary>Submit</Button>

    {#if error}
      <p>{error.message}</p>
    {/if}
  </form>
  <!-- BOX 2 -->
  <div class="card">
    <h2 class="text-center">Future reminders</h2>
    <ul class="grid gap-2">
      {#each reminders || [] as { id, reminder_date, text }}
        <li class="w-full flex flex-row items-center justify-between gap-2">
          <p class="flex flex-col">
            <span class="text-lg">{text}</span>
            <span class="text-xs italic">{dayjs(reminder_date).toDate().toLocaleString()}</span>
          </p>
          <Icon name="delete" on:click={() => deleteRow(id)} />
        </li>
      {/each}
    </ul>
  </div>
  <!-- BOX 3 -->
  <div class="card">
    <h2 class="text-center">Reminders sent</h2>
    <ul class="grid gap-2">
      {#each remindersSent || [] as { reminder_date, text }}
        <li class="flex flex-col w-full">
          <span class="text-lg line-through">{text}</span>
          <span class="text-xs italic">{dayjs(reminder_date).toDate().toLocaleString()}</span>
        </li>
      {/each}
    </ul>
  </div>
</div>
