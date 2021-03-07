import React, { Component } from 'react';
import './Navbar.css';
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";


const Navbar = ( ) => {
    return(<>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                    <li>
                        <img src="https://media.istockphoto.com/vectors/yellow-lines-geometric-vector-logo-letter-c-vector-id1171091258?k=6&m=1171091258&s=612x612&w=0&h=VQ3FNuAsABNoNajTiYMrgc4ahbdUn7sz1zhr3VvkqY4="></img>
                    </li>
                    <li class="nav-item active"><a class="nav-link" href="/">ChooseVise</a></li>
                    <li style={{float: 'right'}} class="nav-item">
                        <a class="nav-link" href="#">AboutUs</a>
                    </li>
                    <li style={{float: 'right'}} class="nav-item">
                        <a class="nav-link" href="#">Signup/Login</a>
                    </li>
                    <li style={{float: 'right'}} class="nav-item">
                        <a class="nav-link" href="#">Offers</a>
                    </li>
                    <li style={{float: 'right'}} class="nav-item active"><a class="nav-link" href="#">Home</a></li>
                </ul>
                
            </div>
        </nav>
        <div class="footer">
        <MDBFooter color="blue" className="font-small pt-4 mt-4">
                <MDBContainer fluid className="text-center text-md-left">
                    <p></p>
                    <MDBRow>
                            <ul>
                                <li className="list-unstyled">We are pleased to help you Shop easy!!</li>
                                <li style={{float: 'right'}} className="list-unstyled">Offers</li>
                                <li style={{float: 'right'}} className="list-unstyled">Electronics</li>
                                <li style={{float: 'right'}} className="list-unstyled">Groceries</li>
                                <li style={{float: 'right'}} className="list-unstyled">Comparison</li>
                                <li style={{float: 'right'}} className="list-unstyled">Save Results</li>
                            </ul>
                    </MDBRow>
                </MDBContainer>
            </MDBFooter>
        </div>
    </>)
}

export default Navbar;