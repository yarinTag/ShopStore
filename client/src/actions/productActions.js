import axios from 'axios';
import {ALL_PRODUCTS_REQ,ALL_PRODUCTS_SUCCESS,ALL_PRODUCTS_FAIL,CLEAR_ERRORS } from '../constants/productConstants';
import {serverApi} from '../config';

export const getProducts = () => async(dispatch) => {
    try {
        dispatch({
            type: ALL_PRODUCTS_REQ
        })

        const {data} = await axios.get(`/api/v1/products`);

        dispatch({
            type: ALL_PRODUCTS_SUCCESS,
            payload: data
        })
        
    } catch (error) {
        dispatch({
            type: ALL_PRODUCTS_FAIL,
            payload: error.response.data.message
        })
    }
}

//Clear Errors
export const clearErrors = () => async(dispatch) => {
    dispatch({
        type: CLEAR_ERRORS
    })
}