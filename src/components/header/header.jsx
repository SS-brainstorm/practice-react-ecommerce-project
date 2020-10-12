import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import "./header.scss";
import { ReactComponent as LogoIcon } from "../../assets/crown.svg";
import CartButton from "../cart-button/cart-button";
import CartDropdown from "../cart-dropdown/cart-dropdown";
import {selectCurrentUser} from "../../redux/user/user.selectors";
import {selectCartHidden} from "../../redux/cart/cart.selectors";

// TODO: realise active link

const Header = ({ showCart, currentUser, signOut }) => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <Link to="/" className="header__logo">
            <LogoIcon className="logo" />
          </Link>
          <nav className="header__nav">
            <Link className="header__nav-item" to="/shop">Shop</Link>
            <Link className="header__nav-item" to="/contacts">Contact</Link>
            {
              currentUser
                  ? <a href="#" className="header__nav-item" onClick={signOut}>Sign-out</a>
                  : <Link className="header__nav-item" to="/login">Sign-in</Link>
            }
            <CartButton className="header__nav-item" />
          </nav>
          { !showCart ? <CartDropdown className="header__cart-dropdown" /> : null }
        </div>
      </div>
    </header>
  )
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  showCart: selectCartHidden
});

export default connect(mapStateToProps)(Header);
