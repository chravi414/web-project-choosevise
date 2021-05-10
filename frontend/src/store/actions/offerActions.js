import * as ACTIONS from "./types";
import axios from "axios";

export const getOffers = () => {
    console.log("In Actions");
    return (dispatch) => {
        dispatch({
            type: ACTIONS.SHOW_LOADER
        })
        axios.post('http://localhost:5000/api/scrapper/offers',
            {}).then(response => {
                const offersData = response.data['data'];
                dispatch({
                    type: ACTIONS.GET_OFFERS,
                    payload: offersData
                })
                dispatch({
                    type: ACTIONS.HIDE_LOADER
                })
            }).catch(err => console.log(err))
    }
}