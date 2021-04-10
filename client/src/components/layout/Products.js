import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../actions/productActions";
import { Link, Route } from "react-router-dom";
import Loader from "./Loader";
import Pagination from "react-js-pagination";
import Search from "./Search";

const Products = ({ match }) => {
  const dispatch = useDispatch();
  //Pull the products from the state
  const {
    loading,
    products,
    error,
    productsCounter,
    resultsPerPage,
  } = useSelector((state) => state.products);
  console.log(products);

  const keyword = match.params.keyword;

  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    dispatch(getProducts(keyword, currentPage));
  }, [dispatch, keyword, currentPage]);

  function setCurrentPageNu(pageNumber) {
    setCurrentPage(pageNumber);
  }
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <div className="container container-fluid">
            <h1 id="products_heading">Latest Products</h1>
            <div>
              <Route render={(history) => <Search history={history} />} />
            </div>
            <section id="products" className="container mt-5">
              <div className="row">
                {products &&
                  products.map((product) => (
                    <div
                      className="col-sm-12 col-md-6 col-lg-3 my-3"
                      key={product._id}
                    >
                      <div className="card p-3 rounded">
                        <img
                          className="card-img-top mx-auto"
                          src={product.images[0].url}
                        />
                        <div className="card-body d-flex flex-column">
                          <h5 className="card-title">
                            <Link to={`/product/${product._id}`}>
                              {product.name}
                            </Link>
                          </h5>
                          <div className="ratings mt-auto">
                            <div className="rating-outer">
                              <div className="rating-inner"></div>
                            </div>
                            <span id="no_of_reviews">
                              ({product.numOfReviews})
                            </span>
                          </div>
                          <p className="card-text">{product.price}</p>
                          <Link
                            to={`/product/${product._id}`}
                            id="view_btn"
                            className="btn btn-block"
                          >
                            View Details
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </section>
          </div>
          <div className="d-flex justify-content-center mt-5">
            <Pagination
              activePage={currentPage}
              itemsCountPerPage={resultsPerPage}
              totalItemsCount={productsCounter}
              onChange={setCurrentPageNu}
              nextPageText={"Next"}
              prevPageText={"Prev"}
              firstPageText={"First"}
              lastPageText={"Last"}
              itemClass="page-item"
              linkClass="page-link"
            />
          </div>
        </>
      )}
    </>
  );
};

export default Products;
