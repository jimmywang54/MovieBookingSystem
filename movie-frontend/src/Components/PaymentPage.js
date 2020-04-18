import React, { Component } from "react";

import StripeCheckout from 'react-stripe-checkout';

const STRIPE_PUBLIC_KEY = "pk_test_rXmcKk4Mgsl8VbhTWGWennwg0066CCssRI";

export default class PaymentPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            seat: props.location.state.seat,
            filmSessionId: props.location.state.filmSessionId
            
        }

        this.handleToken = this.handleToken.bind(this);
    }

    handleToken(token, address) {
        console.log({token, address});
    }

    render() {
        return(
            <div>
                <h1>{this.state.movieName}</h1>
                <StripeCheckout 
                    stripeKey={STRIPE_PUBLIC_KEY}
                    token={this.handleToken}
                    amount={this.state.price * 100}
                    name={this.state.movieName}
                />
            </div>
        );
    }
}