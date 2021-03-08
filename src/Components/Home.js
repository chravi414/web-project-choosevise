import React from 'react';
import { Container, Grid } from '@material-ui/core';
import './Home.css'




const Home = () => {
    return (
        <>
            <div className='container-page'>
                <div className='grid-item1'>
                   <div className="menu-items">
                       <text className="menu-text">Catogeries</text>
                       <i className="fas fa-plus"></i>
                    </div>
                    <div className="menu-items">
                       <text className="menu-text">Offers</text>
                       <i className="fas fa-plus"></i>
                    </div>
                    <div className="menu-items">
                       <text className="menu-text">Brands</text>
                       <i className="fas fa-plus"></i>
                    </div>  

    
                </div>
                <div className='grid-item2'>
                    <div className="input-group">
                        
                        <h2>Search for your products and compare prices</h2>
                        <div className="input">
                            <input type="search" id="form1" className="form-control" placeholder='Search or enter the products' />
                            <button type="button" className="btn btn-primary">
                                <i className="fas fa-search"></i>
                            </button>
                        </div>
                    </div>
    
                </div>
            </div>
        </>
    );
}

export default Home;
