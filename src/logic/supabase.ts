import { createClient } from '@supabase/supabase-js'
import type { User } from '@supabase/supabase-js'
import { readable } from 'svelte/store'

const supabase = createClient('' + import.meta.env.VITE_SUPABASE_URL, '' + import.meta.env.VITE_SUPABASE_KEY)
export default supabase

export const user = readable<User | undefined | null>(supabase.auth.user(), function start(set) {
  const { data: subscription } = supabase.auth.onAuthStateChange((e, s) => {
    if (e == 'SIGNED_IN') {
      set(s?.user)
    } else {
      set(null)
    }
  })

  return function stop() {
    subscription?.unsubscribe()
  }
})
