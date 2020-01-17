import React from 'react';

const Product = props => (
    <li key={props.product.uniqueID} className="app__product">
        <img src={`https://www.demo.salmon-gcp.com${props.product.thumbnail}`} alt={`${props.product.manufacturer} ${props.product.name}`} title={`${props.product.manufacturer} ${props.product.name}`} width="100%" />
        <p className="app__product-name">{props.product.name}</p>
        <p className="app__product-price">${props.product.price[0].value}</p>
    </li>
);

export default Product;