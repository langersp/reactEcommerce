import {
    RECEIVE_PRODUCTS_SUCCESS,
    RECEIVE_PRODUCTS_FAILURE
} from "../actions/products";

const initialState = {
    products: [],
    loading: false,
    error: null
};

export default function productData(state = initialState, action) {
    console.log(action)
    switch (action.type) {
        case RECEIVE_PRODUCTS_SUCCESS:
            return {
                ...state,
                loading: false,
                products: action.products,
            };

        case RECEIVE_PRODUCTS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
                products: [],
                filters: []
            };

        default:
            return state;
    }
}
