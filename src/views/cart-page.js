import React, { Component } from 'react';
import { connect } from 'react-redux';
import OrderFormDetails from '../views/order-form-details';

class CartPage extends Component {
    render() {
        return (
            <div style={{width:"100%", float:"left"}}>
                <div style={{width:"70%", float:"left"}}>
                    {this.props.shoppingCartStore.noOfItemsInCart.map((item, key)=>{
                        return <div key={key} className="cart-items">
                                    <img src= {item.imgUrl} style={{width: "100px", height: "100px"}}/> 
                                    <div style={{width:"70%", position:"absolute", left:"50%", top:"50%", transform: "translate(-50%, -50%)"}}>
                                        <span style={{width:"150px", float:"left"}}> <b>Name:</b><br/> {item.name}</span>
                                        <span style={{width:"100px", float:"left"}}> <b>Price:</b><br/> {item.price}</span>
                                        <span style={{width:"100px", float:"left"}}> <b>Quantity:</b><br/> {item.noOfSelect}</span>
                                        <span style={{width:"100px", float:"left"}}> <b>Total Price:</b><br/> {item.price * item.noOfSelect}</span>
                                    </div>
                                </div>
                    })}
               </div>
               <div style={{width:"28%", float:"right",}}>
                    <div style={{ display:"flex", background:"#e8e9ea", padding:"20px"}}>
                        <p style={{textTransform : "uppercase"}}> 
                            Total No of Items : <b>{this.props.shoppingCartStore.noOfItemsInCart.map(item=> item.noOfSelect).reduce((a, b) => a + b, 0)}</b><br/>
                            Total Price : <b>{ this.props.shoppingCartStore.noOfItemsInCart.map(item=> item.totalPrice).reduce((a, b) => a + b, 0) }</b>
                        </p>
                   </div>
                   {this.props.shoppingCartStore.noOfItemsInCart.length !== 0 ?  
                    <div className="order-details-section">
                       <OrderFormDetails /> 
                    </div> 
                : "" }
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

export default connect( mapStateToProps, { })(CartPage);