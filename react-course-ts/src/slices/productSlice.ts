import { createSlice } from "@reduxjs/toolkit";
import { IProduct } from "../interface/product.interface";

const initialState = {
  isLoading: false,
  productList: [] as IProduct[],
  error: {},
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    fetchingProduct: (state) => {
      state.isLoading = true;
      state.error = {};
    },
    updateProductList: (state, { payload }) => {
      state.isLoading = false;
      state.productList = payload;
    },
    fetchingProductError: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
  },
});
export default productSlice.reducer;

const { fetchingProduct, updateProductList, fetchingProductError } =
  productSlice.actions;

  
