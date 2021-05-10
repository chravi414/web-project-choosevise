import * as ACTIONS from "./../actions/types";
const isEmpty = require("is-empty");
const initialState = {
    brands: [],
    showLoader: false,
    comparisons: []
};

const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTIONS.GET_PRODUCTS:
            return {
                ...state,
                brands: action.payload
            }
        case ACTIONS.SAVE_COMPARISON:
            return {
                ...state,
                comparisons: [action.payload, ...state.comparisons]
            }
        case ACTIONS.SHOW_LOADER:
            return {
                ...state,
                showLoader: true
            }
        case ACTIONS.HIDE_LOADER:
            return {
                ...state,
                showLoader: false
            }
        default:
            return state;
    }

}


export default productReducer;