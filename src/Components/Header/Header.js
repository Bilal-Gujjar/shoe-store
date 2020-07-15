import React from 'react'
import { Link } from 'react-router-dom'


function Header() {
    return (
        <nav className = "HD">
            <h1>
            <Link to = 'home'>Home</Link>{' |  '}
            <Link to = 'product'>Products And Other</Link> {'|   '}
            
           </h1>
        </nav>
    )
}

export default Header
