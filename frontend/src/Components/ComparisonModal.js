import React, { useRef } from 'react';

const ComparisonModal = ({ show, closeModal, productsToCompare, isAuthenticated, saveComparison }) => {
    console.log(productsToCompare[0]);
    const modalRef = useRef();
    window.onclick = function (event) {
        if (event.target == modalRef.current) {
            closeModal()
        }
    }
    return (
        <div id="myModal" className={show ? "modal show" : "modal"} ref={modalRef}>
            <div className="modal-content">
                <span className="close" onClick={closeModal}>&times;</span>
                <div className="comparison-content">
                    <div className="prod-info-row">
                        <div className="index info-label">

                        </div>
                        <div className="prod-image info-value">
                            <img src={productsToCompare[0].image} alt={productsToCompare[0].id} />
                        </div>
                        <div className="prod-image info-value">
                            <img src={productsToCompare[1].image} alt={productsToCompare[1].id} />
                        </div>
                    </div>

                    <div className="prod-info-row">
                        <div className="info-label">
                            Brand
                        </div>
                        <div className="info-value">
                            {productsToCompare[0].brand}
                        </div>
                        <div className="info-value">
                            {productsToCompare[1].brand}
                        </div>
                    </div>


                    <div className="prod-info-row">
                        <div className="info-label">
                            Title
                        </div>
                        <div className="info-value">
                            {productsToCompare[0].name}
                        </div>
                        <div className="info-value">
                            {productsToCompare[1].name}
                        </div>
                    </div>

                    <div className="prod-info-row">
                        <div className="info-label">
                            Price
                        </div>
                        <div className="info-value">
                            {productsToCompare[0].price}
                        </div>
                        <div className="info-value">
                            {productsToCompare[1].price}
                        </div>
                    </div>


                    <div className="prod-info-row">
                        <div className="info-label">
                            Rating
                        </div>
                        <div className="info-value">
                            {productsToCompare[0].rating ? productsToCompare[0].rating : "Not Available"}
                        </div>
                        <div className="info-value">
                            {productsToCompare[1].rating ? productsToCompare[1].rating : "Not Available"}
                        </div>
                    </div>
                    <div className="prod-info-row">
                        <div className="info-label">
                            Offers
                        </div>
                        <div className="info-value">
                            {productsToCompare[0].offers ? productsToCompare[0].offers : "No Offers"}
                        </div>
                        <div className="info-value">
                            {productsToCompare[1].offers ? productsToCompare[1].offers : "No Offers"}
                        </div>
                    </div>
                    <div className="prod-info-row">
                        <div className="info-label">

                        </div>
                        <div className="info-value">
                            <a href={productsToCompare[0].link} class="btn btn-primary">Buy now</a>
                        </div>
                        <div className="info-value">
                            <a href={productsToCompare[1].link} class="btn btn-primary">Buy now</a>
                        </div>
                    </div>
                    {isAuthenticated ? (<div className="save-btn-row">
                        <div className="save-btn">
                            <a href="#" class="btn btn-primary" onClick={saveComparison}>Save Comparison</a>
                        </div>
                    </div>) : null}
                </div>
            </div>
        </div>
    )
}

export default ComparisonModal;