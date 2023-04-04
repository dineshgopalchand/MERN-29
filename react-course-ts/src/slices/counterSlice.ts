import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};
const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    reset: () => {
      return initialState;
    },
    increment: (state) => {
      state.value++;
    },
    decrement: (state) => {
      state.value--;
    },
    incrementByAmount: (state, { payload }) => {
      state.value += payload;
    },
    decrementByAmount: (state, { payload }) => {
      state.value -= payload;
    },
  },
});

export default counterSlice.reducer;
export const {
  reset,
  increment,
  decrement,
  incrementByAmount,
  decrementByAmount,
} = counterSlice.actions;
