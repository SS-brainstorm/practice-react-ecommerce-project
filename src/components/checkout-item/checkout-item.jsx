import React from 'react';
import { connect } from "react-redux";
import { removeItemAbsolute, addItem, removeItem } from "../../redux/cart/cart.actions";

const CheckoutItem = ({ item, removeAbsolute, addItem, removeItem }) => {
    const { imageUrl, name, quantity, price, id } = item;

    return (
        <tr>
            <td>
                <img src={imageUrl} alt=""/>
            </td>
            <td>{name}</td>
            <td>
                <button type="button" onClick={() => removeItem(item)} className="checkout-action" disabled={quantity === 1}>&lsaquo;</button>
                <span>{quantity}</span>
                <button type="button" onClick={() => addItem(item)} className="checkout-action">&rsaquo;</button>
            </td>
            <td>${price}</td>
            <td>
                <button className="checkout-action" onClick={() => removeAbsolute(id)}>&times;</button>
            </td>
        </tr>
    );
};

const mapDispatchToProps = dispatch => ({
    removeAbsolute: id => dispatch(removeItemAbsolute(id)),
    addItem: item => dispatch(addItem(item)),
    removeItem: item => dispatch(removeItem(item))
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
