import React, { useEffect } from "react";
import {useDispatch, useSelector} from 'react-redux';
import {getProducts} from "../../actions/productActions";
import {Link} from 'react-router-dom';

const Home = () => {

  const dispatch = useDispatch();
//Pull the products from the state
  const {loading,products,error,productCounter} = useSelector(state => state.products);

  useEffect(() => {
    dispatch(getProducts());
  },[dispatch])

  return (
    <div className="container container-fluid">
      <h1 id="products_heading">Latest Products</h1>
      <section id="products" className="container mt-5">
        <div className="row">
          {products && products.map(product => (
               <div className="col-sm-12 col-md-6 col-lg-3 my-3" key={product._id}>
               <div className="card p-3 rounded">
                 <img
                   className="card-img-top mx-auto"
                   src={product.images[0].url}
                 />
                 <div className="card-body d-flex flex-column">
                   <h5 className="card-title">
                     <Link to={`/product/${product._id}`}>{product.name}</Link>
                   </h5>
                   <div className="ratings mt-auto">
                     <div className="rating-outer">
                       <div className="rating-inner"></div>
                     </div>
                     <span id="no_of_reviews">({product.numOfReviews})</span>
                   </div>
                   <p className="card-text">{product.price}</p>
                   <Link to={`/product/${product._id}`} id="view_btn" className="btn btn-block">
                     View Details
                   </Link>
                 </div>
               </div>
             </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;