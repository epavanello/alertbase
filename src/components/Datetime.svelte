<script lang="ts">
  import dayjs from 'dayjs'
  import Input from './Input.svelte'
  export let date: Date | null = null
  export let label: string
  export let id: string

  let internal: string

  const input = (x: Date | null) => {
    internal = x == null ? '' : dayjs(x).add(dayjs().utcOffset(), 'minute').toISOString().substr(0, 16)
  }
  const output = (x: string) => {
    date = x != '' ? new Date(Date.parse(x)) : null
  }

  $: input(date)
  $: output(internal)
</script>

<Input {id} {label} type="datetime-local" bind:value={internal} placeholder="Click to select a date" />
