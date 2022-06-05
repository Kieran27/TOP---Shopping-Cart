import React from 'react'
import { useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { TiMinus, TiPlus } from 'react-icons/ti'

const ProductPage = (props) => {

  const initialState = () => {
    if (!location.state.quantity) {
      return 1
    }
    return location.state.quantity
  }

    const location = useLocation()
    const [quantity, setItemQuantity] = useState(initialState())

  const onChange = (e) => {
    setItemQuantity(e.target.value)
  }

  useEffect(() => {
    location.state.quantity = parseInt(quantity)
  },[quantity, location])

  return (
    <div className="wrapper-generic">
      <div className="product-page-container">
        <div className="item-container">
          <img src={location.state.img} alt=""/>
        </div>
        <div className="info-container">
          <div className="info-container-header">
            <h2>{location.state.name}</h2>
            <Link to="/shop">Back To Shopping</Link>
          </div>
          <p className="product-price">{`$${location.state.price}.00`}</p>
          <span>Tax Included. Shipping Calculated At Checkout</span>
          <span>InStock: {location.state.stock}</span>
          <div className="product-page-functionality-container">
            <label htmlFor="quantity">Quantity</label>
            <div className="input-quantity-container">
              <input name="quantity" min="1" max={location.state.stock} type="number" value={quantity} onChange={onChange}/>
            </div>
            <button className="btn-add-to-cart" onClick={() => props.addToCart(location.state, quantity)}>Add To Cart</button>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime, reprehenderit nam? Odit dolore
            dolores quae corporis illo veritatis recusandae, impedit, odio nihil eveniet sit est, expedita
            fugiat iste labore explicabo.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. In cupiditate adipisci, voluptates,
            voluptatibus veritatis aspernatur, nam temporibus sapiente rerum optio reprehenderit quidem sit
            nostrum iste. Ratione laborum voluptas animi nobis ut veniam corrupti deleniti harum numquam,
            eligendi, debitis quasi voluptatem quibusdam impedit nesciunt nihil nisi.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem dolor magni quos iure tempora expedita.
          </p>
        </div>
      </div>
    </div>
  )
}

export default ProductPage
