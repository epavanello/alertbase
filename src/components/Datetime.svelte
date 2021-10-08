<script lang="ts">
  import dayjs from 'dayjs'
  export let date: Date | null = null

  let internal: string

  const input = (x: Date | null) => {
    internal = x == null ? '' : dayjs(x).add(dayjs().utcOffset(), 'minute').toISOString().substr(0, 16)
  }
  const output = (x: string) => {
    date = x != '' ? new Date(Date.parse(x)) : null
  }

  $: input(date)
  $: output(internal)

  $: console.log(date?.toLocaleString())
</script>

<input type="datetime-local" bind:value={internal} />
