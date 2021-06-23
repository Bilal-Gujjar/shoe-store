import React from 'react';
import { Outlet } from 'react-router-dom';

function Product() {
    return (
        <div >
            <h4 className="App-header">Products </h4>
            <Outlet/>
        </div>
    )
}

export default Product
