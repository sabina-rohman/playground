import React from 'react';
import Product from './Product';

const Category = (props) => {
    const productComponents = props.data.products.map((productObj, i) => (
        <Product key={i} data={productObj} />
    ))
    return (
        <div>
            <h3>Category name is: {props.data.name}</h3>
            <ul>
                {productComponents}
            </ul>
        </div>
    )
}

export default Category;