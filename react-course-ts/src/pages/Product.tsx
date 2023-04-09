import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import { RootState } from "../store";
import { useAppDispatch } from "../hooks";
import { fetchProductDetail } from "../slices/productSlice";
import ProductCarousel from "../features/product/ProductCarousel";

const Product = () => {
  const { id } = useParams();
  const isLoading = useSelector((state: RootState) => state.product.isLoading);
  const product = useSelector((state: RootState) => state.product.product);

  const dispatch = useAppDispatch();
  useEffect(() => {
    if (id) {
      dispatch(fetchProductDetail({ id }));
    }
  }, [id]);

  return (
    <>
      <div className="row">
        <div className="col-md-6 col-xs-12">
          <ProductCarousel />
        </div>
        <div className="col-md-6 col-xs-12">
          <h2 className="product-name">{product.title}</h2>
          <p className="small">{product.brand}</p>
          <br />
          <p>{product.description}</p>
          <div className="row">
            <div className="col">{product.price}</div>
            <div className="col">
              <button className="btn btn-primary">Add to cart</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
