import { configureStore } from '@reduxjs/toolkit'
import type { Unsubscribe } from '@reduxjs/toolkit'
import ui from '$logic/slices/uiSlice'

export const reduxStore = configureStore({
  reducer: {
    ui
  }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof reduxStore.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof reduxStore.dispatch

export const store = {
  subscribe(fn: (state: RootState) => void): Unsubscribe {
    fn(reduxStore.getState())
    return reduxStore.subscribe(() => {
      fn(reduxStore.getState())
    })
  },
  dispatch: reduxStore.dispatch
}
