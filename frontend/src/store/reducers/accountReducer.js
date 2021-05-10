import * as ACTIONS from "./../actions/types";
const initialState = {
    comparisons: [],
};

const accountReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTIONS.GET_COMPARISONS:
            return {
                ...state,
                comparisons: action.payload
            }
        default:
            return state;
    }
}

export default accountReducer;