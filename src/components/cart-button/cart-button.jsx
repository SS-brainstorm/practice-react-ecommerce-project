import React from "react";
import classnames from "classnames";
import { connect } from "react-redux";
import { ReactComponent as ShoppingIcon } from "../../assets/cart.svg";

import "./cart-button.scss";
import {toggleCartHidden} from "../../redux/cart/cart.actions";

const CartButton = ({ className, toggleCartHidden, cartItems, ...rest }) => {
    const buttonClassName = classnames({
        'cart-button': true,
        [className]: className
    });

    const cartItemsCount = cartItems.reduce((cur, next) => {
        cur += next.quantity;
        return cur;
    }, 0);

    return (
        <button className={buttonClassName} onClick={toggleCartHidden} {...rest}>
            <ShoppingIcon className="cart-button__icon" />
            <span className="cart-button__count">{cartItemsCount}</span>
        </button>
    );
};

const mapStateToProps = ({ cart }) => ({
    cartItems: cart.cartItems,
});

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartButton);
