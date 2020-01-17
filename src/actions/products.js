import axios from 'axios';
import { receiveFiltersSuccess } from './filters';
export const RECEIVE_PRODUCTS_SUCCESS = "RECIEVE_PRODUCTS_SUCCESS";
export const RECEIVE_PRODUCTS_FAILURE = "RECIEVE_PRODUCTS_FAILURE";

export function receiveProducts(filter) {
    let url = "https://www.demo.salmon-gcp.com/search/resources/store/1/productview/byCategory/10023?langId=-1&catalogId=10502&currency=USD&responseFormat=json";
    if (filter !== undefined) {
        url += '&facet=' + filter;
    }
    return axios.get(url)
        .then(data => { return data.data; })
}

export function handleReceiveProducts(filter) {
    return dispatch => {
        return receiveProducts(filter)
            .then(data => {
                dispatch(receiveProductsSuccess(data.catalogEntryView));
                dispatch(receiveFiltersSuccess(data.facetView))
            })
            .catch(error => dispatch(receiveProductsFailure(error)));
    }
}

export const receiveProductsSuccess = (products, filters) => ({
    type: RECEIVE_PRODUCTS_SUCCESS,
    products,
    filters
});

export const receiveProductsFailure = error => ({
    type: RECEIVE_PRODUCTS_FAILURE,
    payload: { error }
});