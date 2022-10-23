import React from 'react';
import './Product.css';
const Product = (props) => {
    const {name,photo,weight,price} = props.product;
    const {handleAddToCart} = props;

    

    return (
        <div className='product'>
            <img src={photo} alt="" />
            <h4>{name}</h4>
            <p><small>ওজন: {weight}</small></p>
            <p>দাম: {price} টাকা</p>
            <button onClick={() => handleAddToCart(props.product)}  >অর্ডার করুন</button>
        </div>
    );
};

export default Product;