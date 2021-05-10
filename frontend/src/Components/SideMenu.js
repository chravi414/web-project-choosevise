import React, { useState } from 'react';

const SideMenu = () => {
    const [showCatogeries, setShowCatogeries] = useState(false);
    const [showOffers, setShowOffers] = useState(false);
    const [showBrands, setShowBrands] = useState(false);


    return (
        <div className='grid-item1'>
            <div className="menu-items ">
                <span className="menu-text">Catogeries</span>
                <div>
                    <a href='#'><i className="fas fa-plus" onClick={() => setShowCatogeries(!showCatogeries)}></i></a>
                </div>
            </div>
            {
                showCatogeries ? <div className='submenu'>
                    <a><div>Electronics</div></a>
                    <a><div>groceries</div></a>
                    <a><div>Clothing</div></a>
                    <a><div>Jwelery</div></a>
                </div> : null
            }
            <div className="menu-items">
                <span className="menu-text">Offers</span>
                <div>
                    <a href='#'><i className="fas fa-plus" onClick={() => setShowOffers(!showOffers)} ></i></a>
                </div>
            </div>
            {
                showOffers ? <div className='submenu'>
                    <a><div>Electronics</div></a>
                    <a><div>groceries</div></a>
                    <a><div>Clothing</div></a>
                    <a><div>Jwelery</div></a>
                </div> : null
            }
            <div className="menu-items">
                <span className="menu-text">Brands</span>
                <div>
                    <a href='#'><i className="fas fa-plus" onClick={() => setShowBrands(showBrands)} ></i></a>
                </div>
            </div>
            {
                showBrands ? <div className='submenu'>
                    <div><a href='https://www.amazon.com/'>Amazon</a></div>
                    <div><a href='https://www.walmart.com/'>Walmart</a></div>
                    <div><a href='https://www.costco.com/'>Costco</a></div>
                    <div><a href='https://www.bestbuy.com/'>Best Buy</a></div>
                </div> : null
            }
        </div>
    )
}

export default SideMenu;