<script>
  import Text from '$components/Text.svelte'
</script>

<svelte:head>
  <title>Alertbase | Pricing</title>
</svelte:head>

<atricle class="flex flex-col justify-center items-center gap-2 sm:gap-6 lg:gap-12">
  <Text type="h1" class="my-8">Pricing</Text>

  <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
    <!-- BOX 1 -->
    <div class="card gradient">
      <Text type="h2">Basic</Text>
      <h3 class="title-3 font-normal"><span class="font-bold text-4xl">$0</span>/month</h3>
      <h4 class="text-lg">Plan include :</h4>
      <ul class="list-circle ml-4">
        <li>Unlimited reminders</li>
        <li>Unlimited mail sent</li>
        <li>Timeline view</li>
        <li>Internet calendar integration - iCal</li>
      </ul>
    </div>
    <!-- BOX 2 -->
    <div class="card">
      <Text type="h2">Pro</Text>
      <h3 class="title-3 font-normal">Coming soon...</h3>
    </div>
    <!-- BOX 3 -->
    <div class="card">
      <Text type="h2">Enterprise</Text>
      <h3 class="title-3 font-normal">Contact us</h3>
    </div>
  </div>
</atricle>
