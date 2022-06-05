import { BrowserRouter, HashRouter, Routes, Route } from "react-router-dom";
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
    // Search if item id exists
    if (cartArray.some((item) => item.id === obj.id)) {
      // Set qty and total price props
      obj.quantity = parseInt(qty)
      obj.totalPrice = obj.quantity * obj.price
      // Find index of same item in cart array
      const itemIndex = cartArray.findIndex(item => item.id === obj.id)
      // update existing item for potential new qty/total price
      updateCartItem(obj, itemIndex)
      // return true for ternary check
      return true
    }
    return false
  }

  // Copy arr, splice element at index and replace with new obj
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

  // Deletes cart item if qty set by user to zero
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

  // Recalculate totalPrice of all cart items on component update/mount
  useEffect(() => {
    setTotal(cartArray.map(item => item.totalPrice).reduce((acc, itemPrice) => {
      return acc + itemPrice
    }, 0))
  },[cartArray])

  // Disable vertical scroll when nav is open by toggling class on body
  useEffect(() => {
    document.querySelector('body').classList.toggle('scroll-disable')
  }, [navIsOpen])

  // Hash router for github-pages compatibility for SPA
  return (
    <HashRouter>
      <AnnouncementBar />
      <Header cartArray={cartArray} toggleNav={toggleNav} />
      <Sidebar toggleNav={toggleNav} navStatus={navIsOpen} />
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
    </HashRouter>
  );
}

export default App;
