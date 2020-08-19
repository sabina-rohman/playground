import React from 'react';

const Product = (props) => {
    return (
        <div>
            <h1>{props.data.name}</h1>
            <p>{props.data.price}</p>
        </div>
    )
}

export default Product;