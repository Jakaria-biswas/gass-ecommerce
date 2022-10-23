import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import Order from '../Order/Order';
import './Products.css';
import useProducts from '../hooks/useProducts';
import Cart from '../Cart/Cart';

const Products = () => {
    const [products, setProducts] = useProducts();
    const [cart, setCart] = useState([]);


    const handleAddToCart = (selectedItem) => {

        // add item in to cart 

        const exits = cart.find(product => product.id === selectedItem.id)

        if(!exits){
            const newCart = [...cart, selectedItem]
            setCart(newCart)
        }else{
            alert("it already added")
        }
    }


    // remove gas item from cart
    const removeFromCart = (test) => {
        
        const rest = cart.filter(product => product.id !== test.id)
        setCart(rest)           
    }


    return (
        <div className='products-container'>

            <div className='products'>
                {
                    products.map(product => <Product handleAddToCart={handleAddToCart} key={product.id} product={product}></Product>)
                }
            </div>
            <div className="cart">
                 <Cart cart={cart} removeFromCart={removeFromCart}></Cart>
            </div>

        </div>
    );
};

export default Products;