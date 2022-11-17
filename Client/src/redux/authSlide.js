import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  token: "",
}

export const authSlide = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setToken: (state, action) => {
        state.token = action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { setToken } = authSlide.actions

export default authSlide.reducer