import React, { Component } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { useHistory, withRouter } from 'react-router-dom';
import { connect } from "react-redux";
import { logoutUser } from "./../store/actions/authActions";

const Navbar = (props) => {
    const history = useHistory();
    const navigateToLanding = () => {
        history.push('/')
    }
    console.log(props.user);

    const logoutHandler = () => {
        props.logoutUser(props.history);
    };

    return (<>
        <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item logo" onClick={navigateToLanding}>
                        <img src="https://media.istockphoto.com/vectors/yellow-lines-geometric-vector-logo-letter-c-vector-id1171091258?k=6&m=1171091258&s=612x612&w=0&h=VQ3FNuAsABNoNajTiYMrgc4ahbdUn7sz1zhr3VvkqY4=" />
                        <span>Choosevise</span>
                    </li>
                    {props.isAuthenticated ? (<>

                        <li style={{ float: 'right' }} className="nav-item">
                            <Link className="nav-link" to="/register" onClick={logoutHandler}>Logout</Link>
                        </li>
                        <li style={{ float: 'right' }} className="nav-item">
                            <Link className="nav-link" to="/account">My Account</Link>
                        </li></>) : (<><li style={{ float: 'right' }} className="nav-item">
                            <Link className="nav-link" to="/register">Register</Link>
                        </li>
                            <li style={{ float: 'right' }} className="nav-item">
                                <Link className="nav-link" to="/login">Login</Link>
                            </li></>)}

                    <li style={{ float: 'right' }} className="nav-item">
                        <Link className="nav-link" to="/about">About Us</Link>
                    </li>
                    <li style={{ float: 'right' }} className="nav-item">
                        <Link className="nav-link" to="/offers">Offers</Link>
                    </li>
                    <li style={{ float: 'right' }} className="nav-item active">
                        <Link className="nav-link" to="/home">Home</Link>
                    </li>
                </ul>

            </div>
        </nav>
    </>)
}

const mapStateToProps = (state) => {
    return {
        isAuthenticated: state.authReducer.isAuthenticated,
        user: state.authReducer.user,
    };
};

const mapDispatchToProps = {
    logoutUser: logoutUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Navbar));