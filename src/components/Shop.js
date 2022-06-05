import React from 'react'
import { data } from '../data/product-data.js'
import { Link } from 'react-router-dom'

const Shop = (props) => {
  return (
    <div className="wrapper-generic">
      <h2 className="container-header">Products</h2>
        <div className="wrapper-generic shop-container">
        {data.map((obj, index) => {
          return (
            <Link to='/product' key={obj.id} state={obj}>
            <div className="shop-item" >
            <img src={obj.img} alt=""/>
            <span>Item Brand</span>
            <br/>
            <p className='shop-item-name'>{obj.name}</p>
            <br/>
            <p className='shop-item-price'>{`$${obj.price}.00`}</p>
            {/*<button onClick={() => props.addToCart(obj)}>Add To Cart</button>*/}
            </div>
            </Link>
          )
        })}
        </div>
    </div>
  )
}

export default Shop
