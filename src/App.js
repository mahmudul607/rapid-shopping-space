import React, {createContext, useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';
import About from './components/About/About';
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import Review from './components/ReviewCart/Review';
import Inventory from './components/Inventory/Inventory';
import NotFound from './components/NotFound/NotFound';
import ProductDetails from './components/ProductDetails/ProductDetails';
import { addToDatabaseCart, getDatabaseCart } from './utilities/databaseManager';
import fakeData from './fakeData';
import GoToTop from './components/GoToTop/GoToTop';
import Home from './components/Home/Home';
import LoggedIn from './components/LoggedIn/LoggedIn';
import Shipment from './components/Shipment/Shipment';
export const CategoryContext = createContext();
export const LoggedInUser = createContext();



function App() {
  const [category, setCategory] = useState('')
  const [loggedInUser, setLoggedInUser] = useState({});

  //add
  const [cart, setCart] = useState([]);
  useEffect(() => {
    const saveCart = getDatabaseCart();
    const productKeys = Object.keys(saveCart);
    const previousCart = productKeys.map(exitingKey => {
        const product = fakeData.find(pd => pd.key === exitingKey);
        product.quantity = saveCart[exitingKey];
        return product;
    })
    setCart(previousCart);
   
}, []);

const handelAddToCart = (product) => {
  // const existingUser = localStorage.getItem('userData');
  // if(existingUser === undefined){
  //   alert('Please Sign')
  // }
  const sameProduct = cart.find(pd => pd.key === product.key);
  let count = 1;
  let newCart;
  if (sameProduct) {
      count = sameProduct.quantity + 1;
      sameProduct.quantity = count;
      const others = cart.filter(pd => pd.key !== product.key);
      newCart = [...others, sameProduct];
  }
  else {
      product.quantity = 1;
      newCart = [...cart, product];
  }
  setCart(newCart);
  addToDatabaseCart(product.key, count);
}

//add end

  return (
    <LoggedInUser.Provider value={[loggedInUser, setLoggedInUser]}>
    <CategoryContext.Provider value={[category, setCategory]}>
      <h4>Email: {loggedInUser.email}</h4>
      <BrowserRouter>
      <>
        <Header cart={cart}></Header> 
      <Routes>
        <Route path="/home" element={<Home cart={cart} handelAddToCart={handelAddToCart}></Home>}/> 
        <Route path="/shop" element={<Shop cart={cart} handelAddToCart={handelAddToCart}></Shop>}/> 
        <Route path="/review" element={<Review handelAddToCart={handelAddToCart}></Review>}/> 
        <Route path="/manage" element={<Inventory></Inventory>}/> 
        <Route 
         path="/shipment" 
         element={ loggedInUser.email ?  <Shipment/> : <Navigate to="/login"/>}/> 
        <Route path="/login" element={<LoggedIn></LoggedIn>}/>
        <Route path="/about" element={<About></About>}/> 
        <Route exact path="/" element={<Home cart={cart} handelAddToCart={handelAddToCart}></Home>}/>
        <Route path={"/product/:productKey"} element={<ProductDetails></ProductDetails>}/>
        <Route exact path="*" element={<NotFound></NotFound>}/>
      </Routes>
      
      <GoToTop></GoToTop>
      </>
      </BrowserRouter>
      

    </CategoryContext.Provider>
    </LoggedInUser.Provider>
  );
}

export default App;
