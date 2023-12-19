import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface cityState {
    city: string
  }
  
  // Define the initial state using that type
  const initialState: cityState = {
    city: '',
  }

export const citySlice = createSlice({
    name: 'city',
    initialState,
    reducers:{
       changeCity: (state, action: PayloadAction<string>) => {
            state.city = action.payload
       }
    }
})

export default citySlice.reducer

export const {changeCity} = citySlice.actions