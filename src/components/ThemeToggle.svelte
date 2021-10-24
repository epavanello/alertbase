<script lang="ts">
  import Icon from './Icon.svelte'

  let isDark =
    localStorage.theme === 'dark' ||
    (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)

  $: if (isDark) {
    document.querySelector('html')?.classList.add('dark')
  } else {
    document.querySelector('html')?.classList.remove('dark')
  }

  function handleToggleActive() {
    setTheme(!isDark)
  }

  function setTheme(dark: boolean) {
    isDark = dark
    localStorage.setItem('theme', dark ? 'dark' : 'day')
  }
</script>

<div class="flex justify-center items-center">
  <Icon name="light_mode" outlined noMargin on:click={() => setTheme(false)} noHover disabled={!isDark} />
  <!-- Switch Container -->
  <div
    class="transition duration-200 w-14 h-7 flex items-center rounded-full px-1 cursor-pointer"
    class:bg-blue-700={isDark}
    class:bg-gray-300={!isDark}
    on:click={handleToggleActive}
  >
    <!-- Switch -->
    <div class="bg-white w-5 h-5 rounded-full shadow-md transform" class:translate-x-7={isDark} />
  </div>
  <Icon name="nightlight" outlined noMargin on:click={() => setTheme(true)} noHover disabled={isDark} />
</div>
