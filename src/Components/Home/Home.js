import React from 'react'
import { Link, } from 'react-router-dom'
//import Product from '../Product/Product'
//import Details from '../Details/Details'

function Home() {
  return (
    <div >
      <h1 className="App-header">Welcome to Home Page</h1> <div>
        <h1>Chose the Brand</h1></div>
      <h2 >
        <Link path to='../Product'>  NIKE</Link>{''}

      </h2 >
      <h3>
        <Link path to='../Product'>GUCCI</Link>
      </h3>
      <h4>
        <Link path to='../Product'>ADIDIAS</Link>
      </h4 >
      <h5 >
        <Link path to='../Product'>JORDAN</Link>

      </h5>





    </div>

  )
}


export default Home
/*<h3 >Nike</h3>
<h3>Bata</h3>
<h3>GUCCI</h3>
<h3>Importated</h3>
*/