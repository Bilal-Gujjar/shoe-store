
import React from 'react'


function Footer() {
    return (
        <footer className='footer'>
            
            <button
            className = 'btn'
            
                type="button"
                onClick={(e) => {
                    e.preventDefault();
                    window.location.href = 'https://www.facebook.com/bilalgujjaroffical/';
                }}
            > facebook</button>
            <div>
            <button
            className = 'btn'
            
                type="button"
                onClick={(e) => {
                    e.preventDefault();
                    window.location.href = 'https://github.com/Bilal-Gujjar/shoe-store';
                }}
            > GitHub</button>
            </div>
            
            <h1 className='footer-note'>Developed by Bilal Gujjar</h1>
            
        </footer>
    )
}

export default Footer
