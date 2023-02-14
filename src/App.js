import React, {createContext, useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';
import About from './components/About/About';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Review from './components/ReviewCart/Review';
import Inventory from './components/Inventory/Inventory';
import NotFound from './components/NotFound/NotFound';
import ProductDetails from './components/ProductDetails/ProductDetails';
import { addToDatabaseCart, getDatabaseCart } from './utilities/databaseManager';
import fakeData from './fakeData';
import GoToTop from './components/GoToTop/GoToTop';
import Home from './components/Home/Home';
export const CategoryContext = createContext();


function App() {
  const [category, setCategory] = useState('')
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
    <CategoryContext.Provider value={[category, setCategory]}>
       
      <BrowserRouter>
      <>
        <Header cart={cart}></Header>
        
      <Routes>
        <Route path="/Home" element={<Home cart={cart} handelAddToCart={handelAddToCart}></Home>}/> 
        <Route path="/Shop" element={<Shop cart={cart} handelAddToCart={handelAddToCart}></Shop>}/> 
        <Route path="/Review" element={<Review handelAddToCart={handelAddToCart}></Review>}/> 
        <Route path="/Manage" element={<Inventory></Inventory>}/> 
        <Route path="/About" element={<About></About>}/> 
        <Route exact path="/" element={<Home cart={cart} handelAddToCart={handelAddToCart}></Home>}/>
        <Route path={"/product/:productKey"} element={<ProductDetails></ProductDetails>}/>
        <Route exact path="*" element={<NotFound></NotFound>}/>
      </Routes>
      
      <GoToTop></GoToTop>
      </>
      </BrowserRouter>
      

    </CategoryContext.Provider>
  );
}

export default App;
