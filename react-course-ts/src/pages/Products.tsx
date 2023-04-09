import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useAppDispatch } from "../hooks";
import { fetchProductList } from "../slices/productsSlice";
import { RootState } from "../store";
import { slugify } from "../utils/utility";

const Products = () => {
  const isLoading = useSelector((state: RootState) => state.products.isLoading);
  const products = useSelector((state: RootState) => state.products.productList);
  // const error = useSelector((state: RootState) => state.products.error);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchProductList());
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
                    <Link
                      to={`/product/${product.id}/${slugify(product.title)}`}
                    >
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

export default Products;
