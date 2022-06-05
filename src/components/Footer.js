import React from 'react'
import { Link } from 'react-router-dom'
import { TiArrowRight } from 'react-icons/ti'
import '../index.css'

const Footer = () => {

  const onChange = (e) => {
    const value = e.target.value;
  }

  const onSubmit = (e) => {
    e.preventDefault()
    alert("Thank You!")
  }

  return (
    <div className="footer-container-full">
      <footer className="footer-container">
        <div className="footer-item-container">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/shop">Shop</Link>
            </li>
          </ul>
        </div>
        <div className="footer-item-container">
          <h3>Contact Us</h3>
          <ul>
            <li>
              email: Loremipsum@dolorsit.com
            </li>
            <li>
              phone: + xxx xxx xxx
            </li>
            <li>
              address: ????
            </li>
          </ul>
        </div>
        <div className="footer-item-container">
          <h3>Author</h3>
          <ul>
            <li>
              Kieran Singh
            </li>
            <li>
              Github: <a href="#"></a>
            </li>
            <li>
              Github: <a href="#"></a>
            </li>
          </ul>
        </div>
        <div className="footer-item-container">
          <h3>Hear From Us</h3>
          <form onSubmit={onSubmit}>
            <div className="footer-form-container">
              <input type="email" onChange={onChange} placeholder="Email Address"/>
              <button type="submit"> <TiArrowRight/> </button>
            </div>
          </form>
        </div>
      </footer>
    </div>
  )
}

export default Footer
