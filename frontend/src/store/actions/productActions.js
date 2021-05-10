import * as ACTIONS from "./types";
import axios from "axios";

export const getProducts = (searchTerm) => {
    console.log(searchTerm, "In Actions");
    return (dispatch) => {
        dispatch({
            type: ACTIONS.SHOW_LOADER
        })
        axios.post('http://localhost:5000/api/scrapper',
            { query: searchTerm }).then(response => {
                const brandsData = response.data['data'];
                console.log(brandsData);
                dispatch({
                    type: ACTIONS.GET_PRODUCTS,
                    payload: brandsData
                })
                dispatch({
                    type: ACTIONS.HIDE_LOADER
                })
            }).catch(err => console.log(err))
    }
}


export const saveComparison = (postData) => {
    console.log(postData);
    return dispatch => {
        dispatch({
            type: ACTIONS.SHOW_LOADER
        })
        return axios.post('http://localhost:5000/api/user/save',
            postData).then(response => {
                console.log(response, "This is in actions");
                dispatch({
                    type: ACTIONS.HIDE_LOADER
                })
                return response;
            }).catch(err => console.log(err))
    }
}