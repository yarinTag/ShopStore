import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { createOrder, clearErrors } from "../../actions/orderActions";
import CheckoutSteps from "./CheckoutSteps";

import axios from "axios";

const Payment = ({ history }) => {
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);
  const { cartItems, shippingInfo } = useSelector((state) => state.cart);
  const { error } = useSelector((state) => state.newOrder);

  console.log(cartItems);

  useEffect(() => {
    if (error) {
      dispatch(clearErrors());
    }
  }, [dispatch, error]);

  const order = {
    orderItems: cartItems,
    shippingInfo,
  };

  const orderInfo = JSON.parse(sessionStorage.getItem("orderInfo"));
  if (orderInfo) {
    order.itemsPrice = orderInfo.itemsPrice;
    order.shippingPrice = orderInfo.shippingPrice;
    order.taxPrice = orderInfo.taxPrice;
    order.totalPrice = orderInfo.totalPrice;
    order.country = orderInfo.country;
  }

  const paymentData = {
    amount: Math.round(orderInfo.totalPrice * 100),
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      order.paymentInfo = {
        id: Math.random(),
        orderStatus: "Delivered",
      };

      dispatch(createOrder(order));

      history.push("/success");
    } catch (error) {
      document.querySelector("#pay_btn").disabled = false;
      //error(error.response.data.message);
    }
  };

  return (
    <>
      <CheckoutSteps shipping confirmOrder payment />

      <div>
        <div className="col-10 col-lg-5" style={{ marginLeft: "430px" }}>
          <form className="" onSubmit={submitHandler}>
            <h1 className="mb-4" style={{ marginLeft: "170px" }}>
              Card Info
            </h1>
            <div className="form-group">
              <label htmlFor="card_num_field">Card Number</label>
              <input
                type="number"
                id="card_num_field"
                className="form-control"
                min="1000000000000000"
                max="9999999999999999"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="card_exp_field">Expiry Date</label>
              <input
                type="date"
                id="card_exp_field"
                className="form-control"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="card_cvc_field">Card CVC</label>
              <input
                type="number"
                id="card_cvc_field"
                className="form-control"
                min="100"
                max="999"
                required
              />
            </div>

            <button
              id="pay_btn"
              type="submit"
              className="btn btn-warning"
              style={{ marginLeft: "230px" }}
            >
              Pay {` - ${orderInfo && orderInfo.totalPrice}$`}
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Payment;
