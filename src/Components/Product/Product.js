import React from 'react';
import { Outlet } from 'react-router-dom';


function Product() {



    return (
        <div >
            <h4 className = 'GB'>Products </h4>

            <Outlet/>
    
        </div>
    )
}

export default Product
