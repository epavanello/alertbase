import { createClient } from '@supabase/supabase-js'
import type { User } from '@supabase/supabase-js'
import { readable } from 'svelte/store'

const supabase = createClient('' + import.meta.env.VITE_SUPABASE_URL, '' + import.meta.env.VITE_SUPABASE_KEY)
export default supabase

const currentUser = supabase.auth.user()
console.log('Current user', currentUser)
export const user = readable<User | undefined | null>(currentUser, function start(set) {
  const { data: subscription } = supabase.auth.onAuthStateChange((e, s) => {
    console.log('State changed', e, s)
    if (e == 'SIGNED_IN' || e == 'USER_UPDATED') {
      set(s?.user)
    } else {
      set(null)
    }
  })

  return function stop() {
    subscription?.unsubscribe()
  }
})
