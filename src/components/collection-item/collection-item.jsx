import React from 'react'
import { connect } from "react-redux";
import { addItem } from "../../redux/cart/cart.actions";
import Button from "../button/button";

import './collection-item.scss';

const CollectionItem = ({ item, addItem }) => {
    return (
        <div className='collection-item'>
            <div className='collection-item__image'>
                <img src={item.imageUrl} alt={item.name}/>
                <Button
                    type="button"
                    mode="white"
                    className="collection-item__add-btn"
                    onClick={() => addItem(item)}
                >
                    Add to cart
                </Button>
            </div>
            <div className='collection-item__content'>
                <h3 className='collection-item__title'>{item.name}</h3>
                <span className='collection-item__price'>${item.price}</span>
            </div>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
});

export default connect(null, mapDispatchToProps)(CollectionItem);
