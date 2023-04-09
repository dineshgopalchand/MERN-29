import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import { RootState } from "../store";
import { useAppDispatch } from "../hooks";
import { fetchProductDetail } from "../slices/productSlice";

const Product = () => {
  const { id } = useParams();
  const isLoading = useSelector((state: RootState) => state.product.isLoading);
  const product = useSelector((state: RootState) => state.product);

  const dispatch = useAppDispatch();
  useEffect(() => {
    if (id) {
      dispatch(fetchProductDetail({ id }));
    }
  }, [id]);

  return (
    <>
      <div>Product</div>
      {JSON.stringify(product)}
    </>
  );
};

export default Product;
