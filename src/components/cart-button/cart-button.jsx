import React from "react";
import classnames from "classnames";
import { connect } from "react-redux";
import { ReactComponent as ShoppingIcon } from "../../assets/cart.svg";

import "./cart-button.scss";
import { toggleCartHidden } from "../../redux/cart/cart.actions";
import { selectCartItemsCount } from "../../redux/cart/cart.selectors";
import {createStructuredSelector} from "reselect";


const CartButton = ({ className, toggleCartHidden, cartItemsCount, ...rest }) => {
    const buttonClassName = classnames({
        'cart-button': true,
        [className]: className
    });

    return (
        <button className={buttonClassName} onClick={toggleCartHidden} {...rest}>
            <ShoppingIcon className="cart-button__icon" />
            <span className="cart-button__count">{cartItemsCount}</span>
        </button>
    );
};

const mapStateToProps = createStructuredSelector({
    cartItemsCount: selectCartItemsCount
});

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartButton);
