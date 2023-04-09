import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IProduct } from "../interface/product.interface";
import axios, { AxiosError } from "axios";

const initialState = {
  isLoading: false,
  productList: [] as IProduct[],
  error: {} as AxiosError,
};

export interface PayloadAsyncAction {
  error: AxiosError;
  payload: IProduct[];
  type: string;
}

export const fetchProductList = createAsyncThunk<any>(
  "products/fetchProductList",
  async (args, { dispatch, getState }) => {
    return axios("https://dummyjson.com/products").then(
      (res) => res.data.products
    );
  }
);

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    fetchingProduct: (state) => {
      state.isLoading = true;
      state.error = {} as AxiosError;
    },
    updateProductList: (state, action: PayloadAction<IProduct[]>) => {
      state.isLoading = false;
      state.productList = action.payload;
    },
    fetchingProductError: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
  },
  extraReducers: {
    [fetchProductList.pending as any]: (state) => {
      state.isLoading = true;
    },
    [fetchProductList.fulfilled as any]: (
      state,
      action: PayloadAsyncAction
    ) => {
      state.productList = action.payload;
      state.isLoading = false;
    },
    [fetchProductList.rejected as any]: (state, action: PayloadAsyncAction) => {
      state.isLoading = true;
      state.error = action.error;
    },
  },
});
export default productsSlice.reducer;

export const { fetchingProduct, updateProductList, fetchingProductError } =
  productsSlice.actions;
