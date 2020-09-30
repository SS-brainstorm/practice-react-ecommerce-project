import React from 'react'
import CollectionItem from '../collection-item/collection-item';

import './collection-preview.scss';

const CollectionPreview = ({ title, items }) => {
  return (
    <section className='collection-preview'>
      <h2 className='collection-preview__title'>{title}</h2>
      <div className='collection-preview__list'>
        {
          items
            .filter((item, idx) => idx < 4)
            .map((item) => <CollectionItem key={item.id} item={item} />)
        }
      </div>
    </section>
  )
}

export default CollectionPreview
