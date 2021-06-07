import React, { Component } from 'react'
import StripeCheckout from 'react-stripe-checkout'
import {connect} from 'react-redux';
import * as actions from '../actions';

class Payments extends Component {
    render() {
        return (
            <StripeCheckout
                name="FAyYE" //başlık için
                description="Confirm your card details to order."  
                amount={500}
                token={token=>this.props.handleToken(token)} // ödeme bilgilerini toplar
                stripeKey={process.env.REACT_APP_STRIPE_KEY}
            >
                <button className="buybtn" >Buy Now</button>
            </StripeCheckout>
        )
    }
}


export default connect(null,actions)(Payments)