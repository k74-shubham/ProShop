import axios from 'axios'

import * as actionTypes from '../constants/productConstant'

const URL = 'http://localhost:8000'

export const getProducts = () => async (dispatch) => {
    try {
        const { data } = await axios.get(`${URL}/products`);
        dispatch({ type: actionTypes.GET_PRODUCTS_SUCCESS, payload: data })
    } catch (error) {
        dispatch({ type: actionTypes.GET_PRODUCTS_FAIL, payload: error.message })
    }
}

export const getProductDetails = (id) => async (dispatch) => {
    try {
        dispatch({ type: actionTypes.GET_PRODUCT_DETAIL_REQUEST })

        const product = await axios.get(`${URL}/product/${id}`);
        const data = product.data;
        // console.log(product);
        dispatch({ type: actionTypes.GET_PRODUCT_DETAIL_SUCCESS, payload: data })
    } catch (error) {
        dispatch({ type: actionTypes.GET_PRODUCT_DETAIL_FAIL, payload: error.message })
    }
}