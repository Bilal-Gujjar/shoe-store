import React from 'react'
import { Link, } from 'react-router-dom'
//import Product from '../Product/Product'
//import Details from '../Details/Details'

function Home() {
  return (
    <div >
      <h1 className="App-header">Welcome to Home Page</h1>
        <h1 className="App-header">Chose the Brand</h1>
        <div className="div">
        <Link className="brand"  path to='../Product'> NIKE</Link>
        <Link className="brand" path to='../Product'>GUCCI</Link>
        <Link className="brand" path to='../Product'>ADIDIAS</Link>
        <Link className="brand"path to='../Product'>JORDAN</Link>
        </div>
    </div>

  )
}


export default Home
/*<h3 >Nike</h3>
<h3>Bata</h3>
<h3>GUCCI</h3>
<h3>Importated</h3>
*/