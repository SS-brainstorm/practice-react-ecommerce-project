import React from 'react'
import './collection-item.scss';

const CollectionItem = ({ imageUrl, name, price }) => {
  return (
    <div className='collection-item'>
      <div className='collection-item__image'>
        <img src={imageUrl} alt={name} />
        <button className='collection-item__add-btn'>Add to cart</button>
      </div>
      <div className='collection-item__content'>
        <h3 className='collection-item__title'>{name}</h3>
        <span className='collection-item__price'>${price}</span>
      </div>
    </div>
  )
}

export default CollectionItem
