import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
//import All the components
import Headers from './Components/Header/Header';
import Home from './Components/Home/Home';
import Product from './Components/Product/Product';
import Details from './Components/Details/Details'
import Notfound from './Components/Notfound/Notfound'
import ProductIndex from './Components/ProductIndex/ProductIndex';
function App() {
  return (
    <BrowserRouter>
      <Headers></Headers>
      <Routes>
        <Route path='/' element={<Home />}> </Route>
        <Route path='product' element={<Product />}>
          <Route path='/' element={<ProductIndex />}></Route>
          <Route path=':productID' element={<Details />}></Route>
        </Route>
        <Route path='*' element={<Notfound />}></Route>
      </Routes>

    </BrowserRouter>
  );
}

export default App;
