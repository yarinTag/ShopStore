import axios from "axios";
import {
  CREATE_ORDER_REQ,
  CREATE_ORDER_SUCCESS,
  CREATE_ORDER_FAIL,
  CLEAR_ERRORS,
  MY_ORDER_REQ,
  MY_ORDER_SUCCESS,
  MY_ORDER_FAIL,
} from "../constants/orderConstants";

export const createOrder = (order) => async (dispatch, getState) => {
  try {
    dispatch({ type: CREATE_ORDER_REQ });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.post("/api/v1/order/new", order, config);

    dispatch({
      type: CREATE_ORDER_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: CREATE_ORDER_FAIL,
      // payload: response.data.message,
    });
  }
};

// Get curretly logged in user orders
export const myOrders = () => async (dispatch) => {
  try {
    dispatch({ type: MY_ORDER_REQ });

    const { data } = await axios.get("/api/v1/orders/me");

    dispatch({
      type: MY_ORDER_SUCCESS,
      payload: data.orders,
    });
  } catch (error) {
    dispatch({
      type: MY_ORDER_FAIL,
      payload: error.response.data.message,
    });
  }
};

//Clear ERRORS
export const clearErrors = () => async (dispatch) => {
  dispatch({
    type: CLEAR_ERRORS,
  });
};
