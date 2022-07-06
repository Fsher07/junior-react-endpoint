import React from 'react';
import { NavLink } from 'react-router-dom';
import currency from '../icons/currency.svg';
import cartLogo from '../icons/empty_cart.svg';
import middleLogo from '../icons/VSF.svg';
import downArrow from '../icons/down_arrow.svg';
import './navbar.css';

class NavBar extends React.PureComponent {
  render() {
    return (
      <header className="navbar">
        <nav className="nav-links">
          <NavLink to="/women" activeClassName="active" className="nav-link">WOMEN</NavLink>
          <NavLink to="/men" className="nav-link">MEN</NavLink>
          <NavLink to="/kids" className="nav-link">KIDS</NavLink>
        </nav>
        <img src={middleLogo} alt="middle logo" />
        <div className="cart-logos">
          <img src={currency} alt="currency icon" />
          <img src={downArrow} alt="arrow icon" />
          <img src={cartLogo} alt="empty cart" />
        </div>
      </header>
    );
  }
}

export default NavBar;
