import React from "react";
import { connect } from "react-redux";

import "./checkout.scss";
import {createStructuredSelector} from "reselect";
import {selectCartItems, selectCartItemsTotal} from "../../redux/cart/cart.selectors";
import CheckoutItem from "../../components/checkout-item/checkout-item";
import StripeButton from "../../components/stripe-button/stripe-button";

const CheckoutPage = ({ cartItems, total }) => {
    const removeItem = () => {
        console.log('remove-item');
    };

    return (
        <div className="container">
            <table className="checkout-table">
                <thead>
                    <tr>
                        <th scope="col">Product</th>
                        <th scope="col">Description</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Price</th>
                        <th scope="col">Remove</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        cartItems.map(item => (
                            <CheckoutItem key={item.id} item={item} />
                        ))
                    }
                </tbody>
            </table>
            <div className="checkout-footer">
                {
                    total > 0
                        ? <p className="checkout-total">TOTAL PRICE : ${total}</p>
                        : null
                }
                <div className="checkout-footer-button">
                    <StripeButton />
                </div>
            </div>

        </div>
    );
};

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartItemsTotal
});

export default connect(mapStateToProps)(CheckoutPage);
