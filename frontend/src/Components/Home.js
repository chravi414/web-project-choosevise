import React from 'react';
import { Container, Grid } from '@material-ui/core';
import './Home.css'



class Home extends React.Component{
    constructor(){
        super();
        this.state={
            showCatogeries:false,
            showOffers:false,
            showBrands:false
        }
        
            
        
    }
    render(){
    return (
        <>
            <div className='container-page'>
                <div className='grid-item1'>
                   <div className="menu-items ">
                       <text className="menu-text">Catogeries</text>
                       <div>
                            
                       <a href='#'><i className="fas fa-plus" onClick={()=>{this.setState({showCatogeries:!this.state.showCatogeries})}}></i></a>
                        </div>
                    </div>
                        
                            {
                                this.state.showCatogeries? <div className='submenu'>
                                    <a><div>Electronics</div></a>
                                    <a><div>groceries</div></a>
                                    <a><div>Clothing</div></a>
                                    <a><div>Jwelery</div></a>
                                    </div> : null
                                }
                        
                        
                    
                    <div className="menu-items">
                       <text className="menu-text">Offers</text>
                       <div>
                            
                       <a href='#'><i className="fas fa-plus" onClick={()=>{this.setState({showOffers:!this.state.showOffers})}} ></i></a>
                        </div>
                        </div>
                            {
                                this.state.showOffers? <div className='submenu'>
                                    <a><div>Electronics</div></a>
                                    <a><div>groceries</div></a>
                                    <a><div>Clothing</div></a>
                                    <a><div>Jwelery</div></a>
                                    </div> : null
                                }
                        
                        
                    
                    <div className="menu-items">
                       <text className="menu-text">Brands</text>
                            <div>
                                
                                <a href='#'><i className="fas fa-plus" onClick={()=>{this.setState({showBrands:!this.state.showBrands})}} ></i></a>
                        
                            </div>
                            </div>
                        
                            {
                                this.state.showBrands? <div className='submenu'>    
                                    <div><a href='https://www.amazon.com/'>Amazon</a></div>
                                    <div><a href='https://www.walmart.com/'>Walmart</a></div>
                                    <div><a href='https://www.costco.com/'>Costco</a></div>
                                    <div><a href='https://www.bestbuy.com/'>Best Buy</a></div>
                                    </div> : null
                            }
                        
                      

    
                </div>
                <div className='grid-item2'>
                    <div className="input-group">
                        
                        <h2>Search for your products and compare prices</h2>
                        <div className="input">
                            <input type="search" id="form1" className="form-control" placeholder='Search or enter the products' />
                            <button type="button"  className="btn btn-primary">
                                <i className="fas fa-search"></i>
                            </button>
                        </div>
                    </div>
                    <div className='brand card'>
                        <div className='card-item'>
                            <img src="https://i.pinimg.com/originals/08/5f/d8/085fd8f7819dee3b716da73d3b2de61c.jpg"></img>
                            <div className='details'>
                                <h4><b>Amazon</b></h4>
                                
                            </div>
                            </div>
                            <div className='card-item'>
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Walmart_Spark.svg/722px-Walmart_Spark.svg.png"></img>
                            <div className='details'>
                                <h4><b>Walmart</b></h4>
                                
                            </div>
                            </div>
                            <div className='card-item'>
                            <img src="https://corporate.aldi.us/fileadmin/fm-dam/logos/ALDI_2017.png"></img>
                            <div className='details'>
                                <h4><b>Aldi</b></h4>
                                
                            </div>
                            </div>
                    </div> 
                </div>
            </div>
        </>
    );
}
}

export default Home;
