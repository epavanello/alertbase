<script>
  import Button from '$components/Button.svelte'
</script>

<svelte:head>
  <title>Welcome to Alertbase</title>
</svelte:head>

<atricle class="h-[400px] lg:h-[600px] flex flex-col justify-center items-center gap-2 sm:gap-6 lg:gap-12">
  <h1 class="text-center dark:text-white text-2xl sm:text-4xl lg:text-7xl font-extrabold">Welcome to Alertbase</h1>
  <p class="text-sm sm:text-2xl lg:text-3xl leading-6 text-center">
    Clean, powerful, and easy-to-use reminder-taking app.<br />
    Never miss your reminders again.
  </p>
  <div class="flex flex-row gap-4">
    <Button href="/features" primary>Learn more</Button>
    <Button href="/login">Start for free</Button>
  </div>
</atricle>
