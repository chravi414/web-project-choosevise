import * as ACTIONS from "./types";
import axios from "axios";

export const getComparisons = (userId) => {
    console.log("In Action Account")
    return dispatch => {
        axios.post("http://localhost:5000/api/user/comparisons", {
            userId: userId
        }).then(response => {
            console.log(response);
            dispatch({
                type: ACTIONS.GET_COMPARISONS,
                payload: response['data']['data']
            })
            // return response;
        }).catch(err => {
            console.log(err);
        })
    }
}