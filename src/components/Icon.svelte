<script lang="ts">
  import cn from 'classnames'
  export let name: string
  export let outlined = false
  export let filled = false
  export let noMargin = false
  export let size: 'small' | 'normal' | 'big' = 'normal'

  let classes = ''
  export { classes as class }
</script>

<span
  class={cn(classes, 'material-icons p-2 hover:bg-white/50 dark:hover:bg-black/25 rounded cursor-pointer leading-none')}
  class:m-2={!noMargin}
  class:material-icons-filled={filled}
  class:material-icons-outlined={outlined}
  class:text-lg={size == 'small'}
  class:text-5xl={size == 'big'}
  on:click>{name}</span
>
