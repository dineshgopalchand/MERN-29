import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IProduct } from "../interface/product.interface";
import axios, { AxiosError } from "axios";

const initialState = {
  isLoading: false,
  product: {} as IProduct,
  error: {} as AxiosError,
};

export interface PayloadAsyncAction {
  error: AxiosError;
  payload: IProduct;
  type: string;
}

export interface fetchProductArg {
  id: string;
}

export const fetchProductDetail = createAsyncThunk<any, fetchProductArg>(
  "product/fetchProduct",
  async (args, { dispatch, getState }) => {
    // console.log(args);
    return axios(`https://dummyjson.com/products/${args.id}`).then((res) => res.data);
  }
);

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    fetchingProductDetails: (state) => {
      state.isLoading = true;
      state.error = {} as AxiosError;
    },
    updateProductDetail: (state, action: PayloadAction<IProduct>) => {
      state.isLoading = false;
      state.product = action.payload;
    },
    fetchingProductError: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
  },
  extraReducers: {
    [fetchProductDetail.pending as any]: (state) => {
      state.isLoading = true;
    },
    [fetchProductDetail.fulfilled as any]: (
      state,
      action: PayloadAsyncAction
    ) => {
      state.product = action.payload;
      state.isLoading = false;
    },
    [fetchProductDetail.rejected as any]: (
      state,
      action: PayloadAsyncAction
    ) => {
      state.isLoading = true;
      state.error = action.error;
    },
  },
});
export default productSlice.reducer;

export const {
  fetchingProductDetails,
  updateProductDetail,
  fetchingProductError,
} = productSlice.actions;
