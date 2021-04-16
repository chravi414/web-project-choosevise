import React from 'react';
import './Landing.css';

import one from './../../assets/images/one.svg';
import two from './../../assets/images/two.svg';
import currency from './../../assets/images/currency.svg';
import discount from './../../assets/images/discount.svg';
import share from './../../assets/images/share.svg';

const Landing = () => {
    return (
        <div className="landing-container">
            <section className="info info1">
                <div className="info-text">
                    <h2 className="info-header">Online support to compare prices </h2>
                    <p className="info-desc">The main objective of application is to provide users a platform which collects the information about the product of user interest like price, reviews and if there are any offers available in those ecommerce sites. The application can save both time and money for the customers and can also help the ecommerce platforms to get customer attention if they can offer great deals.</p>
                </div>
                <div className="info-image">
                    <img src={one} alt="image-1" className="image image1"/>
                </div>
            </section>

            <section className="info info2">
                <div className="info-text">
                    <h2 className="info-header">Help End-users save time and money </h2>
                    <p className="info-desc">“Jeanine, working as a Team Manager in a MNC and a mother of two children who likes to visit different stores for shopping during her teenage. In recent years she is not able to find time in between her professional and family life to go for shopping. So she started purchasing the things online, but she is not able to spend much time to check different e-commerce platforms to compare the deals in each site due to her busy schedules"</p>
                </div>
                <div className="info-image">
                    <img src={two} alt="image-1" className="image image1"/>
                </div>
            </section>

            <div className="services">
                <div className="services-wrapper">
                    <h2 className="services-title">
                        Our Services
                    </h2>
                    <div className="services-card">
                        <div className="service-card">
                            <div className="service-icon">
                                <img src={currency} alt="image-1" className="image image1" width="150px" height="100px"/>
                            </div>
                            <h3 className="service-label">
                                Price 
                            </h3>
                            <p className="service-desc">
                                Get price of the product from different e-commerce sites.
                            </p>
                        </div>
                        <div className="service-card">
                            <div className="service-icon">
                                <img src={discount} alt="image-1" className="image image1" width="150px" height="100px"/>
                            </div>
                            <h3 className="service-label">
                                Offers 
                            </h3>
                            <p className="service-desc">
                                Know the offers on e-commerce sites and shop.
                            </p>
                        </div>
                        <div className="service-card">
                            <div className="service-icon">
                                <img src={share} alt="image-1" className="image image1" width="150px" height="100px"/>
                            </div>
                            <h3 className="service-label">
                                Share 
                            </h3>
                            <p className="service-desc">
                                It is a great idea to share the comparison with friends.
                            </p>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Landing;