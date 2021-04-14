import axios from "axios";
import {
  CREATE_ORDER_REQ,
  CREATE_ORDER_SUCCESS,
  CREATE_ORDER_FAIL,
  CLEAR_ERRORS,
} from "../constants/orderConstants";

export const createOrder = (order) => async (diapatch, getState) => {
  try {
    dispatchEvent({ type: CREATE_ORDER_REQ });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.post("/api/v1/order/new", order, config);

    dispatchEvent({
      type: CREATE_ORDER_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatchEvent({
      type: CREATE_ORDER_FAIL,
      // payload: response.data.message,
    });
  }
};

//Clear ERRORS
export const clearErrors = () => async (dispatch) => {
  dispatch({
    type: CLEAR_ERRORS,
  });
};
