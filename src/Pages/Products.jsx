import React from "react";
import LightingRoom from '../components/LightingRoom';

function Products(){

    return(
        <>
            <div className="products">
                <h1> List of Products </h1>
                <p>List </p>
                <h1>Welcome to the Lighting Room</h1>
                <LightingRoom />  {/* Render the LightingRoom component */}
            </div>
        </>
    );
};

export default Products;