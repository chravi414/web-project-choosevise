import React from 'react';
import './Landing.css';

import one from './../../assets/images/one.svg';
import two from './../../assets/images/two.svg';
import three from './../../assets/images/three.svg';
import currency from './../../assets/images/currency.svg';
import discount from './../../assets/images/discount.svg';
import share from './../../assets/images/share.svg';

const Landing = () => {
    return (
        <div className="landing-container">
            <section className="info info1">
                <div className="info-text">
                    <h2 className="info-header">Online support to compare prices </h2>
                    <p className="info-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime assumenda libero architecto vel molestias exercitationem tempora perferendis corporis, eaque porro doloremque maiores accusamus iusto accusantium!</p>
                </div>
                <div className="info-image">
                    <img src={one} alt="image-1" className="image image1"/>
                </div>
            </section>

            <section className="info info2">
                <div className="info-text">
                    <h2 className="info-header">Online support to compare prices </h2>
                    <p className="info-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime assumenda libero architecto vel molestias exercitationem tempora perferendis corporis, eaque porro doloremque maiores accusamus iusto accusantium!</p>
                </div>
                <div className="info-image">
                    <img src={two} alt="image-1" className="image image1"/>
                </div>
            </section>

            <section className="info info3">
                <div className="info-text">
                    <h2 className="info-header">Online support to compare prices </h2>
                    <p className="info-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime assumenda libero architecto vel molestias exercitationem tempora perferendis corporis, eaque porro doloremque maiores accusamus iusto accusantium!</p>
                </div>
                <div className="info-image">
                    <img src={three} alt="image-1" className="image image1"/>
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
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima, quam.
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
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima, quam.
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
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima, quam.
                            </p>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Landing;