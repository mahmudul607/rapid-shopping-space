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
import { getDatabaseCart} from './utilities/databaseManager';
import fakeData from './fakeData';

export const QuantityContext = createContext();


function App() {
  const [cart, setCart] = useState([]);
  useEffect(() => {
    // cart
    const saveCart = getDatabaseCart();
    const productKeys = Object.keys(saveCart);


    const cartProducts = productKeys.map(key => {
      const product = fakeData.find(pd => pd.key === key);
      product.quantity = saveCart[key];
      return product;

    });
    setCart(cartProducts);
  }, []);

  const qq = cart.reduce((qq, q) => qq + q.quantity, 0);

 

  return (
    <QuantityContext.Provider value={[qq, cart, setCart]}>
       
      <BrowserRouter>
      <>
        <Header cart={cart}></Header>
      <Routes>
        <Route path="/Shop" element={<Shop cart={cart} setCart={setCart}></Shop>}/> 
        <Route path="/Review" element={<Review></Review>}/> 
        <Route path="/Manage" element={<Inventory></Inventory>}/> 
        <Route path="/About" element={<About></About>}/> 
        <Route exact path="/" element={<Shop></Shop>}/>
        <Route path={"/product/:productKey"} element={<ProductDetails></ProductDetails>}/>
        <Route exact path="*" element={<NotFound></NotFound>}/>
      </Routes>
      </>
      </BrowserRouter>
      

    </QuantityContext.Provider>
  );
}

export default App;
