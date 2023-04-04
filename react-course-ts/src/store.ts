import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./slices/productSlice";
import counterReducer from "./slices/counterSlice";

export const store = configureStore({
  reducer: {
    product: productReducer,
    counter: counterReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
