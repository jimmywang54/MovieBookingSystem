import React, { Component } from "react";
import CreditCardInput from 'react-credit-card-input';
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom"

import UserService from '../Services/User_service';

export default class CreditCard extends Component {
    
    constructor(props) {
        super(props);
        this.state ={
            cardNumber: "",
            expiry: "",
            cvc: "",
            message: "",
            successful: false,
            isloading: false
        }

        this.handleCardNumberChange = this.handleCardNumberChange.bind(this);
        this.handleCardExpiryChange = this.handleCardExpiryChange.bind(this);
        this.handleCardCVCChange = this.handleCardCVCChange.bind(this);
        this.handleCardSubmit = this.handleCardSubmit.bind(this);
    }

    handleCardNumberChange(e) {
        this.setState({
            cardNumber: e.target.value
        })
    }

    handleCardExpiryChange(e) {
        this.setState({
            expiry: e.target.value
        })
    }

    handleCardCVCChange(e) {
        this.setState({
            cvc: e.target.value
        })
    }

    handleCardSubmit(e) {

        this.setState({
            isloading: true
        })

        var number = this.state.cardNumber.replace(/\s/g, '');
        var eMon = this.state.expiry.split("/")[0];
        var eYear = this.state.expiry.split("/")[1];
        UserService.addPayment(number, eMon, eYear, this.state.cvc)
            .then(res => {
                this.setState({
                    message: "Credit Card Successfully Added!",
                    successful: true,
                    isloading: false
                })
            })
            .catch(err => {
                this.setState({
                    message: "Your card number is incorrect",
                    isloading: false
                })
            })
    }

    render() {
        console.log(this.state.cardNumber);
        console.log(this.state.expiry);
        console.log(this.state.cvc);
        return(
            <div>
            <h3>Add Credit Card: </h3>
            <Form onSubmit={this.handleCardSubmit}>
            <CreditCardInput 
                cardNumberInputProps={{ value: this.state.cardNumber, onChange: this.handleCardNumberChange }}
                cardExpiryInputProps={{ value: this.state.expiry, onChange: this.handleCardExpiryChange }}
                cardCVCInputProps={{ value: this.state.cvc, onChange: this.handleCardCVCChange }}
                fieldClassName="creditCardInput"
            />
            <Button className="creditCardButton" type='submit'>Submit</Button>
            </Form>
            {
                (this.state.message) ? (
                    <div className="form-group">
                        <div className="alert alert-danger" role="alert">
                            {this.state.message}
                        </div>
                    </div>
                ) : (<Link to="/profile"></Link>)
            }
            </div>
        )
    }
}