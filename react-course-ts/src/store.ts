import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./slices/productsSlice";
import counterReducer from "./slices/counterSlice";
import productReducer from "./slices/productSlice";

export const store = configureStore({
  reducer: {
    products: productsReducer,
    counter: counterReducer,
    product: productReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
