import React from "react";
import classnames from "classnames";

import "./cart-item.scss";

const CartItem = ({ item }) => {
    const { imageUrl, name, price, quantity, className } = item;

    const itemClassName = classnames({
        'cart-item': true,
        [className]: className
    });

    return (
        <div className={itemClassName}>
            <img src={imageUrl} className="cart-item__image" alt={name} />
            <div className="cart-item__content">
                <h4 className="cart-item__text">{name}</h4>
                <p className="cart-item__text">{quantity} x ${price}</p>
            </div>
        </div>
    );
};

export default CartItem;
