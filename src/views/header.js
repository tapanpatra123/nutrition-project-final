import React, { Component } from 'react';
import CartIcon from '../components/cart-icon';
import { connect } from 'react-redux';
import {  } from "../actions/shooping-cart-action";
import { withRouter } from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faCheckSquare, download, faAddressBook } from '@fortawesome/fontawesome-free-solid';
import Button from '../components/button'
import {updateCurrentPage, getAllIngredientsList} from '../actions/shooping-cart-action'
import jsonFile from '../data/salad.json'

class Header extends Component {
    constructor(props) {
        super();
        this.state = {
            isDisplaySearchField: false
        }
    }
    componentDidMount(){
        this.props.history.push(`/contains-greetings`);
    }
    handleClickCardIcon=()=>{
        this.props.history.push(`/cart-page`);
    }
    handleOnclick=()=>{
        this.props.updateCurrentPage("ingredients-list");
        this.props.history.push(`/ingredients-list`);
        this.props.getAllIngredientsList(jsonFile.items);
    }

    render() {
        console.log("locationlocation=>", window.location.pathname)
        return (
            <div className="full-width">
                <div className="half-width-r">
                    
                    {this.props.shoppingCartStore.currentPage === "contains-greetings" ?
                        <div style={{textAlign:"right"}}>
                            <Button
                                btnText ={"Order Salad"}
                                style={{background : "#fff", border:"none", cursor:"pointer", outline:"none", padding:"8px 30px", borderRadius : '16px', fontSize:"17px", color:"#009688",}}
                                onClick={this.handleOnclick}
                            />
                        </div> 
                        : "" 
                    }

                    { this.props.shoppingCartStore.currentPage === "ingredients-list" ?   
                        <div style={{textAlign:"right", padding:"5px 0"}}>
                            <CartIcon 
                                iconName={"shopping-cart"}
                                iconColor={"#fff"} 
                                iconFontSize={"24px"}
                                noOfAddedItemInCart={this.props.shoppingCartStore.noOfItemsInCart.map(item=> item.noOfSelect).reduce((a, b) => a + b, 0)}
                                clickCartIcon={this.handleClickCardIcon}
                            />
                        </div>
                    : "" 
                    }
               </div>
            </div >
        );
    }
}
function mapStateToProps(store) {
    return {
        shoppingCartStore : store.shoppingCartStore
    };
}

export default connect( mapStateToProps, { updateCurrentPage, getAllIngredientsList })(withRouter(Header));