import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <nav>
            <Link to = 'home'>Home</Link>{' |  '}
           <Link to = 'product'>Products</Link> 
        </nav>
    )
}

export default Header
