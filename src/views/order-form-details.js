import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import  TextField from '../components/text-field';
import  TextArea from '../components/text-area';
import  Button from '../components/button';
import Modal from '../components/modal';

const modalStyle = {
	overlay: {
		backgroundColor: "rgba(0, 0, 0,0.5)"
	}
};

class OrderFormDetails extends Component {
    constructor(props) {
        super();
        this.state = {
            formData : {name : "", email: ""},
            validation : { name : "", email : ""},
            isModalOpen: false,
			isInnerModalOpen: false
        }
    }

    handleTextFieldOnChange=(e)=>{
        this.setState({
            formData : {...this.state.formData, [e.target.name] : e.target.value}
        },()=>{
            if(this.state.validation.name !== ""){
                this.setState({ validation : {...this.state.validation, name : ""} })
            }
            if(this.state.validation.email !== ""){
                this.setState({ validation : {...this.state.validation, email : ""} })
            }
        })
    }

    closeModal=()=> {
		this.setState({ isModalOpen: false });
        this.props.history.push(`/contains-greetings`);
	}

	openModal=()=> {
        let emailValidity = /\S+@\S+\.\S+/;
        this.setState({ validation : { name : this.state.formData.name !== "" ? "" : "Required",  email : emailValidity.test(this.state.formData.email) ? "" : "Your email id is not Valid" } },()=>{
            this.setState({
			isModalOpen: this.state.validation.name !== "" || this.state.validation.email !== "" ? false : true
		    });
        })
	}

    render() {
        return (
            <React.Fragment>
                <TextField type ="text" field ="name" label="Name" placeholder="Your Name" isRequired = {true} onChange={this.handleTextFieldOnChange} validation={this.state.validation.name}/><br/>
                <TextField type ="text" field ="email" label="Email" placeholder="Your Email" isRequired = {true} onChange={this.handleTextFieldOnChange} validation ={this.state.validation.email}/><br/>
                <TextArea field ="notes" label="Additional Notes" placeholder="Add Notes" rows={4} cols = {50} onChange={this.handleTextFieldOnChange}/>
                
                <div style={{display:"flex", alignItems:"center", flexDirection:"column", marginTop:"20px"}}>
                    <Button
                        btnText ={"Place Order"}
                        style={{background : "#009688", border:"none", cursor:"pointer", outline:"none", padding:"8px 30px", borderRadius : '16px', fontSize:"17px", color:"#fff",}}
                        onClick={this.openModal}
                    />
                </div>

                <Modal isModalOpen={this.state.isModalOpen} closeModal={this.closeModal} style={modalStyle} >
                    <div>
                        <span style={{width:"50%", float:"left"}}> <b>Name:</b></span>
                        <span style={{width:"50%", float:"left"}}> <b>Quantity:</b></span>
                        {this.props.shoppingCartStore.noOfItemsInCart.map((item, key)=>{
                            return <div key={key}>
                                        <span style={{width:"50%", float:"left"}}> <br/> {item.name}</span>
                                        <span style={{width:"50%", float:"left"}}> <br/> {item.noOfSelect}</span>
                                    </div>
                        })}

                        <h2 style={{margin:"10px 0"}}>Thank you and Delivery is on its way</h2>

                        <div style={{margin: '15px 0', textAlign:"center"}}>
                            <Button
                                btnText ={"Close"}
                                style={{background : "#009688", border:"none", cursor:"pointer", outline:"none", padding:"8px 30px", borderRadius : '16px', fontSize:"17px", color:"#fff",}}
                                onClick={this.closeModal}
                            />
                        </div>

                    </div>

                    
                </Modal>

            </React.Fragment>
        );
    }
}
function mapStateToProps(store) {
    return {
        shoppingCartStore : store.shoppingCartStore
    };
}

export default connect( mapStateToProps, { })(withRouter(OrderFormDetails));
