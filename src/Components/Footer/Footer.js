
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
            
            <div style={{textAlign:'right'}}>
            <h1>Developed by Bilal Gujjar</h1>
            </div>
            
            
        </footer>
    )
}

export default Footer
