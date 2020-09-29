import React from "react";
import classnames from "classnames";
import { connect } from "react-redux";
import { ReactComponent as ShoppingIcon } from "../../assets/cart.svg";

import "./cart-button.scss";
import {toggleCartHidden} from "../../redux/cart/cart.actions";

const CartButton = ({ className, toggleCartHidden, ...rest }) => {
    const buttonClassName = classnames({
        'cart-button': true,
        [className]: className
    });

    return (
        <button className={buttonClassName} onClick={toggleCartHidden} {...rest}>
            <ShoppingIcon className="cart-button__icon" />
            <span className="cart-button__count">0</span>
        </button>
    );
};

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden()),
})

export default connect(null, mapDispatchToProps)(CartButton);
