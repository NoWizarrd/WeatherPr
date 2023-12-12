import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
    actionsCount: 0,
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
      state.actionsCount++;
    },
    decrement: (state) => {
      state.value -= 1;
      state.actionsCount++;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
      state.actionsCount++;
    },
    clear: (state) => {
      state.value = 0;
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount, clear } =
  counterSlice.actions;

export default counterSlice.reducer;
