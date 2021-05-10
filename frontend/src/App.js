import React from "react";
import "./App.css";
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './pages/About/About';
import Landing from './pages/Landing/Landing';
import Register from './pages/Authentication/Register'
import Login from './pages/Authentication/Login';
import { Redirect, Route, Switch } from 'react-router-dom';


import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import store from "./store/store";
import { setCurrentUser, logoutUser } from "./store/actions/authActions";
import Offers from "./components/Offers";
import MyAccount from "./pages/MyAccount/MyAccount";

class App extends React.Component {
  componentDidMount() {
    // Check for token to keep user logged in
    if (localStorage.jwtToken) {
      // Set auth token header auth
      const token = localStorage.jwtToken;
      setAuthToken(token);
      // Decode token and get user info and exp
      const decoded = jwt_decode(token);
      // Set user and isAuthenticated
      store.dispatch(setCurrentUser(decoded));
      // Check for expired token
      const currentTime = Date.now() / 1000; // to get in milliseconds
      if (decoded.exp < currentTime) {
        // Logout user
        store.dispatch(logoutUser());
        // Redirect to login
        window.location.href = "./login";
      }
    }
  }
  render() {
    return (
      <div className="App" >
        <Navbar />
        <div className="main-section">
          <Switch>
            <Route path="/about" exact><About /></Route>
            <Route path="/home" exact><Home /></Route>
            <Route path="/account" exact><MyAccount /></Route>
            <Route path="/offers" exact><Offers /></Route>
            <Route path="/landing" exact><Landing /></Route>
            <Route exact path="/register"><Register /></Route>
            <Route exact path="/login"><Login /></Route>
            <Redirect to="/landing" path="/"></Redirect>
          </Switch>
        </div>

      </div>
    )
  };
}

export default App;