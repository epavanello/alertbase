<script lang="ts">
  export let date = new Date()

  let internal: string

  const input = (x: Date) => {
    internal = x.toISOString().substr(0, 16)
  }
  const output = (x: string) => {
    date = new Date(Date.parse(x)) 
  }

  $: input(date)
  $: output(internal)

  $: console.log(date.toLocaleString())
</script>

<input type="datetime-local" bind:value={internal} />
