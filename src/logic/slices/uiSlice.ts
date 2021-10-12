import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '$logic/store'

interface UiState {
  loginMessage: string
}

const initialState: UiState = {
  loginMessage: ''
}

export const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    setLoginMessage: (state, action: PayloadAction<string>) => {
      state.loginMessage = action.payload
    }
  }
})

export const { setLoginMessage } = uiSlice.actions

export default uiSlice.reducer
