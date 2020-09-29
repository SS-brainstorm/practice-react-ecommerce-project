import React from "react";
import classnames from "classnames";
import { connect } from "react-redux";

import "./cart-dropdown.scss";
import Button from "../button/button";

const CartDropdown = ({ showCart, className, ...rest }) => {
    const dropdownClassName = classnames({
        'cart-dropdown': true,
        [className]: className,
    });

    return (
        <div className={dropdownClassName} {...rest}>
            <div className="cart-dropdown__items">
                <div style={{ height: '50px' }}>1</div>
                <div style={{ height: '50px' }}>1</div>
                <div style={{ height: '50px' }}>1</div>
                <div style={{ height: '50px' }}>1</div>
                <div style={{ height: '50px' }}>1</div>
            </div>
            <Button className="cart-dropdown__button">Go to checkout</Button>
        </div>
    );
};

const mapStateToProps = ({ cart }) => ({
    showCart: cart.hidden
})

export default connect(mapStateToProps)(CartDropdown);
