import React, { Component } from 'react';
import { connect } from 'react-redux';
import {getAllIngredientsList, updateCurrentPage, addToCartProduct} from '../actions/shooping-cart-action'
import Button from '../components/button'

class IngredientsList extends Component {
    constructor(props) {
        super();
        this.state = {
        }
    }

    componentDidMount(){
      this.props.updateCurrentPage("ingredients-list")
    }
    handleOnclick(item){
        this.props.addToCartProduct(item);
    }

    render() {
        return (
            <div className="list-page">
               <ul>
                   {this.props.shoppingCartStore.allIngredientsList.map((item, key )=>{
                       return <li key={key}>
                                    <img src={item.imgUrl} />
                                    <span style={{fontSize:"20px", padding:"10px 0"}}>{item.name}</span>
                                    <div style={{margin : "10px 0"}}>
                                        <Button 
                                            btnText ={"Add to Cart"}
                                            style={{background : "#009688", border:"none", cursor:"pointer", outline:"none", padding:"6px 25px", borderRadius : '16px', fontSize:"15px", color:"#fff",}}
                                            onClick={this.handleOnclick.bind(this, item )}
                                        /> 
                                        &nbsp; {item.noOfSelect !== undefined ? item.noOfSelect : ""}
                                    </div>
                             </li>
                   })}

               </ul>
            </div >
        );
    }
}

function mapStateToProps(store) {
    return {
        shoppingCartStore : store.shoppingCartStore
    };
}

export default connect( mapStateToProps, { getAllIngredientsList, updateCurrentPage, addToCartProduct  })(IngredientsList);