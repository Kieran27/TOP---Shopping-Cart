import React from 'react'
import '../index.css'
import { Link } from 'react-router-dom'
import image from '../images/bike-seat-lineup.jpg'
import image1 from '../images/dichatz-img.jpg'
import image2 from '../images/david-jones-img.jpg'
import image3 from '../images/milada-vigerova-img.jpg'
import image4 from '../images/sergey-mikheev-img.jpg'
import SignUpModal from './sign-up-modal.js'

const LandingPage = () => {
  return (
    <div className="wrapper">
      <div className='landing-banner'>
      </div>
      <div className="mission-statement-container">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta aperiam maiores nulla architecto accusantium hic cumque reiciendis optio distinctio,
          aliquid, excepturi, officiis ab totam sunt quibusdam rem sapiente explicabo? Et voluptatibus necessitatibus debitis, dolores, repellat dicta nostrum
          enim voluptates vero.
        </p>
        <div className="mission-statement-button-container">
          <Link to="/about">
            <button className='button'>Read More</button>
          </Link>
        </div>
      </div>
      <div className="testimonial-container-header"><h2>Why Us?</h2></div>
      <div className="testimonial-container">
        <div className="testimonial">
          <img src={image} alt=""/>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias porro placeat nulla illum, optio harum, eveniet
          expedita, in quas vero eius architecto mollitia asperiores dignissimos minima nobis pariatur voluptatum, atque suscipit.
          Aut dolor tempora fugiat corrupti, ullam natus soluta. Ipsam.
          </p>
        </div>
        <div className="testimonial">
          <img src={image1} alt=""/>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et, consequatur, labore! Sed quaerat nam id magnam harum atque
          corporis error obcaecati fuga ab, voluptatem minus veniam alias dignissimos mollitia, dolore sit architecto natus molestias
          rem quia maxime qui ut! Cumque, omnis. Architecto nesciunt, explicabo doloremque.
          </p>
        </div>
        <div className="testimonial">
          <img src={image4} alt=""/>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias porro placeat nulla illum, optio harum, eveniet
          expedita, in quas vero eius architecto mollitia asperiores dignissimos minima nobis pariatur voluptatum, atque suscipit.
          </p>
        </div>
      </div>
    </div>
  )
}

export default LandingPage
