import * as ACTIONS from "./../actions/types";
const isEmpty = require("is-empty");
const initialState = {
    offers: [],
    showLoader: false
};

const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTIONS.GET_OFFERS:
            return {
                ...state,
                brands: action.payload
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