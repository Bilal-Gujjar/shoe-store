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
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer';


function App() {
  return (
    <BrowserRouter >
      <Headers/>
      <Routes >
      <Route path='/' element={<Home />} />
      <Route path='home' element={<Home />} /> 
        <Route path='product' element={<Product />}>
          <Route path='/' element={<ProductIndex />}/>
          <Route path=':productID' element={<Details />}/>  
        </Route>
        <Route path ='contact' element={<Contact/>}/>
        <Route path='*' element={<Notfound />}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
