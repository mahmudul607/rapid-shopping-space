import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Review from './components/ReviewCart/Review';
import Inventory from './components/Inventory/Inventory';
import NotFound from './components/NotFound/NotFound';
import ProductDetails from './components/ProductDetails/ProductDetails';


function App() {
  return (
    <div>
       
      <BrowserRouter>
      <>
        <Header></Header>
      <Routes>
        <Route path="/Shop" element={<Shop></Shop>}/> 
        <Route path="/Review" element={<Review></Review>}/> 
        <Route path="/Manage" element={<Inventory></Inventory>}/> 
        <Route exact path="/" element={<Shop></Shop>}/>
        <Route path={"/product/:productKey"} element={<ProductDetails></ProductDetails>}/>
        <Route exact path="*" element={<NotFound></NotFound>}/>
      </Routes>
      </>
      </BrowserRouter>
      

    </div>
  );
}

export default App;
