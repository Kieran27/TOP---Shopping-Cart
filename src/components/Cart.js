import React from 'react'
import { Link } from 'react-router-dom'
import { TiDelete } from 'react-icons/ti'

const Cart = (props) => {
  if (props.cartArray.length === 0) {
    return (
      <div className="wrapper-generic flex-center">
        <div className="empty-cart-container">
          <h2>Your Cart Is Empty</h2>
          <Link to="/shop">
            <button className="btn-shopping button">
              Continue Shopping
            </button>
          </Link>
        </div>
      </div>
    )
  }
  return (
    <div className="wrapper-generic flex-center">
      <div className="cart-header">
        <h2>Your Cart</h2>
        <Link to="/shop">Continue Shopping</Link>
      </div>
      <div className="cart-grid-header">
        <span>Product</span>
        <span>Total</span>
      </div>
      <div className="cart-grid-container">
          {props.cartArray.map((item, index) => {
            return (
              <div className="cart-item" key={item.id}>
                <div className="cart-item-product-container">
                  <div className="cart-item-img-container">
                    <Link to='/product' state={item}>
                    <img src={item.img} alt=""/>
                    </Link>
                  </div>
                  <div className="cart-item-product-info-container">
                    <h4>{item.name}</h4>
                    <span>{`$${item.price}.00`}</span>
                    <span>Stock: {item.stock}</span>
                    <div className="cart-item-product-info-input-container">
                      <label htmlFor="qty">Qty:</label>
                      <div className="input-container-tertiary">
                        <input name="qty" min="0" max={item.stock} type="number" value={item.quantity} onChange={(e) => props.updateCartQuantity(e, index)}/>
                        <button className="btn-cart-delete" onClick={() => props.deleteCartItem(index)}><TiDelete/></button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="cart-item-total-container">
                  <span>{`$${item.totalPrice}.00`}</span>
                </div>

              </div>
            )
          })}
      </div>
      <div className="cart-total-container">
        <div className="cart-total-price">
          <span>Subtotal:</span>
          <span>{`$${props.total}.00`} AUD</span>
        </div>
          <button className='btn-checkout button'>Checkout</button>
      </div>
    </div>
  )
}

// <div className="cart-grid-container">
//     {props.cartArray.map((item, index) => {
//       return (
//         <div className="cart-item" key={item.id}>
//           <Link to='/product' state={item}>
//           <img src={item.img} alt=""/>
//           </Link>
//           <input min="0" max={item.stock} type="number" value={item.quantity} onChange={(e) => props.updateCartQuantity(e, index)}/>
//           <button className='button' onClick={() => props.deleteCartItem(index)}>Delete</button>
//         </div>
//       )
//     })}
// </div>

export default Cart
