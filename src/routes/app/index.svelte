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
  let data: any[] | null
  let error: PostgrestError | null

  let newReminder: string = ''
  let reminderDate: Date | undefined
  async function addReminder() {
    if (newReminder.trim().length > 0) {
      await supabase.from('reminders').insert({ text: newReminder, reminder_date: reminderDate })
      newReminder = ''
      loadData()
    }
  }

  async function loadData() {
    ;({ data, error } = await supabase.from('reminders').select())
  }

  async function deleteRow(id: number) {
    await supabase.from('reminders').delete().match({ id })
    loadData()
  }

  loadData()
</script>

<input type="text" bind:value={newReminder} />
<Datetime bind:date={reminderDate} />
<button type="button" on:click={addReminder}>Submit</button>

{#each data || [] as row}
  <p>{row.text} - {row.reminder_date} <button on:click={() => deleteRow(row.id)}>Delete</button></p>
{/each}

{#if error}
  <p>{error.message}</p>
{/if}
