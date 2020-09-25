import React from 'react';
// import classnames from 'classnames';
import { Link, withRouter } from 'react-router-dom';

import './header.scss';
import { ReactComponent as LogoIcon } from '../../assets/crown.svg';
// import { ReactComponent as CartIcon } from '../../assets/cart.svg';

// TODO: realise active link

const Header = ({ currentUser, signOut }) => {
  return (
    <header className='header'>
      <div className='container'>
        <div className='header__wrapper'>
          <Link to='/' className='header__logo'>
            <LogoIcon className='logo' />
          </Link>
          <nav className='header__nav'>
            <Link className='header__nav-item' to='/shop'>Shop</Link>
            <Link className='header__nav-item' to='/contacts'>Contact</Link>
            {
              currentUser
                  ? <a href='#' className='header__nav-item' onClick={signOut}>Sign-out</a>
                  : <Link className='header__nav-item' to='/login'>Sign-in</Link>
            }
          </nav>
        </div>
      </div>
    </header>
  )
}

export default withRouter(Header);
