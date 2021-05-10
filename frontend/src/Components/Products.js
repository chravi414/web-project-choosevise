import React from 'react';

const Products = ({ brands, addForComparison, selectedProductIds }) => {
    return (
        brands.map(brand => (
            <div className="result-container">
                <h3 className="brand-title">{brand.brand}</h3>
                <div className="products" key={brand.id}>
                    {brand.products.map(product => {
                        const selectedClass = selectedProductIds.indexOf(product.id) >= 0 ? ' selected' : ''
                        return (<div className={`card${selectedClass}`} key={product.id} onClick={() => addForComparison(product)}>
                            <img className="card-img-top" src={product.image} alt="Card image cap" />
                            <div className="card-body">
                                <h5 className="card-title">{product.name.substr(0, 40)}</h5>
                                <p className="card-price"> {product.price}</p>
                                <a href={product.link} class="btn btn-primary">Buy now</a>
                            </div>
                        </div>)
                    })}
                </div>
            </div>

        ))
    )
}

export default Products;