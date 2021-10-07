<script context="module">
  import supabase from '$logic/supabase'

  export async function load() {
    await supabase.auth.signOut()
    return {
      status: 302,
      redirect: '/'
    }
  }
</script>
