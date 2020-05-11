import React, { Component } from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faCheckSquare, download, faAddressBook } from '@fortawesome/fontawesome-free-solid';

class CartIcon extends Component {
    render() {
        return (
            <span onClick={this.props.clickCartIcon} style={{color:"#fff", fontSize:"20px", position:"relative", cursor:"pointer"}}>
                <span className="cartIcon-top">
                <span style={{position:"absolute", transform:"translate(-50%, -50%)", left:"50%", top:"50%"}}>{this.props.noOfAddedItemInCart}</span>
                </span>
                <span style={{color: this.props.iconColor, fontSize: this.props.iconFontSize }}><FontAwesomeIcon icon= {this.props.iconName} /></span>
            </span>
        );
    }
}

export default CartIcon;