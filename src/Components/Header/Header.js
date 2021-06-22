import React from 'react'
import { Link } from 'react-router-dom'


function Header() {
    return (
        
        <nav className = "header">
          <a className="logo"> <Link to ='/'>Shoe Store</Link></a>
           <div className='header-right'>
               
           <a className="active"> <Link to = 'home'>Home</Link></a>
            <a><Link to = 'product'>Products And Other</Link> </a>
            <a><Link to = 'contact'>Contact</Link></a>
           
            </div>
           
        </nav>
    )
}

export default Header
