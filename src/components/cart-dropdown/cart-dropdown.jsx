import React from "react";
import classnames from "classnames";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { withRouter } from "react-router-dom";

import { selectCartItems } from "../../redux/cart/cart.selectors";
import { toggleCartHidden } from "../../redux/cart/cart.actions";

import Button from "../button/button";
import CartItem from "../cart-item/cart-item";

import "./cart-dropdown.scss";


const CartDropdown = ({ className, cartItems, history, dispatch }) => {
    const dropdownClassName = classnames({
        'cart-dropdown': true,
        [className]: className,
    });

    const haveItems = cartItems.length > 0;

    const goToCheckout = () => {
        dispatch(toggleCartHidden());
        history.push('/checkout');
    }

    return (
        <div className={dropdownClassName}>
            <div className="cart-dropdown__items">
                {
                    haveItems
                        ? cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem} className="cart-dropdown__item"/>)
                        : (<div className="cart-dropdown__message">Please add items to cart!</div>)
                }
            </div>
            <Button onClick={goToCheckout} className="cart-dropdown__button" disabled={!haveItems || null}>Go to checkout</Button>
        </div>
    );
};

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
