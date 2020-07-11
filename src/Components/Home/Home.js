import React from 'react'
import { Link,} from 'react-router-dom'
import Product from '../Product/Product'
//import Details from '../Details/Details'

function Home() {
    return (
        <div  className ="App-header">
           <h1>Welcome to Home Page</h1> <div>
           <h1>Chose the Brand</h1></div>
           <button>  <Link path to = '../Product'>Nike</Link></button>{''}
           <button>  <Link path to = '../Product'>GUCCi</Link></button>{''}
           <button>  <Link path to = '../Product'>Adidas</Link></button>{''}
           <button>  <Link path to = '../Product'>Jordan</Link></button>
        
            
           
           
         
          
                   
        </div>

    )
}


export default Home
/*<h3 >Nike</h3>
<h3>Bata</h3>
<h3>GUCCI</h3>
<h3>Importated</h3>
*/