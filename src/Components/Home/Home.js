import React from 'react'
import { Link, } from 'react-router-dom'
import Nike from '../../images/Nike.svg'
import Adidas from '../../images/adidas.svg'
import Gucci from '../../images/gucci.svg'
import Bata from '../../images/bata.svg'

//import Product from '../Product/Product'
//import Details from '../Details/Details'

function Home() {
  return (
    <div className='row'>
      <h1 className="App-header">Choose the Brand</h1>

      <div className='column'>
        <div className='card'>
          <img src={Nike} alt='logo' width="250" height="390" />
          <Link className='font' path to='../Product'> NIKE</Link>
          
        </div>
      </div>

      <div className='column'>
        <div className='card'>
        <img src={Adidas} alt='logo' width="250" height="400"/>
          <Link className='font' path to='../Product'>GUCCI</Link>
        </div>
      </div>
      <div className='column'>
        <div className='card'>
        <img src={Gucci} alt='logo' width="250" height="400" />
          <Link className='font' path to='../Product'>ADIDIAS</Link></div>
      </div>
      
      <div className='column'>
        <div className='card'>
        <img src={Bata} alt='logo' width="250" height="400" />
          <Link className='font' path to='../Product'>BATA</Link></div>
      </div>
      
    
    </div>
  )
}


export default Home
