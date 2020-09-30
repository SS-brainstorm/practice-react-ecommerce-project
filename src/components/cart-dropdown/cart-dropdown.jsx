import React from "react";
import classnames from "classnames";
import { connect } from "react-redux";

import "./cart-dropdown.scss";
import Button from "../button/button";
import CartItem from "../cart-item/cart-item";

const CartDropdown = ({ className, cartItems }) => {
    const dropdownClassName = classnames({
        'cart-dropdown': true,
        [className]: className,
    });

    return (
        <div className={dropdownClassName}>
            <div className="cart-dropdown__items">
                {
                    cartItems.map(cartItem => (
                        <CartItem key={cartItem.id} item={cartItem} className="cart-dropdown__item" />
                    ))
                }
            </div>
            <Button className="cart-dropdown__button">Go to checkout</Button>
        </div>
    );
};

const mapStateToProps = ({ cart }) => ({
    cartItems: cart.cartItems
})

export default connect(mapStateToProps)(CartDropdown);
