import React, { useState } from 'react'
import SHOP_DATA from './shop.data';
import CollectionPreview from '../../components/collection-preview/collection-preview';

const ShopPage = () => {
  const [shopData, setShopData] = useState({
    collections: SHOP_DATA
  });

  const { collections } = shopData;

  return (
    <div className='container'>
      {
        collections.map(({ id, ...rest }) => (
          <CollectionPreview key={id} {...rest} />
        ))
      }
    </div>
  )
}

export default ShopPage;
