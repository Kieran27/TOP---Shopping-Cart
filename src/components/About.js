import React from 'react'
import image2 from '../images/david-jones-img.jpg'
import image3 from '../images/milada-vigerova-img.jpg'

const About = () => {
  return (
    <div className="wrapper-generic">
      <h2 className="container-header">About</h2>
      <div className="about-container">
        <div className="about-section">
          <img src={image2} alt=""/>
        </div>
        <div className="about-section">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium accusamus eum, dolorem nisi corrupti.
            Laudantium quo laboriosam corrupti corporis, ullam quia facere, consequatur illum qui accusamus tempora
            distinctio quidem dicta magni, ea esse eos modi quae laborum repellendus nobis, quisquam.
          </p>
        </div>
        <div className="about-section">
          <img src={image3} alt=""/>
        </div>
        <div className="about-section">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum laborum quidem iusto cupiditate dolor molestias
            perspiciatis nostrum omnis officia. Amet fuga ullam sit facilis, mollitia quasi odio quidem! Maxime quidem
            nesciunt officiis, consequatur, vero porro totam cum blanditiis quo nihil amet maiores tempore ullam fuga
            suscipit! Aliquid consectetur beatae repellendus!
          </p>
        </div>
      </div>

    </div>
  )
}

export default About
