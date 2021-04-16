import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../actions/productActions";
import { Link, Route } from "react-router-dom";
import Loader from "./Loader";
import Pagination from "react-js-pagination";
import Search from "./Search";
import InfoIcon from "@material-ui/icons/Info";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import RangeSlider from "../helpers/RangeSlider";
import { useAlert } from "react-alert";

const Products = ({ match }) => {
  const dispatch = useDispatch();
  const alert = useAlert();
  //Pull the products from the state
  const {
    loading,
    products,
    error,
    productsCounter,
    resultsPerPage,
  } = useSelector((state) => state.products);

  const [rangeValue, setRangeValue] = useState([]);
  const keyword = match.params.keyword;

  const [currentPage, setCurrentPage] = useState(1);
  const [category, setCategory] = useState("");
  const [filter, setFilter] = useState("");

  const categories = [
    "Electronics",
    "Cameras",
    "Laptop",
    "Accessories",
    "Phones",
  ];

  const handleChange = (e) => {
    if (filter == e.target.name) return setFilter("");
    setFilter(e.target.name);
  };

  useEffect(() => {
    dispatch(getProducts(keyword, currentPage)); //category

    if (error) {
      return alert.error(error);
    }
  }, [dispatch, keyword, currentPage, alert, error]); //category

  function setCurrentPageNu(pageNumber) {
    setCurrentPage(pageNumber);
  }

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <div
            className="container container-fluid"
            style={{ marginLeft: "20px" }}
          >
            <h1 id="products_heading">Latest Products</h1>
            <div>
              <Route render={({ history }) => <Search history={history} />} />
            </div>

            <section id="products" class="row" style={{ marginTop: "10px" }}>
              <div
                class="form-check"
                class="col-md-2"
                style={{ marginTop: "15px" }}
              >
                <h6>Categories</h6>
                <div>
                  <ul className="pl-0">
                    {categories.map((category) => (
                      <li
                        style={{
                          cursor: "pointer",
                          listStyleType: "none",
                        }}

                        // key={d.id}
                      >
                        <li>
                          <input
                            type="checkbox"
                            style={{ marginRight: "5px" }}
                            name={category}
                            onChange={handleChange}
                          ></input>
                          {category}
                        </li>
                      </li>
                    ))}
                  </ul>
                </div>
                <div style={{ marginTop: "50px" }}>
                  <RangeSlider setRangeValue={setRangeValue} />
                </div>
              </div>

              <div
                class="col-md-10"
                style={{ display: "flex", flexWrap: "inherit" }}
              >
                {products &&
                  products
                    .filter((itr) =>
                      itr.price > rangeValue[0] &&
                      itr.price < rangeValue[1] &&
                      !filter
                        ? itr
                        : itr.category == filter
                    )
                    .map((product) => (
                      <div
                        className="col-sm-12 col-md-6 col-lg-3 my-3"
                        key={product._id}
                      >
                        <div
                          className="card p-3 rounded"
                          style={{ height: "385px" }}
                        >
                          <img
                            className="card-img-top mx-auto"
                            src={product.images[0].url}
                            height="150px"
                          />
                          <div className="card-body d-flex flex-column">
                            <h5 className="card-title">
                              <Link
                                to={`/product/${product._id}`}
                                style={{ maxBlockSize: "180px" }}
                              >
                                {product.name}
                              </Link>
                            </h5>
                            <div className="ratings mt-auto">
                              <div className="rating-outer">
                                <div className="rating-inner"></div>
                              </div>
                              <span id="no_of_reviews" style={{ color: "red" }}>
                                {product.stock != 0 ? (
                                  <p> {product.stock} Procuts Left </p>
                                ) : (
                                  <p>Out of Stock </p>
                                )}
                              </span>
                            </div>
                            <p className="card-text" style={{ color: "blue" }}>
                              {product.price}$
                            </p>
                            <div class="divIcons">
                              <Link
                                to={`/product/${product._id}`}
                                id="view_btn"
                              >
                                <InfoIcon style={{ fontSize: "35px" }} />
                              </Link>

                              <Link to="/cart" id="cart_btn">
                                <ShoppingCartIcon
                                  style={{
                                    color: "green",
                                    marginLeft: "50px",
                                    fontSize: "35px",
                                  }}
                                />
                              </Link>
                            </div>
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
