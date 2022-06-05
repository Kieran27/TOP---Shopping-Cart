import React from 'react'

const QuantitySelector = () => {
  return (
    <div className='selector-container'>
      <input type="number"/>
      <button className="minus">-</button>
      <button className="plus">+</button>
    </div>
  )
}

export default QuantitySelector
