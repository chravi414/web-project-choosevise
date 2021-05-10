import React from 'react';
import { connect } from 'react-redux';
import './Home.css';
import { getProducts, saveComparison } from './../store/actions/productActions';
import Brands from './Brands';
import SideMenu from './SideMenu';
import SearchInput from './SearchInput';
import Products from './Products';
import Spinner from './Spinner';
import ComparisonModal from './ComparisonModal';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Slide } from 'react-toastify';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showProducts: false,
            message: '',
            productsAddedForComparison: [],
            selectedProductIds: [],
            showToast: false,
            showComparisonModal: false
        }
    }

    onSearchHandler = async (searchTerm) => {
        if (searchTerm) {
            await this.props.getProducts(searchTerm);
        } else {
            this.setState({
                errorMsg: "Please enter a product name to get the results"
            })
        }
    }

    showToast = (message, flag) => {
        const position = { position: toast.POSITION.TOP_RIGHT };
        switch (flag) {
            case "success":
                toast.success(message, position);
                break;
            case "error":
                toast.error(message, position);
                break;
            default:
                toast.info(message, position);
                break;
        }
    };


    comparisonHandler = (product) => {
        const index = this.state.selectedProductIds.indexOf(product.id);
        if (index >= 0) {
            const selectedProds = [...this.state.selectedProductIds];
            selectedProds.splice(index, 1);
            const updatedProducts = this.state.productsAddedForComparison.filter(pr => pr.id != product.id);
            this.setState({
                selectedProductIds: selectedProds,
                productsAddedForComparison: updatedProducts
            })
        } else {
            if (this.state.productsAddedForComparison.length < 2) {
                const productsAddedForComparison = [...this.state.productsAddedForComparison];
                productsAddedForComparison.push(product);
                const selectedProductIds = productsAddedForComparison.map(p => p.id)
                this.setState({
                    productsAddedForComparison: productsAddedForComparison,
                    showToast: false,
                    selectedProductIds: selectedProductIds
                }, () => console.log(this.state))
            } else {
                this.setState({
                    showToast: true
                })
                this.showToast("Maximum of two product can be selected for comparison", "error");
            }
        }
    }

    openComparisonModal = () => {
        console.log("in Method")
        this.setState({
            showComparisonModal: !this.state.showComparisonModal
        })
    }

    saveComparisonHandler = async () => {
        const dataObj = {
            userId: this.props.user.id,
            productsArray: [...this.state.productsAddedForComparison]
        }
        this.props.saveComparison(dataObj).then(resp => {
            this.setState({
                showComparisonModal: false,
                productsAddedForComparison: [],
                selectedProductIds: [],
                showToast: true
            })
            this.showToast(resp['data'].message, "success");
        });
    }

    render() {
        return (
            <div className='container-page'>
                <SideMenu />
                {this.state.showToast && <ToastContainer transition={Slide} />}
                <div className='grid-item2'>
                    {this.state.errorMsg && (<div className="error">
                        <p className="error-msg">{this.state.errorMsg}</p>
                    </div>)}
                    <SearchInput onSearchHandler={this.onSearchHandler} />
                    {this.props.showLoader ? <Spinner /> : this.props.brands.length > 0 ? <Products brands={this.props.brands} addForComparison={this.comparisonHandler} selectedProductIds={this.state.selectedProductIds} />
                        : <Brands />
                    }
                    {this.state.productsAddedForComparison.length === 2 ? (<a className="btn btn-primary compare-btn" onClick={this.openComparisonModal}>Show Comparison</a>) : null}
                    {this.state.showComparisonModal ? (<ComparisonModal show={this.state.showComparisonModal} saveComparison={this.saveComparisonHandler} closeModal={this.openComparisonModal} productsToCompare={this.state.productsAddedForComparison} isAuthenticated={this.props.isAuthenticated} />) : null}

                </div>
            </div>
        );
    }
}


const mapStateToProps = (state) => ({
    brands: state.productReducer.brands,
    showLoader: state.productReducer.showLoader,
    isAuthenticated: state.authReducer.isAuthenticated,
    user: state.authReducer.user,
})

const mapDispatchToProps = (dispatch) => {
    return {
        getProducts: (searchTerm) => dispatch(getProducts(searchTerm)),
        saveComparison: (postData) => dispatch(saveComparison(postData)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
