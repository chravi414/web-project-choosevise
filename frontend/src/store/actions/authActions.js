import * as ACTIONS from "./types";
import axios from "axios";
import setAuthToken from "./../../utils/setAuthToken";
import jwt_decode from "jwt-decode";

// Register user action
export const registerUser = (data, history) => (dispatch) => {
  axios
    .post("http://localhost:5000/api/user/register", data)
    .then((response) => {
      console.log(response);
      history.push("/login");
    })
    .catch((err) => {
      console.log(err);
      dispatch({
        type: ACTIONS.SET_ERRORS,
        payload: err.response.data,
      });
    });
};

// Login User action

export const loginUser = (data) => (dispatch) => {
  axios
    .post("http://localhost:5000/api/user/login", data)
    .then((res) => {
      const { token } = res.data;
      localStorage.setItem("jwtToken", token);
      // Set token to Auth header
      setAuthToken(token);
      // Decode token to get user data
      const decoded = jwt_decode(token);
      // Set current user
      dispatch(setCurrentUser(decoded));
    })
    .catch((err) => {
      console.log(err.response.data, "Error in action");
      dispatch({
        type: ACTIONS.SET_ERRORS,
        payload: err.response.data,
      });
    });
};

// Set logged in user
export const setCurrentUser = (decoded) => {
  return {
    type: ACTIONS.SET_CURRENT_USER,
    payload: decoded,
  };
};

export const resetUser = () => {
  return {
    type: ACTIONS.RESET_USER,
  }
}

// User loading
export const setUserLoading = () => {
  return {
    type: ACTIONS.USER_LOADING,
  };
};

// Log user out
export const logoutUser = (history) => (dispatch) => {
  // Remove token from local storage
  console.log("In Actions logout");
  localStorage.removeItem("jwtToken");
  // Remove auth header for future requests
  setAuthToken(false);
  // Set current user to empty object {} which will set isAuthenticated to false
  dispatch(resetUser());
  history.push("/login");
};
