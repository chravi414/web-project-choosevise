import React from 'react';

const Brands = () => {
    return (
        <div className='brand card'>
            <div className='card-item'>
                <img src="https://i.pinimg.com/originals/08/5f/d8/085fd8f7819dee3b716da73d3b2de61c.jpg"></img>
                <div className='details'>
                    <h4><b>Amazon</b></h4>
                </div>
            </div>
            <div className='card-item'>
                <img src="https://www.logodesignlove.com/images/evolution/ebay-logo-01.jpg"></img>
                <div className='details'>
                    <h4><b>EBay</b></h4>
                </div>
            </div>
            <div className='card-item'>
                <img src="https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/122014/best_buy.png?itok=6zQ3TwY1"></img>
                <div className='details'>
                    <h4><b>BestBuy</b></h4>
                </div>
            </div>
        </div>)
}

export default Brands;