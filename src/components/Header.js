import React from 'react'
import { Link, NavLink } from "react-router-dom";
import { TiShoppingCart, TiThMenu } from "react-icons/ti"
import '../index.css'

const Header = ({cartArray, toggleNav}) => {
  return (
    <header className="header">
      <div className="hamburger-menu-container" onClick={() => toggleNav()}><TiThMenu /></div>
      <div className="header-left">
        <Link to="/"><h1>Bike Store</h1></Link>
      </div>
      <div className="header-right">
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/shop">Shop</NavLink>
          </li>
          <li className="li-item-cart">
            {/*<div className="li-item-cart-number">0</div>*/}
            <NavLink to="/cart">Cart({cartArray.length})</NavLink>
          </li>
        </ul>
      </div>

    </header>
  )
}

export default Header
