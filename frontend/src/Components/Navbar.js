import React, { Component } from 'react';
import './Navbar.css';
import {Link} from 'react-router-dom';
import { useHistory } from 'react-router-dom';

const Navbar = ( ) => {
    const history = useHistory();
    const navigateToLanding = () => {
        history.push('/')
    }

    return(<>
        <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item logo" onClick={navigateToLanding}>               
                        <img src="https://media.istockphoto.com/vectors/yellow-lines-geometric-vector-logo-letter-c-vector-id1171091258?k=6&m=1171091258&s=612x612&w=0&h=VQ3FNuAsABNoNajTiYMrgc4ahbdUn7sz1zhr3VvkqY4=" />
                        <span>Choosevise</span>
                    </li>
                    {/* <li className="nav-item active"><a className="nav-link" href="/">ChooseVise</a></li> */}
                    <li style={{float: 'right'}} className="nav-item">
                        <Link className="nav-link" to="/about">About Us</Link>
                    </li>
                    <li style={{float: 'right'}} className="nav-item">
                    <Link className="nav-link" to="/user">Register / Login</Link>
                    </li>
                    <li style={{float: 'right'}} className="nav-item">
                    <Link className="nav-link" to="/offers">Offers</Link>
                    </li>
                    <li style={{float: 'right'}} className="nav-item active">
                        <Link className="nav-link" to="/home">Home</Link>
                    </li>
                </ul>
                
            </div>
        </nav>
    </>)
}

export default Navbar;