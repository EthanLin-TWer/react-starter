import { createSlice } from '@reduxjs/toolkit'

export interface ContactState {
  loaded: boolean
}

const { actions, reducer } = createSlice({
  name: 'contact',
  initialState: {
    loaded: false,
  },
  reducers: {
    loaded(state: ContactState, action) {
      state.loaded = action.payload
    },
  },
})
export const { loaded } = actions
export default reducer
