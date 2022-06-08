import React from 'react'
import { Link } from 'react-router-dom'
import { TiArrowRight } from 'react-icons/ti'
import { AiFillGithub } from 'react-icons/ai'
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
    <footer className="footer-container-full">
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
              email: <span className='footer-info'>Loremipsum@dolorsit.com</span>
            </li>
            <li>
              phone: <span className='footer-info'>+ xxx xxx xxx</span>
            </li>
            <li>
              address: <span className='footer-info'>?? ??? ????</span>
            </li>
          </ul>
        </div>
        <div className="footer-item-container">
          <h3>Author</h3>
          <ul>
            <li className='github-item'>
              Kieran Singh
            </li>
            <li className='github-item'>
              <a
                href="https://github.com/Kieran27">
                <AiFillGithub className='github-item' style={{fontSize: '2rem'}}/>
              </a>
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
    </footer>
  )
}

export default Footer
