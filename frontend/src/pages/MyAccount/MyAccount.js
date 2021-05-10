import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ComparisonModal from '../../components/ComparisonModal';
import { getComparisons } from '../../store/actions/accountActions';

class MyAccount extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            showComparisonModal: false,
            selectedComp: null
        }
    }

    componentDidMount() {
        if (this.props.user) {
            this.props.getComparisons(this.props.user.id)
        } else {
            this.props.history.push('/login');
        }
    }

    openDetails = (event, comp) => {
        event.preventDefault();
        this.setState({
            showComparisonModal: true,
            selectedComp: comp
        })
    }

    closeModal = () => {
        this.setState({
            showComparisonModal: false,
        })
    }

    componentDidUpdate() {
        console.log(this.props.comparisons);
    }
    render() {
        return (
            <>
                <div className="account-container">
                    <h3 className="section-title">
                        My Account
                    </h3>
                    {this.props.comparisons.length === 0 ? (
                        <div className="empty">There are no comparisons added yet.</div>
                    ) : (<div className="account-table">
                        <div className="table-header">
                            <div className="index">S.No</div>
                            <div className="product-header">Product A</div>
                            <div className="product-header">Product B</div>
                            <div className="empty"></div>
                        </div>
                        <div className="table-content">
                            {this.props.comparisons.map(comp => {
                                return (
                                    <div className="content-row">
                                        <div className="index">{comp._id}</div>
                                        <div className="product-name">
                                            {comp.products[0].name.substr(0, 40)}
                                        </div>
                                        <div className="product-name">
                                            {comp.products[1].name.substr(0, 40)}
                                        </div>
                                        <div className="actions">
                                            <a href="#" className="btn btn-primary" onClick={(event) => this.openDetails(event, comp)}>Get Details</a>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>)
                    }
                    {this.state.showComparisonModal ? (<ComparisonModal show={this.state.showComparisonModal} closeModal={this.closeModal} productsToCompare={[...this.state.selectedComp.products]} />) : null}
                </div >

            </>
        )
    }
}

const mapStateToProps = (state) => ({
    comparisons: state.accountReducer.comparisons,
    user: state.authReducer.user,
})

const mapDispatchToProps = (dispatch) => {
    return {
        getComparisons: (userId) => dispatch(getComparisons(userId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(MyAccount));