import React from 'react'
import { NavLink } from 'react-router-dom'
import { TiTimes } from 'react-icons/ti'

const Sidebar = ({toggleNav, navStatus}) => {
  return (
    <div className={navStatus ? "sidenav active-nav" : "sidenav"}>
      {/*<button onClick={() => toggleNav()} ><TiTimes /></button>*/}
      <NavLink to="/" onClick={() => toggleNav()}>
        Home
      </NavLink>
      <NavLink to="/about" onClick={() => toggleNav()}>
        About
      </NavLink>
      <NavLink to="/shop" onClick={() => toggleNav()}>
        Shop
      </NavLink>
    </div>
  )
}


export default Sidebar
