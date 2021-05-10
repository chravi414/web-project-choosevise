import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { getOffers } from './../store/actions/offerActions';

class Offers extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        this.props.getOffers();
    }

    componentDidUpdate() {
        console.log(this.props);
    }

    render() {
        return (
            <div className="offers" >
                <h3 className="section-title">Offers</h3>
                <div className="brand-offers">
                    <h3 className="brand-title">Brand Name</h3>
                    <div className="brand-info">
                        {this.props.offers.length > 0 && this.props.offers.map((offer) => {
                            return (<div className="card" key={offer.id}>
                                <img className="card-img-top" src={offer.imageLink} alt="Card image cap" />
                                <div className="card-body">
                                    <h5 className="card-title">{offer.title.substr(0, 40)}</h5>
                                    <div className="card-price">
                                        <p class="normalPrice">{offer.price}</p>
                                        <p className="offer"><span className="strikethrough">{offer.originalPrice}</span>{offer.offerValue}</p>
                                    </div>
                                    <a href={offer.link} class="btn btn-primary">Check Deal</a>
                                </div>
                            </div>)
                        })}
                    </div>
                </div>
            </div>

        )
    }
}

const mapStateToProps = (state) => ({
    offers: state.offerReducer.offers
})

const mapDispatchToProps = (dispatch) => {
    return {
        getOffers: (searchTerm) => dispatch(getOffers(searchTerm))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Offers);