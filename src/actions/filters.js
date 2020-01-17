import { handleReceiveProducts } from './products';

export const SELECT_FILTER = "SELECT_FILTER";
export const RECEIVE_FILTERS_SUCCESS = "RECIEVE_FILTERS_SUCCESS";
export const RECEIVE_FILTERED_PRODUCTS_SUCCESS = "RECIEVE_FILTERED_PRODUCTS_SUCCESS";

export function handleSelectFilter(filter) {
    return dispatch => {
        dispatch(selectFilter(filter.label));
        dispatch(handleReceiveProducts(filter.link));
    }
}

export function handleDeSelectFilter(filter) {
    return dispatch => {
        dispatch(selectFilter());
        dispatch(handleReceiveProducts());
    }
}

export const selectFilter = selectedFilter => ({
    type: SELECT_FILTER,
    selectedFilter
});


export const receiveFiltersSuccess = (filters) => ({
    type: RECEIVE_FILTERS_SUCCESS,
    filters
});
