import React from 'react'
import { Link } from 'react-router-dom'


function Header() {
    return (

        <nav className="header">
            <Link to='/' className="logo">Shoe Store</Link>
            <div className='header-right'>
                <Link to='home'>Home</Link>
                <Link to='product'>Products And Other</Link>
                <Link to='contact'>Contact</Link>
            </div>

        </nav>
    )
}

export default Header
