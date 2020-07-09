import React from 'react';
import { Outlet } from 'react-router-dom';


function Product() {



    return (
        <div>
            <h4>Products </h4>

            <Outlet/>
    
        </div>
    )
}

export default Product
