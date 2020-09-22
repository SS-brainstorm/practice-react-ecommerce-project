import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import classnames from 'classnames';

import './menu-item.scss';

const MenuItem = ({ image, title, large, history, match, url }) => {
  const itemClassName = classnames({
    'menu-item': true,
    'is-large': large,
  });

  return (
    <div className={itemClassName}>
      <Link to={`${match.url}${url}`} className='menu-item__wrapper'>
        <img
          src={image}
          alt={`${image} - ${title}`}
          className='menu-item__image'
        />
        <div className='menu-item__content'>
          <h2 className='menu-item__title'>{title}</h2>
          <span className='menu-item__subtitle'>Shop Now</span>
        </div>
      </Link>
    </div>
  );
};

export default withRouter(MenuItem);
