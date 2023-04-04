import React, { useEffect, useState } from "react";
import { useEffectOnce } from "usehooks-ts";
import { IProduct } from "../interface/product.interface";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchingProduct, fetchingProductError, updateProductList } from "../slices/productSlice";
import { RootState } from "../store";

const Product = () => {
  const isLoading = useSelector((state: RootState) => state.product.isLoading);
  const products = useSelector((state: RootState) => state.product.productList);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchingProduct());
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .catch(e=>{
        console.log(e);
        dispatch(fetchingProductError(e));
      })
      .then((json) => {
        dispatch(updateProductList(json.products as IProduct[]));
      })
  }, []);
  return (
    <div className="container">
      <h2>Product list</h2>
      {isLoading ? (
        <p>Loading.....</p>
      ) : (
        <div className="row">
          {products.map((product) => {
            return (
              <div className="col-xs-12 col-sm-2 col-md-3" key={product.id}>
                <div className="card">
                  <img
                    className="card-img-top"
                    src={product.thumbnail}
                    alt={product.title}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{product.title}</h5>
                    <p className="card-text">{product.description}</p>
                    <Link to={`/product/${product.id}/${product.title}`}>
                      View Product
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Product;
