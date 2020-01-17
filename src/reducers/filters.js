import {
    RECEIVE_FILTERS_SUCCESS,
    SELECT_FILTER
} from "../actions/filters";

const initialState = {
    filters: [],
    selectedFilter: null
};

export default function filters(state = initialState, action) {
    switch (action.type) {

        case RECEIVE_FILTERS_SUCCESS:
            return {
                ...state,
                filters: action.filters
            };

        case SELECT_FILTER:
            return {
                ...state,
                selectedFilter: action.selectedFilter
            };

        default:
            return state;
    }
}
