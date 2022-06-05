import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from 'react'
import Header from './components/Header.js'
import Footer from './components/Footer.js'
import AnnouncementBar from './components/Announcement-Bar.js'
import LandingPage from './components/Landing-Page.js'
import About from './components/About.js'
import Shop from './components/Shop.js'
import Cart from './components/Cart.js'
import ProductPage from './components/Product-Page.js'
import Sidebar from './components/Sidebar.js'
import SignUpModal from './components/sign-up-modal.js'
import QuantitySelector from './components/Utility-Components/quantity-selector.js'

const App = () => {
  let [cartArray, setCartArray] = useState([])
  let [total, setTotal] = useState(0)
  let [navIsOpen, setNavIsOpen] = useState(false)

  const addToCart = (obj, qty) => {
    // If Item already exits - exit function
    if (sameItem(obj, qty)) return
    const itemCopy = obj
    // Add/Update quantity and total price props to object
    itemCopy.quantity = parseInt(qty)
    itemCopy.totalPrice = itemCopy.quantity * itemCopy.price
    // Set updated array
    setCartArray([...cartArray, itemCopy])
  }

  const sameItem = (obj, qty) => {
    if (cartArray.some((item) => item.id === obj.id)) {
      obj.quantity = parseInt(qty)
      obj.totalPrice = obj.quantity * obj.price
      const itemIndex = cartArray.findIndex(item => item.id === obj.id)
      console.log(itemIndex)
      updateCartItem(obj, itemIndex)
      return true
    }
    return false
  }

  const updateCartItem = (obj, index) => {
    const arrCopy = [...cartArray]
    arrCopy.splice(index, 1, obj)
    setCartArray(arrCopy)
  }

  const updateCartQuantity = (e, index) => {
    // Make Deep copies of item and array
    const indexCopy = cartArray[index]
    const arrCopy = [...cartArray]
    // Recalculate qty and total price
    indexCopy.quantity = parseInt(e.target.value)
    indexCopy.totalPrice = indexCopy.quantity * indexCopy.price
    // Replace array item with updated item
    arrCopy.splice(index, 1, indexCopy)
    // Set State
    setCartArray(arrCopy)
    // Check if Qty is zero after state change
    qtySetToZero(index)
  }

  const qtySetToZero = (index) => {
    if (cartArray[index].quantity === 0) {
      return deleteCartItem(index)
    }
  }

  const deleteCartItem = (index) => {
    const cartCopy = [...cartArray]
    cartCopy.splice(index, 1)
    setCartArray(previous => previous = cartCopy)
  }

  const toggleNav = () => {
    navIsOpen ? setNavIsOpen(false) : setNavIsOpen(true)
  }

  useEffect(() => {
    setTotal(cartArray.map(item => item.totalPrice).reduce((acc, itemPrice) => {
      return acc + itemPrice
    }, 0))
    console.log(cartArray)
  },[cartArray])

  useEffect(() => {
    document.querySelector('body').classList.toggle('scroll-disable')
  }, [navIsOpen])


  return (
    <BrowserRouter>
      <AnnouncementBar />
      <Header cartArray={cartArray} toggleNav={toggleNav} />
      {navIsOpen && <Sidebar toggleNav={toggleNav} />}
        <main >
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/shop" element={<Shop total={total} addToCart={addToCart} />} />
          <Route path="/product" element={<ProductPage total={total} addToCart={addToCart} />} />
          <Route path="/cart" element={<Cart total={total} cartArray={cartArray} deleteCartItem={deleteCartItem} updateCartQuantity={updateCartQuantity} />} />
        </Routes>
        </main>
      <Footer />
    {/*<SignUpModal />*/}
    </BrowserRouter>
  );
}

export default App;
